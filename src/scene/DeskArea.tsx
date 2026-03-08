import InteractiveBox from './InteractiveBox'

type DeskAreaProps = {
  onProjectsClick: () => void
}

export default function DeskArea({ onProjectsClick }: DeskAreaProps) {
  return (
    <>
      {/* Desktop surface */}
      <mesh position={[0, 0.15, -3.8]}>
        <boxGeometry args={[3.2, 0.18, 1.4]} />
        <meshStandardMaterial color="#6b4f3a" />
      </mesh>

      {/* Front left leg */}
      <mesh position={[-1.35, -0.45, -3.25]}>
        <boxGeometry args={[0.14, 1.2, 0.14]} />
        <meshStandardMaterial color="#5b4332" />
      </mesh>

      {/* Front right leg */}
      <mesh position={[1.35, -0.45, -3.25]}>
        <boxGeometry args={[0.14, 1.2, 0.14]} />
        <meshStandardMaterial color="#5b4332" />
      </mesh>

      {/* Back left leg */}
      <mesh position={[-1.35, -0.45, -4.35]}>
        <boxGeometry args={[0.14, 1.2, 0.14]} />
        <meshStandardMaterial color="#5b4332" />
      </mesh>

      {/* Back right leg */}
      <mesh position={[1.35, -0.45, -4.35]}>
        <boxGeometry args={[0.14, 1.2, 0.14]} />
        <meshStandardMaterial color="#5b4332" />
      </mesh>

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

      {/* Keyboard */}
      <mesh position={[0, 0.27, -3.35]}>
        <boxGeometry args={[1.05, 0.05, 0.34]} />
        <meshStandardMaterial color="#d8d8d8" />
      </mesh>

      {/* Mouse pad */}
      <mesh position={[0.95, 0.24, -3.38]}>
        <boxGeometry args={[0.42, 0.02, 0.34]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      {/* Mouse */}
      <mesh position={[0.95, 0.28, -3.38]}>
        <boxGeometry args={[0.12, 0.05, 0.18]} />
        <meshStandardMaterial color="#cfcfcf" />
      </mesh>

      {/* Small desk book/notebook */}
      <mesh position={[-0.95, 0.26, -3.42]}>
        <boxGeometry args={[0.42, 0.04, 0.58]} />
        <meshStandardMaterial color="#b88c5a" />
      </mesh>
    </>
  )
}