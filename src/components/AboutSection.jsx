import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './AboutSection.css';

function AboutSection() {
  const settings = {
    dots: true, // Enable navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of images visible at a time
    slidesToScroll: 1, // Number of images to scroll at a time
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable left/right arrows
  };

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Image Carousel */}
        <div className="about-carousel">
          <Slider {...settings}>
          <div>
              <img src="/assets/aboutme/me.jpg" alt="Me" className="carousel-image" />
            </div>
            <div>
              <img src="/assets/aboutme/hdcl-group.jpg" alt="HDCL Research Group" className="carousel-image" />
            </div>
            <div>
              <img src="/assets/aboutme/eoh-2023.JPEG" alt="EOH Committee 2023" className="carousel-image" />
            </div>
            <div>
              <img src="/assets/aboutme/OTCR-women.JPG" alt="OTCR Women in the Firm" className="carousel-image" />
            </div>
            <div>
              <img src="/assets/aboutme/OTCR.jpg" alt="OTCR" className="carousel-image" />
            </div>
            <div>
              <img src="/assets/aboutme/research-presentation.jpg" alt="OTCR" className="carousel-image" />
            </div>
          </Slider>
        </div>

        {/* Bio Section */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
          Hi, I’m an aspiring engineer with a keen interest in digital design and hardware technologies like FPGAs. 
          I’ve explored neural engineering and signal processing through coursework and hands-on projects, and I’m passionate about 
          applying technology to solve meaningful challenges. When I’m not diving into circuits or code, you’ll find me crocheting or 
          learning the guitar. Feel free to explore my work and connect with me!
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
