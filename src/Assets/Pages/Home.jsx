import React, { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion'

import Carousel from "../Structures/Carousel/Carousel";

import updateDetails from "../../Functions/UpdateDetails.ts";
import getClicks from "../../Functions/getClicks.ts";

import { useFeed, useRepos } from "../../Hooks";

import '../Styles/Home.css'

function Home() {
    
    const [images, setImages] = useState(Array(10).fill(0))
    const [loadingClicks, setLoadingClicks] = useState(false)
    const [err, setErr] = useState('');

    const { feed, loading, error } = useFeed(4)
    const { repos, loadingRepos } = useRepos()

    const section1 = useRef(null)
    const section2 = useRef(null)
    const divider = useRef(null)
    const section3 = useRef(null)
    const details = useRef(null)

    const picture1 = useRef(null)
    const picture2 = useRef(null)
    const picture3 = useRef(null)
    const picture4 = useRef(null)
    const pictureRefArr = [picture1, picture2, picture3, picture4]

    const fetchData = async () => {
        setLoadingClicks(true)

        try {
            const data = await getClicks()
            setImages(data)
            setLoadingClicks(false)
        } catch (err) {
            setErr(err)
        } finally {
            setLoadingClicks(false)
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
        }, { threshold: 0.2 })
        latestObserver.observe(section3.current)


    }, [])
    
    useEffect(() => {
        const pictureObserver = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) updateDetails(entries[0].target, details.current)
        }, { threshold: 1 })
        if (feed) {
            pictureRefArr.forEach(ref => {
                pictureObserver.observe(ref.current)
            });
        }
    }, [loading])

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

    const defaultRegex = /^([^\n]+)$/gmi
    const equipmentRegex = /^(📸|🎞️)(.+)$/gmi
    const authorRegex = /^\@(.+)$/gmi

    let imageFeed = feed || null
    let latestContent = imageFeed && imageFeed.map(post => ({
        id: post.id,
        img: post.media_url,
        post_name: post.caption.match(defaultRegex)[0],
        post_author: post.caption.match(authorRegex)[0].replace(/@|@(\s+)/gi, ''),
        post_equipment: post.caption.match(equipmentRegex)[0].replace(/^(📸|🎞️)/gi, '')
    }))

    return(
        <motion.div
            id="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div id="quote" select="false">
                <span className="quote-start">“</span>
                <p className="quote-text">Technology, Photography, and Innovation for Positive Impact.</p>
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
                <Carousel content={loadingRepos ? content : [repos[0], repos[0], repos[0], repos[0], repos[0]]} type="repo" />
                <div className="heading-container">
                    <h2 className="heading" select="false">Projects</h2>
                </div>
            </section>
            <section className="section-3" ref={section3}>
                <div className="heading-container">
                    <h2 className="heading" select="false">Latest</h2>
                </div>
                <div className="content-wrapper">
                    <div className="side-bar">
                        <span className="dot"></span>
                        <span className="line"></span>
                    </div>
                    <div className="section-container">
                        <div className="picture-section">
                            {imageFeed && latestContent.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="img-container"
                                    ref={pictureRefArr[index]}
                                    data-name={item.post_name}
                                    data-author={item.post_author}
                                    data-equip={item.post_equipment}    
                                    >
                                    <img src={item.img} alt="" />
                                </div>
                            ))}
                        </div>
                        <div className="details-section" ref={details}>
                            <div className="details">
                                <div className="post-name" maskable="true">Post Name</div>
                                <a className="post-credit" target="_blank" rel="noopener noreferrer">
                                    <span className="post-credit-line">@</span>
                                    <span className="post-credit-author" maskable="true">Post Author</span>
                                </a>
                                <div className="post-equipment"><span>Shot on</span><span maskable="true">equipment used</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )

}

export default Home
                // const latestContent = [
                //     {
                //         id: 0,
                //         img: 'https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                //         post_name: 'Secrets in the foilage',
                //         post_author: 'Anubhab Baruah',
                //         post_equipment: 'fujifilm xt200 with 15-45mm kit lens'
                //     },
                //     {
                //         id: 1,
                //         img: 'https://images.pexels.com/photos/3685271/pexels-photo-3685271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                //         post_name: 'Sun setting into the red sky',
                //         post_author: 'Angad Sankhla',
                //         post_equipment: 'canon eos 1500d with 18-55mm lens'
                //     },
                //     {
                //         id: 2,
                //         img: 'https://images.pexels.com/photos/3640930/pexels-photo-3640930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                //         post_name: 'Life as a monotone aesthetic',
                //         post_author: 'Krishnav Barman',
                //         post_equipment: 'kodak ultramax (exp 2011) on pentax zoom 280p'
                //     },
                //     {
                //         id: 3,
                //         img: 'https://images.pexels.com/photos/3563630/pexels-photo-3563630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                //         post_name: 'Camera',
                //         post_author: 'Daksh Singh Minhas',
                //         post_equipment: 'Canon EOS M50 Mark II with 15-45mm lens'
                //     },
                // ]