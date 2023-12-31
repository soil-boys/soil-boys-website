import React from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

import Home from './Pages/Home'
import Gallery from  './Pages/Gallery'
import About from './Pages/About'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import AuthProvider from '../Contexts/AuthContext'
import PrivateRoute from './PrivateRoute'
import Code from './Pages/Code'
import PrivacyPolicy from './Pages/Policies/PrivacyPolicy'
import TermsOfService from './Pages/Policies/TermsOfService'
import Page404 from './Pages/Page404'

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
                    <Route path="/policies/privacy-policy" exact element={<PrivacyPolicy />} />
                    <Route path="/policies/terms-of-service" exact element={<TermsOfService />} />

                    <Route path='*' element={<Navigate to="/404" replace="true" />} />
                    <Route path='/404' element={<Page404 />} />

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