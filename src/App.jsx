// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <h1>Bienvenido a PsicoCursos</h1>
        <p>Contenido de ejemplo...</p>
        <div style={{ height: "200vh" }}></div>
      </main>
    </div>
  );
}

export default App;
