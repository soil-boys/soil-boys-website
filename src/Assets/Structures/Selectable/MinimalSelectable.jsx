import React, { useState } from 'react'

import getIcon from '../../../Functions/getIcon.ts'

function MinimalSelectable({ defaultSelected, limit }) {

    const [active, setActive] = useState(false)
    const [selected, setSelected] = useState(defaultSelected)

    const options = [
        "apple",
        "playstore",
        "chrome",
        "youtube",
        "github",
        "download",
        "link"
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
            <div className="select-box" data-type='minimal'>
                <div className="select-preview" onClick={() => setActive(prevState => !prevState)}>
                    {selected.length !== 0 ? selected.map(item => (
                        <div className="preview-minimal-icon" select="false">
                            <img src={getIcon(`minimal:${item}`)} alt={item} />
                        </div>
                    )) : <div className='placeholder-text' select="false">Add tools here</div>}
                </div>
            </div>
            <div className={`select-menu${(active) ? ' active' : ''}`} data-type="minimal">
                {filter(options, selected).map(option => (
                    <div className="select-minimal-option" select="false" onClick={() => setSelected([option])}>
                        <span className='select-minimal-option-logo'>
                            <img src={getIcon(`minimal:${option}`)} alt={option} />
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MinimalSelectable