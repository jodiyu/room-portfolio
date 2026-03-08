import InteractiveBox from './InteractiveBox'

type RoomPropsProps = {
  onDanceVideosClick: () => void
}

export default function RoomProps({ onDanceVideosClick }: RoomPropsProps) {
  return (
    <>
      {/* Bed */}
      <mesh position={[4.9, -0.7, -4]}>
        <boxGeometry args={[2.2, 0.6, 6.5]} />
        <meshStandardMaterial color="#8a6742" />
      </mesh>

      {/* Dance bag */}
      <InteractiveBox
        position={[-5.2, -0.55, -5.2]}
        size={[0.8, 0.9, 0.5]}
        baseColor="#b3476b"
        hoverColor="#d05a83"
        onClick={onDanceVideosClick}
      />
    </>
  )
}