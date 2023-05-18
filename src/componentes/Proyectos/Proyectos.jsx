import proyecto1 from "../img/proyectos/proyecto1.png";
import proyecto2 from "../img/proyectos/proyecto2.png";
import proyecto3 from "../img/proyectos/proyecto3.png";
import "../Proyectos/styleProyectos.css";

const proyectos = [
  {
    id: 1,
    titulo: "Rock Paper and scissors:",
    descripcion: "",
    imagen: proyecto1,
    link:"https://gonzalo00913.github.io/Project-Rock-Paper-Scissors/",
    descripcion:"In my first steps, I made a project using vanilla JavaScript to manipulate the DOM. During this project, I was able to apply my newly acquired knowledge and explore the basic functionalities of JavaScript"

  },
  {
    id: 2,
    titulo: "Calculator:",
    descripcion: "",
    imagen: proyecto2,
    link:"https://gonzalo00913.github.io/Project--Three-Project-Calculator/",
    descripcion:"In this project, I used JavaScript to manipulate the DOM and create calculator logic. I implemented functions to perform basic math operations, such as addition, subtraction, multiplication, and division"
  },
  {
    id: 3,
    titulo: "Etch-A-Sketch:",
    descripcion: "",
    imagen: proyecto3,
    link:"https://gonzalo00913.github.io/Etch-A-Sketch/",
    descripcion:"In this project, I used JavaScript to create the logic for the Etch-A-Sketch. I implemented mouse events to capture cursor movements and draw lines on the canvas"
  },
  
];

function Proyecto({ titulo, descripcion, imagen,link}) {
  return (
    <div className="proyecto">
      <a href={link}>
      <img className="proyecto-img" src={imagen} alt={titulo} />
      <h2>{titulo}</h2>
      <p className="parrafo-proyecto">{descripcion}</p>

      </a>
    </div>
  );
}

function Proyectos() {
  return (
    <div>
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
