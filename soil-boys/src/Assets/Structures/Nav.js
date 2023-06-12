import React from "react";

function Nav() {

    return(
        <div id="nav">
            <div className="title">Soil Boys</div>
            <nav className="navbar">
                <div className="nav-item">
                    <a className="nav-link">Home</a>
                    <span className="slide"></span>
                </div>
                <div className="nav-item">
                    <a className="nav-link">Gallery</a>
                    <span className="slide"></span>
                </div>
                <div className="nav-item">
                    <a className="nav-link">About</a>
                    <span className="slide"></span>
                </div>
            </nav>
        </div>
    )

}

export default Nav