import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../Pages/Home";
import Gallery from "../Pages/Gallery";
import About from "../Pages/About";

function Nav() {

    const tabs = [
        { name: "Home", to: "/" },
        { name: "Gallery", to: "/gallery"},
        { name: "About", to: "/about"},
    ]

    return(
        <div id="nav" select="false">
            <div className="title">Soil Boys</div>
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