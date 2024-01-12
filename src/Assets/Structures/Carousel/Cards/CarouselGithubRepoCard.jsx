import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import fork from './Assets/fork.svg'
import star from './Assets/star.svg'
import preview from './Assets/Preview.svg'
import defaultPreview from './Assets/defaultPreview.svg'

import './CarouselGithubRepoCard.styles.css'

function CarouselGithubRepoCard(item, ariaHidden = false) {


    return (
        <div key={uuidv4()} aria-hidden={ariaHidden} className="carousel-box project-card">
            <div className="banner">
            <div className="project-title-container">
                <a href={item?.url} className="project-title">
                    <span>{item?.org}</span>
                    <span>/</span>
                    <span>{item?.name}</span>
                </a>
            </div>
            <div className="labels">
                <div className="label">
                <span className="icon">
                    <img src={star} alt="" />
                </span>
                <div className="text">{item?.stars}</div>
                </div>
                <div className="label">
                <span className="icon">
                    <img src={fork} alt="" />
                </span>
                <div className="text">{item?.forks}</div>
                </div>
            </div>
            </div>
            <img className='repo-img' src={preview} alt="" />
        </div>
    )
}

export default CarouselGithubRepoCard