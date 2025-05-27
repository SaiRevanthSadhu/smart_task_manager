"use client"

import { useState } from "react"
import { ThemeProvider } from "./contexts/ThemeContext"
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Education from "./components/Education/Education"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import "./App.module.css"

function App() {
  const [activeSection, setActiveSection] = useState("about")

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header activeSection={activeSection} onNavigate={scrollToSection} />

        <main className="container mx-auto px-4 py-8 max-w-6xl">
          <section id="about" className="mb-16">
            <About />
          </section>

          <section id="experience" className="mb-16">
            <Experience />
          </section>

          <section id="education" className="mb-16">
            <Education />
          </section>

          <section id="skills" className="mb-16">
            <Skills />
          </section>

          <section id="projects" className="mb-16">
            <Projects />
          </section>

          <section id="contact" className="mb-16">
            <Contact />
          </section>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
