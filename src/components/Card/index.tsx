import React from "react";
import cardImage from "../../assets/card-img.svg";
import "./style.css";

interface CardProps {
  onToggleTheme: () => void;
  darkMode: boolean;
}

const Card: React.FC<CardProps> = ({ onToggleTheme, darkMode }) => {
  return (
    <div className={`card ${darkMode ? "card-dark" : "card-light"}`}>
      <img className="card-image" src={cardImage} alt="" />
      <div className="text-content">
        <h1 className="card-title">Текущая тема:</h1>
        <p className="card-text">{darkMode ? "Темная" : "Светлая"}</p>
      </div>
      <a className={`card-button ${darkMode ? "card-btn-dark" : "card-btn-light"}`} onClick={onToggleTheme}>Сменить тему</a>
    </div>
  );
};

export default Card;
