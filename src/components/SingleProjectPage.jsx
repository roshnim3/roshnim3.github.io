import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import React from 'react';
import './SingleProjectPage.css';
import Header from './Header';
import ContactSection from './ContactSection';
import WebGLCanvas from './WebGLCanvas';
import { useEffect } from 'react';

function SingleProjectPage({ title, description, media, resources }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
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
          {/* Single Image */}
          {media.type === 'image' && (
            <img src={media.src} alt={title} className="project-image" />
          )}
          {/* Single Video */}
          {media.type === 'video' && (
            <video controls className="project-video">
              <source src={media.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {/* Gallery of Images/Videos */}
          {media.type === 'gallery' && media.items && (
            <Slider {...settings} className="project-gallery">
              {media.items.map((item, index) => (
                <div key={index} className="gallery-item">
                  {item.type === 'image' && (
                    <img
                      src={item.src}
                      alt={`Gallery item ${index + 1}`}
                      className="gallery-image"
                    />
                  )}
                  {item.type === 'video' && (
                    <video controls className="gallery-video">
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              ))}
            </Slider>
          )}
          {/* WebGL Canvas */}
          {media.type === 'webgl' && (
            <div className="webgl-container">
              <WebGLCanvas
                width={media.width || 300} // Default width
                height={media.height || 300} // Default height
                driverScript={media.driverScript} // Path to driver.js
                mathScript={media.mathScript} // Path to math.js
              />
            </div>
          )}
          {/* Additional Resources */}
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
            </div>
          )}
        </div>
      </div>
      <ContactSection />
    </section>
  );
}

export default SingleProjectPage;
