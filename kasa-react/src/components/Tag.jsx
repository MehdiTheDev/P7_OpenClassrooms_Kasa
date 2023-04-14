import React from "react";
import "../styles/Tag.css";

export default function Tag({nom}) {
    return(
        <span className="tag">{nom}</span>
    );
}

