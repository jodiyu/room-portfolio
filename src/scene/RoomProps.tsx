import InteractiveBox from './InteractiveBox'

type RoomProps = {
  onSpeechesClick: () => void
  darkMode: boolean
  onToggleDarkMode: () => void
}

export default function RoomProps({
  onSpeechesClick,
  darkMode,
  onToggleDarkMode
}: RoomProps) {
  return (
    <>
      {/* Bed */}
      <group position={[4.9, -1, -4]}>
        {/* Bed frame */}
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[2.2, 0.3, 6.5]} />
          <meshStandardMaterial color="#6b4f3a" />
        </mesh>
        {/* Mattress */}
        <mesh position={[0, 0.45, 0]}>
          <boxGeometry args={[2.0, 0.3, 6.3]} />
          <meshStandardMaterial color="#f0f0f0" />
        </mesh>
        {/* Pillow */}
        <mesh position={[0, 0.65, -1.8]}>
          <boxGeometry args={[1.4, 0.2, 0.6]} />
          <meshStandardMaterial color="#e8e8e8" />
        </mesh>
        {/* Blanket (toggle dark mode) */}
        <InteractiveBox
          position={[0, 0.62, 1]}
          size={[1.9, 0.08, 4.2]}
          baseColor={darkMode ? "#222233" : "#4a6fa5"}
          hoverColor={darkMode ? "#333355" : "#6686b5"}
          onClick={onToggleDarkMode}
        />

        {/* Headboard */}
        <mesh position={[0, 0.8, -2]}>
          <boxGeometry args={[2.2, 0.9, 0.12]} />
          <meshStandardMaterial color="#5a3a28" />
        </mesh>
      </group>

      {/* Simple suit hanging from right wall */}
      <InteractiveBox
        position={[4.2, 1, 4]} 
        size={[1.2, 1.3, 0.005]}
        rotation={[0, -Math.PI / 2, 0]}
        baseColor="#8baf86"
        hoverColor="#a3c39e"
        onClick={onSpeechesClick}
      />
      <group position={[4.2, 0, 4]} rotation={[0, -Math.PI / 2, 0]}>
        {/* Hanger hook */}
        <mesh position={[0, 1.52, 0.1]}>
          <torusGeometry args={[0.06, 0.012, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.5} roughness={0.4} />
        </mesh>
        {/* Hanger bar */}
        <mesh position={[0, 1.5, 0.1]}>
          <boxGeometry args={[0.28, 0.03, 0.03]} />
          <meshStandardMaterial color="#8b8b8b" />
        </mesh>
        {/* Jacket body */}
        <mesh position={[0, 1.2, 0.1]}>
          <boxGeometry args={[0.36, 0.55, 0.16]} />
          <meshStandardMaterial color="#1f2a44" />
        </mesh>
        {/* White shirt (centered, slightly in front) */}
        <mesh position={[0, 1.2, 0.19]}>
          <boxGeometry args={[0.08, 0.48, 0.04]} />
          <meshStandardMaterial color="#f5f5f5" />
        </mesh>
        {/* Left sleeve */}
        <mesh position={[-0.23, 1.26, 0.1]} rotation={[0, 0, -0.35]}>
          <boxGeometry args={[0.12, 0.42, 0.14]} />
          <meshStandardMaterial color="#1f2a44" />
        </mesh>
        {/* Right sleeve */}
        <mesh position={[0.23, 1.26, 0.1]} rotation={[0, 0, 0.35]}>
          <boxGeometry args={[0.12, 0.42, 0.14]} />
          <meshStandardMaterial color="#1f2a44" />
        </mesh>
        {/* Pants */}
        <mesh position={[0, 0.83, 0.1]}>
          <boxGeometry args={[0.26, 0.45, 0.12]} />
          <meshStandardMaterial color="#1f2a44" />
        </mesh>
      </group>
    </>
  )
}