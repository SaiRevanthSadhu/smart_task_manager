"use client"

import type React from "react"

import { useState } from "react"
import styles from "./Contact.module.css"

interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  linkedin: string
}

interface ContactProps {
  personalInfo: PersonalInfo
}

export default function Contact({ personalInfo }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Contact Me</h2>

      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h3>Get In Touch</h3>
          <div className={styles.contactItem}>
            <span className={styles.icon}>📧</span>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.icon}>📱</span>
            <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.icon}>💼</span>
            <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
              {personalInfo.linkedin}
            </a>
          </div>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h3>Send a Message</h3>
          {isSubmitted && (
            <div className={styles.successMessage}>Thank you for your message! I'll get back to you soon.</div>
          )}
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
