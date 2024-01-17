import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

import "../Styles/Page404.css"

function Page404() {

    document.title = "Oops!"

    const navigate = useNavigate()

    const returningLink = useRef(null)

    useEffect(() => {
        const returnTimeout = setTimeout(() => {
            window.scroll(0, 0)
            navigate('/', { replace: true })
        }, 10000);
        returningLink.current.onclick = () => { clearTimeout(returnTimeout) }
    }, [])

    return (
        <motion.div
            id="page404"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="container404">
                <img className="animation" src="/Resources/animation404.svg" alt="404screen" />
                <div className="side-container">
                    <div className="message">Wrong destination, buddy.</div>
                    <div className="return-container">
                        <p className="text">Returning back to the </p>
                        <Link to="/" className='return-link' ref={returningLink}>
                            <p className="text">home page</p>
                            <span className="material-symbols-rounded">north_east</span>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Page404