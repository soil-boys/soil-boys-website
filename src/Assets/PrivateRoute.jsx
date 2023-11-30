import React from 'react'
import { useAuth } from '../Contexts/AuthContext'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {

    const { currentUser } = useAuth()

    return (
        currentUser ? children : <Navigate to='/login' replace='true' />
    )
}

export default PrivateRoute