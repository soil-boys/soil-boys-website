import React, { createContext, useContext, useState, useEffect } from 'react'
import { useStorage } from '../Hooks'

import data from '../Assets/items.json'
import data2 from '../Assets/items2.json'

interface Item {
    pid: string,
    name: string,
    description: string,
    seller: string,
    images: string[],
    price: number,
    tags: string[]
}

interface StoreContextProps {
    cart: Item[],
    setCart: React.Dispatch<React.SetStateAction<Item[]>>
}

interface StoreProviderProps {
    children: React.ReactNode
}


const StoreContext = createContext<StoreContextProps | null>(null)

export function useCart() {
    return useContext(StoreContext)
}

export default function StoreProvider({ children }: StoreProviderProps) {
    
    const [cart, setCart, removeCart, resetCart] = useStorage("cart", [])

    const value = { cart, setCart, removeCart, resetCart }

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
}