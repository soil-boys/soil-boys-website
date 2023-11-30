import React, { createContext, useContext, useEffect, useState } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

import { auth } from '../Firebase'

const AuthContext = createContext(null)

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    
    async function login(email, password) {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (err) {
            return setError('Failed to sign in')
        }
    }
    
    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            setLoading(false)
        })
        
        return unsubsribe
    }, [])
    
    const value = { currentUser, login, error, setError }
    
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}