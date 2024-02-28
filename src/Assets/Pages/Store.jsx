import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

import SearchBar from '../Structures/Searchbar/SearchBar'
import StoreItem from '../Structures/Store Item/StoreItem'
import Particles from '../Structures/Particles/Particles'
import Loader from '../Structures/Loader/Loader'

import { useCart } from '../../Contexts/StoreProvider.tsx'

import data from "../items.json"
import data2 from "../items2.json"

import '../Styles/Store.css'

function Store() {

    document.title = "Soil Store"

    const { search } = useLocation()
    const searchQuery = new URLSearchParams(search).get('search')

    const [items, setItems] = useState([])
    const [hovered, setHovered] = useState(false)
    const [loading, setLoading] = useState(false)

    const { cart, setCart } = useCart()
    
    const randomText = [
        "Launching shortly!",
        "Next in Line!",
        "Arriving shortly...",
        "Sneak Peak Alert!",
    ]

    const generateData = () => {
        const sliced = data2.slice(20, 100)
        let formattedData = []
        // for (let i = 0; i < sliced.length; i++) {
        //     let obj = {
        //         pid: sliced[i].pid,
        //         name: sliced[i].title,
        //         seller: sliced[i].seller,
        //         description: sliced[i].description,
        //         images: sliced[i].images,
        //         price: parseFloat(sliced[i].actual_price.replace(/[^\d.]/g, '')),
        //         tags: data[i].tags
        //     }
        //     formattedData.push(obj)
        // }
        return formattedData
    }

    
    const filterItems = (query) => {
        setItems([])

        if (!query) return setItems(generateData())

        const normalizedQuery = query.trim().toLowerCase()
        if (!normalizedQuery) return items

        const searchTerms = normalizedQuery.split(/\s+/g)

        const filtered = generateData().filter((item) => {
            return searchTerms.every((term) => {
                return (
                    item.name.toLowerCase().includes(term) ||
                    item.tags.some((tag) => tag.toLowerCase().includes(term))
                )
            })
        })
        setItems(filtered)
        const str = `Found ${filtered.length} products for ❝${searchQuery}❞`
        document.querySelector('#store').setAttribute("style", `--queryLength: ${str.length}`)
    }

    useEffect(() => {
        setItems([])
        setLoading(true)
        setTimeout(() => {
            filterItems(searchQuery)
            setLoading(false)
        }, 5000);
    }, [searchQuery])

    return (
        <motion.div
            id="store"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SearchBar />
            {!searchQuery && <div className="store-banner" select="false">
                <div className="store-banner-part">
                    <h1 className="store-banner-heading">Welcome to <span className="highlight">Soil Store</span></h1>
                    <p className="store-banner-text">
                        Dive into a treasure trove of eclectic finds.
                        <br />
                        Unearth the extraordinary at Soil Store – ❝ Where Style Meets Substance! ❞
                    </p>
                </div>
                <Particles />
            </div>}
            {
                searchQuery
                    &&
                    <div className="store-back-link" select="false">
                        <Link
                            className={`back-link${(searchQuery && hovered) ? ' hovered' : ''}`}
                            to='/store'
                            onMouseOver={(e) => setHovered(true)}
                            onMouseOut={(e) => setHovered(false)}
                        >
                            <span
                                className="material-symbols-rounded"
                                style={{ width: hovered ? 'fit-content' : '10%' }}
                            >
                                {hovered ? "arrow_left_alt" : "chevron_left"}
                            </span>
                            <div>
                                <span>Back to Soil Store</span>
                                <span className="back-link-underline"></span>
                            </div>
                        </Link>
                    </div>
            }
            {(searchQuery && !loading) && <div className="search-result-header"><span>Found <span className={(!items || items.length === 0) && 'zero'}>{(!items || items.length === 0) ? 0 : items.length}</span> products for<br />❝<span>{searchQuery}</span>❞</span></div>}
            {/* <div className="@container">
                <div className="store-items">
                    {items.map(item => (
                        <StoreItem key={item.pid} item={item} cart={cart} setCart={setCart} />
                    ))}
                </div>
            </div> */}
            {!loading && <div className="unavailable-text" select="false">
                <div className="decoration-container">
                    <div className="icons-container">
                        <div className="icon-box"><span className="material-symbols-rounded">skateboarding</span></div>
                        <div className="icon-box"><span className="material-symbols-rounded">apparel</span></div>
                        <div className="icon-box"><span className="material-symbols-rounded">party_mode</span></div>
                        <div className="icon-box"><span className="material-symbols-rounded">browse_activity</span></div>
                        <div className="icon-box"><span className="material-symbols-rounded">deployed_code</span></div>
                        <div className="icon-box"><span className="material-symbols-rounded">style</span></div>
                    </div>
                    <div className="connectors">
                        <span className="dot"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
                <div className="text">
                    {randomText[Math.floor(Math.random() * randomText.length)]}
                </div>
            </div>}
            {loading && <Loader />}
        </motion.div>
    )
}

export default Store