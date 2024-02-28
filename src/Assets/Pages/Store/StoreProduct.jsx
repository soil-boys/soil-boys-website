import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import '../../Styles/StoreProduct.css'

function StoreProduct() {

    const { pid } = useParams()

    const [hovered, setHovered] = useState(false)

    return (
        <motion.div
            id="store-product"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="store-back-link" select="false">
                <Link
                    className={`back-link${(hovered) ? ' hovered' : ''}`}
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
                        <span>Go back</span>
                        <span className="back-link-underline"></span>
                    </div>
                </Link>
            </div>
            <div className="store-product-container">
                <div className="@container">
                    <div className="store-product-main">
                        <div className="store-image-gallery"></div>
                        <div className="store-details"></div>
                    </div>
                </div>
                <div className="store-product-secondary"></div>
            </div>
        </motion.div>
    )
}

export default StoreProduct