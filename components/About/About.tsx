import styles from "./About.module.css"

export default function About() {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>Professional Summary</h2>
      <div className={styles.content}>
        <p>
          Dedicated and skilled Software Developer with 8+ years of industry experience in building robust Web Services
          and Web Applications using JavaScript, HTML, CSS, React JS, and Node JS. Proven track record in developing
          user-friendly, scalable, and secure applications that deliver real-time performance through high-quality code.
        </p>
        <p>
          In addition, I have extensive experience in the development, enhancement, and maintenance of critical
          mainframe-based Telecom and banking business applications. I have collaborated effectively with Product Owners
          and Business Analysts to conduct thorough requirement analysis and develop innovative solutions.
        </p>
        <p>
          I am highly adaptable and thrive in dynamic environments, continuously seeking opportunities to learn new
          technologies and expand my expertise. My commitment to organizational goals and my passion for delivering
          exceptional results drive my professional endeavours.
        </p>
      </div>

      <div className={styles.achievements}>
        <h3>Professional Achievements</h3>
        <ul>
          <li>Awarded by Precisely as 'Stellar Performer of the month', 'Employee of the month'</li>
          <li>Received Client Appreciation certificate for outstanding performance in CGI</li>
          <li>Received Bronze award for 2 quarters consecutively for best performance in CGI</li>
          <li>
            Received an appreciation award for successfully resolving numerous pending items within two months of
            joining a new team at NTT DATA
          </li>
        </ul>
      </div>
    </section>
  )
}
