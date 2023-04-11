import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../components/Layout';
import About from '../pages/About';
import Home from "../pages/Home"

const Path = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/a-propos" element={<About />}/>
            </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default Path