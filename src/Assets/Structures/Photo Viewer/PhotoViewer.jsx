import React, { useEffect } from 'react'

import "./PhotoViewer.styles.css"
import moment from 'moment'

function PhotoViewer({ photo, setViewing }) {

    const defaultRegex = /^([^\n]+)$/gmi
    const authorRegex = /^@(.+)$/gmi

    const details = {
        permalink: photo.permalink,
        post_name: photo.caption.match(defaultRegex)[0],
        post_author: (!photo.caption.match(authorRegex)?.length || !photo.caption.match(authorRegex)?.length === 0) ? '' : photo.caption.match(authorRegex)[0]?.replace(/@|@(\s+)/gi, ''),
    }

    useEffect(() => {

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') setViewing(null)
            else return
        })

    }, [])


    return (
        <div id="photo-viewer">
            <div className="wrapper" select="false">
                <div className="photo-wrapper">
                    <div className="photo-content">
                        <div className="photo">
                            <img src={photo.media_url} alt={details.post_name} />
                        </div>
                        <div className="photo-links">
                            <a href={details.permalink} target="_blank" rel="noopener noreferrer" className="photo-btn photo-permalink">
                                <span className="material-icons-round">link</span>
                            </a>
                            <button className="photo-btn close-btn" name='Close Button' onClick={() => setViewing(null)}>
                                <span className="material-icons-round">close</span>
                            </button>
                        </div>
                    </div>
                    <div className="photo-details">
                        <div className="photo-header">
                            <div className="photo-name" maskable="true">{details.post_name}</div>
                            <div className="photo-date" maskable="true">{moment(photo.timestamp).format("DD / MM / YYYY")}</div>
                        </div>
                        <a className="photo-credit" target="_blank" rel="noopener noreferrer" href={`https://instagram.com/${details.post_author}`}>
                            <span className="photo-credit-line">{(!photo.caption.match(authorRegex)?.length || !photo.caption.match(authorRegex)?.length === 0) ? '' : '@'}</span>
                            <span className="photo-credit-author" maskable="true">{details.post_author}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PhotoViewer