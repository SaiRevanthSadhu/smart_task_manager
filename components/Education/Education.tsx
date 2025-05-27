import styles from "./Education.module.css"

interface EducationItem {
  degree: string
  institution: string
  duration: string
  location: string
  grade?: string
}

export default function Education() {
  const education: EducationItem[] = [
    {
      degree: "Post Graduation Diploma: COMPUTER SOFTWARE AND DATABASE DEVELOPMENT",
      institution: "Loyalist College",
      duration: "2024-2025",
      location: "TORONTO, ON – CA",
    },
    {
      degree: "Bachelor of Technology: ELECTRONICS AND COMMUNICATION ENGINEERING",
      institution: "Vishnu Inst. of Tech. (Autonomous)",
      duration: "2013-2017",
      location: "AP, INDIA",
      grade: "CGPA: 8.70",
    },
  ]

  return (
    <section className={styles.education}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.educationList}>
        {education.map((item, index) => (
          <div key={index} className={styles.educationCard}>
            <div className={styles.degreeHeader}>
              <h3 className={styles.degree}>{item.degree}</h3>
              <span className={styles.duration}>{item.duration}</span>
            </div>
            <h4 className={styles.institution}>{item.institution}</h4>
            <p className={styles.location}>{item.location}</p>
            {item.grade && <p className={styles.grade}>{item.grade}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
