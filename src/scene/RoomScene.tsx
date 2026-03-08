import InteractiveBox from './InteractiveBox'
import type { ActiveSection } from '../App'

type RoomSceneProps = {
  onSectionSelect: (section: Exclude<ActiveSection, null>) => void
}

export default function RoomScene({ onSectionSelect }: RoomSceneProps) {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 4, 3]} intensity={2} />

      {/* Floor */}
      <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#7b5e57" />
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
        onClick={() => onSectionSelect('projects')}
      />

      {/* Bookshelf */}
      <InteractiveBox
        position={[-5.3, 0.2, 0]}
        size={[0.9, 2.8, 1.1]}
        baseColor="#8a6742"
        hoverColor="#a07a50"
        onClick={() => onSectionSelect('reading-list')}
      />

      {/* Left wall window */}
      <mesh position={[-5.95, 1, -3]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[3, 2]} />
        <meshStandardMaterial color="#87ceeb" />
      </mesh>

      {/* Left wall window */}
      <mesh position={[-5.95, 1, 3]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[3, 2]} />
        <meshStandardMaterial color="#87ceeb" />
      </mesh>

      {/* Bed */}
      <mesh position={[4.9, -0.7, -4]}>
        <boxGeometry args={[2.2, 0.6, 6.5]} />
        <meshStandardMaterial color="#8a6742" />
      </mesh>

      {/* Diploma */}
      <InteractiveBox
        position={[3.2, 1.5, -5.95]}
        size={[1.4, 1, 0.05]}
        baseColor="#d2cdb6"
        hoverColor="#fff8df"
        onClick={() => onSectionSelect('resume')}
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

      {/* Dance bag */}
      <InteractiveBox
        position={[-5.2, -0.55, -5.2]}
        size={[0.8, 0.9, 0.5]}
        baseColor="#b3476b"
        hoverColor="#d05a83"
        onClick={() => onSectionSelect('dance-videos')}
      />

      {/* Door */}
      <mesh position={[0, 0, 5.95]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[1.8, 3.6]} />
        <meshStandardMaterial color="#5a3a28" />
      </mesh>
    </>
  )
}