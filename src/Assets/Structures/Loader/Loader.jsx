import React, { useRef, useEffect } from 'react'

import './Loader.styles.css'

function Loader() {

    const loader = useRef()

    useEffect(() => {
        const loaderEl = loader.current
        const fragments = loaderEl.querySelectorAll('i')
        const n = fragments.length
        const centerX = loaderEl.offsetWidth / 2
        const centerY = loaderEl.offsetHeight / 2
        const r1 = 30
        const r2 = 8

        for (let i = 0; i < n; i++) {
            const angle = (i / n) * 2 * Math.PI
            const px = Math.cos(angle) * r1 + centerX
            const py = Math.sin(angle) * r1 + centerY
            const sx = Math.cos(angle) * r2 + centerX
            const sy = Math.sin(angle) * r2 + centerY
            fragments[i].setAttribute('style', `--px: ${px}px; --py: ${py}px; --sx: ${sx}px; --sy: ${sy}px; animation-delay: ${(i % 2 == 0) ? 2 : 0}s`)
        }

    }, [])

    return (
        <div className="loading-container">
            <div className="loader" ref={loader}>
                <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
            </div>
        </div>
    )
}

export default Loader