import React, { useState, useEffect, useRef } from "react";
import Carousel from "../Structures/Carousel/Carousel";

function Home() {

    const [images, setImages] = useState([])
    const section1 = useRef(null)
    const section2 = useRef(null)
    const divider = useRef(null)

    const fetchData = async () => {
        try {
            const url = "https://api.unsplash.com/photos?page=1&per_page=10"
            const response = await fetch(url, {
                headers: {
                    'Authorization': 'Client-ID eDyJr4X3MDuPISfgHCAUDyZ49BlIrosNA_shUgy9i9k'
                }
            })
            const res = await response.json()
            setImages(res)
        } catch (err) {
            return
        }
    }
    useEffect(() => {
        fetchData()

        const observer = new IntersectionObserver(entries => {
            entries[0].target.classList.toggle('visible', entries[0].isIntersecting)
        }, { threshold: 1 })

        observer.observe(section1.current)
        observer.observe(section2.current)
        
        const divisionObserver = new IntersectionObserver(entries => {
            entries[0].target.classList.toggle('visible', entries[0].isIntersecting)
        }, { threshold: 1 })
        divisionObserver.observe(divider.current)

    }, [])

    const content = [
        {
            id: 1,
            cover: true,
            stars: 256,
            forks: 200
        },
        {
            id: 2,
            cover: false,
            stars: 222,
            forks: 1000
        },
        {
            id: 3,
            cover: true,
            stars: 2226,
            forks: 2500
        },
        {
            id: 4,
            cover: true,
            stars: 100,
            forks: 200
        },
        {
            id: 5,
            cover: true,
            stars: 521,
            forks: 500
        },
    ]

    return(
        <>
            <div id="quote" select="false">
                <span className="quote-start">“</span>
                <p className="quote-text">Innovation begins with the idea of change.</p>
                <span className="quote-end">”</span>
            </div>
            <section className='section-1' style={{ '--speed': '20s' }} ref={section1}>
                <Carousel content={images} />
                <div className="heading-container">
                    <h2 className="heading" select="false">Clicks</h2>
                </div>
            </section>
            <div id="divider" ref={divider}>
                <span className="line left"></span>
                <span className="dot"></span>
                <span className="line right"></span>
            </div>
            <section className='section-2' style={{ '--speed': '10s' }} ref={section2}>
                <Carousel content={content} type="repo" />
                <div className="heading-container">
                    <h2 className="heading" select="false">Projects</h2>
                </div>
            </section>
        </>
    )

}

export default Home