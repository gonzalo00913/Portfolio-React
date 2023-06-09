import proyecto1 from "../img/proyectos/proyecto1.png";
import proyecto2 from "../img/proyectos/proyecto2.png";
import proyecto3 from "../img/proyectos/proyecto3.png";
import proyecto4 from "../img/proyectos/notes-project.png";
import proyecto5 from "../img/proyectos/proyecto7.png";
import proyecto8 from "../img/proyectos/proyecto8.png";
import "../Proyectos/styleProyectos.css";

const proyectos = [
  
  {
    id: 5,
    titulo: "Food app:",
    imagen: proyecto5,
    link:"https://food-app-gonzalo-masa.netlify.app/",
    descripcion:"Food app built with React, Node.js, Express, PostgreSQL, and Sequelize. Allows you to search, filter, and create recipes, and uses Redux for app state management."
  },
  {
    id: 1,
    titulo: "Rock Paper and scissors:",
    
    imagen: proyecto1,
    link:"https://gonzalo00913.github.io/Project-Rock-Paper-Scissors/",
    descripcion:"In my first steps, I made a project using vanilla JavaScript to manipulate the DOM. During this project, I was able to apply my newly acquired knowledge and explore the basic functionalities of JavaScript"

  },
  {
    id: 2,
    titulo: "Calculator:",
   
    imagen: proyecto2,
    link:"https://gonzalo00913.github.io/Project--Three-Project-Calculator/",
    descripcion:"In this project, I used JavaScript to manipulate the DOM and create calculator logic. I implemented functions to perform basic math operations, such as addition, subtraction, multiplication, and division"
  },
  {
    id: 3,
    titulo: "Etch-A-Sketch:",
   
    imagen: proyecto3,
    link:"https://gonzalo00913.github.io/Etch-A-Sketch/",
    descripcion:"In this project, I used JavaScript to create the logic for the Etch-A-Sketch. I implemented mouse events to capture cursor movements and draw lines on the canvas"
  },
  {
    id: 4,
    titulo: "Notes:",
    imagen: proyecto4,
    link:"https://app-notes-2-0.netlify.app/",
    descripcion:"I have developed a simple notes application using React.js together with Node.js and Express. This app allowed users to add new notes and delete them as needed."
  },
  {
    id: 6,
    titulo: "Phonebook:",
    imagen: proyecto8,
    link:"https://app-phonebook-2-0.netlify.app/",
    descripcion:"I have developed a simple notes application using React.js together with Node.js and Express. This app allowed users to add new notes and delete them as needed."
  }
  

  
];

function Proyecto({ titulo, descripcion, imagen, link }) {
  return (
    <div className="proyecto">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="envuelve">
        <img className="proyecto-img" src={imagen} alt={titulo} />
        <h2>{titulo}</h2>
        <p className="parrafo-proyecto">{descripcion}</p>
        </div>
      </a>
    </div>
  );
}

function Proyectos() {
  return (
    <div className="container-projects">
      <div className="titulos-de-secciones">
        <span>My</span>
        <span className="texto-1">Projects</span>
      </div>
      <div className="proyectos">
        {proyectos.map((proyecto) => (
          <Proyecto
            key={proyecto.id}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            imagen={proyecto.imagen}
            link={proyecto.link}
            
          />
        ))}
      </div>
    </div>
  );
}
export default Proyectos;
