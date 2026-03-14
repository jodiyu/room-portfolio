import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import RoomScene from './scene/RoomScene'
import WelcomeScene from './scene/WelcomeScene'
import CameraRig from './scene/CameraRig'
import Overlay from './ui/Overlay'
import InstructionHint from './ui/InstructionHint'
import WelcomeOverlay from './ui/WelcomeOverlay'
import type { WeatherMode } from './scene/WindowScene'

export type ActiveSection =
  | null
  | 'projects'
  | 'reading-list'
  | 'resume'
  | 'dance-videos'
  | 'speech-videos'

type AppView = 'welcome' | 'room'

export default function App() {
  const [view, setView] = useState<AppView>('welcome')
  const [activeSection, setActiveSection] = useState<ActiveSection>(null)
  const [weather, setWeather] = useState<WeatherMode>('clear')
  const [fadeOpacity, setFadeOpacity] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  const handleWeatherChange = (next: WeatherMode) => {
    setWeather(next)
  }

  const handleEnterRoom = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setFadeOpacity(1)

    window.setTimeout(() => {
      setActiveSection(null)
      setView('room')

      window.setTimeout(() => {
        setFadeOpacity(0)

        window.setTimeout(() => {
          setIsTransitioning(false)
        }, 500)
      }, 100)
    }, 500)
  }

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Canvas camera={{ position: [0, 1.6, 5], fov: 60 }}>
        {view === 'welcome' ? (
          <WelcomeScene onEnter={handleEnterRoom} />
        ) : (
          <>
            <CameraRig isOverlayOpen={activeSection !== null} />
            <RoomScene
              onSectionSelect={setActiveSection}
              weather={weather}
              onWeatherChange={handleWeatherChange}
              darkMode={darkMode}
              onToggleDarkMode={handleToggleDarkMode}
            />
          </>
        )}
      </Canvas>

      {view === 'welcome' && (
        <WelcomeOverlay/>
      )}

      {view === 'room' && <InstructionHint />}

      {view === 'room' && (
        <Overlay
          activeSection={activeSection}
          onClose={() => setActiveSection(null)}
        />
      )}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'white',
          opacity: fadeOpacity,
          pointerEvents: 'none',
          transition: 'opacity 500ms ease-in-out',
        }}
      />
    </div>
  )
}