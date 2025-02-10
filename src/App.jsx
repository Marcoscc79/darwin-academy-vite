// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Nosotros from "./components/Nosotros";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
            </>
          }
        />
        <Route path="/cursos" element={<Main />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default App;
