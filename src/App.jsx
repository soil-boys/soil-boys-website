import React from 'react'

import Nav from './Assets/Structures/Nav/Nav'
import Footer from './Assets/Structures/Footer/Footer'

import AnimatedRoutes from './Assets/AnimatedRoutes'

import './App.css'


function App() {
  
  return (
    <>
      <Nav />
      <div id='parallax'></div>
      <div id="main">
        <AnimatedRoutes />
      </div>
      <Footer />
      {/* <Breadcrumbs /> */}
    </>
  )
}

export default App
