"use client"
import { useTaskStats } from "../context/TaskStatsContext"
import { useTheme } from "../context/ThemeContext"

export function TaskStats() {
  const stats = useTaskStats()
  const { isDark } = useTheme()

  return (
    <div className={`task-stats ${isDark ? "dark" : "light"}`}>
      <h3>Task Statistics</h3>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">{stats.total}</div>
          <div className="stat-label">Total Tasks</div>
        </div>

        <div className="stat-card">
          <div className="stat-number">{stats.completed}</div>
          <div className="stat-label">Completed</div>
        </div>

        <div className="stat-card">
          <div className="stat-number">{stats.pending}</div>
          <div className="stat-label">Pending</div>
        </div>

        <div className="stat-card">
          <div className="stat-number">{stats.completionRate}%</div>
          <div className="stat-label">Completion Rate</div>
        </div>
      </div>

      <div className="priority-breakdown">
        <h4>Priority Breakdown</h4>
        <div className="priority-stats">
          <div className="priority-item high">
            <span>High: {stats.priorityStats.high || 0}</span>
          </div>
          <div className="priority-item medium">
            <span>Medium: {stats.priorityStats.medium || 0}</span>
          </div>
          <div className="priority-item low">
            <span>Low: {stats.priorityStats.low || 0}</span>
          </div>
        </div>
      </div>

      {stats.total > 0 && (
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${stats.completionRate}%` }} />
        </div>
      )}
    </div>
  )
}
