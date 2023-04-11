import React from 'react'

export const Logement = ({id, img, title}) => {
  return (
    <div id={id}>
        <img src={img} alt="logement"/>
        <span>{title}</span>
    </div>
  )
}
