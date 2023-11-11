import React from 'react'

import fork from './Assets/fork.svg'
import star from './Assets/star.svg'

import './CarouselGithubRepoCard.styles.css'

function CarouselGithubRepoCard(image) {
  return (
    <div key={image.id} className="carousel-box project-card">
        <div className="banner">
          <div className="project-title-container">
            <div className="project-title">soil-boys / Mentis</div>
          </div>
          <div className="labels">
            <div className="label">
              <span className="icon">
                <img src={star} alt="" />
              </span>
              <div className="text">250</div>
            </div>
            <div className="label">
              <span className="icon">
                <img src={fork} alt="" />
              </span>
              <div className="text">1200</div>
            </div>
          </div>
        </div>
        <img className='repo-img' src={image.urls.small_s3} alt="" />
    </div>
  )
}

export default CarouselGithubRepoCard