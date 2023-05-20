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
  
          <NavLink className="link home" to="/" exact>
            <i class="fa-solid fa-house"></i>
          </NavLink>

          <NavLink className="link" to="/habilidades">
            <i class="fa-solid fa-gear"></i>
          </NavLink>

          <NavLink className="link" to="/proyectos">
            <i class="fa-solid fa-sheet-plastic"></i>
          </NavLink>
          <NavLink className="link contacto" to="/contact">
            <i class="fa-solid fa-phone"></i>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
