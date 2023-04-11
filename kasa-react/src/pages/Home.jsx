import React from 'react'
import Api from "../api.json"
import { Logement } from '../components/Card'
import Land from "../images/landscape_two.png"
import "../styles/Home.css"

export default function Home() {
  return (
    <div>
        <div className='banner'>
          <img src={Land} alt="montagne"/>
          <h1>Chez vous, partou et ailleurs</h1>
        </div>
        <div>
            {Api.map((logement) => 
            <Logement 
                id={logement.id}
                img={logement.cover}
                title={logement.title}
            />)}
        </div>
    </div>
  )
}
