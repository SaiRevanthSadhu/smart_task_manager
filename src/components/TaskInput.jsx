"use client"

import { useState, useRef, useEffect } from "react"
import { useTheme } from "../context/ThemeContext"

export function TaskInput({ onAddTask }) {
  // useState: Store task input state
  const [taskText, setTaskText] = useState("")
  const [priority, setPriority] = useState("medium")

  // useRef: Focus input
  const inputRef = useRef(null)
  const { isDark } = useTheme()

  // useEffect: Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskText.trim()) {
      onAddTask({
        id: Date.now(),
        text: taskText.trim(),
        priority,
        completed: false,
        createdAt: new Date().toISOString(),
      })
      setTaskText("")
      // useRef: Focus input after adding task
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="task-input-form">
      <div className="input-group">
        <input
          ref={inputRef}
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter a new task..."
          className={`task-input ${isDark ? "dark" : "light"}`}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className={`priority-select ${isDark ? "dark" : "light"}`}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit" className="add-btn">
          Add Task
        </button>
      </div>
    </form>
  )
}
