import React from "react";
import Card from "../../components/Card";
import "./style.css";

interface HomeProps {
    onToggleTheme: () => void;
    darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ onToggleTheme, darkMode }) => {
    return (
        <div className={`home ${darkMode ? "home-dark" : "home-light"}`}>
            <Card onToggleTheme={onToggleTheme} darkMode={darkMode} />
        </div>
    );
}
export default Home;