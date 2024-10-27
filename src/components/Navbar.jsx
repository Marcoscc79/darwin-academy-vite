// src/components/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">DarwinAcademy</a>
      </div>
      <div className={`navbar-links ${ menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="/">Inicio </a>
          </li>
          <li>
            <a href="/cursos">Cursos</a>
          </li>
          <li>
            <a href="/sobre-nosotros">Sobre Nosotros</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
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
