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
}

export default function RoomScene({ onSectionSelect, weather }: RoomSceneProps) {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 4, 3]} intensity={2} />

      <RoomShell />

      <DeskArea onProjectsClick={() => onSectionSelect('projects')} />

      <BookshelfArea
        onReadingListClick={() => onSectionSelect('reading-list')}
      />

      <WallDecor 
        onResumeClick={() => onSectionSelect('resume')} 
        onDanceVideosClick={() => onSectionSelect('dance-videos')}
        weather={weather}
      />

      <RoomProps />
    </>
  )
}