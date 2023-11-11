import React from 'react'
import CarouselImageCard from './Cards/CarouselImageCard'
import CarouselGithubRepoCard from './Cards/CarouselGithubRepoCard'

import './Carousel.style.css'

function Carousel({ content, type = 'image' }) {
  return (
    <div className="carousel">
        <div className="carousel-wrapper" select="false">
            {content.map((image) => type === 'repo' ? CarouselGithubRepoCard(image) : CarouselImageCard(image))}
            {content.map((image) => type === 'repo' ? CarouselGithubRepoCard(image) : CarouselImageCard(image))}
        </div>
    </div>
  )
}

export default Carousel