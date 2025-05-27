"use client"

import type React from "react"
import { useState } from "react"
import styles from "./Experience.module.css"

interface ExperienceItem {
  id: number
  company: string
  position: string
  duration: string
  location: string
  project?: string
  client?: string
  responsibilities: string[]
}

const Experience: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "Precisely",
      position: "Senior Software Developer",
      duration: "Aug 2021 - Apr 2024 (India), May 2024 - Present (Canada)",
      location: "Bangalore, India / Canada (On-site)",
      project: "Ironstream (Metron Product)",
      responsibilities: [
        "Developed and maintained web applications using various JavaScript frameworks including React, Node.js, and jQuery",
        "Collaborated with developers and designers to create responsive user-friendly interfaces",
        "Integrated user interfaces with back-end databases and services",
        "Enhanced usability and performance of web applications",
        "Debugged, optimized and troubleshooted code, ensuring compliance with coding and design standards",
        "Created database designs and ensured database code quality",
        "Followed Agile and Scrum practices in developing and delivering applications in sprints",
        "Performed the role of Scrum Master for few months",
      ],
    },
    {
      id: 2,
      company: "CGI",
      position: "Software Engineer",
      duration: "Dec 2019 - Aug 2021",
      location: "Hyderabad, India",
      project: "Compressed NPA Modernization",
      client: "Bell - Canada (Telecom)",
      responsibilities: [
        "Worked on ARICS (Accounts Receivable Inquiry Collection System) backend application",
        "Handled event processing, generating notices, pricing, rating, and payment processing",
        "Involved from design phase through construction, SIT, SFT, and deployment",
        "Managed application comprising 85 impacted programs and 160 impacted JCLs",
        "Coded 9 programs from scratch",
        "Conducted peer reviews for components & documents of junior teammates",
        "Analyzed defects found during testing",
        "Prepared KT plans & conducted knowledge transfer sessions",
      ],
    },
    {
      id: 3,
      company: "NTT DATA",
      position: "Software Development Senior Associate",
      duration: "Nov 2017 - Nov 2019",
      location: "Noida, India",
      project: "Bank Of Ireland",
      client: "BOI (UK - Banking)",
      responsibilities: [
        "Worked on MPMCIS backend system for various branch desk applications",
        "Maintained customer information and data quality and integrity",
        "Performed analyst role for team generating accounts and tracking customer data",
        "Handled production tickets and incidents within SLA",
        "Provided night support for on-call batch processing",
        "Responsible for coding & unit testing for projects & maintenance requests",
      ],
    },
  ]

  const toggleExpanded = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id)
  }

  return (
    <div className={styles.experienceContainer}>
      <h2 className={styles.sectionTitle}>Work Experience</h2>

      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <div key={exp.id} className={styles.timelineItem}>
            <div className={styles.timelineMarker}></div>

            <div className={styles.experienceCard}>
              <div className={styles.cardHeader} onClick={() => toggleExpanded(exp.id)}>
                <div>
                  <h3 className={styles.position}>{exp.position}</h3>
                  <h4 className={styles.company}>{exp.company}</h4>
                  <p className={styles.duration}>{exp.duration}</p>
                  <p className={styles.location}>{exp.location}</p>
                  {exp.project && <p className={styles.project}>Project: {exp.project}</p>}
                  {exp.client && <p className={styles.client}>Client: {exp.client}</p>}
                </div>
                <button className={styles.expandButton}>{expandedItem === exp.id ? "−" : "+"}</button>
              </div>

              {expandedItem === exp.id && (
                <div className={styles.responsibilities}>
                  <h5 className={styles.responsibilitiesTitle}>Key Responsibilities:</h5>
                  <ul className={styles.responsibilitiesList}>
                    {exp.responsibilities.map((responsibility, index) => (
                      <li key={index} className={styles.responsibilityItem}>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
