import React from "react";
import Card from "./Card";
import Api from "../api.json"
import { NavLink } from "react-router-dom";
import "../styles/Galery.css"

export default function Galery() {
    
    const cards = Api.map(item => {
        return (
            <NavLink key={item.id} to={"/logement/"+item.id+"/#"} className="navlink-card">
              <Card className="galery"
                id={item.id}
                img={item.cover}
                title={item.title}
              />
            </NavLink>
        )
    })

    return (
        <div className="galery">
            {cards}
        </div>
    )
}