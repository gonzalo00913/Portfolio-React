import logoHtml from "../img/Logos/html.png";
import logoCss from "../img/Logos/css.png";
import logoJs from "../img/Logos/js.png";
import logoReact from "../img/Logos/react.png";
import logoExpress from "../img/Logos/express.png";
import logoGit from "../img/Logos/git.png";
import logoNode from "../img/Logos/nodejs.png";
import logoSQL from "../img/Logos/sql.png";
import logoBootstrap from "../img/Logos/bootstrap.png";
import logoSass from "../img/Logos/sass.png";
import logoPostgresql from "../img/Logos/postgresql.png";

import "../Habilidades/styleHabilidades.css";


const Habilidades = () => {
  return (
    <div>
      <div className="titulos-de-secciones">
        <span>Mis</span>
        <span className="texto-1">Habilidades</span>
      </div>
      <div className="container-todo">
        <section className="container-logos">
          <img className="logo-habilidades" src={logoHtml} alt="" />
          <img className="logo-habilidades" src={logoCss} alt="" />
          <img className="logo-habilidades" src={logoJs} alt="" />
          <img className="logo-habilidades" src={logoBootstrap} alt="" />
          <img className="logo-habilidades" src={logoSass} alt="" />
          <img className="logo-habilidades" src={logoReact} alt="" />
          <img className="logo-habilidades" src={logoNode} alt="" />
          <img className="logo-habilidades" src={logoExpress} alt="" />
          <img className="logo-habilidades" src={logoSQL} alt="" />
          <img className="logo-habilidades" src={logoPostgresql} alt="" />
          <img className="logo-habilidades" src={logoGit} alt="" />
        </section>
        <p className="parrafo-habilidades">
          {" "}
          "Tengo conocimientos en el desarrollo de sitios web utilizando HTML5,
          CSS3 y JavaScript. Además, tengo experiencia en el uso de
          preprocesadores de CSS como Sass y he trabajado con frameworks como
          Bootstrap para crear diseños escalables y responsivos.<br/><br/>También tengo
          conocimientos básicos en el desarrollo de aplicaciones back-end
          utilizando Express y bases de datos SQL como PostgreSQL. He utilizado
          Git para el control de versiones en mis proyectos y estoy
          continuamente aprendiendo y mejorando mis habilidades."{" "}
        </p>
        
      </div>
  
    </div>
  );
};

export default Habilidades;
