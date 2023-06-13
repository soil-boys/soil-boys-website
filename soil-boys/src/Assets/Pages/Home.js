import React from "react";
import { useEffect, useState } from "react";

function Home() {

    return(
        <div id="main">
            <>
                <div id="quote" select="false">
                    <span className="quote-start">“</span>
                    <p className="quote-text">If you can see it, you can shoot it.</p>
                    <span className="quote-end">”</span>
                </div>
                <section className="section-1">
                    <h2 className="heading" select="false">What we do</h2>
                    <div className="content-wrapper">
                        <span className="side-bar"></span>
                        <div className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum culpa maiores optio vero voluptates eligendi beatae ullam. Iusto nisi impedit officiis reprehenderit? Veniam repellendus facilis repellat temporibus voluptatem dolorem magni!</div>
                    </div>
                </section>
                <section className="section-2">
                    <carousel>
                        <button className="handle left">
                            <span className="material-symbols-rounded">navigate_before</span>
                        </button>
                        <div className="carousel-wrapper">
                            <div className="carousel-box"></div>
                            <div className="carousel-box"></div>
                            <div className="carousel-box"></div>
                            <div className="carousel-box"></div>
                            <div className="carousel-box"></div>
                            <div className="carousel-box"></div>
                            <div className="carousel-box"></div>
                            <div className="carousel-box"></div>
                            <div className="carousel-box"></div>
                            <div className="carousel-box"></div>
                        </div>
                        <button className="handle right">
                            <span className="material-symbols-rounded">navigate_next</span>
                        </button>
                    </carousel>
                </section>
            </>
        </div>
    )

}

export default Home