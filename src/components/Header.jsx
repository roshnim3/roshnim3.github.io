import React from 'react';
import './Header.css'; 

function Header() {
    return (
      <header className="header">
        <nav className="navbar">
          <a href="#home" className="logo">Roshni Mathew</a>
          <ul className="nav-links">
            <li><a href="#home" className="sections">Home</a></li>
            <li><a href="#projects" className="sections">Projects</a></li>
            <li><a href="#experience" className="sections">Experience</a></li>
            <li><a href="#research" className="sections">Research</a></li>
            <li><a href="/assets/roshnimathew-resume.pdf" className="resume-btn">Resume</a></li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;
