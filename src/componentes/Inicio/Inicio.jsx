import "../Inicio/style.css";
import img from "../img/me.png";
import React from "react";
import Redes from "../Redes/Redes";

const Inicio = () => {
  return (
    <div className="contenedor-principal responsive-nav">
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
      <Redes />
    </div>
  );
};

export default Inicio;
