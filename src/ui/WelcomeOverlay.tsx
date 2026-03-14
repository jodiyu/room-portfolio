

export default function WelcomeOverlay() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        pointerEvents: 'none',
        color: '#2b2b2b',
        padding: '2rem'
      }}
    >
      <div
        style={{
          maxWidth: 520,
          background: 'rgba(255,255,255,0.85)',
          padding: '2rem 2.5rem',
          borderRadius: 10,
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
        }}
      >
        <p style={{ margin: '0 0 1rem 0', fontSize: '2rem' }}>
          JODI YU
        </p>

        <p style={{ marginBottom: '1.2rem', lineHeight: 1.6 }}>
          Hello! This is my portfolio, presented as an interactive 3D room.
          Each object in the space represents a different part of my work,
          including projects, experiences, and my reading list.
        </p>

        <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
          Hover over the door in front of you to open it, then click to enter
          the room.
        </p>

      </div>
    </div>
  )
}