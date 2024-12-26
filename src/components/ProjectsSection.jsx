import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './ProjectsSection.css';

function ProjectsSection() {
  const projects = [
    { name: 'FPGA', image: '/assets/projects/FPGA.png', color: '#212F56', link: '/fpga-project' }, 
    { name: 'Computer Graphics', image: '/assets/projects/Graphics.png', color: '#C4899F', link: '/graphics-project' }, 
    { name: 'Operating Systems', image: '/assets/projects/OS.png', color: '#80B7BD', link: '/os-project' }, 
    { name: 'Circuitry', image: '/assets/projects/Circuitry.png', color: '#994F6C', link: '/circuitry-project' }, 
    { name: 'Software', image: '/assets/projects/Software.png', color: '#48718B', link: '/software-project' }, 
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Link 
            to={project.link} 
            key={index} 
            style={{ textDecoration: 'none' }} // Prevent link underline
          >
            <div
              className="project-card"
              style={{ backgroundColor: project.color }}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
                <div className="project-hover-overlay">
                  <div className="project-name">{project.name}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
