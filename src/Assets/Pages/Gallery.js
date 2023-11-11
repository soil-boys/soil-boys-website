import React from "react";

function Gallery() {

    return(
        <>
            <section className="section-2">
                <div className="heading-container">
                    <h2 className="heading" select="false">Latest</h2>
                </div>
                <div className="content-wrapper">
                    <div className="section-part odd">
                        <span className="side-bar"></span>
                        <div className="content">
                            <div className="img-container">
                                <img src="https://images.pexels.com/photos/3640930/pexels-photo-3640930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                            <div className="details">
                                <div className="post-name">Name</div>
                                <div className="post-credit">
                                    <span className="post-credit-line">~</span>
                                    <span className="post-credit-author">Anubhab Baruah</span>
                                </div>
                                <div className="post-equipment">fujifilm xt200 with 15-45mm kit lens</div>
                            </div>
                        </div>
                    </div>
                    <div className="section-part even">
                        <div className="content">
                            <div className="details">
                                <div className="post-name">Name</div>
                                <div className="post-credit">
                                    <span className="post-credit-author">Angad Sankhla</span>
                                    <span className="post-credit-line">~</span>
                                </div>
                                <div className="post-equipment">canon eos 1500d with 18-55mm lens</div>
                            </div>
                            <div className="img-container">
                                <img src="https://images.pexels.com/photos/3685271/pexels-photo-3685271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                        </div>
                        <span className="side-bar"></span>
                    </div>
                    <div className="section-part odd">
                        <span className="side-bar"></span>
                        <div className="content">
                            <div className="img-container">
                                <img src="https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                            <div className="details">
                                <div className="post-name">Name</div>
                                <div className="post-credit">
                                    <span className="post-credit-line">~</span>
                                    <span className="post-credit-author">Krishnav Barman</span>
                                </div>
                                <div className="post-equipment">kodak ultramax (exp 2011) on pentax zoom 280p</div>
                            </div>
                        </div>
                    </div>
                    <div className="section-part even">
                        <div className="content">
                            <div className="details">
                                <div className="post-name">Name</div>
                                <div className="post-credit">
                                    <span className="post-credit-author">Daksh Singh Minhas</span>
                                    <span className="post-credit-line">~</span>
                                </div>
                                <div className="post-equipment">Canon EOS M50 Mark II with 15-45mm lens</div>
                            </div>
                            <div className="img-container">
                                <img src="https://images.pexels.com/photos/3563630/pexels-photo-3563630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcSet="  " />
                            </div>
                        </div>
                        <span className="side-bar"></span>
                    </div>
                </div>
            </section>
            <div className="gallery-section">
                <h3 className="date">18/06/2023</h3>
                <div className="img-wrapper">
                    <div className="img-container"></div>
                    <div className="img-container"></div>
                    <div className="img-container"></div>
                    <div className="img-container"></div>
                    <div className="img-container"></div>
                    <div className="img-container"></div>
                </div>
            </div>
            <div className="gallery-section">
                <h3 className="date">18/06/2023</h3>
                <div className="img-wrapper">
                    <div className="img-container"></div>
                    <div className="img-container"></div>
                    <div className="img-container"></div>
                    <div className="img-container"></div>
                    <div className="img-container"></div>
                    <div className="img-container"></div>
                </div>
            </div>
            <div className="gallery-section">
                <h3 className="date">18/06/2023</h3>
                <div className="img-wrapper">
                    <div className="img-container"></div>
                    <div className="img-container"></div>
                    <div className="img-container"></div>
                    <div className="img-container"></div>
                    <div className="img-container"></div>
                    <div className="img-container"></div>
                </div>
            </div>
            <div className="gallery-section">
                <h3 className="date">18/06/2023</h3>
                <div className="img-wrapper">
                    <div className="img-container"></div>
                    <div className="img-container"></div>
                    <div className="img-container"></div>
                    <div className="img-container"></div>
                    <div className="img-container"></div>
                    <div className="img-container"></div>
                </div>
            </div>
        </>
    )

}

export default Gallery