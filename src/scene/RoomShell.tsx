export default function RoomShell() {
  return (
    <>
      {/* Floor */}
      <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#6a615f" />
      </mesh>

      {/* Ceiling */}
      <mesh position={[0, 3, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#f1f1eb" />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 1, -6]}>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial color="#d9d4cc" />
      </mesh>

      {/* Left wall */}
      <mesh position={[-6, 1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial color="#d1cdc5" />
      </mesh>

      {/* Right wall */}
      <mesh position={[6, 1, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial color="#d1cdc5" />
      </mesh>

      {/* Front wall */}
      <mesh position={[0, 1, 6]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial color="#d9d4cc" />
      </mesh>

      {/* Door */}
      <mesh position={[0, 0, 5.95]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[1.8, 3.6]} />
        <meshStandardMaterial color="#5a3a28" />
      </mesh>
    </>
  )
}