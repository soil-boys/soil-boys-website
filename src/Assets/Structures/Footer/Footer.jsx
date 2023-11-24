import React, { useEffect, useState } from 'react'

import './Footer.styles.css'
import { useNavigate } from 'react-router-dom'

const socials = [
    {
        id: 1,
        alt: 'github',
        link: 'https://github.com/soil-boys',
        img: '/Resources/github.svg'
    },
    {
        id: 2,
        alt: 'insta',
        link: 'https://www.instagram.com/soil.boys',
        img: '/Resources/instagram.svg'

    },
    {
        id: 3,
        alt: 'youtube',
        link: 'https://www.youtube.com/@Soilboys',
        img: '/Resources/youtube.svg'
    },
    {
        id: 4,
        alt: 'twitter-x',
        link: 'https://twitter.com/',
        img: '/Resources/twitter.svg'
    }
]

function Footer() {

    const navigate = useNavigate()

    const [clickTimes, setClickTimes] = useState(0)
    
    useEffect(() => {
        if (clickTimes === 10) {
            navigate('/login')
            setClickTimes(0)
            window.scroll(0, 0)
        }
    }, [clickTimes])


    return (
        <div id='footer'>
            <div className="footer-parallax">
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
            <div className="footer-content">
                <div className="column-1">
                    <div className="logo" select="false">
                        <img src="/logo_with_title_transparent.svg" alt="logo" />
                    </div>
                </div>
                <div className="column-2">
                    <a href='mailto:hreethgupta2006@gmail.com' className="contact-btn" select="false">
                        <span>Contact Us</span>
                    </a>
                    <div className="socials-bar" select="false">
                        <div className="socials-heading-container">
                            <h5 className="socials-heading">Connect with us</h5>
                            <span className="socials-heading-line"></span>
                        </div>
                        <div className="socials">
                            {
                                socials.map(social => (
                                    <a key={social.id} href={social.link} className="social">
                                        <img src={social.img} alt={social.alt} />
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-bar" select="false">
                <span onClick={() => setClickTimes(clickTimes + 1)}>
                    © Soil Boys {new Date().getFullYear()}
                </span>
            </div>
        </div>
    )
}

export default Footer