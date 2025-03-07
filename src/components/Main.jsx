// src/components/Main.jsx
import React, { useState, useEffect } from "react";
import "./Main.css";
import curso1 from "../assets/curso1.jpeg";
import curso2 from "../assets/curso2.jpeg";
import curso3 from "../assets/curso3.jpeg";
import curso4 from "../assets/curso4.jpeg";
import curso5 from "../assets/curso5.jpg";
import curso6 from "../assets/curso6.webp";
import logoGmail from "../assets/gmail.png";

const Main = () => {
  // Detecta si es dispositivo móvil una sola vez al montar el componente.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || window.opera;
    const mobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
    setIsMobile(mobile);
  }, []);
  const cursos = [
    {
      imagen: curso1,
      id: 1,
      titulo: "Psicología",
      descripcion:
        "En esta sección encontrarás conocimientos teóricos y principios fundamentales de las ciencias de la conducta y la cognición. Esto te permitirá desempeñar tu práctica de manera óptima, tomar decisiones fundamentadas y desplegar acciones en tu clínica diaria, basadas en la solidez de planes de acción mentados.",
      // duración: "4 clases en 2 meses.",
    },
    {
      imagen: curso2,
      id: 2,
      titulo: "Intersección entre Educación y Salud.",
      descripcion:
        "En esta sección podrás acceder a las intersecciones ineludibles e imprescindibles que se presentan entre el ámbito de la educación y la psicología. Con un enfoque eminentemente práctico, pero siempre basado en un corpus teórico actualizado, podrás desempeñar tu trabajo cotidiano con estudiantes y mejorar tu proceso de enseñanza-aprendizaje.",
      // duración: "6 clases en 2 meses.",
    },
    {
      imagen: curso4,
      id: 4,
      titulo: "Neurodesarrollo.",
      descripcion:
        "En esta sección podrás acceder a las últimas teorías de las ciencias de la cognición y el comportamiento, que te permitirán optimizar tu práctica en el área de la neurocognición y desempeñar una praxis clínica y educativa mucho más precisa, eficaz y eficiente con tus pacientes, alumnos y sus familias.",
      // duración: "4 clases en 2 meses.",
    },
    {
      imagen: curso3,
      id: 3,
      titulo: "Salud y Medicina Conductual.",
      descripcion:
        "En esta sección podrás acceder a conocimiento teórico específico y preciso para llevar a cabo tu práctica clínica en relación con las diferentes patologías existentes, teniendo en cuenta a la vez los criterios actuales y pretéritos de salud y enfermedad. Los cursos están enfocados en que puedas resolver los escollos prácticos de tu trabajo cotidiano.",
      // duración: "8 clases en 2 meses.",
    },
    // {
    //   imagen: curso5,
    //   id: 5,
    //   titulo: "Psicología Clínica",
    //   descripcion: "Tratamientos de trastornos.",
    //   duración: "6 clases en 2 meses.",
    // },
    // {
    //   imagen: curso6,
    //   id: 6,
    //   titulo: "Psicología Educativa",
    //   descripcion: "Aplicación en entornos educativos.",
    //   duración: "8 clases en 2 meses.",
    // },
  ];

  return (
    <main className="main-container">
      <h2 className="main-title">Nuestras Secciones</h2>
      <div className="cursos-grid">
        {cursos.map((curso) => {
          // Crea el mensaje con saltos de línea para pre-cargar el cuerpo del correo
          const mensaje = encodeURIComponent(
            `Hola, estoy interesado en la sección: ${curso.titulo}. ¿Podrían brindarme más información?\r\n\r\n`
          );
          // Enlace para Gmail en escritorio
          const enlaceGmailDesktop = `https://mail.google.com/mail/?view=cm&fs=1&to=institutodarwinpsicologia@gmail.com&su=Consulta%20Academia%20Darwin&body=${mensaje}`;
          // Enlace para móviles usando mailto (más universal)
          const enlaceMailto = `mailto:institutodarwinpsicologia@gmail.com?subject=Consulta%20Academia%20Darwin&body=${mensaje}`;

          // Usa mailto en móviles y Gmail en desktop
          const enlace = isMobile ? enlaceMailto : enlaceGmailDesktop;

          return (
            <div key={curso.id} className="curso-card">
              <img
                src={curso.imagen}
                alt={curso.titulo}
                className="curso-imagen"
              />
              <h3>{curso.titulo}</h3>
              <p>{curso.descripcion}</p>
              {/* <p>Duración: {curso.duración}</p> */}
              <button className="btn-seleccionar">
                <a
                  href={enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-seleccionar"
                >
                  <img src={logoGmail}></img>Más Info!
                </a>
              </button>
            </div>
          );
        })}
      </div>
      <footer className="footer-header">
        <h2 className="footer-title">
          "¡Muy pronto agregaremos más secciones!"
        </h2>
      </footer>
    </main>
  );
};

export default Main;
