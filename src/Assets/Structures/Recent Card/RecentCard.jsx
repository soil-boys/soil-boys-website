import React from 'react'

import getIcon from '../../../Functions/getIcon.ts'

import './RecentCard.styles.css'

function RecentCard({ animation = true, content }) {

    function mouseMove(e) {
        const shadow = e.currentTarget.querySelector('.mouse-shadow')

        let rect = e.currentTarget.getBoundingClientRect()
        let mouseX = e.clientX - rect.left
        let mouseY = e.clientY - rect.top
        // let h = rect.height
        // let w = rect.width

        // let px = Math.abs(Math.floor(100 / w * mouseX) - 100)
        // let py = Math.abs(Math.floor(100 / h * mouseY) - 100)

        // let lp = 50 + (px - 50) / 1.5
        // let tp = 50 + (py - 50) / 1.5
        // let tx = ((lp - 50) / 1.5) * .5
        // let ty = ((tp - 50) / 2) * -1

        shadow.setAttribute('style', `--mouse-x: ${mouseX}px; --mouse-y: ${mouseY}px`)
        // e.currentTarget.setAttribute('style', `--angle-x: ${ty}deg; --angle-y: ${tx}deg`)
    }

    return (
        <div className="recent-card-container">
            <div className='recent-card' select="false" animation={animation}>
                <div className="recent-card-content">
                    <div className="content-header">
                        <div className="content-logo">
                            <img src={content.logo} alt="logo" />                                                                                                                                                                                                                                                                                                                                                                                                 
                        </div>
                        <h5 className="content-title">{content.title}</h5>
                    </div>
                    <div className="content-labels">
                        <div className="content-type">{content.labels.type}</div>
                        <span className="content-labels-divider"></span>
                        <div className="content-tools">
                            {content.labels.tools.map(tool => (
                                <div className="tool-icon">
                                    <img src={getIcon(tool)} alt={tool} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="content-description">
                        {content.description}
                    </div>
                    <div className="content-links">
                        {content.links.map(link => (
                            <a target='_blank' rel='noreferrer noopener' href={link.url} className="content-link">
                                <span className="link-text">{link.name}</span>
                                <span className="link-icon">
                                    <img src={getIcon(`minimal:${link.icon}`) || getIcon("minimal:link")} alt={link.icon} /></span>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="recent-card-pictures">
                    <div className="recent-card-picture">
                        <img src="/Resources/reference images/13125b5e-067b-45d3-aad3-1978c557a262-transformed 1 (1).png" alt="" />
                    </div>
                </div>
                {/* {animation &&
                    <div className="reflection">
                        <div className="mouse-shadow"></div>
                    </div>
                } */}
            </div>
        </div>
    )
}

export default RecentCard