import React from "react";
import Card from "./Card";
import Api from "../api.json"
import "../styles/Galery.css"

export default function Galery() {
    
    const cards = Api.map(item => {
        return (
          <Card
            id={item.id}
            img={item.cover}
            title={item.title}
          />
        )
    })

    return (
        <div className="galery">
            {cards}
        </div>
    )
}