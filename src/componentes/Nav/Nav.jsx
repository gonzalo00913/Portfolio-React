import { NavLink } from "react-router-dom";
/* import {FaBars,FaTimes} from "react-icons/fa" */
import "../Nav/style.css";
import imgLogo from "../img/naranja.png";
const Nav = () => {
  return (
    <div>
      <nav className="estilos-nav responsive-nav">
        <div className="">
          <img className="ban" src={imgLogo} alt="logo" />
        </div>
      <div className="container-links">
      <NavLink className="link home" to="/home">
         Home
        </NavLink>
        <NavLink className="link" to="/" exact>
          About
        </NavLink>

        <NavLink className="link" to="/habilidades">
          Skills
        </NavLink>
    
        <NavLink className="link" to="/proyectos">
          Projects
        </NavLink>
   
        </div>
     
    </nav>
 
    </div>
  );
};

export default Nav;
