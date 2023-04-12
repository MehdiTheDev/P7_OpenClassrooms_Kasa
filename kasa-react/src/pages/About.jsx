import React from 'react'
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
    </div>
  )
}

export default About