import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import { useChanges } from "../../Hooks"

import Carousel from '../Structures/Carousel/Carousel'
import ImagePreview from '../Structures/Image Preview/ImagePreview'
import RecentCard from '../Structures/Recent Card/RecentCard.jsx'
import Selectable from '../Structures/Selectable/Selectable.jsx'

import getClicks from '../../Functions/getClicks.ts'
import fill from '../../Functions/fill.ts'
import checkEqual from '../../Functions/checkEqual.ts'
import saveChanges from '../../Functions/saveChanges.ts'
import getData from '../../Server/getData.tsx'

import mentis from '../Structures/Carousel/Cards/Assets/Mentis.svg'

import '../Styles/Dashboard.css'

function Dashboard() {

    const { changes, setChanges } = useChanges(false)

    const [images, setImages] = useState(Array(10).fill(0))
    const [tempFiles, setTempFiles] = useState([])

    const previews = useRef(null)
    const dropper = useRef(null)
    
    const fetchData = async (reset = false) => {
        const data = await getClicks(images, reset)
        setImages(data)
        if (reset) setChanges(prevState => ({
            clicks: {
                initial: prevState.clicks.initial,
                final: prevState.clicks.initial
            }
        }))
    }

    async function handleReset(e) {
        fetchData(true)
    }
    async function handleSubmit(e) {
        await saveChanges(images)
        const data = await getData('images')
        const clicks = data?.images?.sort((a, b) => a.order < b.order)
        setChanges((prevState) => ({
            clicks: {
                initial: clicks,
                final: clicks
            }
        }))
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

    useEffect(() => {
        fetchData()
    }, [])

    const recentData = {
        title: "Mentis – Your Personal Mood Tracking App!",
        logo: {mentis},
        labels: {
            tools: ["React Native", "NodeJS"],
            type: ["App"]
        },
        links: [
            {
                name: "Download",
                url: "https://github.com/soil-boys/Mentis/releases/tag/v1.0.0",
                icon: ["download"]
            },
            {
                name: "GitHub",
                url: "https://github.com/soil-boys/Mentis/releases/tag/v1.0.0",
                icon: ["github"]
            }
        ],
        description: "Thrilled to announce the android launch of Mentis, our groundbreaking mood tracking app!"
    }

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
                <section className="recent-section">
                    <div className="heading-container right" animate="false" select="false">
                        <h2 className="heading settings-heading">Recent</h2>
                        <span className='material-icons-round settings-icon'>settings</span>
                    </div>
                    <div className={`editing-container${(tempFiles.length === 10 || images.length === 10) ? ' disabled' : ''}`}>
                        <form action="" className="recent-form">
                            <div className="recent-form-row">
                                <div className="recent-form-col-1">
                                    <div className="recent-form-title recent-form-field">
                                        <label className='recent-form-field-label' htmlFor="Title">Title</label>
                                        <input type="text" name="Title" id="recent-title" placeholder='Title of your product' />
                                    </div>
                                    <div className="recent-form-labels">
                                        <div className="recent-form-tools recent-form-field">
                                            <label className='recent-form-field-label'>Tools</label>
                                            <Selectable
                                                limit={3}
                                                defaultSelected={recentData.labels.tools}
                                                type='Intuitive'
                                            />
                                        </div>
                                        <div className="recent-form-type recent-form-field">
                                            <label className='recent-form-field-label right' htmlFor="Type">Type</label>
                                            <Selectable
                                                limit={1}
                                                defaultSelected={recentData.labels.type}
                                                type='Text'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="recent-form-col-2">
                                    <div className="recent-form-logo recent-form-field">
                                        <label className='recent-form-field-label right' htmlFor="Logo">Logo</label>
                                        <div className="recent-logo-container">
                                            <input type="file" name="Logo" id="recent-logo" />
                                            <img src={mentis} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="recent-form-row">
                                <div className="recent-form-col-1">
                                    <div className="recent-form-desc recent-form-field">
                                            <label className='recent-form-field-label' htmlFor="Description">Type</label>
                                            <textarea type="text" name="Description" id="recent-desc" placeholder='Description of your product' />
                                    </div>
                                </div>
                                <div className="recent-form-col-2">
                                    <div className="recent-form-links recent-form-field">
                                        <label className='recent-form-field-label right'>Links</label>
                                        <div className="recent-form-links-container">
                                            {recentData.links.map(link => (
                                                <div className="link-field">
                                                    <div className="link-appearance-field">
                                                        <label className="link-field-label">Name</label>
                                                        <div className="appearance-container">
                                                            <Selectable
                                                                type='Minimal'
                                                                limit={1}
                                                                defaultSelected={link.icon}
                                                            />
                                                            <input value={link.name} type="text" name="Name" className='link-name' placeholder='Name of your link' />
                                                        </div>
                                                    </div>
                                                    <div className="link-url-field">
                                                        <label className="link-field-label">URL</label>
                                                        <input value={link.url} type="url" name="URL" className='link-url' placeholder='URL to destination' />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="preview-container" select="false">
                        <h5 className="preview-heading">Preview:</h5>
                        <RecentCard
                            animation="false"
                            content={recentData}
                        />
                    </div>
                </section>
                {!checkEqual(changes.clicks.initial, changes.clicks.final) && <div className="dialog-container">
                    <div className="unsaved-changes-dialog-box" select="false">
                        <div className="dialog-text">You have unsaved changes.</div>
                        <div className="btn-container">
                            <button className="dialog-btn save-btn" name='save' onClick={handleSubmit}>Save</button>
                            <button className="dialog-btn reset-btn" name='reset' onClick={handleReset}>Reset</button>
                        </div>
                    </div>
                </div>}
            </div>
        </motion.div>
    )
}

export default Dashboard