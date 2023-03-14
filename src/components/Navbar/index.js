import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

function Navbar() {
  return(
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand js-scroll-trigger" to="/">Vanessa D'Antonio</Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link js-scroll-trigger" >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="about" className="nav-link js-scroll-trigger" >About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="skills" className="nav-link js-scroll-trigger" >Skills</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="projects" className="nav-link js-scroll-trigger" >Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="contact" className="nav-link js-scroll-trigger" >Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;