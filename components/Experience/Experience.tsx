import styles from "./Experience.module.css"

interface Job {
  company: string
  position: string
  duration: string
  location: string
  project?: string
  client?: string
  responsibilities: string[]
}

export default function Experience() {
  const experiences: Job[] = [
    {
      company: "Precisely",
      position: "Senior Software Developer",
      duration: "Aug 2021 - Apr 2024 (Bangalore, India) | May 2024 – Till Date (Canada)",
      location: "Canada (On-site)",
      project: "Ironstream (Metron Product)",
      responsibilities: [
        "Developed and maintained web applications using various JavaScript frameworks including React, Node.js, and jQuery",
        "Collaborated with developers and designers to create responsive user-friendly interfaces",
        "Integrated user interfaces with back-end databases and services",
        "Enhanced usability and performance of web applications",
        "Debugged, optimized and troubleshooted code, ensuring compliance with coding and design standards",
        "Wrote and maintained technical documentation",
        "Collaborated with project managers in developing work plans",
        "Created database designs and ensured database code quality",
        "Analyzed and resolved application-related issues with proven track record of delivering projects on time",
        "Followed Agile and Scrum practices in developing and delivering applications in sprints",
      ],
    },
    {
      company: "CGI",
      position: "Software Engineer",
      duration: "Dec 2019 – Aug 2021",
      location: "Hyderabad, India",
      project: "Compressed NPA Modernization",
      client: "Bell – Canada (Telecom)",
      responsibilities: [
        "Worked on ARICS (Accounts Receivable Inquiry Collection System) backend application",
        "Performed developer role for ARICS application handling event processing, generating notices, pricing, rating, and payment processing",
        "Involved from design phase and handled application single-handedly throughout construction, SIT, SFT, and deployment",
        "Managed application comprising 85 impacted programs and 160 impacted JCL's",
        "Coded 9 programs from scratch",
        "Conducted peer reviews for components & documents of junior teammates",
        "Analyzed defects found during testing",
        "Prepared KT plans & conducted knowledge transfer sessions",
      ],
    },
    {
      company: "NTT DATA",
      position: "Software Development Senior Associate",
      duration: "Nov 2017 – Nov 2019",
      location: "Noida, India",
      project: "Bank Of Ireland",
      client: "BOI (UK – Banking)",
      responsibilities: [
        "Worked on MPMCIS backend system for various branch desk applications",
        "Performed analyst role for team involved in generating accounts and tracking customer data",
        "Responsible for MPMCIS Application team on production environment",
        "Handled coding & unit testing for projects & maintenance requests",
        "Managed production tickets and incidents within SLA",
        "Provided night support for on-call batch operations",
      ],
    },
  ]

  return (
    <section className={styles.experience}>
      <h2 className={styles.title}>Work Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((job, index) => (
          <div key={index} className={styles.jobCard}>
            <div className={styles.jobHeader}>
              <h3 className={styles.company}>{job.company}</h3>
              <span className={styles.duration}>{job.duration}</span>
            </div>
            <h4 className={styles.position}>{job.position}</h4>
            <p className={styles.location}>{job.location}</p>
            {job.project && (
              <p className={styles.project}>
                <strong>Project:</strong> {job.project}
              </p>
            )}
            {job.client && (
              <p className={styles.client}>
                <strong>Client:</strong> {job.client}
              </p>
            )}
            <ul className={styles.responsibilities}>
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
