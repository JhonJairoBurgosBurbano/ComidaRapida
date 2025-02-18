// src/components/Button.jsx
import React from "react";
import "../styles.css"; // Importamos estilos generales

const Button = ({ text, onClick, className = "" }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;