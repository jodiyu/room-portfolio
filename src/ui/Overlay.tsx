import type { ActiveSection } from '../App'
import {
  danceVideos,
  projects,
  readingList,
  resumeItems,
} from '../content/portfolioContent'

type OverlayProps = {
  activeSection: ActiveSection
  onClose: () => void
}

const panelStyle: React.CSSProperties = {
  position: 'absolute',
  top: '24px',
  right: '24px',
  width: '380px',
  maxHeight: '80vh',
  overflowY: 'auto',
  padding: '20px',
  background: 'rgba(255, 255, 255, 0.96)',
  borderRadius: '16px',
  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.25)',
  zIndex: 20,
  color: '#1f1f1f',
}

const backdropStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.18)',
  zIndex: 10,
}

const headerRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '12px',
  marginBottom: '16px',
}

const sectionKickerStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '12px',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#6b7280',
}

const sectionTitleStyle: React.CSSProperties = {
  margin: '6px 0 0 0',
  fontSize: '28px',
  lineHeight: 1.1,
}

const sectionDescriptionStyle: React.CSSProperties = {
  margin: '8px 0 0 0',
  fontSize: '14px',
  lineHeight: 1.5,
  color: '#4b5563',
}

const closeButtonStyle: React.CSSProperties = {
  border: 'none',
  background: 'transparent',
  fontSize: '22px',
  lineHeight: 1,
  cursor: 'pointer',
  color: '#4b5563',
  padding: 0,
}

const cardStyle: React.CSSProperties = {
  background: '#f8f8f8',
  borderRadius: '12px',
  padding: '14px',
  marginBottom: '12px',
  border: '1px solid #ececec',
}

const itemTitleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '17px',
}

const metaTextStyle: React.CSSProperties = {
  margin: '6px 0 0 0',
  fontSize: '14px',
  color: '#4b5563',
}

const bodyTextStyle: React.CSSProperties = {
  margin: '8px 0 0 0',
  fontSize: '14px',
  lineHeight: 1.5,
}

const linkStyle: React.CSSProperties = {
  display: 'inline-block',
  marginTop: '10px',
  fontSize: '14px',
  textDecoration: 'underline',
  color: '#1f1f1f',
}

function getSectionMeta(activeSection: Exclude<ActiveSection, null>) {
  switch (activeSection) {
    case 'projects':
      return {
        kicker: 'Desk / Computer',
        title: 'Projects',
        description:
          'Selected technical and design-oriented work, with emphasis on implementation and structure.',
      }
    case 'reading-list':
      return {
        kicker: 'Bookshelf',
        title: 'Reading List',
        description:
          'Books that I am currently reading or just finished reading.',
      }
    case 'resume':
      return {
        kicker: 'Diploma',
        title: 'Resume / Courses',
        description:
          'Relevant coursework, experience, and resume materials.',
      }
    case 'dance-videos':
      return {
        kicker: 'Dance Bag',
        title: 'Dance Videos',
        description:
          'Performance and rehearsal clips connected of my dance work.',
      }
  }
}

function renderContent(activeSection: Exclude<ActiveSection, null>) {
  switch (activeSection) {
    case 'projects':
      return projects.map((project) => (
        <div key={project.title} style={cardStyle}>
          <h3 style={itemTitleStyle}>{project.title}</h3>
          <p style={bodyTextStyle}>{project.description}</p>
          <p style={metaTextStyle}>
            <strong>Tech:</strong> {project.tech.join(', ')}
          </p>
          {project.link && (
            <a href={project.link} style={linkStyle}>
              Open project
            </a>
          )}
        </div>
      ))

    case 'reading-list':
      return readingList.map((book) => (
        <div key={book.title} style={cardStyle}>
          <h3 style={itemTitleStyle}>{book.title}</h3>
          <p style={metaTextStyle}>
            <strong>Author:</strong> {book.author}
          </p>
          {book.note && <p style={bodyTextStyle}>{book.note}</p>}
        </div>
      ))

    case 'resume':
      return resumeItems.map((item, index) => (
        <div key={`${item.title}-${index}`} style={cardStyle}>
          <h3 style={itemTitleStyle}>{item.title}</h3>
          <p style={metaTextStyle}>
            <em>{item.company}</em>
          </p>
          {item.subtitle && <p style={bodyTextStyle}>{item.subtitle}</p>}
          {item.link && (
            <a href={item.link} style={linkStyle}>
              Open
            </a>
          )}
        </div>
      ))

    case 'dance-videos':
      return danceVideos.map((video) => (
        <div key={video.title} style={cardStyle}>
          <h3 style={itemTitleStyle}>{video.title}</h3>
          {video.description && <p style={bodyTextStyle}>{video.description}</p>}
          {video.link && (
            <a href={video.link} style={linkStyle}>
              Watch
            </a>
          )}
        </div>
      ))
  }
}

export default function Overlay({ activeSection, onClose }: OverlayProps) {
  if (activeSection === null) {
    return null
  }

  const meta = getSectionMeta(activeSection)

  return (
    <>
      <div style={backdropStyle} onClick={onClose} />

      <div style={panelStyle}>
        <div style={headerRowStyle}>
          <div>
            <p style={sectionKickerStyle}>{meta.kicker}</p>
            <h2 style={sectionTitleStyle}>{meta.title}</h2>
            <p style={sectionDescriptionStyle}>{meta.description}</p>
          </div>

          <button onClick={onClose} style={closeButtonStyle} aria-label="Close">
            ×
          </button>
        </div>

        <div>{renderContent(activeSection)}</div>
      </div>
    </>
  )
}