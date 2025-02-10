// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import logoFacebook from "../assets/facebook.png";
import logoGmail from "../assets/gmail.png";
import logoInstagram from "../assets/instagram.png";

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
              <a href="/cursos">Secciones</a>
            </li>
            <li>
              <a href="/nosotros">Nosotros</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
        </nav>
        <div className="footer-social">
          <a
            href="https://www.facebook.com/share/18TAJ61V3x/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoFacebook} alt="Logo de Facebook" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=institutodarwinpsicologia@gmail.com&su=Consulta%20Academia%20Darwin&body="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoGmail} alt="Logo de Gmail" />
          </a>
          <a
            href="https://www.instagram.com/darwinformacionenlinea?utm_source=qr&igsh=ejhxY2E0cHpxc2Yx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoInstagram} alt="Logo de Instagram" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2025 Darwin Academy. Todos los derechos reservados.</p>
        <p>
          🧑‍💻<b>MCC desarrollos</b>🧑‍💻
        </p>
      </div>
    </footer>
  );
};

export default Footer;
