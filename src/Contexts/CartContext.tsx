import React, { createContext, useContext, useState, useEffect } from 'react'

interface CartItem {
    pid: string,
    name: string,
    description: string,
    seller: string,
    images: string[],
    price: number,
    tags: string[]
}

interface CartContextProps {
    cart: CartItem[],
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
}

interface CartProviderProps {
    children: React.ReactNode
}


const CartContext = createContext<CartContextProps | null>(null)

export function useCart() {
    return useContext(CartContext)
}

export default function CartProvider({ children }: CartProviderProps) {
    
    const [cart, setCart] = useState<CartItem[]>([])

    const value = { cart, setCart }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}