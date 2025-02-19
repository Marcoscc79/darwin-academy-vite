import React from "react";
import "./Nosotros.css"; // Archivo de estilos (opcional)
import logoFacebook from "../assets/facebook.png";
import logoGmail from "../assets/gmail.png";
import logoInstagram from "../assets/instagram.png";
import fotoMatias from "../assets/Matías.jpeg";
import fotoLourdes from "../assets/Lourdes.jpeg";

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      {/* Encabezado con el lema */}
      <header className="nosotros-header">
        <h2 className="nosotros-title">"Darwin... ¡Vas a crecer!"</h2>
      </header>

      {/* Sección de integrantes: dos columnas */}
      <section className="nosotros-integrantes">
        <figure className="integrante">
          <img
            src={fotoLourdes}
            alt="Foto Lourdes"
            className="integrante-imagen"
          />
          <figcaption className="integrante-info">
            <h3>Lourdes Mariel Aredes</h3>
            <p>
              Profesora en Historia por la Universidad Nacional de Catamarca.
              Docente en nivel medio. Integrante de equipo de investigación de
              Facultad de Humanidades, Universidad Nacional de Catamarca (UNCa)
            </p>
          </figcaption>
          <div className="redes-sociales">
            <a
              href="https://www.facebook.com/share/18TAJ61V3x/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logoFacebook} alt="Logo de Facebook" />
            </a>
            <a
              href="https://www.instagram.com/lourdesmaredes?igsh=MXQxZHdiMnFqajhmbw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logoInstagram} alt="Logo de Instagram" />
            </a>
          </div>
        </figure>
        <figure className="integrante">
          <img
            src={fotoMatias} // Asegúrate de colocar la imagen en public/images
            alt="Foto Matías"
            className="integrante-imagen"
          />
          <figcaption className="integrante-info">
            <h3>Rafael Matías Valdéz</h3>
            <p>
              Psicólogo por la Universidad Nacional de Tucumán (UNT).
              Especialista en Terapia Cognitivo Conductual. Doctorando en
              Psicología, mención Neurociencias, Psicología Cognitiva y Teoría
              de Sistemas por Universidad de Flores (UFLO).
            </p>
          </figcaption>
          <div className="redes-sociales">
            <a
              href="https://www.facebook.com/share/12JdEzsivAj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logoFacebook} alt="Logo de Facebook" />
            </a>
            <a
              href="https://www.instagram.com/psico.matiasvaldez?utm_source=qr&igsh=cDFoOTd4bzA3OXVn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logoInstagram} alt="Logo de Instagram" />
            </a>
          </div>
        </figure>
      </section>

      {/* Sección de redes sociales */}
      <section className="nosotros-redes"></section>
    </div>
  );
};

export default Nosotros;
