// src/components/Header.jsx
import React from "react";
import "./Header.css";
import portadaImage from "../assets/portadaImage.jpg"; // Asegúrate de mover la imagen aquí

const Header = () => {
  return (
    <header className="hero">
      <img src={portadaImage} alt="Portada Psicología y Tecnología" />
      <div className="hero-text">
        <h1>Aprende Psicología con Tecnología</h1>
        <p>
          Explora nuestros cursos diseñados para potenciar tu conocimiento
          mediante herramientas digitales.
        </p>
        <a href="/cursos" className="btn-cta">
          Ver Cursos
        </a>
      </div>
    </header>
  );
};

export default Header;
