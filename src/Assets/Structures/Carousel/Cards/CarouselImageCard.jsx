import React from 'react'

import './CarouselImageCard.styles.css'

function CarouselImageCard(image) {
  return (
    <div key={image.id} className="carousel-box image-card">
        <img src={image.urls.small_s3} alt="" />
    </div>
  )
}

export default CarouselImageCard