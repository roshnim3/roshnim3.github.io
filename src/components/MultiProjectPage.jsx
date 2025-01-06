import React from 'react';
import { Link } from 'react-router-dom';
import './MultiProjectPage.css'; // Reuse the same CSS for consistent styling
import Header from './Header';
import ContactSection from './ContactSection';

function MultiProjectPage({ title, projects }) {
  return (
    <section className="multi-projects-section">
      <div className="header-background">
        <Header />
      </div>
      <h2 className="multi-projects-title">{title}</h2>
      <div className="multi-projects-grid">
        {projects.map((project, index) => (
          <Link 
            to={project.link} 
            key={index} 
            style={{ textDecoration: 'none' }} // Prevent link underline
          >
            <div
              className="multi-project-card"
              style={{ backgroundColor: project.color }}
            >
              <div className="multi-project-image-container">
                <img
                  src={project.image}
                  alt={project.name}
                  className="multi-project-image"
                />
                <div className="multi-project-hover-overlay">
                  <div className="multi-project-name">{project.name}</div>
                  <div className="multi-project-description">
                    {project.description}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <ContactSection />
    </section>
  );
}

export default MultiProjectPage;
