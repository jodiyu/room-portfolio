import InteractiveBox from './InteractiveBox'
import WindowScene from './WindowScene'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import dancerImg from '../assets/dancer.png'
import type { WeatherMode } from './WindowScene'

type WallDecorProps = {
  onResumeClick: () => void
  onDanceVideosClick: () => void
  weather: WeatherMode
}

export default function WallDecor({
  onResumeClick,
  onDanceVideosClick,
  weather,
}: WallDecorProps) {
  const dancerTexture = useLoader(TextureLoader, dancerImg)

  return (
    <>
      {/* === Diploma === */}
      <group position={[3.2, 1.5, -5.96]}>
        {/* Outer frame */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.6, 1.2, 0.08]} />
          <meshStandardMaterial color="#5a3f2c" />
        </mesh>
        {/* Inner frame lip */}
        <mesh position={[0, 0, 0.03]}>
          <boxGeometry args={[1.45, 1.05, 0.02]} />
          <meshStandardMaterial color="#3d2a1a" />
        </mesh>
        {/* Mat board */}
        <mesh position={[0, 0, 0.04]}>
          <boxGeometry args={[1.35, 0.95, 0.01]} />
          <meshStandardMaterial color="#f1ede4" />
        </mesh>
        {/* Diploma paper (interactive) */}
        <InteractiveBox
          position={[0, 0, 0.05]}
          size={[1.1, 0.7, 0.005]}
          baseColor="#a8a592"
          hoverColor="#cbbe88"
          onClick={onResumeClick}
        />
        {/* Gold seal */}
        <mesh position={[0.25, -0.2, 0.055]}>
          <circleGeometry args={[0.08, 16]} />
          <meshStandardMaterial color="#c9a83e" metalness={0.6} roughness={0.3} />
        </mesh>
        {/* Text lines */}
        {[-0.15, -0.05, 0.05, 0.12].map((y, i) => (
          <mesh key={i} position={[0, y, 0.055]}>
            <boxGeometry args={[i === 1 ? 0.7 : 0.5, 0.02, 0.001]} />
            <meshStandardMaterial color="#3a3a3a" />
          </mesh>
        ))}
      </group>

      {/* === Dance Poster === */}
      <group position={[-2.4, 1.4, -5.95]}>
        {/* Poster background (interactive) */}
        <InteractiveBox
          position={[0, 0, 0]}
          size={[1.4, 2, 0.05]}
          baseColor="#b3476b"
          hoverColor="#d76c90"
          onClick={onDanceVideosClick}
        />
        {/* Dancer PNG image */}
        <mesh position={[0, 0, 0.031]}>
          <planeGeometry args={[1.5, 1.7]} />
          <meshBasicMaterial map={dancerTexture} transparent />
        </mesh>
      </group>

      {/* Left wall window */}
      <group position={[-5.95, 1, -3]} rotation={[0, Math.PI / 2, 0]}>
        <WindowScene weather={weather} />
        {/* Outer frame - top */}
        <mesh position={[0, 0.95, 0.01]}>
          <boxGeometry args={[3, 0.1, 0.06]} />
          <meshStandardMaterial color="#f0ece4" />
        </mesh>
        {/* Outer frame - bottom */}
        <mesh position={[0, -0.95, 0.01]}>
          <boxGeometry args={[3, 0.1, 0.06]} />
          <meshStandardMaterial color="#f0ece4" />
        </mesh>
        {/* Outer frame - left */}
        <mesh position={[-1.45, 0, 0.01]}>
          <boxGeometry args={[0.1, 2, 0.06]} />
          <meshStandardMaterial color="#f0ece4" />
        </mesh>
        {/* Outer frame - right */}
        <mesh position={[1.45, 0, 0.01]}>
          <boxGeometry args={[0.1, 2, 0.06]} />
          <meshStandardMaterial color="#f0ece4" />
        </mesh>
        {/* Window sill */}
        <mesh position={[0, -1.02, 0.08]}>
          <boxGeometry args={[3.2, 0.06, 0.2]} />
          <meshStandardMaterial color="#d9d4c8" />
        </mesh>
      </group>

      {/* Left wall window */}
      <group position={[-5.95, 1, 3]} rotation={[0, Math.PI / 2, 0]}>
        <WindowScene weather={weather} />
        {/* Outer frame - top */}
        <mesh position={[0, 0.95, 0.01]}>
          <boxGeometry args={[3, 0.1, 0.06]} />
          <meshStandardMaterial color="#f0ece4" />
        </mesh>
        {/* Outer frame - bottom */}
        <mesh position={[0, -0.95, 0.01]}>
          <boxGeometry args={[3, 0.1, 0.06]} />
          <meshStandardMaterial color="#f0ece4" />
        </mesh>
        {/* Outer frame - left */}
        <mesh position={[-1.45, 0, 0.01]}>
          <boxGeometry args={[0.1, 2, 0.06]} />
          <meshStandardMaterial color="#f0ece4" />
        </mesh>
        {/* Outer frame - right */}
        <mesh position={[1.45, 0, 0.01]}>
          <boxGeometry args={[0.1, 2, 0.06]} />
          <meshStandardMaterial color="#f0ece4" />
        </mesh>
        {/* Window sill */}
        <mesh position={[0, -1.02, 0.08]}>
          <boxGeometry args={[3.2, 0.06, 0.2]} />
          <meshStandardMaterial color="#d9d4c8" />
        </mesh>
      </group>

    </>
  )
}