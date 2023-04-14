import React from "react";
import "../styles/Logement.css";
import { useParams } from 'react-router-dom';
import Api from "../api.json";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";
import Etoile from "../images/etoile.png";
import EtoileVide from "../images/etoile_vide.png";
import Dropdown from "../components/Dropdown";
import Page404 from "./404"

export default function FicheAppart() {
    /* Récupère la bonne fiche */
    const id = useParams();
    const ficheLogement = Api.find(logement => logement.id === id.id);

    /* Tags */
    const tagsLogement = ficheLogement?.tags.map((tags, index) => {
        return <Tag key={index} nom={tags} />
    });

    /* Notes */
    let noteLogement = [];
    let etoileComplete = true;
    for (let index = 0; index < 5; index++) {
        if(index === parseInt(ficheLogement?.rating)) {
            etoileComplete = false;
        }
        if(etoileComplete === true) {
            noteLogement.push(<img key={index} className="etoile" src={Etoile} alt={`${ficheLogement?.rating}/5`}/>)
        } else {
            noteLogement.push(<img key={index} className="etoile" src={EtoileVide} alt={`${ficheLogement?.rating}/5`}/>)
        }
    }

    /* Équipements */
    const equipementsLogement = ficheLogement?.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    })

    return(
        <>
            {
                ficheLogement ? (
                    <div className="Fiche">
                        <Carrousel images={ficheLogement?.pictures}/>
                        <div className="logements-proprietaire">
                            <div className="information-logements">
                                <div className="titre">
                                    <span className="titre-logement">{ficheLogement?.title}</span>
                                    <span className="endroit-logement">{ficheLogement?.location}</span>
                                </div>
                                <div className="tags">
                                    {tagsLogement}
                                </div>
                            </div>
                            <div className="proprietaire-note">
                                <div className="information-proprietaire">
                                    <span className="nom-proprietaire">{ficheLogement?.host.name}</span>
                                    <img className="photo-proprietaire" src={ficheLogement?.host.picture} alt="Propriétaire"/>
                                </div>
                                <div className="note">
                                    {noteLogement}
                                </div>
                            </div>
                        </div>
                        <div className="description-equipements">
                            <Dropdown titre="Description" description={ficheLogement?.description}/>
                            <Dropdown titre="Équipements" description={equipementsLogement}/>
                        </div>
                    </div>
                ) : <Page404/>
            }
        </>
    )
}

