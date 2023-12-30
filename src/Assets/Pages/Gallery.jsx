import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import useFeed from "../../Hooks/useFeed";
import formatFeed from "../../Functions/formatFeed";

import PhotoViewer from "../Structures/Photo Viewer/PhotoViewer";

import '../Styles/Gallery.css'

function Gallery() {

    const { feed, loading, error } = useFeed()

    const [deferredLoading, setDeferredLoading] = useState(true)
    const [viewing, setViewing] = useState(false)
    
    let formattedFeed = formatFeed(feed)

    useEffect(() => {
        setTimeout(() => {
            setDeferredLoading(false)
        }, 5000)
    }, [])

    function openViewer(img) {
        setViewing(img)
    }
    
    return (
        <motion.div
            id="gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {viewing && <PhotoViewer photo={viewing} setViewing={setViewing} />}
            <div className="gallery-sections" select="false">
                {!loading && formattedFeed?.map(section => (
                    <div key={section?.date} className="gallery-section">
                        <h3 className="date">
                            <div className="date-container">
                                <span>{section?.date?.split('/')[0]}</span>
                                <span> / </span>
                                <span>{section?.date?.split('/')[1]}</span>
                                <span> / </span>
                                <span>{section?.date?.split('/')[2]}</span>
                            </div>
                        </h3>
                        <div className="img-wrapper">
                            {section?.images?.map(img => (
                                <a key={img.id} className="gallery-img" onClick={() => !deferredLoading ? openViewer(img) : null}>
                                    <img src={img.media_url} alt={img.caption.match(/^([^\n]+)$/gmi)[0]} />
                                    {deferredLoading && <div className="skeleton-loading"></div>}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
    
}

export default Gallery

// const imgArr = [
//     'https://images.pexels.com/photos/3563630/pexels-photo-3563630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     'https://images.pexels.com/photos/3640930/pexels-photo-3640930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     'https://images.pexels.com/photos/3685271/pexels-photo-3685271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     'https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
// ]