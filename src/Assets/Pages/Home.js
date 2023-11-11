import React, { useState, useEffect, useRef } from "react";

function Home() {

    const [images, setImages] = useState([])
    const section1 = useRef(null)
    const section2 = useRef(null)

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
            console.log(entries)
            entries[0].target.classList.toggle('active', entries[0].isIntersecting)
        }, { threshold: 1 })
        observer.observe(section1.current)
        observer.observe(section2.current)
    }, [])

    return(
        <>
            <div id="quote" select="false">
                <span className="quote-start">“</span>
                <p className="quote-text">Innovation begins with the idea of change.</p>
                <span className="quote-end">”</span>
            </div>
            <section className='section-1' ref={section1}>
                <div className="carousel">
                    <div className="carousel-wrapper" select="false">
                        {images.map((image) => (
                            <div key={image.id} className="carousel-box">
                                <img src={image.urls.small_s3} alt="" />
                            </div>
                        ))}
                        {images.map((image) => (
                            <div key={image.id} className="carousel-box">
                                <img src={image.urls.small_s3} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="heading-container">
                    <h2 className="heading" select="false">Clicks</h2>
                </div>
            </section>
            <section className='section-2' ref={section2}>
                <div className="carousel">
                    <div className="carousel-wrapper" select="false">
                        {images.map((image) => (
                            <div key={image.id} className="carousel-box">
                                <img src={image.urls.small_s3} alt="" />
                            </div>
                        ))}
                        {images.map((image) => (
                            <div key={image.id} className="carousel-box">
                                <img src={image.urls.small_s3} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="heading-container">
                    <h2 className="heading" select="false">Projects</h2>
                </div>
            </section>
        </>
    )

}

export default Home