import React from "react";
import "../styles/Layout/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="header">
            <h1 className="header__tittle"><Link to="/">RodTasks</Link></h1>
            <ul className="header-links">
                <Link className="links__link" to="/tasks">Tareas</Link>
                <Link className="links__link">Analiticas</Link>
            </ul>
        </header>
    )
}

export default Header;