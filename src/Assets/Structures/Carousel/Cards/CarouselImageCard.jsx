import React from 'react'

import './CarouselImageCard.styles.css'

function CarouselImageCard(image, ariaHidden = false) {
  return (
    <div key={crypto.randomUUID()} aria-hidden={ariaHidden} className="carousel-box image-card">
        <img src={image.url ? image.url : ''} alt="" />
    </div>
  )
}

export default CarouselImageCard