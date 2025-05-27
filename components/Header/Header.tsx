"use client"

import styles from "./Header.module.css"

interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  linkedin: string
}

interface HeaderProps {
  personalInfo: PersonalInfo
  isDarkMode: boolean
  toggleTheme: () => void
}

export default function Header({ personalInfo, isDarkMode, toggleTheme }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.profileSection}>
          <h1 className={styles.name}>{personalInfo.name}</h1>
          <h2 className={styles.title}>{personalInfo.title}</h2>
          <div className={styles.contactInfo}>
            <span>{personalInfo.email}</span>
            <span>{personalInfo.phone}</span>
            <span>{personalInfo.linkedin}</span>
          </div>
        </div>

        <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle dark mode">
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  )
}
