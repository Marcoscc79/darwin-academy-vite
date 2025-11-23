// src/components/Header.jsx
import "./Header.css";
import portadaImage from "../assets/PortadawebCapOL.png"; // Asegúrate de mover la imagen aquí

const Header = () => {
  return (
    <header className="hero">
      <img src={portadaImage} alt="Portada Psicología y Tecnología" />
      <div className="hero-text">
        <h1>Escuela Virtual de Informática y Programación</h1>
        <p>
          Bienvenidos a Escuela CapOL 🙋‍♂️ Nuestro objetivo es brindarte la mejor enseñanza y asesoramiento sobre temas tecnológicos actuales 👩‍💻👨‍💻 <br />
          <b className="slogan">CapOL... "Saber digital para el futuro".</b>
        </p>
        <a href="/cursos" className="btn-cta">
          Ver Cursos
        </a>
      </div>
    </header>
  );
};

export default Header;
