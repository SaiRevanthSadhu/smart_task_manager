"use client"

import type React from "react"
import { useState } from "react"
import { useTheme } from "../../contexts/ThemeContext"
import styles from "./Header.module.css"

interface HeaderProps {
  activeSection: string
  onNavigate: (section: string) => void
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const { isDark, toggleTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <header className={styles.header}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Sai Revanth Sadhu</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`${styles.navLink} ${activeSection === item.id ? styles.active : ""}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
              {isDark ? "☀️" : "🌙"}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 dark:text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id)
                  setIsMobileMenuOpen(false)
                }}
                className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.active : ""}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
