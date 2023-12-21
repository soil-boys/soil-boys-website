import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import useChanges from '../../Hooks/useChanges'

import Carousel from '../Structures/Carousel/Carousel'
import ImagePreview from '../Structures/Image Preview/ImagePreview'

import getClicks from '../../Functions/getClicks'
import fill from '../../Functions/fill'

import '../Styles/Dashboard.css'

function Dashboard() {

    const { changes, setChanges } = useChanges()

    const [images, setImages] = useState(Array(10).fill(0))
    const [tempFiles, setTempFiles] = useState([])

    const previews = useRef(null)
    const dropper = useRef(null)

    function checkEqual(arr1, arr2) {
        if (!arr1 || !arr2) return true
        if (![arr1, arr2].some(arr => typeof arr === 'object')) return true

        return (JSON.stringify(arr1) === JSON.stringify(arr2))
    }

    async function handleFiles(e) {
        e.preventDefault()

        // update state
        setTempFiles([
            ...tempFiles,
            { url: URL.createObjectURL(e.target.files[0]), id: crypto.randomUUID() }
        ])

        // cleanup
        e.target.value = null
    }

    const fetchData = async () => {
        const data = await getClicks(images)
        setImages(data)
    }

    console.log(changes)
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <motion.div id="dashboard">
            <div className="dashboard-container">
                <section className='carousel-section'>
                    <div className="heading-container" animate="false" select="false">
                        <span className='material-icons-round settings-icon'>settings</span>
                        <h2 className="heading settings-heading">Clicks</h2>
                    </div>
                    <div className={`editing-container${(tempFiles.length === 10 || images.length === 10) ? ' disabled' : ''}`}>
                        <div className="image-column">
                            <div className="image-list">
                                {fill(images).map((img, index) => (
                                    <ImagePreview
                                        key={crypto.randomUUID()}
                                        img={img?.url}
                                        order={img?.order}
                                        index={index + 1}
                                        images={images}
                                        setImages={setImages}
                                        reference={img.ref}
                                        changes={changes}
                                        setChanges={setChanges}
                                    />
                                ))}
                            </div>
                            <div className="image-preview" ref={previews}>
                                {tempFiles.map(tempFile => (
                                    <ImagePreview
                                        key={tempFile.id}
                                        id={tempFile.id}
                                        img={tempFile.url}
                                        cleanup="true"
                                        tempFiles={tempFiles}
                                        setTempFiles={setTempFiles}
                                        images={images}
                                        setImages={setImages}
                                        temp="true"
                                        changes={changes}
                                        setChanges={setChanges}
                                    />)
                                )}
                            </div>
                        </div>
                        <div className="image-dropper">
                            <div className="dropper-pane">
                                <input
                                    type="file"
                                    name="Image Dropper"
                                    accept='image/*'
                                    id="dropper"
                                    onChange={handleFiles}
                                    ref={dropper}
                                    disabled={tempFiles.length === 10 || images.length === 10}
                                />
                                <span className="placeholder" select="false">Drop your images here</span>
                            </div>
                        </div>
                    </div>
                    <div className="preview-container" select="false">
                        <h5 className="preview-heading">Preview:</h5>
                        <Carousel content={images} />
                    </div>
                </section>
                <div id="divider">
                    <span className="line left"></span>
                    <span className="dot"></span>
                    <span className="line right"></span>
                </div>
                {!checkEqual(changes.clicks.initial, changes.clicks.final) && <div className="dialog-container">
                    <div className="unsaved-changes-dialog-box" select="false">
                        <div className="dialog-text">You have unsaved changes.</div>
                        <div className="btn-container">
                            <button className="dialog-btn save-btn">Save</button>
                            <button className="dialog-btn reset-btn">Reset</button>
                        </div>
                    </div>
                </div>}
            </div>
        </motion.div>
    )
}

export default Dashboard