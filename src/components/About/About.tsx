import type React from "react"
import styles from "./About.module.css"

const About: React.FC = () => {
  const personalInfo = {
    name: "Sai Revanth Sadhu",
    title: "Software Programmer | Web Developer",
    email: "sairevanth969@gmail.com",
    phone: "+1-613-583-5841",
    linkedin: "linkedin.com/in/sai-revanth-sadhu/",
    summary: `Dedicated and skilled Software Developer with 8+ years of industry experience in building robust Web Services and Web Applications using JavaScript, HTML, CSS, React JS, and Node JS. Proven track record in developing user-friendly, scalable, and secure applications that deliver real-time performance through high-quality code.

In addition, I have extensive experience in the development, enhancement, and maintenance of critical mainframe-based Telecom and banking business applications. I have collaborated effectively with Product Owners and Business Analysts to conduct thorough requirement analysis and develop innovative solutions.`,
  }

  return (
    <div className={styles.aboutContainer}>
      <div className="text-center mb-12">
        <div className={styles.profileImage}>
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
            {personalInfo.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        </div>

        <h1 className={styles.name}>{personalInfo.name}</h1>
        <h2 className={styles.title}>{personalInfo.title}</h2>

        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <span className="text-blue-600 dark:text-blue-400">📧</span>
            <a href={`mailto:${personalInfo.email}`} className={styles.contactLink}>
              {personalInfo.email}
            </a>
          </div>
          <div className={styles.contactItem}>
            <span className="text-blue-600 dark:text-blue-400">📱</span>
            <a href={`tel:${personalInfo.phone}`} className={styles.contactLink}>
              {personalInfo.phone}
            </a>
          </div>
          <div className={styles.contactItem}>
            <span className="text-blue-600 dark:text-blue-400">💼</span>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>

      <div className={styles.summarySection}>
        <h3 className={styles.sectionTitle}>Professional Summary</h3>
        <div className={styles.summaryText}>
          {personalInfo.summary.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
