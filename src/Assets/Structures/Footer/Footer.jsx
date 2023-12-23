import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'

import './Footer.styles.css'

const socials = [
    {
        id: 1,
        alt: 'github',
        link: 'https://github.com/soil-boys',
        img: '/Resources/github.svg'
    },
    {
        id: 2,
        alt: 'instagram',
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
        link: 'https://twitter.com/TheSoilboys_',
        img: '/Resources/twitter.svg'
    },
    {
        id: 5,
        alt: 'linkedin',
        link: 'https://www.linkedin.com/company/thesoilboys/',
        img: '/Resources/linkedin.svg'
    }
]

function Footer() {

    const navigate = useNavigate()

    const location = useLocation()

    const [clickTimes, setClickTimes] = useState(0)
    const [height, setHeight] = useState('auto')
    const [width, setWidth] = useState('100vw')

    useEffect(() => {
        if (clickTimes >= 10 && ['/login', '/dashboard'].some(__ => __ !== location.pathname)) {
            navigate('/dashboard')
            setClickTimes(0)
            window.scroll(0, 0)
        }
    }, [clickTimes, navigate])

    useEffect(() => {
        window.addEventListener('resize', (e) => {
            setHeight(`${document.querySelector('#footer').clientHeight}px`)
            setWidth(`${document.querySelector("#footer").clientWidth}px`)
        })
        setHeight(`${document.querySelector("#footer").clientHeight}px`)
        setWidth(`${document.querySelector("#footer").clientWidth}px`)
    }, [])

    return (
        <div id='footer'>
            <div className="footer-parallax" style={{ height: height, width: width }}>
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
                    <a href='mailto:soilboys.dev@gmail.com' className="contact-btn" select="false">
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
                                    <a
                                        key={social.id}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='social'
                                    >
                                        <img src={social.img} alt={social.alt} />
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-bar" select="false">
                <div className="copyright-bar">
                    <span onClick={() => setClickTimes(clickTimes + 1)}>
                        © Soil Boys {new Date().getFullYear()}
                    </span>
                </div>
                <div className="policies-bar">
                    <Link className="policy-link" to="/policies/terms-of-service" onClick={() => window.scroll(0, 0)}>Terms of Service</Link>
                    <span className="separator"></span>
                    <Link className="policy-link" to="/policies/privacy-policy" onClick={() => window.scroll(0, 0)}>Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer