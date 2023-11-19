import React from 'react'

import '../Styles/Login.css'

function Login() {
  return (
    <div id="login">
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
                        <input type="email" name="email" id="email" />
                    </div>
                </div>
                <div className="label-container password-container">
                    <span className="label" select="false">Password</span>
                    <div className="input-container">
                        <input type="password" name="password" id="password" />
                    </div>
                </div>
                <div className="login-btn-container" select="false">
                    <button className="login-btn">
                        <span>Login</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login