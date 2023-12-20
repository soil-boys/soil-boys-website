import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

import Home from './Pages/Home'
import Gallery from  './Pages/Gallery'
import About from './Pages/About'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import AuthProvider, { useAuth } from '../Contexts/AuthContext'
import PrivateRoute from './PrivateRoute'
import Code from './Pages/Code'

function AnimatedRoutes() {

    const location = useLocation()

    return (
        <AnimatePresence>
            <AuthProvider>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/code" exact element={<Code />} />
                    <Route path="/gallery" exact element={<Gallery />} />
                    <Route path="/about" exact element={<About />} />

                    <Route path='/dashboard' exact element={
                        <PrivateRoute>
                            <Dashboard/>
                        </PrivateRoute>    
                    } />
                    <Route path='/login' exact element={<Login />} />
                </Routes>
            </AuthProvider>
        </AnimatePresence>
    )
}

export default AnimatedRoutes