import React, { useState } from "react";
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
    <section>
      <div className="contatos-container">
        <div className="contatos-info">
          <h2>Contatos</h2>
          <p>Entre em contato!</p>
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
    </section>
  );
};
export default Contatos;
