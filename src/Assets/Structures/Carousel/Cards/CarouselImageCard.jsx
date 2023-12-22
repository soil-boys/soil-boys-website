import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import './CarouselImageCard.styles.css'

function CarouselImageCard(image, ariaHidden = false) {
    return (
        <div key={uuidv4()} aria-hidden={ariaHidden} className="carousel-box image-card">
            <img src={image.url ? image.url : ''} alt="" />
        </div>
    )
}

export default CarouselImageCard