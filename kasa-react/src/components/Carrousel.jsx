import React from "react";
import { useState } from "react";
import fleche from '../images/fleche.png'
import "../styles/Carrousel.css"

export default function Carrousel({images}) {
    
    let [imgAfficher, changerImg] = useState(0)
    let nombreImg = images.length

    const imgPrecedente = () => {
        if(imgAfficher === 0) {
            changerImg(nombreImg - 1)
        } else {
            changerImg(nombreImg - 1)
        }
        return(changerImg)
    }

    const imgSuivante = () =>  {
        if(imgAfficher === nombreImg - 1) {
            changerImg(nombreImg  = 0)
        } else {
            changerImg(imgAfficher + 1)
        }
        return(changerImg)
    }

    return (
        <div className="carrousel">
            {
                nombreImg > 1 && <img className="fleche fleche-gauche" src={fleche} alt="Contenu précedént" onClick={imgPrecedente}/>
            }
            {
                images.map((image, index) => {
                    return(
                        <img key={index} className={index === imgAfficher ? 'carrousel-img actif' : 'carrousel-img'} src={image} alt="Logement"/>
                    )
                })
            }
            {
                nombreImg > 1 && <img className="fleche fleche-droite" src={fleche} alt="Contenu suivant" onClick={imgSuivante}/>
            }
        </div>
    )
}