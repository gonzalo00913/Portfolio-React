import "../Inicio/style.css";
import img from "../img/me.png";
import React from "react";

const Inicio = () => {
  return (
    <div className="contenedor-principal">
      <h1>Front end Developer</h1>
      <div className="container-about-me">
        <img className="img-me" src={img} alt="mi imagen" />
        <p className="text-inicio">
          <u>Sobre Mi</u>
          <br />
          Soy una persona muy motivada y comprometida con mi aprendizaje y
          crecimiento profesional. Me caracterizo por mi capacidad para trabajar
          como equipo y mi actitud positiva, siempre buscando aprender y mejorar
          en lo que hago.
          <strong>
            Mi objetivo es aplicar mis habilidades y conocimientos adquiridos
            hasta el momento, contribuir al éxito de la empresa y lograr
            objetivos ambiciosos en el futuro.
          </strong>
        </p>
      </div>
      <div className="redes">
        <div className="item-1">
          <li id="iconos-right" className="item item-color">
            <a href="https://www.linkedin.com/in/gonzalo-masa/">
              <i className="fa-brands fa-linkedin"></i>Linkedin
            </a>
          </li>
        </div>
        <div className="item-2">
          <li id="iconos-right" className="item item-color">
            <a href="https://github.com/gonzalo00913">
              <i className="fa-brands fa-github"></i>GitHub
            </a>
          </li>
        </div>
        <div className="item-3">
          <li id="iconos-right" className="item item-color">
            <a href="https://twitter.com/GonzaloMsa" rel="noreferrer">
              <i className="fa-brands fa-twitter"></i>Twitter
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
