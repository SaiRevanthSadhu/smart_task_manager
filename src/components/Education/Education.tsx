import type React from "react"
import styles from "./Education.module.css"

interface EducationItem {
  id: number
  degree: string
  field: string
  institution: string
  location: string
  duration: string
  grade?: string
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      id: 1,
      degree: "Post Graduation Diploma",
      field: "Computer Software and Database Development",
      institution: "Loyalist College",
      location: "Toronto, ON, Canada",
      duration: "2024-2025",
    },
    {
      id: 2,
      degree: "Bachelor of Technology",
      field: "Electronics and Communication Engineering",
      institution: "Vishnu Institute of Technology (Autonomous)",
      location: "Andhra Pradesh, India",
      duration: "2013-2017",
      grade: "CGPA: 8.70",
    },
  ]

  const achievements = [
    "Awarded by Precisely as 'Stellar Performer of the month', 'Employee of the month'",
    "Received Client Appreciation certificate for outstanding performance in CGI",
    "Received Bronze award for 2 quarters consecutively for best performance in CGI",
    "Received appreciation award for successfully resolving numerous pending items within two months of joining a new team at NTT DATA",
  ]

  const certifications = ["ITIL® V4.0 – IT Service Management", "Agile Certified Scrum Master"]

  return (
    <div className={styles.educationContainer}>
      <h2 className={styles.sectionTitle}>Education & Achievements</h2>

      <div className={styles.educationSection}>
        <h3 className={styles.subsectionTitle}>Education</h3>
        <div className={styles.educationGrid}>
          {educationData.map((edu) => (
            <div key={edu.id} className={styles.educationCard}>
              <div className={styles.degreeInfo}>
                <h4 className={styles.degree}>{edu.degree}</h4>
                <p className={styles.field}>{edu.field}</p>
                <p className={styles.institution}>{edu.institution}</p>
                <p className={styles.location}>{edu.location}</p>
                <div className={styles.durationGrade}>
                  <span className={styles.duration}>{edu.duration}</span>
                  {edu.grade && <span className={styles.grade}>{edu.grade}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.certificationsSection}>
        <h3 className={styles.subsectionTitle}>Certifications</h3>
        <div className={styles.certificationsList}>
          {certifications.map((cert, index) => (
            <div key={index} className={styles.certificationItem}>
              <span className={styles.certIcon}>🏆</span>
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.achievementsSection}>
        <h3 className={styles.subsectionTitle}>Professional Achievements</h3>
        <div className={styles.achievementsList}>
          {achievements.map((achievement, index) => (
            <div key={index} className={styles.achievementItem}>
              <span className={styles.achievementIcon}>⭐</span>
              <span>{achievement}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
