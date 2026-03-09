import type { WeatherMode } from '../scene/WindowScene'

type SettingsBarProps = {
  weather: WeatherMode
  onWeatherChange: (mode: WeatherMode) => void
}

const modes: { value: WeatherMode; label: string }[] = [
  { value: 'clear', label: '☀️' },
  { value: 'rain', label: '🌧️' },
  { value: 'snow', label: '❄️' },
  { value: 'sunset', label: '🌅' },
  { value: 'night', label: '🌙' },
]

const barStyle: React.CSSProperties = {
  position: 'absolute',
  top: 16,
  right: 16,
  display: 'flex',
  gap: 6,
  background: 'rgba(30, 30, 30, 0.75)',
  backdropFilter: 'blur(8px)',
  borderRadius: 12,
  padding: '6px 10px',
  zIndex: 20,
}

const btnBase: React.CSSProperties = {
  width: 36,
  height: 36,
  fontSize: 18,
  border: 'none',
  borderRadius: 8,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background 0.15s',
}

export default function SettingsBar({
  weather,
  onWeatherChange,
}: SettingsBarProps) {
  return (
    <div style={barStyle}>
      {modes.map((m) => (
        <button
          key={m.value}
          title={m.value}
          onClick={() => onWeatherChange(m.value)}
          style={{
            ...btnBase,
            background:
              weather === m.value
                ? 'rgba(255,255,255,0.25)'
                : 'rgba(255,255,255,0.05)',
          }}
        >
          {m.label}
        </button>
      ))}
    </div>
  )
}
