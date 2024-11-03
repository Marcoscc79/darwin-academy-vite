// src/components/Main.jsx
import React from "react";
import "./Main.css";

const Main = () => {
  const cursos = [
    {
      id: 1,
      titulo: "Psicología Cognitiva",
      descripcion: "Explora los procesos mentales.",
    },
    { id: 2, titulo: "Neurociencia", descripcion: "Aprende sobre el cerebro." },
    {
      id: 3,
      titulo: "Psicología del Desarrollo",
      descripcion: "Cómo los individuos crecen.",
    },
    {
      id: 4,
      titulo: "Psicología Social",
      descripcion: "Interacciones y sus influencias.",
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
