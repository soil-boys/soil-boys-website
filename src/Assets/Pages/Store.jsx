import React, { useState } from 'react'
import { motion } from 'framer-motion'

import SearchBar from '../Structures/Searchbar/SearchBar'
import StoreItem from '../Structures/Store Item/StoreItem'
import Particles from '../Structures/Particles/Particles'

import data from "../items.json"

import '../Styles/Store.css'

function Store() {

    document.title = "Soil Store"
    
    const [cart, setCart] = useState([])
    const [items, setItems] = useState(data.slice(0, 21))

    return (
        <motion.div
                id="store"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
        >
            <SearchBar cart={cart} setCart={setCart} item={items} setItems={setItems} />
            <div className="store-banner" select="false">
                <div className="store-banner-part">
                    <h1 className="store-banner-heading">Welcome to <span className="highlight">Soil Store</span></h1>
                    <p className="store-banner-text">
                        Dive into a treasure trove of eclectic finds.
                        <br />
                        Unearth the extraordinary at Soil Store – ❝ Where Style Meets Substance! ❞
                    </p>
                </div>
                <Particles />
            </div>
            <div className="store-items">
                {items.map(item => (
                    <StoreItem key={item.added} item={item} cart={cart} setCart={setCart} />
                ))}
            </div>
        </motion.div>
    )
}

export default Store