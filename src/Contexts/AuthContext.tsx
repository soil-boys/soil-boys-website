import React, { createContext, useContext, useEffect, useState } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged, Auth } from 'firebase/auth'

import { auth } from '../Firebase.tsx'

interface AuthContextProps {
    currentUser: Auth['currentUser'],
    login: (email: string, password: string) => Promise<void>,
    error: string,
    setError: React.Dispatch<React.SetStateAction<string>>
}

interface AuthProviderProps {
    children: React.ReactNode
}


const AuthContext = createContext<AuthContextProps | null>(null)

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ children }: AuthProviderProps) {

    const [currentUser, setCurrentUser] = useState<Auth['currentUser'] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')
    
    async function login(email: string, password: string) {
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