"use client"

import styles from "./Navigation.module.css"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`${styles.navButton} ${activeSection === item.id ? styles.active : ""}`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
