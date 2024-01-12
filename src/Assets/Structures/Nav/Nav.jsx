import React from "react";
import { NavLink } from "react-router-dom";
import navigation from "../../../Functions/Navigation.ts";
import navigationonroutechange from "../../../Functions/NavigationOnRouteChange.ts";

import './Nav.styles.css'

function Nav() {

    const tabs = [
        { id: 1, name: "Gallery", to: "/gallery" },
        { id: 2, name: "Code", to: "/code" },
        { id: 3, name: "About", to: "/about" },
    ]

    return(
        <div id="nav" select="false">
            <NavLink className="title" to="/" onClick={ () => { navigationonroutechange() } }>Soil Boys</NavLink>
            <nav className="navbar">
                {tabs.map((tab) => (
                    <div key={tab.id} className="nav-item">
                        <NavLink className="nav-link" to={tab.to} relative="path" onClick={ () => { navigationonroutechange() } }>{tab.name}</NavLink>
                        <span className="slide"></span>
                    </div>
                ))}
            </nav>
            <button className="nav-btn material-symbols-rounded" name="nav" onClick={ () => { navigation() } }>
                <span className="line line-1"></span>
                <span className="line line-2"></span>
                <span className="line line-3"></span>
            </button>
        </div>
    )

}

export default Nav