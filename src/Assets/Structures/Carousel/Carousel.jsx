import React, { useEffect, useRef } from 'react'
import CarouselImageCard from './Cards/CarouselImageCard'
import CarouselGithubRepoCard from './Cards/CarouselGithubRepoCard'

import './Carousel.style.css'

function Carousel({ content, type = 'image' }) {

  const ref = useRef(null)

  return (
    <div className="carousel">
        <div className="carousel-wrapper" select="false" ref={ref}>
            {content.map((item) => type === 'repo' ? CarouselGithubRepoCard(item) : CarouselImageCard(item))}
            {content.map((item) => type === 'repo' ? CarouselGithubRepoCard(item, true) : CarouselImageCard(item, true))}
        </div>
    </div>
  )
}

export default Carousel