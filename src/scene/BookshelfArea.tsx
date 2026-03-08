import InteractiveBox from './InteractiveBox'

type BookshelfAreaProps = {
  onReadingListClick: () => void
}

export default function BookshelfArea({
  onReadingListClick,
}: BookshelfAreaProps) {
  return (
    <>
      {/* Bookshelf */}
      <InteractiveBox
        position={[-5.3, 0.2, 0]}
        size={[0.9, 2.8, 1.1]}
        baseColor="#8a6742"
        hoverColor="#a07a50"
        onClick={onReadingListClick}
      />
    </>
  )
}