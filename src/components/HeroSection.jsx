import React from 'react';
import './HeroSection.css'; // Styling will be handled here

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        
        <img
          src="../src/assets/profile.jpg" /* Replace with your profile image path */
          alt="Profile"
          className="profile-image"
        />
        <h1 className="hero-title">Roshni Mathew</h1>
        {/* <p className="hero-subtitle">Computer Engineer, Musician, Creator</p> */}
      </div>
    </section>
  );
}

export default HeroSection;
