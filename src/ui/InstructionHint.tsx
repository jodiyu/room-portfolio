export default function InstructionHint() {
  return (
    <div
      style={{
        position: 'absolute',
        left: '24px',
        bottom: '24px',
        padding: '12px 14px',
        background: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.16)',
        zIndex: 5,
        maxWidth: '260px',
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: '14px',
          lineHeight: 1.4,
          color: '#1f1f1f',
        }}
      >
        Click and drag to move around. Click objects in the room to explore projects, books, coursework, and
        dance videos.
      </p>
    </div>
  )
}