import React, { useEffect } from 'react'

import './Particles.styles.css'

function Particles() {

    useEffect(() => {
        const particles = document.querySelectorAll('#particles i')
        const parent = document.getElementById('particles')
        setInterval(() => {
            if (!document.hasFocus()) return
            particles.forEach(particle => {
                particle.setAttribute('style', `--ty: ${Math.random() > .8 ? '-' : ''}${Math.random() * (parent.clientHeight / 2)}px; --tx: ${Math.random() > .5 ? '-' : ''}${Math.random() * (parent.clientWidth / 2)}px`)
            });
        }, 10000);
    }, [])

    return (
        <div id="particles">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
    )
}

export default Particles