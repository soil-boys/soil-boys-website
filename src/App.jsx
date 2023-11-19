import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './Assets/Structures/Nav/Nav'
import Footer from './Assets/Structures/Footer/Footer'

import Home from './Assets/Pages/Home'
import Gallery from './Assets/Pages/Gallery'
import About from './Assets/Pages/About'
import Dashboard from './Assets/Pages/Dashboard'

import './App.css'
import Login from './Assets/Pages/Login'


function App() {
  
  return (
    <>
      <Nav />
      <div id='parallax'></div>
      <div id="main">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/gallery" exact element={<Gallery />} />
          <Route path="/about" exact element={<About />} />

          <Route path='/login' exact element={<Login />} />
          <Route path='/dashboard'  element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
      {/* <Breadcrumbs /> */}
    </>
  )
}

export default App
