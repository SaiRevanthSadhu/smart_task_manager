import styles from "./Skills.module.css"

interface SkillCategory {
  category: string
  skills: string[]
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      category: "Languages & Libraries",
      skills: ["JavaScript", "React JS", "jQuery", "HTML", "CSS", "DOM", "COBOL", "JCL", "VSAM", "CICS", "Easytrieve"],
    },
    {
      category: "Database",
      skills: ["SQL", "PostgreSQL", "DB2"],
    },
    {
      category: "Frameworks",
      skills: ["Bootstrap", "Node.js"],
    },
    {
      category: "Operating Systems",
      skills: ["Linux", "UNIX", "Windows"],
    },
    {
      category: "IDE",
      skills: ["Visual Studio", "Eclipse"],
    },
    {
      category: "Versioning Tools",
      skills: ["GitHub", "Bitbucket", "Git", "Change man", "Endevor"],
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
    },
    {
      category: "Certifications",
      skills: ["ITIL® V4.0 – IT Service Management", "Agile certified Scrum master"],
    },
  ]

  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>Technical Skills</h2>
      <div className={styles.skillsGrid}>
        {skillCategories.map((category, index) => (
          <div key={index} className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>{category.category}</h3>
            <div className={styles.skillsList}>
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
