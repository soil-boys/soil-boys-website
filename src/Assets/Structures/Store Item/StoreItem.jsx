import React from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import './StoreItem.styles.css'

function StoreItem({ item, cart, setCart }) {

    function handlePress(item) {

        const itemIndex = cart.indexOf(item)
        console.log(itemIndex)

        if (itemIndex !== -1) setCart(prev => {
            const newCart = [...prev]
            newCart.splice(itemIndex, 1)
            return newCart
        })
        else setCart(prev => [...prev, item])

    }

    return (
        <div className='store-item'>
            <Link className="store-item-img" to={`/store/${item.pid}`}>
                <img src={item.images[0]} alt={item.name} select="false" />
            </Link>
            <div className="store-item-details">
                <div className="store-item-details-heading">
                    <Link className="store-item-details-name" to={`/store/${item.pid}`}>{item.name}</Link>
                    <div className="store-item-details-manufacturer">{item.seller}</div>
                </div>
                <div className="store-item-details-info">
                    <div className="store-item-details-pricing-container">
                        <button className="store-item-cart-btn" onClick={(e) => handlePress(item)} select="false">
                            <span className="material-symbols-rounded">{cart.indexOf(item) !== -1 ? "remove_shopping_cart" : "add_shopping_cart"}</span>
                        </button>
                        <div className="store-item-details-price">₹ {Math.round(item.price)}</div>
                    </div>
                    <div className="store-item-details-tags">
                        {
                            item.tags.map((tag) => (
                                <div key={uuidv4()} className="store-item-tag" select="false">
                                    <span className="hash material-symbols-rounded">tag</span>
                                    <span className="tag-text">{tag}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreItem