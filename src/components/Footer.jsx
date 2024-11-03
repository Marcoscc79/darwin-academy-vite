// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Darwin Academy</h2>
        </div>
        <nav className="footer-nav">
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/cursos">Cursos</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
        </nav>
        <div className="footer-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Darwin Academy. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
