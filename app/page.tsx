"use client"

import { useState } from "react"
import Header from "@/components/Header/Header"
import About from "@/components/About/About"
import Experience from "@/components/Experience/Experience"
import Education from "@/components/Education/Education"
import Skills from "@/components/Skills/Skills"
import Contact from "@/components/Contact/Contact"
import Navigation from "@/components/Navigation/Navigation"

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const personalInfo = {
    name: "Sai Revanth Sadhu",
    title: "SOFTWARE PROGRAMMER | WEB DEVELOPER",
    email: "sairevanth969@gmail.com",
    phone: "+1-613-583-5841",
    linkedin: "linkedin.com/in/sai-revanth-sadhu/",
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-theme">
      <Header personalInfo={personalInfo} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="container mx-auto px-4 py-8">
        {activeSection === "about" && <About />}
        {activeSection === "experience" && <Experience />}
        {activeSection === "education" && <Education />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "contact" && <Contact personalInfo={personalInfo} />}
      </main>
    </div>
  )
}
