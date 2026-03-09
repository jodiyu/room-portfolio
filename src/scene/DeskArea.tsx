import { useGLTF } from '@react-three/drei'
import InteractiveBox from './InteractiveBox'

type DeskAreaProps = {
  onProjectsClick: () => void
}

export default function DeskArea({ onProjectsClick }: DeskAreaProps) {
  const { scene: deskScene } = useGLTF('/table_desk.glb')
  const { scene: kbMouseScene } = useGLTF('/keyboard_mouse.glb')

  return (
    <>
      {/* Desk model */}
      <primitive object={deskScene} position={[0, -1, -3.8]} scale={[2.6, 1.5, 2.9]} />

      {/* Monitor frame */}
      <mesh position={[0, 0.95, -3.95]}>
        <boxGeometry args={[1.4, 0.9, 0.08]} />
        <meshStandardMaterial color="#111111" />
      </mesh>

      {/* Monitor screen (interactive) */}
      <InteractiveBox
        position={[0, 0.95, -3.9]}
        size={[1.18, 0.7, 0.03]}
        baseColor="#1f2a38"
        hoverColor="#6c97c8"
        onClick={onProjectsClick}
      />

      {/* Monitor stand neck */}
      <mesh position={[0, 0.42, -4.02]}>
        <boxGeometry args={[0.12, 0.42, 0.08]} />
        <meshStandardMaterial color="#2d2d2d" />
      </mesh>

      {/* Monitor stand base */}
      <mesh position={[0, 0.22, -3.9]}>
        <boxGeometry args={[0.55, 0.04, 0.3]} />
        <meshStandardMaterial color="#2d2d2d" />
      </mesh>

      {/* Keyboard + Mouse model */}
      <primitive object={kbMouseScene} position={[0, 0.1, -0.3]} scale={[2, 1, 1]} rotation={[0.4, 0, 0]} />

      {/* Small desk book/notebook */}
      <mesh position={[-0.95, 0.26, -3.42]}>
        <boxGeometry args={[0.42, 0.04, 0.58]} />
        <meshStandardMaterial color="#b88c5a" />
      </mesh>
    </>
  )
}