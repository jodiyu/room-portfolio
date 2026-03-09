import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import RoomScene from './scene/RoomScene'
import CameraRig from './scene/CameraRig'
import Overlay from './ui/Overlay'
import InstructionHint from './ui/InstructionHint'
import SettingsBar from './ui/SettingsBar'
import type { WeatherMode } from './scene/WindowScene'

export type ActiveSection =
  | null
  | 'projects'
  | 'reading-list'
  | 'resume'
  | 'dance-videos'
  | 'speech-videos'

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>(null)
  const [weather, setWeather] = useState<WeatherMode>('clear')

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Canvas camera={{ position: [0, 1.6, 5], fov: 60 }}>
        <CameraRig isOverlayOpen={activeSection !== null} />
        <RoomScene onSectionSelect={setActiveSection} weather={weather} />
      </Canvas>

      <SettingsBar weather={weather} onWeatherChange={setWeather} />
      <InstructionHint />

      <Overlay
        activeSection={activeSection}
        onClose={() => setActiveSection(null)}
      />
    </div>
  )
}