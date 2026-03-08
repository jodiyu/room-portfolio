import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import RoomScene from './scene/RoomScene'
import Overlay from './ui/Overlay'

export type ActiveSection =
  | null
  | 'projects'
  | 'reading-list'
  | 'resume'
  | 'dance-videos'

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>(null)

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Canvas camera={{ position: [0, 1.6, 5], fov: 60 }}>
        <RoomScene onSectionSelect={setActiveSection} />
      </Canvas>

      <Overlay
        activeSection={activeSection}
        onClose={() => setActiveSection(null)}
      />
    </div>
  )
}