import React from 'react'

import './CarouselImageCard.styles.css'

function CarouselImageCard(image, ariaHidden = false) {
  return (
    <div key={image.id} aria-hidden={ariaHidden} className="carousel-box image-card">
        <img src={image.urls.small_s3} alt="" />
    </div>
  )
}

export default CarouselImageCard