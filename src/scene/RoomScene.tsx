import type { ActiveSection } from '../App'
import type { WeatherMode } from './WindowScene'
import BookshelfArea from './BookshelfArea'
import DeskArea from './DeskArea'
import RoomProps from './RoomProps'
import RoomShell from './RoomShell'
import WallDecor from './WallDecor'

type RoomSceneProps = {
  onSectionSelect: (section: Exclude<ActiveSection, null>) => void
  weather: WeatherMode
  onWeatherChange: (mode: WeatherMode) => void
  darkMode: boolean
  onToggleDarkMode: () => void
}

export default function RoomScene({ onSectionSelect, weather, onWeatherChange, darkMode, onToggleDarkMode }: RoomSceneProps) {
  return (
    <>
      <ambientLight
        intensity={darkMode ? 0.65 : 0.8}
        color={darkMode ? "#757b9e" : "#ffffff"}
      />

      <directionalLight
        position={[2, 4, 3]}
        intensity={darkMode ? 0.9 : 2}
        color={darkMode ? "#c9d1ff" : "#ffeedd"}
      />

      {darkMode && (
        <pointLight
          position={[-3, 2, 2]}
          intensity={0.6}
          color="#8fa8ff"
        />
      )}

      <RoomShell />

      <DeskArea onProjectsClick={() => onSectionSelect('projects')} />

      <BookshelfArea
        onReadingListClick={() => onSectionSelect('reading-list')}
      />

      <WallDecor 
        onResumeClick={() => onSectionSelect('resume')} 
        onDanceVideosClick={() => onSectionSelect('dance-videos')}
        weather={weather}
        onWeatherChange={onWeatherChange}
      />

      <RoomProps 
        onSpeechesClick={() => onSectionSelect('speech-videos')}
        darkMode={darkMode}
        onToggleDarkMode={onToggleDarkMode}
      />
    </>
  )
}