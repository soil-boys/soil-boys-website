import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import trim from '../../../Functions/trim.ts'

import './SearchBar.styles.css'

function SearchBar({ cart, setCart, searchItems }) {

    const navigate = useNavigate()

    const [searchQuery, onChangeSearchQuery] = useState('')
    const [menuActive, setMenuActive] = useState(false)

    function handleRemove(item) {

        const itemIndex = cart.indexOf(item)
        if (itemIndex === -1) return

        setCart(prev => {
            const newCart = [...prev]
            newCart.splice(itemIndex, 1)
            return newCart
        })

    }
    function handleDelete(e) {
        e.preventDefault()

        setCart([])
    }
    function handleSubmit(e) {
        e.preventDefault()

        navigate(searchQuery === '' ? '/store' : `?search=${encodeURIComponent(searchQuery)}`, { replace: searchQuery === '' ? true : false })
        searchItems(searchQuery)
    }

    function calculateTotalPrice() {
        let price = 0
        for (let i = 0; i < cart.length; i++) {
            price = price + cart[i].price
        }
        return Math.round(price)
    }

    useEffect(() => {
        const cartButtons = document.querySelectorAll('.cart-container button')
        setInterval(() => {
            if (document.activeElement && [...cartButtons].some(btn => btn === document.activeElement)) return
            else setMenuActive(false)
        }, 1000);
    }, [])


    return (
        <div id="searchbar">
            <form onSubmit={handleSubmit} className="searchbox-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder='What are you looking for?'
                    value={searchQuery}
                    onChange={(e) => onChangeSearchQuery(e.target.value)}
                />
                <button type='submit' className="search-btn" select="false">
                    <span className="material-symbols-rounded">search</span>
                </button>
            </form>
            <div className="cart-container" select="false">
                {(cart && cart.length > 0) && <span className="cart-count">{cart.length}</span>}
                <button
                    className={`cart-btn${(cart && cart.length > 0) ? ' active' : ''}`}
                    onClick={() => (cart.length > 0) ? setMenuActive(prev => !prev) : setMenuActive(false)}
                    disabled={!cart || cart.length === 0}
                >
                    <span className="cart-btn-text">Cart</span>
                    <span className="material-symbols-rounded">shopping_cart</span>
                </button>
                <div className={`cart-list${(cart.length > 0 && menuActive) ? ' active' : ''}`}>
                    <div className="cart-items-container">
                        {cart.map(item => (
                            <div key={item.pid} className="cart-item">
                                <div className="cart-item-logo">
                                    <img src={item.images[0]} alt={item.name} />
                                </div>
                                <div className="cart-item-details">
                                    <div className="cart-item-name">{trim(item.name, 30)}</div>
                                    <div className="cart-item-pricing-container">
                                        <div className="cart-item-price">₹ {item.price}</div>
                                        <button className="cart-item-remove-btn" onClick={(e) => handleRemove(item)}>
                                            <span className="material-symbols-rounded">remove_shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-details">
                        <div className="cart-price-container">
                            <div className="cart-price-label">Total</div>
                            <div className="cart-price">₹ {calculateTotalPrice()}</div>
                        </div>
                        <div className="cart-buttons">
                            <button
                                className='cart-list-btn cart-checkout-btn'
                                onClick={(e) => navigate('/store/checkout', { replace: true })}
                            >
                                Checkout
                            </button>
                            <button className="cart-list-btn cart-clear-btn" onClick={handleDelete}>
                                <span className="material-symbols-rounded">shopping_cart_off</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar