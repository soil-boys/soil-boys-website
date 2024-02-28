import React, { useRef } from 'react'

import Selectable from '../Selectable/Selectable'

import './LinkBox.styles.css'

function LinkBox({ link, setRecent }) {

    const name = useRef(null)
    const url = useRef(null)

    return (
        <div className="link-field">
            <div className="link-appearance-field">
                <label className="link-field-label">Name</label>
                <div className="appearance-container">
                    <Selectable
                        type='Minimal'
                        limit={1}
                        defaultSelected={link?.icon || ["link"]}
                    />
                    <input
                        value={link?.name}
                        type="text"
                        name="Name"
                        className='link-name'
                        placeholder='Name of your link'
                        ref={name}
                    />
                </div>
            </div>
            <div className="link-url-field">
                <label className="link-field-label">URL</label>
                <input
                    value={link?.url}
                    type="url"
                    name="URL"
                    className='link-url'
                    placeholder='URL to destination'
                    ref={url}
                />
            </div>
        </div>
    )
}

export default LinkBox