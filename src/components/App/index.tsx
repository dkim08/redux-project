import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import Home from "../../pages/Home";
import "./style.css";
import "../../styles/global.css";

const App: React.FC = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  return (
    <div className={`app ${currentTheme === "dark" ? "app-dark" : "app-light"}`}>
      <Home />
    </div>
  );
};

export default App;
