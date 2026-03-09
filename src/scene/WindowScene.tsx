import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export type WeatherMode = 'clear' | 'rain' | 'snow' | 'sunset' | 'night'

type WindowSceneProps = {
  weather: WeatherMode
}

const SKY_COLORS: Record<WeatherMode, string> = {
  clear: '#87ceeb',
  rain: '#5a6a7a',
  snow: '#b0b8c0',
  sunset: '#e8734a',
  night: '#0a0e1a',
}

const PARTICLE_COUNT = 120
const WINDOW_W = 2.8
const WINDOW_H = 1.8

function RainParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const offsets = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * WINDOW_W
      arr[i * 3 + 1] = (Math.random() - 0.5) * WINDOW_H
      arr[i * 3 + 2] = 0.01
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (!meshRef.current) return
    const speed = 3.0
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      offsets[i * 3 + 1] -= speed * delta
      if (offsets[i * 3 + 1] < -WINDOW_H / 2) {
        offsets[i * 3 + 1] = WINDOW_H / 2
        offsets[i * 3] = (Math.random() - 0.5) * WINDOW_W
      }
      dummy.position.set(offsets[i * 3], offsets[i * 3 + 1], offsets[i * 3 + 2])
      dummy.scale.set(1, 1, 1)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
      <boxGeometry args={[0.01, 0.08, 0.001]} />
      <meshBasicMaterial color="#c0d8f0" transparent opacity={0.7} />
    </instancedMesh>
  )
}

function SnowParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const offsets = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 4) // x, y, z, drift
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr[i * 4] = (Math.random() - 0.5) * WINDOW_W
      arr[i * 4 + 1] = (Math.random() - 0.5) * WINDOW_H
      arr[i * 4 + 2] = 0.01
      arr[i * 4 + 3] = (Math.random() - 0.5) * 0.4 // horizontal drift speed
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (!meshRef.current) return
    const speed = 0.5
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      offsets[i * 4 + 1] -= speed * delta
      offsets[i * 4] += offsets[i * 4 + 3] * delta
      if (offsets[i * 4 + 1] < -WINDOW_H / 2) {
        offsets[i * 4 + 1] = WINDOW_H / 2
        offsets[i * 4] = (Math.random() - 0.5) * WINDOW_W
        offsets[i * 4 + 3] = (Math.random() - 0.5) * 0.4
      }
      if (Math.abs(offsets[i * 4]) > WINDOW_W / 2) {
        offsets[i * 4] = (Math.random() - 0.5) * WINDOW_W
      }
      dummy.position.set(offsets[i * 4], offsets[i * 4 + 1], offsets[i * 4 + 2])
      dummy.scale.set(1, 1, 1)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
      <sphereGeometry args={[0.02, 6, 6]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
    </instancedMesh>
  )
}

function Stars() {
  const positions = useMemo(() => {
    const pts: [number, number, number][] = []
    for (let i = 0; i < 30; i++) {
      pts.push([
        (Math.random() - 0.5) * WINDOW_W * 0.9,
        (Math.random() - 0.5) * WINDOW_H * 0.9,
        0.01,
      ])
    }
    return pts
  }, [])

  return (
    <>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <circleGeometry args={[0.015 + Math.random() * 0.01, 6]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </>
  )
}

export default function WindowScene({ weather }: WindowSceneProps) {
  return (
    <>
      {/* Sky background */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[WINDOW_W, WINDOW_H]} />
        <meshBasicMaterial color={SKY_COLORS[weather]} />
      </mesh>

      {weather === 'rain' && <RainParticles />}
      {weather === 'snow' && <SnowParticles />}
      {weather === 'night' && <Stars />}

      {/* Sunset glow band */}
      {weather === 'sunset' && (
        <mesh position={[0, -0.4, 0.01]}>
          <planeGeometry args={[WINDOW_W, 0.6]} />
          <meshBasicMaterial color="#f5c76e" transparent opacity={0.6} />
        </mesh>
      )}
    </>
  )
}
