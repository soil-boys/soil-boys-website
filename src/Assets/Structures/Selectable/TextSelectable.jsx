import React, { useState } from 'react'

import getIcon from '../../../Functions/getIcon.ts'

function TextSelectable({ defaultSelected, limit }) {

    const [active, setActive] = useState(false)
    const [selected, setSelected] = useState(defaultSelected)

    const options = [
        "App",
        "Game",
        "Library",
        "Script",
        "Device",
        "Integration"
    ]

    function filter(arr1, arr2) {
        let filtered = []
        for (let item of arr1) {
            if (arr2.some(e => e === item)) continue
            else filtered.push(item)
        }
        return filtered
    }

    return (
        <>
            <div className="select-box" data-type="text">
                <button
                    className="select-btn"
                    onClick={() => setActive(prevState => selected.length < limit ? !prevState : false)}
                    disabled={selected.length >= limit}
                    select="false"
                >
                    <span className="material-symbols-rounded">{(active && selected.length < limit) ? "expand_less" : "expand_more"}</span>
                </button>
                <div className="select-preview">
                    {selected.length !== 0 ? selected.map(item => (
                        <div className="preview-textbox" select="false">
                            <span className="preview-text">{item}</span>
                            <div className="preview-textbox-close-btn" onClick={() => setSelected(prev => prev.filter(_ => _ !== item))}>
                                <span className="material-symbols-rounded">close</span>
                            </div>
                        </div>
                    )) : <div className='placeholder-text' select="false">State type here</div>}
                </div>
            </div>
            <div className={`select-menu${(active && selected.length < limit) ? ' active' : ''}`} data-type="text">
                {filter(options, selected).map(option => (
                    <div className="select-text-option" select="false" onClick={() => setSelected(prev => [...prev, option])}>
                        <span className="select-text-option-name">{option}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TextSelectable