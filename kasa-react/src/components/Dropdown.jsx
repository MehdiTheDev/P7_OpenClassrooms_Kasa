import React, { useState } from "react";
import "../styles/Dropdown.css";
import fleche from "../images/fleche.png";

export default function Dropdown({titre, description}) {
    /* Crée un Hook d'état */
    const [ouvert, setOuvert] = useState(false);

    return(
        <div className="dropdown">
            <div className="header-dropdown">
                <div className="titre-dropdown">{titre}</div>
                <a className={`fleche-dropdown ${ouvert}`} href={`#dropdown-${titre}`} onClick={() => setOuvert(!ouvert)}>
                    <img src={fleche} alt="Ouvrir cette liste"/>
                </a>
            </div>
            {
                /* Si le dropdown est à TRUE alors il affichera la description */
                ouvert && <div className="description-dropdown">{description}</div>
            }
        </div>
    );
}
