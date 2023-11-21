import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

import Home from './Pages/Home'
import Gallery from  './Pages/Gallery'
import About from './Pages/About'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'

function AnimatedRoutes() {

    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" exact element={<Home />} />
                <Route path="/gallery" exact element={<Gallery />} />
                <Route path="/about" exact element={<About />} />

                <Route path='/login' exact element={<Login />} />
                <Route path='/dashboard'  element={<Dashboard />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes