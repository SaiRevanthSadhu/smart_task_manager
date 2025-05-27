"use client"

import type React from "react"
import { useState } from "react"
import styles from "./Projects.module.css"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  features: string[]
  company: string
  duration: string
  type: "web" | "backend" | "fullstack"
}

const Projects: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("all")
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Ironstream Web Application",
      description:
        "Developed and maintained web applications for Metron Product at Precisely, focusing on real-time data streaming and monitoring solutions.",
      technologies: ["React", "Node.js", "JavaScript", "jQuery", "PostgreSQL"],
      features: [
        "Responsive user interface design",
        "Real-time data visualization",
        "Database integration",
        "Performance optimization",
        "Cross-browser compatibility",
      ],
      company: "Precisely",
      duration: "2021-2024",
      type: "fullstack",
    },
    {
      id: 2,
      title: "ARICS - Accounts Receivable System",
      description:
        "Backend application for Bell Canada's telecom operations, handling event processing, notice generation, pricing, and payment processing.",
      technologies: ["COBOL", "JCL", "VSAM", "CICS", "DB2"],
      features: [
        "Event processing system",
        "Automated notice generation",
        "Payment processing",
        "Rating and pricing engine",
        "85 program modules",
      ],
      company: "CGI (Bell Canada)",
      duration: "2019-2021",
      type: "backend",
    },
    {
      id: 3,
      title: "MPMCIS - Customer Information System",
      description:
        "Backend system for Bank of Ireland supporting various branch applications including loan origination and customer data management.",
      technologies: ["COBOL", "DB2", "JCL", "CICS"],
      features: [
        "Customer data management",
        "Loan origination support",
        "Data quality assurance",
        "Branch application integration",
        "Production support",
      ],
      company: "NTT DATA (Bank of Ireland)",
      duration: "2017-2019",
      type: "backend",
    },
    {
      id: 4,
      title: "React Resume Website",
      description:
        "Modern, responsive resume website built with React, featuring dark mode, smooth animations, and mobile-first design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "CSS Modules"],
      features: [
        "Responsive design",
        "Dark/Light theme toggle",
        "Smooth scrolling navigation",
        "Component-based architecture",
        "Mobile-first approach",
      ],
      company: "Personal Project",
      duration: "2024",
      type: "web",
    },
  ]

  const projectTypes = ["all", "web", "backend", "fullstack"]

  const getFilteredProjects = () => {
    if (selectedType === "all") {
      return projects
    }
    return projects.filter((project) => project.type === selectedType)
  }

  const toggleExpanded = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id)
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "web":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "backend":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "fullstack":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className={styles.projectsContainer}>
      <h2 className={styles.sectionTitle}>Projects & Applications</h2>

      <div className={styles.filterButtons}>
        {projectTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`${styles.filterButton} ${selectedType === type ? styles.active : ""}`}
          >
            {type === "all" ? "All Projects" : type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className={styles.projectsGrid}>
        {getFilteredProjects().map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectHeader}>
              <div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectMeta}>
                  <span className={styles.company}>{project.company}</span>
                  <span className={styles.duration}>{project.duration}</span>
                  <span className={`${styles.typeTag} ${getTypeColor(project.type)}`}>{project.type}</span>
                </div>
              </div>
              <button onClick={() => toggleExpanded(project.id)} className={styles.expandButton}>
                {expandedProject === project.id ? "−" : "+"}
              </button>
            </div>

            <p className={styles.projectDescription}>{project.description}</p>

            <div className={styles.technologiesSection}>
              <h4 className={styles.technologiesTitle}>Technologies:</h4>
              <div className={styles.technologiesList}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.technologyTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {expandedProject === project.id && (
              <div className={styles.featuresSection}>
                <h4 className={styles.featuresTitle}>Key Features:</h4>
                <ul className={styles.featuresList}>
                  {project.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
