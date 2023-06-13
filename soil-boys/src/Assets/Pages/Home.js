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
                    <h2 className="heading">What we do</h2>
                    <div className="content-wrapper">
                        <span className="side-bar"></span>
                        <div className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum culpa maiores optio vero voluptates eligendi beatae ullam. Iusto nisi impedit officiis reprehenderit? Veniam repellendus facilis repellat temporibus voluptatem dolorem magni!</div>
                    </div>
                </section>
            </>
        </div>
    )

}

export default Home