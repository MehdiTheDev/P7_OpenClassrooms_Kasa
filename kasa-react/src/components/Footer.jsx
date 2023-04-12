import React from "react";
import Logo from "../images/LOGO.png"
import "../styles/Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <img src={Logo} alt="logo"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}