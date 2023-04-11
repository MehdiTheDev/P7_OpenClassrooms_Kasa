import React from 'react'
import Api from "../api.json"
import Card from '../components/Card'
import Land from "../images/landscape_two.png"
import "../styles/Home.css"

export default function Home() {
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
    <div>
        <div className='banner'>
          <img src={Land} alt="montagne"/>
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div className='galery'>
            {cards}
        </div>
    </div>
  )
}
