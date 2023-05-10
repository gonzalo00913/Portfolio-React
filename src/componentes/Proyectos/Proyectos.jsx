import proyecto1 from "../img/proyectos/proyecto1.png";
import proyecto2 from "../img/proyectos/proyecto2.png";
import proyecto3 from "../img/proyectos/proyecto3.png";
import "../Proyectos/styleProyectos.css";

const proyectos = [
  {
    id: 1,
    titulo: "Rock Paper and scissors",
    descripcion: "",
    imagen: proyecto1,
    link:"https://gonzalo00913.github.io/Project-Rock-Paper-Scissors/"

  },
  {
    id: 2,
    titulo: "Calculator",
    descripcion: "",
    imagen: proyecto2,
    link:"https://gonzalo00913.github.io/Project--Three-Project-Calculator/"
  },
  {
    id: 3,
    titulo: "Etch-A-Sketch",
    descripcion: "",
    imagen: proyecto3,
    link:"https://gonzalo00913.github.io/Etch-A-Sketch/"
  },
];

function Proyecto({ titulo, descripcion, imagen,link }) {
  return (
    <div className="proyecto">
      <a href={link}>
      <img className="proyecto-img" src={imagen} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{descripcion}</p>

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
