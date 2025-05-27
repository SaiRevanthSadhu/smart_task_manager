"use client"

import { useReducer, useCallback, useEffect } from "react"
import { ThemeProvider, useTheme } from "./context/ThemeContext"
import { TaskStatsProvider } from "./context/TaskStatsContext"
import { TaskInput } from "./components/TaskInput"
import { TaskList } from "./components/TaskList"
import { TaskStats } from "./components/TaskStats"
import { Timer } from "./components/Timer"
import { useLocalStorage } from "./hooks/useLocalStorage"
import "./App.css"

const TASK_ACTIONS = {
  ADD_TASK: "ADD_TASK",
  TOGGLE_TASK: "TOGGLE_TASK",
  DELETE_TASK: "DELETE_TASK",
  UPDATE_TASK: "UPDATE_TASK",
  LOAD_TASKS: "LOAD_TASKS",
}

function taskReducer(state, action) {
  switch (action.type) {
    case TASK_ACTIONS.ADD_TASK:
      return [...state, action.payload]
    case TASK_ACTIONS.TOGGLE_TASK:
      return state.map((task) => (task.id === action.payload ? { ...task, completed: !task.completed } : task))
    case TASK_ACTIONS.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload)
    case TASK_ACTIONS.UPDATE_TASK:
      return state.map((task) => (task.id === action.payload.id ? { ...task, ...action.payload.updates } : task))
    case TASK_ACTIONS.LOAD_TASKS:
      return action.payload
    default:
      return state
  }
}

function AppContent() {
  // useReducer: Manage task list
  const [tasks, dispatch] = useReducer(taskReducer, [])

  // useLocalStorage: Store tasks in localStorage
  const [storedTasks, setStoredTasks] = useLocalStorage("tasks", [])

  const { toggleTheme, isDark } = useTheme()

  // useEffect: Load tasks on mount ONLY (empty dependency array)
  useEffect(() => {
    if (storedTasks && storedTasks.length > 0) {
      dispatch({ type: TASK_ACTIONS.LOAD_TASKS, payload: storedTasks })
    }
  }, []) // Empty dependency array - only run on mount

  // useEffect: Sync tasks to localStorage (but skip initial empty state)
  useEffect(() => {
    if (tasks.length > 0 || storedTasks.length > 0) {
      setStoredTasks(tasks)
    }
  }, [tasks]) // Remove setStoredTasks from dependencies

  // useCallback: Add/remove tasks
  const addTask = useCallback((task) => {
    dispatch({ type: TASK_ACTIONS.ADD_TASK, payload: task })
  }, [])

  const toggleTask = useCallback((taskId) => {
    dispatch({ type: TASK_ACTIONS.TOGGLE_TASK, payload: taskId })
  }, [])

  const deleteTask = useCallback((taskId) => {
    dispatch({ type: TASK_ACTIONS.DELETE_TASK, payload: taskId })
  }, [])

  const updateTask = useCallback((taskId, updates) => {
    dispatch({
      type: TASK_ACTIONS.UPDATE_TASK,
      payload: { id: taskId, updates },
    })
  }, [])

  return (
    <TaskStatsProvider tasks={tasks}>
      <div className={`app-container ${isDark ? "dark" : "light"}`}>
        <header className="app-header">
          <h1>Smart Task Manager</h1>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {isDark ? "☀️" : "🌙"}
          </button>
        </header>

        <main className="app-main">
          <div className="left-panel">
            <TaskInput onAddTask={addTask} />
            <TaskStats />
          </div>

          <div className="center-panel">
            <TaskList tasks={tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} onUpdateTask={updateTask} />
          </div>

          <div className="right-panel">
            <Timer />
          </div>
        </main>
      </div>
    </TaskStatsProvider>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
