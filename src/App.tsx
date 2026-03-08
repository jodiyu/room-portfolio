import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import RoomScene from './scene/RoomScene'
import CameraRig from './scene/CameraRig'
import Overlay from './ui/Overlay'
import InstructionHint from './ui/InstructionHint'

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
        <CameraRig isOverlayOpen={activeSection !== null} />
        <RoomScene onSectionSelect={setActiveSection} />
      </Canvas>

      <InstructionHint />

      <Overlay
        activeSection={activeSection}
        onClose={() => setActiveSection(null)}
      />
    </div>
  )
}