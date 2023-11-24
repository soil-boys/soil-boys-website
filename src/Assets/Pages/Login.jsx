import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import '../Styles/Login.css'

function Login() {

    const [passVisible, setPassVisible] = useState(false)
    const [filled, setFilled] = useState({ email: false, pass: false })

    const btn = useRef()

    const handleChange = e => {
        if (e.target.checked) setPassVisible(true)
        else setPassVisible(false)
    }
    const handleEmailChange = e => {
        if (!e.target.value || e.target.value === '') setFilled(prevState => ({ ...prevState, email: false }))
        else setFilled(prevState => ({ ...prevState, email: true }))
    }
    const handlePassChange = e => {
        if (!e.target.value || e.target.value === '') setFilled(prevState => ({ ...prevState, pass: false }))
        else setFilled(prevState => ({ ...prevState, pass: true }))
    }

    useEffect(() => {
        if (filled.email === true && filled.pass === true) btn.current.disabled = false
        else btn.current.disabled = true
    }, [filled])
    

    const eye = (bool) => {
        return bool ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="eye eye-visisble" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="eye eye-crossed" viewBox="0 0 16 16">
                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588M5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
            </svg>
        )
    }

    return (
        <motion.div
            id="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="login-parallax">
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
            <div className="login-container">
                <div className="login-heading-container" select="false">
                    <h2 className="login-heading heading">Login</h2>
                    <span className="login-heading-line"></span>
                </div>
                <form action="" method="post" className='login-form'>
                    <div className="label-container email-container">
                        <span className="label" select="false">Email</span>
                        <div className="input-container">
                            <input type="email" name="email" id="email" className='input' onChange={handleEmailChange} />
                        </div>
                    </div>
                    <div className="label-container password-container">
                        <span className="label" select="false">Password</span>
                        <div className="input-container">
                            <input type={!passVisible ? 'password' : 'text'} name="password" id="password" className='input' onChange={handlePassChange} />
                            <div className="password-toggle-container">
                                <input
                                    type="checkbox"
                                    name="password-toggle"
                                    id="password-toggle"
                                    onChange={handleChange}
                                    value={passVisible}
                                />
                                {eye(passVisible)}
                            </div>
                        </div>
                    </div>
                    <div className="login-btn-container" select="false">
                        <button className="login-btn" ref={btn}>
                            <span>Login</span>
                        </button>
                    </div>
                </form>
            </div>
        </motion.div>
    )
}

export default Login