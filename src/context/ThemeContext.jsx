"use client"

import { createContext, useContext, useCallback } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

// useContext: Theme context
const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  // useState: Toggle theme state
  const [theme, setTheme] = useLocalStorage("theme", "light")

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }, [setTheme])

  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  }

  return (
    <ThemeContext.Provider value={value}>
      <div className={`app ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
