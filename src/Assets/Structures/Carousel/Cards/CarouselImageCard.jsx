import React from 'react'

import './CarouselImageCard.styles.css'

function CarouselImageCard(image, ariaHidden = false, loading) {
    return (
        <div key={crypto.randomUUID()} aria-hidden={ariaHidden} className="carousel-box image-card">
            {loading && <div className="skeleton-loading"></div>}
            <img src={image.url ? image.url : ''} alt="" />
        </div>
    )
}

export default CarouselImageCard