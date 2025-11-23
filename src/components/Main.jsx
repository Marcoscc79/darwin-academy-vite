// src/components/Main.jsx
import { useState, useEffect } from "react";
import "./Main.css";
import curso1 from "../assets/CURSOINFORMÁTICABASICA.png";
import curso2 from "../assets/CURSOINICIACIÓNALAPROGRAMACIÓN.png";
import curso3 from "../assets/CURSODATASCIENCE.png";
import curso4 from "../assets/CURSOVIDEOJUEGOS.png";
import curso5 from "../assets/CURSOMARKETING.png";
import curso6 from "../assets/CursosGrabados.png";
import logoWhatsapp from "../assets/whatsapp.png";

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
      // Reemplaza por tu formulario real de Google Forms
      formUrl: "https://forms.gle/ALnhp2kRgP9N3mhv5",
      titulo: "Informática Básica.",
      descripcion:
        "La realización de este curso te permitirá adquirir las competencias digitales necesarias para el manejo básico de la computadora en tu ámbito laboral o educativo. Aprenderás a utilizar el sistema operativo, procesadores de texto, hojas de cálculo, navegadores web y correo electrónico, entre otras herramientas esenciales.",
      duración: "14 clases en 2 meses.",
    },
    {
      imagen: curso2,
      id: 2,
      formUrl: "https://forms.gle/B9yDJtYWakEoPcr48",
      titulo: "Iniciación a la Programación.",
      descripcion:
        "La realización de este curso te permitirá adquirir las bases para poder programar en cualquier lenguaje. En un mundo tan amplio y complejo como el de la programación, es importante aprender el origen, donde inicia todo antes de empezar a codear. Aprenderás lógica de programación, algoritmos, estructuras de datos y conceptos fundamentales que te servirán para avanzar en el aprendizaje de cualquier lenguaje de programación.",
      duración: "8 clases en 1 mes.",
    },
    {
      imagen: curso4,
      id: 4,
      formUrl: "https://forms.gle/WeKmqpWv2u3f5TwD6",
      titulo: "Desarrollo de Videojuegos con C#.",
      descripcion:
        "C# es un lenguaje con una sintaxis clara y un entorno de desarrollo amigable, lo que lo hace una buena opción para principiantes. Su versatilidad permite la creación de juegos en 2D y 3D, y se integra bien con el robusto ecosistema de Microsoft .NET. Además, C# es el lenguaje principal utilizado en Unity, uno de los motores de juego más populares y accesibles, lo que facilita a los principiantes la transición del aprendizaje a la creación de juegos reales.",
      duración: "24 clases en 3 meses.",
    },
    {
      imagen: curso3,
      id: 3,
      formUrl: "https://forms.gle/skUmjx3mJTVLAcTj6",
      titulo: "Ciencia de Datos con Python.",
      descripcion:
        "Este curso te permitirá  introducirte al mundo de la programación con Python, la manipulación básica de datos, la visualización y los conceptos fundamentales de Machine Learning, de una manera divertida y accesible. Aprenderás a utilizar bibliotecas populares como Pandas, Matplotlib y Scikit-learn para analizar datos y construir modelos predictivos.",
      duración: "14 clases en 2 meses.",
    },
    {
      imagen: curso5,
      id: 5,
      formUrl: "https://forms.gle/ibGnsnukc5QJv4S59",
      titulo: "Introducción al Marketing Digital.",
      descripcion:
        "En Introducción al Marketing Digital vas a aprender a usar las herramientas que hoy mueven negocios, marcas y oportunidades reales. No necesitas experiencia previa. Vas a aprender desde cero, paso a paso, todo lo que necesitas saber para comenzar a trabajar en marketing digital o potenciar tu negocio.",
      duración: "24 clases en 3 meses.",
    },
    {
      imagen: curso6,
      id: 6,
      formUrl: "https://forms.gle/BAkdnkzagoJNbypbA",
      titulo: "Cursos Grabados en CapOL",
      descripcion:
        "En esta sección encotrarás los cursos que ya se dictaron, pudiendo alquirir el acceso a las grabaciones y materiales. Estos cursos son ideales para quienes desean aprender a su propio ritmo y en sus propios horarios. Al adquirir estos cursos grabados, obtendrás acceso ilimitado a las lecciones en video y a los materiales complementarios, permitiéndote revisar el contenido tantas veces como desees.",
      duración: "La que necesites",
    },
  ];

  return (
    <main className="main-container">
      <h2 className="main-title">Nuestros Cursos</h2>
      <div className="cursos-grid">
        {cursos.map((curso) => {
          // Crea el mensaje con saltos de línea para pre-cargar el cuerpo del correo
          const mensaje = encodeURIComponent(
            `Hola, estoy interesado en el curso: ${curso.titulo}. ¿Podrían brindarme más información?\r\n\r\n`
          );
          // Enlace para Gmail en escritorio
          const enlaceGmailDesktop = `https://mail.google.com/mail/?view=cm&fs=1&to=capolescuela@gmail.com&su=Consulta%20CapOL%20Escuela&body=${mensaje}`;
          // Enlace para móviles usando mailto (más universal)
          const enlaceMailto = `mailto:capolescuela@gmail.com?subject=Consulta%20Academia%20Darwin&body=${mensaje}`;

          // Usa mailto en móviles y Gmail en desktop
          const enlace = isMobile ? enlaceMailto : enlaceGmailDesktop;
          // Mensaje para WhatsApp (misma intención que el correo)
          const whatsappMessage = encodeURIComponent(
            `Hola, estoy interesado en el curso: ${curso.titulo}. ¿Podrían brindarme más información?`
          );
          const enlaceWhatsapp = `https://wa.me/5493834479734?text=${whatsappMessage}`;

          return (
            <div key={curso.id} className="curso-card">
              <img
                src={curso.imagen}
                alt={curso.titulo}
                className="curso-imagen"
              />
              <h3>{curso.titulo}</h3>
              <p>{curso.descripcion}</p>
              <p>Duración: {curso.duración}</p>
              {/* Usar el formulario del curso si existe, si no usar el enlace de correo */}
              {(() => {
                const inscripcionLink =
                  curso.formUrl || (isMobile ? enlaceMailto : enlaceGmailDesktop);
                return (
                  <a
                    href={inscripcionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-seleccionar"
                  >
                    ✍️ Inscribite!
                  </a>
                );
              })()}
              <br />
              <br />
              <a
                href={enlaceWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-seleccionar whatsapp-link"
              >
                <img src={logoWhatsapp} alt="WhatsApp" />Más Info!
              </a>
            </div>
          );
        })}
      </div>
      <footer className="footer-header">
        <h2 className="footer-title">
          "¡Visítanos de forma frecuente para no perderte nuevos cursos!"
        </h2>
      </footer>
    </main>
  );
};

export default Main;
