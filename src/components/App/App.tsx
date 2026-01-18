import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { toggleTheme } from "../../store/Theme/theme.ts";
import Home from "../../pages/Home";
import "./App.css";

const App: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={`app ${darkMode ? "app-dark" : "app-light"}`}>
      <Home onToggleTheme={() => dispatch(toggleTheme())} darkMode={darkMode} />
    </div>
  );
};

export default App;
