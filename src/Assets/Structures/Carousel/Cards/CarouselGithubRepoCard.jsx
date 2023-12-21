import React from 'react'

import fork from './Assets/fork.svg'
import star from './Assets/star.svg'
import preview from './Assets/Preview.svg'
import defaultPreview from './Assets/defaultPreview.svg'

import './CarouselGithubRepoCard.styles.css'

function CarouselGithubRepoCard(item, ariaHidden = false,) {
    return (
        <div key={crypto.randomUUID()} aria-hidden={ariaHidden} className="carousel-box project-card">
            <div className="banner">
            <div className="project-title-container">
                <a href='https://github.com/soil-boys/Mentis' className="project-title">
                <span>soil-boys</span>
                <span>/</span>
                <span>Mentis</span>
                </a>
            </div>
            <div className="labels">
                <div className="label">
                <span className="icon">
                    <img src={star} alt="" />
                </span>
                <div className="text">{item.stars}</div>
                </div>
                <div className="label">
                <span className="icon">
                    <img src={fork} alt="" />
                </span>
                <div className="text">{item.forks}</div>
                </div>
            </div>
            </div>
            <img className='repo-img' src={item.cover ? preview : defaultPreview} alt="" />
        </div>
    )
}

export default CarouselGithubRepoCard