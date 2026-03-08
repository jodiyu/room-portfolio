import { useState } from 'react'

type InteractiveBoxProps = {
  position: [number, number, number]
  rotation?: [number, number, number]
  size: [number, number, number]
  baseColor: string
  hoverColor: string
  onClick: () => void
}

export default function InteractiveBox({
  position,
  rotation = [0, 0, 0],
  size,
  baseColor,
  hoverColor,
  onClick,
}: InteractiveBoxProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <mesh
      position={position}
      rotation={rotation}
      onClick={onClick}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial color={isHovered ? hoverColor : baseColor} />
    </mesh>
  )
}