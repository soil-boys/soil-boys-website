import React, { useState, useEffect } from 'react'

import Nav from './Assets/Structures/Nav/Nav'
import Footer from './Assets/Structures/Footer/Footer'

import AnimatedRoutes from './Assets/AnimatedRoutes'

import './App.css'


function App() {
  
  const [width, setWidth] = useState('100vw')

  useEffect(() => {
    setInterval(() => {
        setWidth(document.body.clientWidth)
    }, 5000)
    window.addEventListener('resize', (e) => {
        setWidth(document.body.clientWidth)
    })
  }, [])

  return (
        <>
            <Nav />
            <div id='parallax' style={{ width: width }}></div>
            <div id="main">
                <AnimatedRoutes />
            </div>
            <Footer />
            {/* <Breadcrumbs /> */}
        </>
    )
}

export default App
