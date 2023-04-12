import React from 'react'
import Dropdown from '../components/Dropdown'
import Footer from "../components/Footer"
//import Banner from "../components/Banner"
import AboutBanner from "../images/landscape_one.png"
import "../styles/About.css"

/*Impossible d'utiliser le composant banner, la taille en hauteur native pour mobile
et différente sur la page Home (je continue d'essayer de trouver une solution
pour pouvoir avoir le même composant (Banner) mais un CSS différent pour
la page About"*/

const About = () => {
  return (
    <div className='about'>
      <div className='about-banner'>
        <img src={AboutBanner} alt="bannière"/>
      </div>
      <div className='infos'>
        <Dropdown titre="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
        <Dropdown titre="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
        <Dropdown titre="Service" description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
        <Dropdown titre="Sécurité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
      </div>
      <Footer />
    </div>
  )
}

export default About