"use client"

import type React from "react"
import { useState } from "react"
import styles from "./Skills.module.css"

interface SkillCategory {
  category: string
  skills: string[]
  icon: string
}

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const skillsData: SkillCategory[] = [
    {
      category: "Languages & Libraries",
      skills: ["JavaScript", "React JS", "jQuery", "HTML", "CSS", "DOM", "COBOL", "JCL", "VSAM", "CICS", "Easytrieve"],
      icon: "💻",
    },
    {
      category: "Database",
      skills: ["SQL", "PostgreSQL", "DB2"],
      icon: "🗄️",
    },
    {
      category: "Frameworks",
      skills: ["Bootstrap", "Node.js"],
      icon: "🔧",
    },
    {
      category: "Operating Systems",
      skills: ["Linux", "UNIX", "Windows"],
      icon: "🖥️",
    },
    {
      category: "IDE",
      skills: ["Visual Studio", "Eclipse"],
      icon: "⚡",
    },
    {
      category: "Versioning Tools",
      skills: ["GitHub", "Bitbucket", "Git", "Change man", "Endevor"],
      icon: "📝",
    },
    {
      category: "Other Tools",
      skills: [
        "Apache Kafka",
        "API Gateway",
        "ServiceNow",
        "JIRA",
        "SharePoint",
        "Confluence",
        "Splunk",
        "Spufi",
        "SAR",
        "OMVS",
        "File-Aid",
        "Abend-Aid",
        "Tivoli",
      ],
      icon: "🛠️",
    },
  ]

  const allSkills = skillsData.flatMap((category) => category.skills)
  const categories = ["all", ...skillsData.map((cat) => cat.category)]

  const getFilteredSkills = () => {
    if (selectedCategory === "all") {
      return skillsData
    }
    return skillsData.filter((cat) => cat.category === selectedCategory)
  }

  const getSkillLevel = (skill: string): number => {
    // Simulate skill levels based on the resume context
    const expertSkills = ["JavaScript", "React JS", "HTML", "CSS", "SQL", "Node.js"]
    const advancedSkills = ["jQuery", "PostgreSQL", "Git", "GitHub", "JIRA", "Bootstrap"]

    if (expertSkills.includes(skill)) return 90
    if (advancedSkills.includes(skill)) return 75
    return 60
  }

  return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.sectionTitle}>Technical Skills</h2>

      <div className={styles.filterButtons}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ""}`}
          >
            {category === "all" ? "All Skills" : category}
          </button>
        ))}
      </div>

      <div className={styles.skillsGrid}>
        {getFilteredSkills().map((categoryData) => (
          <div key={categoryData.category} className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <span className={styles.categoryIcon}>{categoryData.icon}</span>
              <h3 className={styles.categoryTitle}>{categoryData.category}</h3>
            </div>

            <div className={styles.skillsList}>
              {categoryData.skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill}</span>
                    <span className={styles.skillPercentage}>{getSkillLevel(skill)}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} style={{ width: `${getSkillLevel(skill)}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.skillsSummary}>
        <h3 className={styles.summaryTitle}>Skills Overview</h3>
        <div className={styles.summaryStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{allSkills.length}</span>
            <span className={styles.statLabel}>Total Skills</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{skillsData.length}</span>
            <span className={styles.statLabel}>Categories</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>8+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
