"use client"
import { usePomodoroTimer } from "../hooks/usePomodoroTimer"
import { useTheme } from "../context/ThemeContext"

export function Timer() {
  const { timeLeft, duration, isRunning, startTimer, pauseTimer, resetTimer, setDuration } = usePomodoroTimer()

  const { isDark } = useTheme()

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const presetDurations = [
    { label: "5 min", value: 300 },
    { label: "15 min", value: 900 },
    { label: "25 min", value: 1500 },
    { label: "45 min", value: 2700 },
  ]

  return (
    <div className={`timer-container ${isDark ? "dark" : "light"}`}>
      <h3>Pomodoro Timer</h3>

      <div className="timer-display">
        <div className="time-circle">
          <svg className="progress-ring" width="200" height="200">
            <circle
              className="progress-ring-background"
              cx="100"
              cy="100"
              r="90"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="8"
              opacity="0.3"
            />
            <circle
              className="progress-ring-progress"
              cx="100"
              cy="100"
              r="90"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="8"
              strokeDasharray={`${2 * Math.PI * 90}`}
              strokeDashoffset={`${2 * Math.PI * 90 * (1 - (duration - timeLeft) / duration)}`}
              transform="rotate(-90 100 100)"
            />
          </svg>
          <div className="time-text">{formatTime(timeLeft)}</div>
        </div>
      </div>

      <div className="timer-controls">
        <button
          onClick={isRunning ? pauseTimer : startTimer}
          className={`timer-btn primary ${isRunning ? "pause" : "start"}`}
        >
          {isRunning ? "Pause" : "Start"}
        </button>

        <button onClick={resetTimer} className="timer-btn secondary">
          Reset
        </button>
      </div>

      <div className="duration-presets">
        <label>Quick Set:</label>
        <div className="preset-buttons">
          {presetDurations.map((preset) => (
            <button
              key={preset.value}
              onClick={() => setDuration(preset.value)}
              className={`preset-btn ${duration === preset.value ? "active" : ""}`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {timeLeft === 0 && (
        <div className="timer-notification">
          <p>Time's up! Take a break! 🎉</p>
        </div>
      )}
    </div>
  )
}
