import React from 'react';
import './ExperienceSection.css';

function ExperienceSection() {
  const experiences = [
    {
      title: 'Director of Advancements',
      company: 'Engineering Open House',
      duration: 'Aug 2022 - Present',
      description: 'Raised $19k for the largest science fair in the Midwest, secured partnerships with 5 companies, and organized 3 major events, including a professor panel, alumni panel, and a research fair, fostering connections between alumni and students.',
      logo: '../src/assets/experiences/engineering-council.jpeg',
    },
    {
      title: 'ENG 100 ELA (Engineering Learning Assistant)',
      company: 'Grainger College of Engineering',
      duration: 'Aug 2024 - December 2024',
      description: 'Taught a twice-weekly class of 20 ECE students, prepared content on navigating college as a freshman, graded assignments, and provided personalized guidance through 1:1 mentor meetings.',
      logo: '../src/assets/experiences/grainger.jpeg',
    },
    {
      title: 'Business Analyst',
      company: 'McKinsey & Company',
      duration: 'May 2024 - July 2024',
      description: 'Performed sentiment analysis on 10+ products using NLP and Excel, evaluating performance from 10,000+ reviews. Extracted insights and trends to enhance product quality and customer satisfaction.',
      logo: '../src/assets/experiences/mckinsey.jpeg',
    },
    {
      title: 'Project Excellence Partner, Project Manager',
      company: 'OTCR Consulting',
      duration: 'October 2022 - December 2024',
      description: 'Created a product strategy plan for 10+ products to expand a conversational AI companys portfolio. Led a team of 8-10 consultants to transform insights from 80 past projects into an accessible, user-friendly website.',
      logo: '../src/assets/experiences/otcr.jpeg',
    },
  ];

  return (
    <section className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div className="timeline-item" key={index}>
            {index % 2 === 0 ? (
              <>
                <div className="timeline-content left-content">
                  <h4 className="company">{experience.company}</h4>
                  <h3 className="title">{experience.title}</h3>
                  <p className="duration">{experience.duration}</p>
                  <p className="description">{experience.description}</p>
                </div>
                <div className="logo-container right-logo">
                  <img src={experience.logo} alt={`${experience.company} logo`} className="company-logo" />
                </div>
              </>
            ) : (
              <>
                <div className="logo-container left-logo">
                  <img src={experience.logo} alt={`${experience.company} logo`} className="company-logo" />
                </div>
                <div className="timeline-content right-content">
                  <h4 className="company">{experience.company}</h4>
                  <h3 className="title">{experience.title}</h3>
                  <p className="duration">{experience.duration}</p>
                  <p className="description">{experience.description}</p>
                </div>
              </>
            )}
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
