import React, { use } from "react";
import "./style.css";
import {useState, useEffect} from "react";

const CustomComponent: React.FC = () => {
    const [count, setCount] = useState(0);
    const [lastClicked, setLastClicked] = useState("");

    const minusClick = () => {
        setCount(count - 1);
        setLastClicked("-")
    }

    const plusClick = () => {
        setCount(count + 1);
        setLastClicked("+");
    }

    useEffect(() => {
        if (lastClicked === "+") {
            console.log('Нажата кнопка +');
        }
        else {
            console.log('Нажата кнопка -');
        }
    }, [lastClicked]);
    

    return (
        <div className="custom-component">
            <p style={{ color: "white" }}>{count}</p>
            <h2 style={{ color: "white" }}>Нажата кнопка {lastClicked}</h2>
            <button className="minus" style={{padding: "20px"}} onClick={minusClick}>-</button>
            <button className="plus" style={{padding: "20px"}} onClick={plusClick}>+</button>
        </div>
    )
}

export default CustomComponent;
