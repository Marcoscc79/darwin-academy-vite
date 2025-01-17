// src/components/Main.jsx
import React from "react";
import "./Main.css";
import curso1 from "../assets/curso1.png";
import curso2 from "../assets/curso2.png";
import curso3 from "../assets/curso3.png";
import curso4 from "../assets/curso4.png";
import curso5 from "../assets/curso5.jpg";
import curso6 from "../assets/curso6.webp";

const Main = () => {
  const cursos = [
    {
      imagen: curso1,
      id: 1,
      titulo: "Psicología",
      descripcion:
        "En este curso vas a encontrar conocimientos teóricos y principios fundamentales en las ciencias de la conducta y cognición para poder desempeñar tu práctica de manera optima ,  poder tomar decisiones fundamentadas y desplegar acciones en tu clínica diaria basándote en la solidez de planes de acciones mentados.",
      duración: "4 clases en 2 meses.",
      numeroWhatsapp: "5493816785691",
    },
    {
      imagen: curso2,
      id: 2,
      titulo: "Entrecruzamiento entre Educación y Salud.",
      descripcion:
        "En este curso vas a poder tener acceso a la intersecciones ineludibles e imprescindibles que se presentan entre el ámbito de la eduación  y la psicología. Con un enfoque eminentemente práctico pero siempre basado en un corpus teórico actualizado vas a poder desempeñar tu trabajo con estudiantes y mejorar tu proceso de enseñanza-aprendizaje.",
      duración: "6 clases en 2 meses.",
      numeroWhatsapp: "5493816785691",
    },
    {
      imagen: curso3,
      id: 3,
      titulo: "Salud y Medicina Conductual.",
      descripcion:
        "En este curso vas a poder acceder a conocimiento teórico especifico y preciso para poder llevar a cabo tu práctica clínica en relación a las diferentes patologías existentes teniendo en cuenta a la vez los criterios actuales y pretéritos de salud y enfermedad. Los cursos están enfocados a que puedas resolver los escollos prácticos de tu trabajo cotidiano.",
      duración: "8 clases en 2 meses.",
      numeroWhatsapp: "5493816785691",
    },
    {
      imagen: curso4,
      id: 4,
      titulo: "Neurodesarrollo.",
      descripcion:
        "En este curso vas a poder tener acceso a las últimas teorías de las ciencias de la cognición y el comportamiento que te van a permitir optimizar tu práctica en el área de la neurocognición y poder desempeñar una praxis clínica y educativa mucho más precisa, eficaz y eficiente con tus pacientes y sus familias.",
      duración: "4 clases en 2 meses.",
      numeroWhatsapp: "5493816785691",
    },
    {
      imagen: curso5,
      id: 5,
      titulo: "Psicología Clínica",
      descripcion: "Tratamientos de trastornos.",
      duración: "6 clases en 2 meses.",
      numeroWhatsapp: "5493816785691",
    },
    {
      imagen: curso6,
      id: 6,
      titulo: "Psicología Educativa",
      descripcion: "Aplicación en entornos educativos.",
      duración: "8 clases en 2 meses.",
      numeroWhatsapp: "5493816785691",
    },
  ];
  
  return (
    <main className="main-container">
      <h2 className="main-title">Nuestros Cursos</h2>
      <div className="cursos-grid">
        {cursos.map((curso) => {
          // Define las constantes dentro de la función de mapeo
        const mensaje = encodeURIComponent(`Hola, estoy interesado en el ${curso.titulo}. ¿Podrían brindarme más información?`);
        const enlaceWhatsApp = `https://wa.me/${curso.numeroWhatsapp}?text=${mensaje}`;
        return (
          <div key={curso.id} className="curso-card">
            <img src={curso.imagen} alt={curso.titulo} className="curso-imagen" />
            <h3>{curso.titulo}</h3>
            <p>{curso.descripcion}</p>
            <p>Duración: {curso.duración}</p>
            <button className="btn-seleccionar"><a 
            href={enlaceWhatsApp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-seleccionar"
          >Clic para Más Info</a></button>
          </div>
        )
        })}
      </div>
    </main>
  );
};

export default Main;
