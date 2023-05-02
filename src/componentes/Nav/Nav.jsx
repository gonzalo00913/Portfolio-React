import { NavLink } from "react-router-dom";
import "../Nav/style.css";
import imgLogo from "../img/naranja.png";
const Nav = () => {
  return (
    <div>
      <nav className="estilos-nav">
        <div className="logo-nav">
          <img className="ban" src={imgLogo} alt="logo" />
        </div>
        <li className="separator"></li>
        <NavLink className="link" to="/" exact>
          {" "}
          Inicio{" "}
        </NavLink>
        <li className="separator"></li>
        <NavLink className="link" to="/habilidades">
          Habilidades
        </NavLink>
        <li className="separator"></li>
        <NavLink className="link" to="/proyectos">
          Proyectos
        </NavLink>
        <li className="separator"></li>
        <NavLink className="link" to="/contacto">
          Contacto
        </NavLink>
        <li className="separator"></li>
      </nav>
    </div>
  );
};

export default Nav;
