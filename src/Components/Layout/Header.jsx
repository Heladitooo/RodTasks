import React from "react";
import "../styles/Layout/Header.css";

const Header = () => {
    return(
        <header className="header">
            <h1 className="header__tittle">RodTasks</h1>
            <ul className="header-links">
                <li>Tareas</li>
                <li>Analiticas</li>
            </ul>
        </header>
    )
}

export default Header;