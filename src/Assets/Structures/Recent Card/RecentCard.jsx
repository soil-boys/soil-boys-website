import React from 'react'

import getIcon from '../../../Functions/getIcon.ts'

import './RecentCard.styles.css'

function RecentCard({ animation = true, content }) {

    return (
        <div className='recent-card' select="false" animation={animation}>
            <div className="recent-card-content">
                <div className="content-header">
                    <div className="content-logo">
                        <img src={content.logo} alt="logo" />                                                                                                                                                                                                                                                                                                                                                                                                 
                    </div>
                    <h5 className="content-title">Mentis – Your personal mood tracking app!</h5>
                </div>
                <div className="content-labels">
                    <div className="content-tools">
                        {content.labels.tools.map(tool => (
                            <div className="tool-icon">
                                <img src={getIcon(tool)} alt={tool} />
                            </div>
                        ))}
                    </div>
                    <span className="content-labels-divider"></span>
                    <div className="content-type">{content.labels.type}</div>
                </div>
                <div className="content-description">
                    {content.description}
                </div>
                <div className="content-links">
                    {content.links.map(link => (
                        <a target='_blank' rel='noreferrer noopener' href={link.url} className="content-link">
                            <span className="link-text">{link.name}</span>
                            <span className="link-icon">
                                <img src={getIcon(`minimal:${link.icon}`)} alt={link.icon} /></span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RecentCard