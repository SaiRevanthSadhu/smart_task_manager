"use client"

import { useState, useMemo, useLayoutEffect, useRef } from "react"
import { useTheme } from "../context/ThemeContext"

export function TaskList({ tasks, onToggleTask, onDeleteTask, onUpdateTask }) {
  // useState: Store filter and sort state
  const [filter, setFilter] = useState("all")
  const [sortBy, setSortBy] = useState("createdAt")
  const [draggedTask, setDraggedTask] = useState(null)

  const { isDark } = useTheme()
  const listRef = useRef(null)
  const latestTaskRef = useRef(null)

  // useMemo: Memoize filtered tasks
  const filteredAndSortedTasks = useMemo(() => {
    let filtered = tasks

    // Filter tasks
    if (filter === "completed") {
      filtered = tasks.filter((task) => task.completed)
    } else if (filter === "pending") {
      filtered = tasks.filter((task) => !task.completed)
    }

    // Sort tasks
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "priority":
          const priorityOrder = { high: 3, medium: 2, low: 1 }
          return priorityOrder[b.priority] - priorityOrder[a.priority]
        case "text":
          return a.text.localeCompare(b.text)
        case "createdAt":
        default:
          return new Date(b.createdAt) - new Date(a.createdAt)
      }
    })
  }, [tasks, filter, sortBy])

  // useLayoutEffect: Scroll to latest task
  useLayoutEffect(() => {
    if (latestTaskRef.current && tasks.length > 0) {
      latestTaskRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      })
    }
  }, [tasks.length])

  // useLayoutEffect: Layout adjustment for responsive design
  useLayoutEffect(() => {
    const handleResize = () => {
      if (listRef.current) {
        const width = listRef.current.offsetWidth
        listRef.current.style.gridTemplateColumns = width < 600 ? "1fr" : "repeat(auto-fill, minmax(300px, 1fr))"
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleDragStart = (e, task) => {
    setDraggedTask(task)
    e.dataTransfer.effectAllowed = "move"
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
  }

  const handleDrop = (e, targetTask) => {
    e.preventDefault()
    if (draggedTask && draggedTask.id !== targetTask.id) {
      // Implement drag and drop reordering logic here
      console.log("Reordering tasks:", draggedTask, targetTask)
    }
    setDraggedTask(null)
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "#ff4757"
      case "medium":
        return "#ffa502"
      case "low":
        return "#2ed573"
      default:
        return "#747d8c"
    }
  }

  return (
    <div className="task-list-container">
      <div className="task-controls">
        <div className="filter-controls">
          <label>Filter:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className={isDark ? "dark" : "light"}>
            <option value="all">All Tasks</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="sort-controls">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={isDark ? "dark" : "light"}>
            <option value="createdAt">Date Created</option>
            <option value="priority">Priority</option>
            <option value="text">Name</option>
          </select>
        </div>
      </div>

      <div ref={listRef} className="task-grid">
        {filteredAndSortedTasks.map((task, index) => (
          <div
            key={task.id}
            ref={index === 0 ? latestTaskRef : null}
            className={`task-item ${task.completed ? "completed" : ""} ${isDark ? "dark" : "light"}`}
            draggable
            onDragStart={(e) => handleDragStart(e, task)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, task)}
          >
            <div className="task-header">
              <div className="priority-indicator" style={{ backgroundColor: getPriorityColor(task.priority) }} />
              <span className="priority-label">{task.priority}</span>
              <button onClick={() => onDeleteTask(task.id)} className="delete-btn" aria-label="Delete task">
                ×
              </button>
            </div>

            <div className="task-content">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleTask(task.id)}
                className="task-checkbox"
              />
              <span className={`task-text ${task.completed ? "completed" : ""}`}>{task.text}</span>
            </div>

            <div className="task-footer">
              <small className="task-date">{new Date(task.createdAt).toLocaleDateString()}</small>
            </div>
          </div>
        ))}
      </div>

      {filteredAndSortedTasks.length === 0 && (
        <div className="empty-state">
          <p>No tasks found. {filter !== "all" ? "Try changing the filter." : "Add your first task!"}</p>
        </div>
      )}
    </div>
  )
}
