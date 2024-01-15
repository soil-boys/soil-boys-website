import React, { useState } from 'react'

import getIcon from '../../../Functions/getIcon.ts'

function IntuitiveSelectable({ defaultSelected, limit }) {

    const [active, setActive] = useState(false)
    const [selected, setSelected] = useState(defaultSelected)

    const options = [
        "ReactJS",
        "NextJS",
        "Angular",
        "VueJS",
        "Svelte",
        "Solid",
        "NodeJS",
        "TensorFlow",
        "PyTorch",
        "ChatGPT",
        "Django",
        "Firebase",
        "JavaScript",
        "TypeScript",
        "Rust",
        "Ruby",
        "Java",
        "Python",
        "React Native",
        "Swift",
        "Kotlin",
        "C++",
        "C#",
        "C",
        "Go",
        "MongoDB",
        "PostgreSQL",
        "ScyllaDB",
        "Cassandra",
        "Arduino"
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
            <div className="select-box">
                <div className="select-preview">
                    {selected.length !== 0 ? selected.map(item => (
                        <div className="preview-icon" select="false" onClick={() => setSelected(prev => prev.filter(_ => _ !== item))}>
                            <img src={getIcon(item)} alt={item} />
                        </div>
                    )) : <div className='placeholder-text' select="false">Add tools here</div>}
                </div>
                <div className="select-btn" onClick={() => setActive(prevState => selected.length < limit ? !prevState : false)} select="false">
                    <span className="material-icons-round">{(active && selected.length < limit) ? "expand_less" : "expand_more"}</span>
                </div>
            </div>
            <div className={`select-menu${(active && selected.length < limit) ? ' active' : ''}`} data-type="intuitive">
                {filter(options, selected).map(option => (
                    <div className="select-option" select="false" onClick={() => setSelected(prev => [...prev, option])}>
                        <span className='select-option-logo'>
                            <img src={getIcon(option)} alt={option} />
                        </span>
                        <span className="select-option-name">{option}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default IntuitiveSelectable