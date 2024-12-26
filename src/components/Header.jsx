import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

function Header() {
    return (
      <header className="header">
        <nav className="navbar">
          <Link to="/#home" className="logo">Roshni Mathew</Link>
          <ul className="nav-links">
            <li><Link to="/#home" className="sections">Home</Link></li>
            <li><Link to="/#projects" className="sections">Projects</Link></li>
            <li><Link to="/#experience" className="sections">Experience</Link></li>
            <li><Link to="/#research" className="sections">Research</Link></li>
            <li><a href="/assets/roshnimathew-resume.pdf" className="resume-btn">Resume</a></li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;
