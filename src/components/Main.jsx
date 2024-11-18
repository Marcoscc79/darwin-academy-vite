// src/components/Main.jsx
import React from "react";
import "./Main.css";

const Main = () => {
  const cursos = [
    {
      id: 1,
      titulo: "Psicología",
      descripcion:
        "En este curso vas a encontrar conocimientos teóricos y principios fundamentales en las ciencias de la conducta y cognición para poder desempeñar tu práctica de manera optima ,  poder tomar decisiones fundamentadas y desplegar acciones en tu clínica diaria basándote en la solidez de planes de acciones mentados.",
    },
    {
      id: 2,
      titulo: "Entrecruzamiento entre Educación y Salud.",
      descripcion:
        "En este curso vas a poder tener acceso a la intersecciones ineludibles e imprescindibles que se presentan entre el ámbito de la eduación  y la psicología. Con un enfoque eminentemente práctico pero siempre basado en un corpus teórico actualizado vas a poder desempeñar tu trabajo con estudiantes y mejorar tu proceso de enseñanza-aprendizaje.",
    },
    {
      id: 3,
      titulo: "Salud y Medicina Conductual.",
      descripcion:
        "En este curso vas a poder acceder a conocimiento teórico especifico y preciso para poder llevar a cabo tu práctica clínica en relación a las diferentes patologías existentes teniendo en cuenta a la vez los criterios actuales y pretéritos de salud y enfermedad. Los cursos están enfocados a que puedas resolver los escollos prácticos de tu trabajo cotidiano.",
    },
    {
      id: 4,
      titulo: "Neurodesarrollo.",
      descripcion:
        "En este curso vas a poder tener acceso a las últimas teorías de las ciencias de la cognición y el comportamiento que te van a permitir optimizar tu práctica en el área de la neurocognición y poder desempeñar una praxis clínica y educativa mucho más precisa, eficaz y eficiente con tus pacientes y sus familias.",
    },
    {
      id: 5,
      titulo: "Psicología Clínica",
      descripcion: "Tratamientos de trastornos.",
    },
    {
      id: 6,
      titulo: "Psicología Educativa",
      descripcion: "Aplicación en entornos educativos.",
    },
  ];

  return (
    <main className="main-container">
      <h2 className="main-title">Nuestros Cursos</h2>
      <div className="cursos-grid">
        {cursos.map((curso) => (
          <div key={curso.id} className="curso-card">
            <h3>{curso.titulo}</h3>
            <p>{curso.descripcion}</p>
            <button className="btn-seleccionar">Seleccionar Curso</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
