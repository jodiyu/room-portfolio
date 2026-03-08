import type { ActiveSection } from '../App'
import BookshelfArea from './BookshelfArea'
import DeskArea from './DeskArea'
import RoomProps from './RoomProps'
import RoomShell from './RoomShell'
import WallDecor from './WallDecor'

type RoomSceneProps = {
  onSectionSelect: (section: Exclude<ActiveSection, null>) => void
}

export default function RoomScene({ onSectionSelect }: RoomSceneProps) {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 4, 3]} intensity={2} />

      <RoomShell />

      <DeskArea onProjectsClick={() => onSectionSelect('projects')} />

      <BookshelfArea
        onReadingListClick={() => onSectionSelect('reading-list')}
      />

      <WallDecor onResumeClick={() => onSectionSelect('resume')} />

      <RoomProps onDanceVideosClick={() => onSectionSelect('dance-videos')} />
    </>
  )
}