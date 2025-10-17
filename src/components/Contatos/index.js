import React, { useState } from "react";
import AnimatedOnScroll from '../AnimetedOnScroll';
import "./Contatos.css";

const Contatos = () => {
  const [buttonText, setButtonText] = useState("clardev@outlook.com");
  const [buttonColor, setButtonColor] = useState("transparent"); // Cor do botão

  const email = "clardev@outlook.com";

  const handleMouseEnter = () => {
    setButtonText("Copiar");
    setButtonColor("#007bff"); // Azul para hover
  };

  const handleMouseLeave = () => {
    setButtonText(email);
    setButtonColor("transparent"); // Volta pra a cor padrão
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setButtonText("Copiado");
      setButtonColor("#28a745"); // Verde após copiar
      setTimeout(() => {
        setButtonText(email);
        setButtonColor("transparent"); 
      }, 6000); // Volta depois de 6 segundos
    });
  };

  return (
    <section id="contatos">
      <AnimatedOnScroll animation="fade-up">
        <div className="contatos-container">
          <div className="contatos-info">
            <h2>Contatos</h2>
            <p>Estou sempre aberta a novos projetos e desafios, especialmente na área de desenvolvimento fullstack e tecnologias inovadoras. Não hesite em enviar um e-mail será um prazer responder e discutir como podemos trabalhar juntos!</p>
          </div>

          <div className="bnt-email">
            <button
              className="email-copy-button"
              onClick={handleCopy}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ backgroundColor: buttonColor }}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </AnimatedOnScroll>
    </section>
  );
};
export default Contatos;
