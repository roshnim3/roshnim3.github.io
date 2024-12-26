import React from 'react';
import './ResearchSection.css';

function ResearchSection() {
  const researchProjects = [
    {
      title: 'Multimodal Wearables for Stress and Anxiety Detection using ML',
      description: 'This study leverages wearable devices and physiological sensors to train machine learning models for detecting anxiety levels. By combining lab-controlled and real-world data, the research aims to create reliable tools for monitoring mental health and understanding stress mechanisms in students.',
      image: '../src/assets/research/WEAR.png',
    },
    {
      title: 'Robotic Arm Training Simulator for Medical Education',
      description: 'Developed an application to control a robotic arm training simulator designed to teach medical trainees how to assess abnormal muscle behaviors like rigidity and spasticity. Implemented a serial Bluetooth communication protocol using Arduino, HC-05 Bluetooth module, and MATLAB to enable seamless wireless connectivity between the app and arm.',
      image: '../src/assets/research/rigidity-arm.png',
    },
  ];

  return (
    <section className="research-section">
      <h2 className="research-title">Research</h2>
      <div className="research-grid">
        {researchProjects.map((project, index) => (
          <div className="research-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="research-image"
            />
            <div className="research-content">
              <h3 className="research-project-title">{project.title}</h3>
              <p className="research-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ResearchSection;
