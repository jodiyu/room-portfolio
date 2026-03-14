import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

type WelcomeSceneProps = {
  onEnter: () => void
}

export default function WelcomeScene({ onEnter }: WelcomeSceneProps) {
  const doorHingeRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (!doorHingeRef.current) return

    const targetRotation = hovered ? -0.9 : 0
    doorHingeRef.current.rotation.y = THREE.MathUtils.lerp(
      doorHingeRef.current.rotation.y,
      targetRotation,
      0.08
    )
  })

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 5, 4]} intensity={1.5} />
      <pointLight position={[0, 2.5, 2]} intensity={0.8} />

      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#6f5b4b" />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 2, -3]}>
        <planeGeometry args={[8, 5]} />
        <meshStandardMaterial color="#d9d2c7" />
      </mesh>

      {/* Optional side walls for a little depth */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[-4, 2, 0]}>
        <planeGeometry args={[6, 5]} />
        <meshStandardMaterial color="#d4ccc1" />
      </mesh>

      <mesh rotation={[0, -Math.PI / 2, 0]} position={[4, 2, 0]}>
        <planeGeometry args={[6, 5]} />
        <meshStandardMaterial color="#d4ccc1" />
      </mesh>

      {/* Door frame */}
      <mesh position={[0, 1.5, -2.95]}>
        <boxGeometry args={[1.9, 3.1, 0.15]} />
        <meshStandardMaterial color="#5b4636" />
      </mesh>

      {/* Inner doorway backing */}
      <mesh position={[0, 1.5, -2.87]}>
        <planeGeometry args={[1.6, 2.8]} />
        <meshStandardMaterial color="#2a211b" />
      </mesh>

      {/* Door with hinge on the left side */}
      <group ref={doorHingeRef} position={[-0.75, 1.5, -2.8]}>
        <mesh
          position={[0.75, 0, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={onEnter}
          castShadow
        >
          <boxGeometry args={[1.5, 2.8, 0.08]} />
          <meshStandardMaterial color={hovered ? '#a8754f' : '#8b5e3c'} />
        </mesh>

        {/* Door knob */}
        <mesh position={[1.35, 0, 0.05]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#d1b075" metalness={0.4} roughness={0.3} />
        </mesh>
      </group>
    </>
  )
}