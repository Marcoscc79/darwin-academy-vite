// src/components/Footer.jsx
import "./Footer.css";
import logoFacebook from "../assets/facebook.png";
import logoGmail from "../assets/gmail.png";
import logoInstagram from "../assets/instagram.png";
import logoWhatsapp from "../assets/whatsapp.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>CapOL Escuela</h2>
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
              <a href="/nosotros">Nosotros</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
        </nav>
        <div className="footer-social">
          <a
            href="https://www.facebook.com/capolescuela?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoFacebook} alt="Logo de Facebook" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=capolescuela@gmail.com&su=Consulta%20CapOL%20Escuela&body="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoGmail} alt="Logo de Gmail" />
          </a>
          <a
            href="https://www.instagram.com/capolescuela/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoInstagram} alt="Logo de Instagram" />
          </a>
          <a
            href="https://wa.me/5493834479734"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoWhatsapp} alt="Logo de Whatsapp" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2025 CapOL Escuela. Todos los derechos reservados.</p>
        <p>
          🧑‍💻<b>MCC desarrollos</b>🧑‍💻
        </p>
      </div>
    </footer>
  );
};

export default Footer;
