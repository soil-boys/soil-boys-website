import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { useGallery } from "../../Hooks";

import PhotoViewer from "../Structures/Photo Viewer/PhotoViewer";
import Loader from '../Structures/Loader/Loader'

import '../Styles/Gallery.css'

function Gallery() {

    document.title = "Soil Gallery"

    const { groupedPosts, currentPage, loading, refetch } = useGallery(1);

    const [deferredLoading, setDeferredLoading] = useState(true)
    const [viewing, setViewing] = useState(false)
    
    useEffect(() => {
        setTimeout(() => {
            setDeferredLoading(false)
        }, 5000)
    }, [])

    useEffect(() => {
        if (!groupedPosts.length || groupedPosts.length === 0) return

        let elements = [...document.querySelectorAll(".gallery-section")]
        if (!elements.length || elements.length === 0) return
        let target = elements[elements.length - 1]
        if (!target) return

        const sectionObserver = new IntersectionObserver(() => {
            refetch(currentPage + 1)
        }, { threshold: 0.8 })
        sectionObserver.observe(target)
    }, [loading])

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
            <div className="err-text">
                Down for the time being.
            </div>
            {/* {viewing && <PhotoViewer photo={viewing} setViewing={setViewing} />} */}
            {/* <div className="gallery-sections" select="false">
                {groupedPosts.map(section => (
                    <div key={section?.date} className="gallery-section">
                        <h3 className="date">
                            <div className="date-container">
                                <span>{section?.date?.split('-')[0]}</span>
                                <span> / </span>
                                <span>{section?.date?.split('-')[1]}</span>
                                <span> / </span>
                                <span>{section?.date?.split('-')[2]}</span>
                            </div>
                        </h3>
                        <div className="img-wrapper">
                            {section?.posts?.map(img => (
                                <a key={img.id} className="gallery-img" onClick={() => !deferredLoading ? openViewer(img) : null}>
                                    <img loading="lazy" src={img.media_url} alt={img.caption.match(/^([^\n]+)$/gmi)[0]} />
                                    {deferredLoading && <div className="skeleton-loading"></div>}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
                {loading && <Loader />}
            </div> */}
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