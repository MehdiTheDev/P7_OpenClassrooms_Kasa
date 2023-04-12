import React from "react";
import "../styles/Banner.css"

export default function Banner({imageBanner, textBanner}) {
    return (
        <div className='banner'>
            <img src={imageBanner} alt="Bannière"/>
            <h1>{textBanner}</h1>
        </div>
    )
}