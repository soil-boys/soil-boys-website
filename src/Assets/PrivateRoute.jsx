import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContext.tsx'

function PrivateRoute({ children }) {

    const { currentUser } = useAuth()

    return (
        currentUser ? children : <Navigate to='/login' replace='true' />
    )
}

export default PrivateRoute