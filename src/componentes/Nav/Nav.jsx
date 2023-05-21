import { NavLink } from "react-router-dom";
import "../Nav/style.css";
import imgLogo from "../img/naranja.png";

const Nav = () => {
  return (
    <div>
      <nav className="estilos-nav responsive-nav">
        <div className="">
          <img className="ban" src={imgLogo} alt="logo" />
        </div>
        <div className="container-links ">
          <NavLink className="link home" to="/" exact title="Home">
            <i className="fa-solid fa-house"></i><br />
            <span className="nombre-icono">Home</span>
          </NavLink>

          <NavLink className="link" to="/habilidades" title="Skills">
            <i className="fa-solid fa-gear"></i><br />
            <span className="nombre-icono">Skills</span>
          </NavLink>

          <NavLink className="link" to="/proyectos" title="Projects">
            <i className="fa-solid fa-sheet-plastic"></i><br />
            <span className="nombre-icono">Projects</span>
          </NavLink>
          <NavLink className="link contacto" to="/contact" title="Contact">
            <i className="fa-solid fa-phone"></i><br />
            <span className="nombre-icono">Contact</span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
