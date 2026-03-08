import type { ActiveSection } from '../App'

type OverlayProps = {
  activeSection: ActiveSection
  onClose: () => void
}

function getSectionContent(activeSection: Exclude<ActiveSection, null>) {
  switch (activeSection) {
    case 'projects':
      return {
        title: 'Projects',
        body: 'This is where list of personal projects will go.',
      }
    case 'reading-list':
      return {
        title: 'Reading List',
        body: 'This is where reading list will go.',
      }
    case 'resume':
      return {
        title: 'Resume / Courses',
        body: 'This is where resume and relevant coursework will go.',
      }
    case 'dance-videos':
      return {
        title: 'Dance Videos',
        body: 'This is where dance video links will go.',
      }
  }
}

export default function Overlay({ activeSection, onClose }: OverlayProps) {
  if (activeSection === null) {
    return null
  }

  const content = getSectionContent(activeSection)

  return (
    <div
      style={{
        position: 'absolute',
        top: '24px',
        right: '24px',
        width: '320px',
        padding: '20px',
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
        zIndex: 10,
      }}
    >
      <button
        onClick={onClose}
        style={{
          float: 'right',
          border: 'none',
          background: 'transparent',
          fontSize: '18px',
          cursor: 'pointer',
        }}
      >
        ×
      </button>

      <h2 style={{ marginTop: 0 }}>{content.title}</h2>
      <p>{content.body}</p>
    </div>
  )
}