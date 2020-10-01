import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src="https://i.imgur.com/1lJpwae.png" alt="Filosinapsis" />
      </header>
      <section className="cover">
        <div className="microscope-container">
          <img
            src="https://cdn-0.emojis.wiki/emoji-pics/apple/microscope-apple.png"
            alt="Microscope"
          />
        </div>
        <div className="information-container">
          <h1>Creando software para el aprendizaje</h1>
          <p className="information__description">
            El equipo de desarrollo de software está encargado de crear
            algoritmos e interfaces gráficas para todos los proyectos de
            Filosinapsis.
          </p>
        </div>
      </section>
      <section className="projects">
        <div className="project">
          <div className="project__image-container"></div>
          <div className="project__info">
            <h2>Mapa neuronal</h2>
            <p>
              Mapa gráfico e interactivo de temas (neuronas) relacionados con el
              campo de las Matemáticas.
            </p>
            <a
              href="https://github.com/Filosinapsis/Filosinapsis"
              className="project__button--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to the project
            </a>
          </div>
        </div>
        <div className="project">
          <div className="project__image-container"></div>
          <div className="project__info">
            <h2>Modelos gráficos propuestos</h2>
            <p>
              Modelos de interfaces gráficas para la representación del mapa
              neuronal propuestos.
            </p>
            <a
              href="https://github.com/Filosinapsis/GraphicModelsProposed"
              className="project__button--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to the project
            </a>
          </div>
        </div>
        <div className="project">
          <div className="project__image-container"></div>
          <div className="project__info">
            <h2>GitHub Organization</h2>
            <p>
              Organización alojada en GitHub que almacena todos los proyectos y
              experimentos desarrollados en Filosinapsis.
            </p>
            <a
              href="https://github.com/Filosinapsis"
              className="project__button--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to the project
            </a>
          </div>
        </div>
      </section>
      <footer className="footer">
        <section>
          <h3>
            <a
              href="https://www.filosinapsis.org/"
              className="project__button--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sitio web principal
            </a>
          </h3>
        </section>
        <section>
          <h3>
          <a
              href="https://github.com/Filosinapsis"
              className="project__button--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Organización
            </a>
          </h3>
        </section>
      </footer>
    </div>
  );
}

export default App;
