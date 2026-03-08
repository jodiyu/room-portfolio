

export default function RoomProps() {
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
        {/* Blanket */}
        <mesh position={[0, 0.62, 1]}>
          <boxGeometry args={[1.9, 0.08, 4.2]} />
          <meshStandardMaterial color="#4a6fa5" />
        </mesh>
        {/* Headboard */}
        <mesh position={[0, 0.8, -2]}>
          <boxGeometry args={[2.2, 0.9, 0.12]} />
          <meshStandardMaterial color="#5a3a28" />
        </mesh>
      </group>

    </>
  )
}