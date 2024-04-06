import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from 'uuid';

import '../Styles/About.css'

function About() {

    document.title = "Our Soily Journey"

    const motive = useRef(null)
    const foundersContainer = useRef(null)

    useEffect(() => {
        const divisionObserver = new IntersectionObserver(entries => {
            entries[0].target.classList.toggle('visible', entries[0].isIntersecting)
        }, { threshold: 1 })
        divisionObserver.observe(motive.current)

        const foundersObserver = new IntersectionObserver(entries => {
            entries[0].target.classList.toggle('visible', entries[0].isIntersecting)
        }, { threshold: .2 })
        foundersObserver.observe(foundersContainer.current)
    }, [])

    const founders = [
        {
            name: 'Anubhab Baruah',
            pfp: '/Resources/admin/anubhab.jpg',
            socials: [
                {
                    name: 'github',
                    url: 'https://github.com/yago955'
                },
                {
                    name: 'linkedin',
                    url: 'https://www.linkedin.com/in/anubhab-baruah'
                },
                {
                    name: 'instagram',
                    url: 'https://www.instagram.com/bobsama__'
                },
                {
                    name: 'youtube',
                    url: 'https://www.youtube.com/@bobsama_'
                }
            ]
        },
        {
            name: 'Daksh Singh Minhas',
            pfp: '/Resources/admin/daksh.jpg',
            socials: [
                {
                    name: 'github',
                    url: 'https://github.com/ducx2'
                },
                {
                    name: 'linkedin',
                    url: 'https://www.linkedin.com/in/daksh-singh-minhas-65606227b'
                },
                {
                    name: 'instagram',
                    url: 'https://www.instagram.com/raahhdux'
                }
            ]
        },
        {
            name: 'Krishnav Barman',
            pfp: '/Resources/admin/krishnav.jpg',
            socials: [
                {
                    name: 'linkedin',
                    url: 'https://www.linkedin.com/in/krishnav-barman'
                },
                {
                    name: 'instagram',
                    url: 'https://www.instagram.com/kr1shnav'
                }
            ]
        },
        {
            name: 'Angad Saini',
            pfp: '/Resources/admin/angad.jpg',
            socials: [
                {
                    name: 'linkedin',
                    url: 'https://www.linkedin.com/in/angad-saini'
                },
                {
                    name: 'instagram',
                    url: 'https://www.instagram.com/ayeangad'
                }
            ]
        },
        {
            name: 'Hreeth Gupta',
            pfp: '/Resources/admin/hreeth.jpg',
            socials: [
                {
                    name: 'github',
                    url: 'https://github.com/Risuleia'
                },
                {
                    name: 'linkedin',
                    url: 'https://www.github.com/hreeth-gupta'
                },
                {
                    name: 'instagram',
                    url: 'https://www.instagram.com/risuleia'
                }
            ]
        }
    ]

    function morph(e) {
        const shadow = e.currentTarget.querySelector('.mouse-shadow')

        let rect = e.currentTarget.getBoundingClientRect()
        let mouseX = e.clientX - rect.left
        let mouseY = e.clientY - rect.top
        let h = rect.height
        let w = rect.width

        let px = Math.abs(Math.floor(100 / w * mouseX) - 100)
        let py = Math.abs(Math.floor(100 / h * mouseY) - 100)

        let lp = 50 + (px - 50) / 1.5
        let tp = 50 + (py - 50) / 1.5
        let tx = ((lp - 50) / 1.5) * .8
        let ty = ((tp - 50) / 2) * -1

        shadow.setAttribute('style', `--mouse-x: ${mouseX}px; --mouse-y: ${mouseY}px`)
        e.currentTarget.setAttribute('style', e.currentTarget.getAttribute('style') + `; --angle-x: ${ty}deg; --angle-y: ${tx}deg`)
    }

    return (
        <motion.div
            id="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="about-container">
                <section className="about-us-section">
                    <div className="heading-container" animate="false">
                        <h2 className="about-us-heading" select="false">About Us</h2>
                    </div>
                    <div className="about-us-content">
                        <div className="logo-container" select="false">
                            <div className="outer-circle">
                                <div className="center--logo">
                                    <img src="/logo_transparent.svg" alt="" />
                                </div>
                                <a className="department-logo" target="_blank" rel="noopener noreferrer" href="https://github.com/soil-boys">
                                    <div className="pulse"></div>
                                    <span className="material-symbols-rounded department-icon">code</span>
                                </a>
                                <a className="department-logo" target="_blank" rel="noopener noreferrer" href="https://instagram.com/soil.boys">
                                    <div className="pulse"></div>
                                    <span className="material-symbols-rounded department-icon">camera</span>
                                </a>
                                <a className="department-logo" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@Soilboys">
                                    <div className="pulse"></div>
                                    <span className="material-symbols-rounded department-icon">mic</span>
                                </a>
                            </div>
                        </div>
                        <p className="about-us-text">
                            <span>
                                Soil Boys is a dynamic and innovative international multi-sector startup committed to revolutionizing the modernization of services. Our mission is to innovate and create for the enhancement, convenience and efficiency of technology. Leveraging cutting-edge technology and a global perspective, Soil Boys aims to drive efficiency and deliver groundbreaking solutions to real-life problems, as well as to develop upon new ideas for commmon cases.
                                <br />
                                At Soil Boys, we take pride in our diverse team of experts who bring a wealth of experience and creativity to the table. Our commitment to excellence is reflected in our work. As a forward-thinking company, we are dedicated to staying at the forefront of industry trends and embracing a culture of continuous innovation.
                                <br />
                                Let us take you on our journey to redefine innovation through passion, expertise, and a global mindset. Together, we are Soil Boys — shaping the future, one piece at a time.
                            </span>
                        </p>
                    </div>
                </section>
                <section className="motive-section" select="false" ref={motive}>
                    <p className="motive-text">
                        To redefine, re-enhance and renovate standards in order to provide for the public.
                    </p>
                    <div className="bottom-divider" select="false">
                        <span className="line"></span>
                        <div className="bottom-heading"><h4>Our Motive</h4></div>
                        <span className="line"></span>
                    </div>
                </section>
                <section className="founders-section">
                    <div className="heading-container center" animate="false">
                        <h2 className="founders-heading" select="false">Founding Team</h2>
                    </div>
                    <div className="founders-container" ref={foundersContainer}>
                        {founders.map((founder, index) => (
                            <div key={uuidv4()} className="founder-card" select="false" style={{ animationDelay: `${index * 300}ms` }} onMouseMove={morph}>
                                <div className="founder-image">
                                    {founder.pfp
                                        ?
                                    <img src={founder.pfp} alt={founder.name} />
                                        :
                                    <span className="default-img material-symbols-rounded">person</span>}
                                </div>
                                <div className="founder-details">
                                    <div className="founder-name">{founder.name}</div>
                                    <div className="founder-socials">
                                        {founder.socials.map((social, i) => (
                                            <a
                                                key={uuidv4()}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='founder-social'
                                                style={{ animationDelay: `${((index + 1) * 300) + ((i + 1) * 300)}ms` }}
                                            >
                                                <img src={`/Resources/${social.name}.svg`} alt={social.name} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="reflection">
                                    <div className="mouse-shadow"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </motion.div>
    )

}

export default About