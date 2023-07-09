import "../Contacto/styleContacto.css";
import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import Redes from "../Redes/Redes";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2is28rb",
        "template_k6zej7q",
        e.target,
        "d_vq503pTgx_-I6Ol"
      )

      .then(
        (result) => {
          console.log(result.text);

          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container-form">
      <div className="titulos-de-secciones">
        <span>Contact</span>
        <span className="texto-1">Me</span>
      </div>

      <form className="contenedor-email" onSubmit={handleSubmit}>
        <div className="container-neb">
          <div className="container-name">
            <label htmlFor="name">Name:</label>
            <input
              placeholder="Name..."
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="container-email">
            <label htmlFor="email">Email:</label>
            <input
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="container-mensaje">
            <label htmlFor="message">Message:</label>
            <textarea
              placeholder="message..."
              className="textarea"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button className="buton" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
