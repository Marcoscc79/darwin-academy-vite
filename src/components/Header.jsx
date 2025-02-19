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
          Hola, bienvenidos/as. Somos Lourdes y Matías, sentite como en tu casa.
          Escribínos a nuestro mail o por cualquiera de nuestras redes sociales.
          Vení, mirá las capacitaciones del futuro. <br />
          Explora nuestros cursos virtuales y potencia tu conocimiento y
          práctica. <br />
          <b className="slogan">Darwin... ¡vas a crecer!.</b>
        </p>
        <a href="/cursos" className="btn-cta">
          Ver Secciones
        </a>
      </div>
    </header>
  );
};

export default Header;
