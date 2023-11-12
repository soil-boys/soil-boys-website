import React, { useState, useEffect, useRef } from "react";
import Carousel from "../Structures/Carousel/Carousel";

function Home() {

    const [images, setImages] = useState([])
    const section1 = useRef(null)
    const section2 = useRef(null)
    const divider = useRef(null)
    const section3 = useRef(null)
    const details = useRef(null)

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
        }, { threshold: .9 })

        observer.observe(section1.current)
        observer.observe(section2.current)
        
        const divisionObserver = new IntersectionObserver(entries => {
            entries[0].target.classList.toggle('visible', entries[0].isIntersecting)
        }, { threshold: 1 })
        divisionObserver.observe(divider.current)

        const latestObserver = new IntersectionObserver(entries => {
            entries[0].target.classList.toggle('visible', entries[0].isIntersecting)
            // details.current.classList.toggle('visible', entries[0].intersectionRatio > 0.25)
        }, { threshold: 0.2 })
        latestObserver.observe(section3.current)

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
            <section className="section-3" ref={section3}>
                <div className="heading-container">
                    <h2 className="heading" select="false">Latest</h2>
                </div>
                <div className="content-wrapper">
                    <span className="side-bar"></span>
                    <div className="section-container">
                        <div className="picture-section">
                                <div className="img-container">
                                    <img src="https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                </div>
                                <div className="img-container">
                                    <img src="https://images.pexels.com/photos/3685271/pexels-photo-3685271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                </div>
                                <div className="img-container">
                                    <img src="https://images.pexels.com/photos/3640930/pexels-photo-3640930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                </div>
                                <div className="img-container">
                                    <img src="https://images.pexels.com/photos/3563630/pexels-photo-3563630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcSet="  " />
                                </div>
                        </div>
                        <div className="details-section" ref={details}>
                            <div className="details">
                                <div className="post-name">Name</div>
                                <a className="post-credit">
                                    <span className="post-credit-line">@</span>
                                    <span className="post-credit-author">Anubhab Baruah</span>
                                </a>
                                <div className="post-equipment"><span>Shot on</span>fujifilm xt200 with 15-45mm kit lens</div>
                            </div>
                            {/* <div className="details">
                                <div className="post-name">Name</div>
                                <div className="post-credit">
                                    <span className="post-credit-line">~</span>
                                    <span className="post-credit-author">Angad Sankhla</span>
                                </div>
                                <div className="post-equipment">canon eos 1500d with 18-55mm lens</div>
                            </div>
                            <div className="details">
                                <div className="post-name">Name</div>
                                <div className="post-credit">
                                    <span className="post-credit-line">~</span>
                                    <span className="post-credit-author">Krishnav Barman</span>
                                </div>
                                <div className="post-equipment">kodak ultramax (exp 2011) on pentax zoom 280p</div>
                            </div>
                            <div className="details">
                                <div className="post-name">Name</div>
                                <div className="post-credit">
                                    <span className="post-credit-line">~</span>
                                    <span className="post-credit-author">Daksh Singh Minhas</span>
                                </div>
                                <div className="post-equipment">Canon EOS M50 Mark II with 15-45mm lens</div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Home