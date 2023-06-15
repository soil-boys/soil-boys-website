import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {

    const tabs = [
        { name: "Gallery", to: "/gallery" },
        { name: "About", to: "/about"},
        { name: "Contact", to: "/contact"},
    ]

    return(
        <div id="nav" select="false">
            <NavLink className="title" to="/">Soil Boys</NavLink>
            <nav className="navbar">
                {tabs.map((tab) => (
                    <div className="nav-item">
                        <NavLink className="nav-link" to={tab.to} relative="path">{tab.name}</NavLink>
                        <span className="slide"></span>
                    </div>
                ))}
            </nav>
        </div>
    )

}

export default Nav