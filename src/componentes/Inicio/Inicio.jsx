import "../Inicio/style.css";
import img from "../img/me.png";
import React from "react";
import Redes from "../Redes/Redes";

const Inicio = () => {
  return (
    <div className="contenedor-principal responsive-nav">
      <h1 className="full-stack">Front end Developer</h1>
      <div className="container-about-me">
        <img className="img-me" src={img} alt="mi imagen" />
        <p className="text-inicio">
          <u>About me</u>
          <br />
          I am a very motivated and committed person with my learning and
          professional growth. I characterize myself by my ability to work
          as a team and my positive attitude, always looking to learn and improve
          In what I do.
          <strong>
            My goal is to apply my acquired skills and knowledge
            up to now, contribute to the success of the company and achieve
            ambitious goals in the future.
          </strong>
        </p>
      </div>
      <Redes />
    </div>
  );
};

export default Inicio;
