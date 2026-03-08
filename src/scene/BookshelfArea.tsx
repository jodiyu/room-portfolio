import { useState } from 'react'

type BookshelfAreaProps = {
  onReadingListClick: () => void
}

const bookColors = [
  ['#c0392b', '#2980b9', '#27ae60', '#f39c12', '#8e44ad'],
  ['#e74c3c', '#3498db', '#2ecc71', '#e67e22', '#9b59b6'],
  ['#d35400', '#1abc9c', '#c0392b', '#2c3e50', '#f1c40f'],
]

const shelfYPositions = [-0.7, 0, 0.7]

export default function BookshelfArea({
  onReadingListClick,
}: BookshelfAreaProps) {
  const [isHovered, setIsHovered] = useState(false)
  const frameColor = isHovered ? '#a07a50' : '#8a6742'

  return (
    <group
      position={[-5.3, 0.2, 0]}
      onClick={onReadingListClick}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      {/* Left side panel */}
      <mesh position={[0, 0, -0.525]}>
        <boxGeometry args={[0.9, 2.8, 0.05]} />
        <meshStandardMaterial color={frameColor} />
      </mesh>
      {/* Right side panel */}
      <mesh position={[0, 0, 0.525]}>
        <boxGeometry args={[0.9, 2.8, 0.05]} />
        <meshStandardMaterial color={frameColor} />
      </mesh>
      {/* Top panel */}
      <mesh position={[0, 1.375, 0]}>
        <boxGeometry args={[0.9, 0.05, 1.1]} />
        <meshStandardMaterial color={frameColor} />
      </mesh>
      {/* Bottom panel */}
      <mesh position={[0, -1.375, 0]}>
        <boxGeometry args={[0.9, 0.05, 1.1]} />
        <meshStandardMaterial color={frameColor} />
      </mesh>
      {/* Back panel */}
      <mesh position={[-0.425, 0, 0]}>
        <boxGeometry args={[0.05, 2.8, 1.1]} />
        <meshStandardMaterial color={frameColor} />
      </mesh>

      {/* Shelves and books */}
      {shelfYPositions.map((shelfY, si) => (
        <group key={si}>
          <mesh position={[0, shelfY, 0]}>
            <boxGeometry args={[0.9, 0.05, 1.1]} />
            <meshStandardMaterial color={frameColor} />
          </mesh>
          {bookColors[si].map((color, bi) => (
            <mesh key={bi} position={[0.05, shelfY + 0.3, -0.4 + bi * 0.2]}>
              <boxGeometry args={[0.45, 0.5, 0.1]} />
              <meshStandardMaterial color={color} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  )
}