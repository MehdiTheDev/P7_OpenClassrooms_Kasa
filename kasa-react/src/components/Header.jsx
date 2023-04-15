import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/LOGO.png";
import "../styles/Header.css"

export default function Header() {
    return (
        <div className="header">
            <img src={Logo} alt="logo"/>
            <nav className="nav">
                <NavLink to="/"  className="nav-button">Accueil</NavLink>
                <NavLink to="/a-propos" className="nav-button">À Propos</NavLink>
            </nav>
        </div>
    )
}