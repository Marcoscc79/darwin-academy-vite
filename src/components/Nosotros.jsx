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
        <h2 className="nosotros-title">"Nuestro compromiso, tu éxito"</h2>
      </header>

      {/* Sección de integrantes: dos columnas */}
      <section className="nosotros-integrantes">
        <figure className="integrante">
          <img
            src={fotoMatias} // Asegúrate de colocar la imagen en public/images
            alt="Foto Matías"
            className="integrante-imagen"
          />
          <figcaption className="integrante-info">
            <h3>Rafael Matías Valdéz</h3>
            <p>Experto en psicología clínica y desarrollo personal.</p>
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
        <figure className="integrante">
          <img
            src={fotoLourdes}
            alt="Foto Lourdes"
            className="integrante-imagen"
          />
          <figcaption className="integrante-info">
            <h3>Lourdes Mariel Aredes</h3>
            <p>Especialista en terapias cognitivo-conductuales y coaching.</p>
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
      </section>

      {/* Sección de redes sociales */}
      <section className="nosotros-redes"></section>
    </div>
  );
};

export default Nosotros;
