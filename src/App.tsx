import { Canvas } from '@react-three/fiber'
import RoomScene from './scene/RoomScene'

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 1.6, 5], fov: 60 }}>
        <RoomScene />
      </Canvas>
    </div>
  )
}