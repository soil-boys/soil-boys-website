import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Assets/Structures/Nav'
// import Breadcrumbs from './Assets/Structures/Breadcrumbs'
import Home from './Assets/Pages/Home'
import Gallery from './Assets/Pages/Gallery'
import About from './Assets/Pages/About'
import './App.css'

function App() {
  
  return (
    <>
      <Nav />
      <div id='parallax'></div>
      <div id="main">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/gallery" exact element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      {/* <Breadcrumbs /> */}
    </>
  )
}

export default App