import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { toggleTheme } from "../../store/Theme/theme";
import cardImage from "../../assets/card-img.svg";
import "./style.css";

const Card: React.FC = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  const dispatch = useDispatch<AppDispatch>();

  const onToggleTheme = () => { dispatch(toggleTheme()) };

  useEffect(() => {
    document.body.className = currentTheme === "dark" ? "body-dark" : "body-light";
  }, [currentTheme]);

  return (
    <div className={`card ${currentTheme === "dark" ? "card-dark" : "card-light"}`}>

      <img className="card-image" src={cardImage} alt="" />

      <div className="text-content">
        <h1 className="card-title">Текущая тема:</h1>
        <p className="card-text">
          {currentTheme === "dark" ? "Темная" : "Светлая"}
        </p>
      </div>

      <button className={`card-button ${currentTheme === "dark" ? "card-btn-dark" : "card-btn-light"}`} onClick={onToggleTheme}>
        Сменить тему
      </button>

    </div >
  );
};

export default Card;
