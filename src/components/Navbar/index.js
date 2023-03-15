import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faUniversity, faSuitcase, faEnvelope, faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./style.scss";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return(
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>Vanessa D'Antonio</Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}><FontAwesomeIcon icon={faHome} color="4d4d4e" /></NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}><FontAwesomeIcon icon={faUser} color="4d4d4e" /></NavLink>
        <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills" onClick={() => setShowNav(false)}><FontAwesomeIcon icon={faUniversity} color="4d4d4e" /></NavLink>
        <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects" onClick={() => setShowNav(false)}><FontAwesomeIcon icon={faSuitcase} color="4d4d4e" /></NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}><FontAwesomeIcon icon={faEnvelope} color="4d4d4e" /></NavLink>
        <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color="#ffd700" size="3x" className='close-icon' />
      </nav>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/vanessadantonio/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon"/></a>
        </li>
        <li>
          <a href="https://github.com/VanessaDantonio" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon"/></a>
        </li>
        <li>
          <a href="@VYumi" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} color="#4d4d4e" className="anchor-icon"/></a>
        </li>
        <li>
          <a href="https://twitter.com/VYNDantonio" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faTwitter} color="#4d4d4e" className="anchor-icon"/></a>
        </li>
      </ul>
      <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color="#ffd700" size="3x" className='hamburger-icon' />
    </div>
  );
}

export default Navbar;