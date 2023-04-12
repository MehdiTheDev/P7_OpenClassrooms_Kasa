import React from 'react'
import "../styles/Card.css"

export default function Card({id, img, title}) {
  return (
    <div id={id} className="card">
        <img src={img} alt="logement" className='img-card'/>
        <div className='shadow'></div>
        <p>{title}</p>
    </div>
  )
}
