import React from "react";

function Home() {

    return(
        <>
            <div id="quote" select="false">
                <span className="quote-start">“</span>
                <p className="quote-text">If you can see it, you can shoot it.</p>
                <span className="quote-end">”</span>
            </div>
            <section className="section-1">
                <div className="carousel">
                    <button className="handle left">
                        <span className="material-symbols-rounded">navigate_before</span>
                    </button>
                    <div className="carousel-wrapper" select="false">
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
                </div>
            </section>
        </>
    )

}

export default Home