import React from 'react';
import './ContactSection.css';
import { FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';

function ContactSection() {
  return (
    <section className="contact-section">
      <p className="contact-description">Feel free to reach out to me via any of the platforms below:</p>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/roshnimathew04/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaLinkedin className="contact-icon" />
          <span>LinkedIn</span>
        </a>
        <a href="mailto:roshnimathew04@gmail.com" className="contact-link">
          <FaEnvelope className="contact-icon" />
          <span>Email</span>
        </a>
        <a href="/assets/roshnimathew-resume.pdf" className="contact-link">
          <FaFilePdf className="contact-icon" />
          <span>Resume</span>
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
