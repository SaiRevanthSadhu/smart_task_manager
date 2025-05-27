"use client"

import type React from "react"
import { useState } from "react"
import styles from "./Contact.module.css"

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const contactInfo = {
    email: "sairevanth969@gmail.com",
    phone: "+1-613-583-5841",
    linkedin: "linkedin.com/in/sai-revanth-sadhu/",
    location: "Toronto, ON, Canada",
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage("Thank you for your message! I will get back to you soon.")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsSubmitting(false)

      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000)
    }, 1000)
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      url: `https://${contactInfo.linkedin}`,
      icon: "💼",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Email",
      url: `mailto:${contactInfo.email}`,
      icon: "📧",
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      name: "Phone",
      url: `tel:${contactInfo.phone}`,
      icon: "📱",
      color: "bg-green-600 hover:bg-green-700",
    },
  ]

  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.sectionTitle}>Get In Touch</h2>

      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h3 className={styles.contactInfoTitle}>Contact Information</h3>

          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📧</span>
              <div>
                <h4 className={styles.contactLabel}>Email</h4>
                <a href={`mailto:${contactInfo.email}`} className={styles.contactLink}>
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📱</span>
              <div>
                <h4 className={styles.contactLabel}>Phone</h4>
                <a href={`tel:${contactInfo.phone}`} className={styles.contactLink}>
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>💼</span>
              <div>
                <h4 className={styles.contactLabel}>LinkedIn</h4>
                <a
                  href={`https://${contactInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  View Profile
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <div>
                <h4 className={styles.contactLabel}>Location</h4>
                <span className={styles.contactText}>{contactInfo.location}</span>
              </div>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <h4 className={styles.socialTitle}>Connect with me:</h4>
            <div className={styles.socialButtons}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.name !== "Email" && social.name !== "Phone" ? "_blank" : undefined}
                  rel={social.name !== "Email" && social.name !== "Phone" ? "noopener noreferrer" : undefined}
                  className={`${styles.socialButton} ${social.color}`}
                  aria-label={social.name}
                >
                  <span className={styles.socialIcon}>{social.icon}</span>
                  <span className={styles.socialName}>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.contactForm}>
          <h3 className={styles.formTitle}>Send me a message</h3>

          {submitMessage && <div className={styles.submitMessage}>{submitMessage}</div>}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={styles.formInput}
                placeholder="Your full name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={styles.formInput}
                placeholder="your.email@example.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.formLabel}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className={styles.formInput}
                placeholder="What is this about?"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className={styles.formTextarea}
                placeholder="Your message here..."
              />
            </div>

            <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
