import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../components/Layout';
import About from '../pages/About';
import Home from "../pages/Home"
import Erreur404 from "../pages/404"
import Logement from '../pages/Logement';

const Path = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/a-propos" element={<About />}/>
                <Route path="/logement/:id" element={<Logement/>}/>
                <Route path="*" element={<Erreur404 />}/>
            </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default Path