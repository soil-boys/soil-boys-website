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
            <section className="section-2">
                <div className="heading-container">
                    <h2 className="heading" select="false">latest</h2>
                </div>
                <div className="content-wrapper">
                    <div className="section-part odd">
                        <span className="side-bar"></span>
                        <div className="content">
                            <div className="img-container"></div>
                            <div className="details">
                                <div className="post-name">Anubhav Baruah</div>
                                <div className="post-credit">Credit</div>
                                <div className="post-equipment">Equipment</div>
                            </div>
                        </div>
                    </div>
                    <div className="section-part even">
                        <span className="side-bar"></span>
                        <div className="content">
                            <div className="details">
                                <div className="post-name">Angad Sankhla</div>
                                <div className="post-credit">Credit</div>
                                <div className="post-equipment">Equipment</div>
                            </div>
                            <div className="img-container"></div>
                        </div>
                    </div>
                    <div className="section-part odd">
                        <span className="side-bar"></span>
                        <div className="content">
                            <div className="img-container"></div>
                            <div className="details">
                                <div className="post-name">Krishnav Barman</div>
                                <div className="post-credit">Credit</div>
                                <div className="post-equipment">Equipment</div>
                            </div>
                        </div>
                    </div>
                    <div className="section-part even">
                        <span className="side-bar"></span>
                        <div className="content">
                            <div className="details">
                                <div className="post-name">Daksh Singh Minhas</div>
                                <div className="post-credit">Credit</div>
                                <div className="post-equipment">Equipment</div>
                            </div>
                            <div className="img-container"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Home