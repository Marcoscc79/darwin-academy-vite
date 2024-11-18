// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoNavbar from "../assets/logo2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img
            src={logoNavbar}
            alt="Darwin Academy Logo"
            className="logo"
          />
          DarwinAcademy
        </a>
      </div>
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/cursos">Cursos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;

