import InteractiveBox from './InteractiveBox'

type WallDecorProps = {
  onResumeClick: () => void
}

export default function WallDecor({ onResumeClick }: WallDecorProps) {
  return (
    <>
      {/* Diploma */}
      <InteractiveBox
        position={[3.2, 1.5, -5.95]}
        size={[1.4, 1, 0.05]}
        baseColor="#d2cdb6"
        hoverColor="#fff8df"
        onClick={onResumeClick}
      />

      {/* Poster */}
      <mesh position={[-2.4, 1.4, -5.95]}>
        <boxGeometry args={[1.4, 2, 0.05]} />
        <meshStandardMaterial color="#b3476b" />
      </mesh>

      {/* Clock */}
      <mesh position={[5.95, 1.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <circleGeometry args={[0.6, 32]} />
        <meshStandardMaterial color="#f5f0d8" />
      </mesh>
    </>
  )
}