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

import CV from '../assets/CV-GonzaloMasa.pdf';
import "../Habilidades/styleHabilidades.css";


const Habilidades = () => {
  return (
    <div className="vh">
      <div className="titulos-de-secciones">
        <span>My</span>
        <span className="texto-1">Skills</span>
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
          "I have knowledge in the development of websites using HTML5,
          CSS3 and JavaScript. Also, I have experience using
          CSS preprocessors like Sass and worked with frameworks like
          Bootstrap to create scalable and responsive layouts.<br/><br/>I also have
          Basic knowledge in back-end application development
          using Express and SQL databases like PostgreSQL. he used
          Git for version control on my projects and I'm
          continually learning and improving my skills." <br />
          <button className="cv-download">
   <a href={CV} download="mi-cv.pdf">Descargar CV</a> 
  </button>
        </p>

      </div>

    </div>
    
  );
};

export default Habilidades;
