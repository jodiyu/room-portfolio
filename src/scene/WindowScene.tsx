import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import InteractiveBox from './InteractiveBox'

export type WeatherMode = 'clear' | 'rain' | 'snow' | 'sunset' | 'night'

type WindowSceneProps = {
  weather: WeatherMode
  onWeatherChange?: (mode: WeatherMode) => void
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
    const arr = new Float32Array(PARTICLE_COUNT * 5) 
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr[i * 5] = (Math.random() - 0.5) * WINDOW_W // x coord
      arr[i * 5 + 1] = (Math.random() - 0.5) * WINDOW_H // y coord
      arr[i * 5 + 2] = 0.03 // z coord
      arr[i * 5 + 3] = 2.5 + Math.random() * 1.5 // speed
      arr[i * 5 + 4] = (Math.random() - 0.5) * 0.2 // drift
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (!meshRef.current) return

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const speed = offsets[i * 5 + 3]
      const drift = offsets[i * 5 + 4]

      offsets[i * 5 + 1] -= speed * delta
      offsets[i * 5] += drift * delta

      if (offsets[i * 5 + 1] < -WINDOW_H / 2) { // If the particle exits the window frame
        offsets[i * 5 + 1] = WINDOW_H / 2 // Particle appears at the top of the frame
        offsets[i * 5] = (Math.random() - 0.5) * WINDOW_W

        offsets[i * 5 + 3] = 2.5 + Math.random() * 1.5
        offsets[i * 5 + 4] = (Math.random() - 0.5) * 0.2
      }

      dummy.position.set(
        offsets[i * 5],
        offsets[i * 5 + 1],
        offsets[i * 5 + 2]
      )

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
        0.03,
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

export default function WindowScene({ weather, onWeatherChange }: WindowSceneProps) {
  return (
    <>
      <InteractiveBox
        position={[0, 0, 0]}
        size={[WINDOW_W, WINDOW_H, 0.05]}
        baseColor={SKY_COLORS[weather]}
        hoverColor="#e0e0e0"
        onClick={() => {
          if (onWeatherChange) {
            const modes: WeatherMode[] = ['clear', 'rain', 'snow', 'sunset', 'night']
            const idx = modes.indexOf(weather)
            const next = modes[(idx + 1) % modes.length]
            onWeatherChange(next)
          }
        }}
      />

      {weather === 'rain' && <RainParticles />}
      {weather === 'snow' && <SnowParticles />}
      {weather === 'night' && <Stars />}

      {/* Sunset glow band */}
      {weather === 'sunset' && (
        <mesh position={[0, -0.4, 0.03]}>
          <planeGeometry args={[WINDOW_W, 0.6]} />
          <meshBasicMaterial color="#f5c76e" transparent opacity={0.6} />
        </mesh>
      )}
    </>
  )
}
