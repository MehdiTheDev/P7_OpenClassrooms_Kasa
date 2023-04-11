import React from "react";
import Logo from "../images/LOGO.png";

export default function Header() {
    return (
        <div>
            <img src={Logo} alt="logo"/>
            <nav>
                <h3>Accueil</h3>
                <h3>A Propos</h3>
            </nav>
        </div>
    )
}