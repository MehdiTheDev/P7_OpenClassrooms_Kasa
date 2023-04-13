import React from 'react'
import Banner from '../components/Banner'
import HomeBanner from "../images/landscape_two.png"
import "../styles/Home.css"
import Galery from '../components/Galery'

export default function Home() {
  return (
    <div>
        <Banner textBanner={"Chez vous, partout et ailleurs"} imageBanner={HomeBanner}/>
        <Galery />
    </div>
  )
}
