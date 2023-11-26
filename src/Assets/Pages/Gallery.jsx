import React, { useRef } from "react";
import { motion } from "framer-motion";

import '../Styles/Gallery.css'

function Gallery() {

    const imgArr = [
        'https://images.pexels.com/photos/3563630/pexels-photo-3563630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3640930/pexels-photo-3640930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3685271/pexels-photo-3685271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]

    const dateDay = useRef(null)
    const dateMonth = useRef(null)
    const dateYear = useRef(null)

    return(
        <motion.div
            id="gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="gallery-sections">
                <div className="gallery-section" data-day="18" data-month="06" data-year="2023">
                    <h3 className="date">
                        <div className="date-container">
                            <span ref={dateDay}>18</span>
                            <span> / </span>
                            <span ref={dateMonth}>06</span>
                            <span> / </span>
                            <span ref={dateYear}>2023</span>
                        </div>
                    </h3>
                    <div className="img-wrapper">
                        {Array(Math.floor(Math.random() * 16) + 1).fill(0).map(img => (
                            <div className="gallery-img">
                                <img src={imgArr[Math.floor(Math.random() * imgArr.length)]} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="gallery-section" data-day="17" data-month="06" data-year="2023">
                    <h3 className="date">
                        <div className="date-container">
                            <span ref={dateDay}>17</span>
                            <span> / </span>
                            <span ref={dateMonth}>06</span>
                            <span> / </span>
                            <span ref={dateYear}>2023</span>
                        </div>
                    </h3>
                    <div className="img-wrapper">
                        {Array(Math.floor(Math.random() * 16) + 1).fill(0).map(img => (
                            <div className="gallery-img">
                                <img src={imgArr[Math.floor(Math.random() * imgArr.length)]} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="gallery-section" data-day="16" data-month="06" data-year="2023">
                    <h3 className="date">
                        <div className="date-container">
                            <span ref={dateDay}>16</span>
                            <span> / </span>
                            <span ref={dateMonth}>06</span>
                            <span> / </span>
                            <span ref={dateYear}>2023</span>
                        </div>
                    </h3>
                    <div className="img-wrapper">
                        {Array(Math.floor(Math.random() * 16) + 1).fill(0).map(img => (
                            <div className="gallery-img">
                                <img src={imgArr[Math.floor(Math.random() * imgArr.length)]} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="gallery-section" data-day="15" data-month="06" data-year="2023">
                    <h3 className="date">
                        <div className="date-container">
                            <span ref={dateDay}>15</span>
                            <span> / </span>
                            <span ref={dateMonth}>06</span>
                            <span> / </span>
                            <span ref={dateYear}>2023</span>
                        </div>
                    </h3>
                    <div className="img-wrapper">
                        {Array(Math.floor(Math.random() * 16) + 1).fill(0).map(img => (
                            <div className="gallery-img">
                                <img src={imgArr[Math.floor(Math.random() * imgArr.length)]} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="gallery-section" data-day="14" data-month="06" data-year="2023">
                    <h3 className="date">
                        <div className="date-container">
                            <span ref={dateDay}>14</span>
                            <span> / </span>
                            <span ref={dateMonth}>06</span>
                            <span> / </span>
                            <span ref={dateYear}>2023</span>
                        </div>
                    </h3>
                    <div className="img-wrapper">
                        {Array(Math.floor(Math.random() * 16) + 1).fill(0).map(img => (
                            <div className="gallery-img">
                                <img src={imgArr[Math.floor(Math.random() * imgArr.length)]} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="gallery-section" data-day="13" data-month="06" data-year="2023">
                    <h3 className="date">
                        <div className="date-container">
                            <span ref={dateDay}>13</span>
                            <span> / </span>
                            <span ref={dateMonth}>06</span>
                            <span> / </span>
                            <span ref={dateYear}>2023</span>
                        </div>
                    </h3>
                    <div className="img-wrapper">
                        {Array(Math.floor(Math.random() * 16) + 1).fill(0).map(img => (
                            <div className="gallery-img">
                                <img src={imgArr[Math.floor(Math.random() * imgArr.length)]} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="gallery-section" data-day="12" data-month="06" data-year="2023">
                    <h3 className="date">
                        <div className="date-container">
                            <span ref={dateDay}>12</span>
                            <span> / </span>
                            <span ref={dateMonth}>06</span>
                            <span> / </span>
                            <span ref={dateYear}>2023</span>
                        </div>
                    </h3>
                    <div className="img-wrapper">
                        {Array(Math.floor(Math.random() * 16) + 1).fill(0).map(img => (
                            <div className="gallery-img">
                                <img src={imgArr[Math.floor(Math.random() * imgArr.length)]} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="gallery-section" data-day="11" data-month="06" data-year="2023">
                    <h3 className="date">
                        <div className="date-container">
                            <span ref={dateDay}>11</span>
                            <span> / </span>
                            <span ref={dateMonth}>06</span>
                            <span> / </span>
                            <span ref={dateYear}>2023</span>
                        </div>
                    </h3>
                    <div className="img-wrapper">
                        {Array(Math.floor(Math.random() * 16) + 1).fill(0).map(img => (
                            <div className="gallery-img">
                                <img src={imgArr[Math.floor(Math.random() * imgArr.length)]} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )

}

export default Gallery