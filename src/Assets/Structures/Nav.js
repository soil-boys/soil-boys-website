import React from "react";
import { NavLink } from "react-router-dom";
import navigation from "../../Functions/Navigation";
import navigationonroutechange from "../../Functions/NavigationOnRouteChange";

function Nav() {

    const tabs = [
        { name: "Gallery", to: "/gallery" },
        { name: "About", to: "/about" },
        { name: "Contact", to: "/contact" },
    ]

    return(
        <div id="nav" select="false">
            <NavLink className="title" to="/" onClick={ () => { navigationonroutechange() } }>Soil Boys</NavLink>
            <nav className="navbar">
                {tabs.map((tab) => (
                    <div className="nav-item">
                        <NavLink className="nav-link" to={tab.to} relative="path" onClick={ () => { navigationonroutechange() } }>{tab.name}</NavLink>
                        <span className="slide"></span>
                    </div>
                ))}
            </nav>
            <button className="nav-btn material-symbols-rounded" onClick={ () => { navigation() } }>
                <span className="line line-1"></span>
                <span className="line line-2"></span>
                <span className="line line-3"></span>
            </button>
        </div>
    )

}

export default Nav