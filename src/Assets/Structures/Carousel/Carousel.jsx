import React, { useRef } from 'react'
import CarouselImageCard from './Cards/CarouselImageCard'
import CarouselGithubRepoCard from './Cards/CarouselGithubRepoCard'

import './Carousel.style.css'

function Carousel({ content = Array(10).fill(0), type = 'image' }) {

  const ref = useRef(null)

  return (
    <div className="carousel">
        <div className="carousel-wrapper" style={{ animationDuration: `${content.length * 2}s` }} select="false" ref={ref}>
            {content.map((item) => type === 'repo' ? CarouselGithubRepoCard(item) : CarouselImageCard(item))}
            {content.map((item) => type === 'repo' ? CarouselGithubRepoCard(item, true) : CarouselImageCard(item, true))}
        </div>
    </div>
  )
}

export default Carousel