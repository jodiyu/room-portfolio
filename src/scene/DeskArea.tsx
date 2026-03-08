import InteractiveBox from './InteractiveBox'

type DeskAreaProps = {
  onProjectsClick: () => void
}

export default function DeskArea({ onProjectsClick }: DeskAreaProps) {
  return (
    <>
      {/* Desk */}
      <mesh position={[0, -0.2, -3.8]}>
        <boxGeometry args={[2.8, 1.2, 1.2]} />
        <meshStandardMaterial color="#6b4f3a" />
      </mesh>

      {/* Computer monitor on desk */}
      <InteractiveBox
        position={[0, 0.8, -3.4]}
        size={[1.2, 0.8, 0.1]}
        baseColor="#222222"
        hoverColor="#555555"
        onClick={onProjectsClick}
      />
    </>
  )
}