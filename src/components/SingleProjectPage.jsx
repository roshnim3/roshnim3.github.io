import React from 'react';
import './SingleProjectPage.css';
import Header from './Header';
import HeroSection from './HeroSection';

function SingleProjectPage({ title, description, media, resources }) {
  return (
    <section className="project-page">
      <div className="header-background">
        <Header />
      </div>
      <div className="project-container">
        {/* Left Section: Title and Description */}
        <div className="project-details">
          <h1 className="project-title">{title}</h1>
          <div
            className="project-description"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>

        {/* Right Section: Media and Resources */}
        <div className="project-media">
          {media.type === 'image' && (
            <img src={media.src} alt={title} className="project-image" />
          )}
          {media.type === 'video' && (
            <video controls className="project-video">
              <source src={media.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {resources && resources.length > 0 && (
          <div className="additional-resources">
            <h2>Additional Resources</h2>
            <ul>
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>)}
        </div>
      </div>
    </section>
  );
}

export default SingleProjectPage;
