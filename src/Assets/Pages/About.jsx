import React from "react";
import { motion } from "framer-motion";

function About() {

    return(
        <motion.div
            id="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <section className="section-1">
                <h2 className="heading" select="false">What we do</h2>
                <div className="content-wrapper">
                    <div className="section-part">
                        <span className="side-bar"></span>
                        <div className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum culpa maiores optio vero voluptates eligendi beatae ullam. Iusto nisi impedit officiis reprehenderit? Veniam repellendus facilis repellat temporibus voluptatem dolorem magni!</div>
                    </div>
                </div>
            </section>
        </motion.div>
    )

}

export default About