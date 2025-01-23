import React from 'react';
import "./about.scss";
import aboutImg from "../../assests/images/4.jpg";
import Company from "../../components/Company/company";
import { motion } from 'framer-motion';

const About = () => {
    const imgVariants = {
        hidden: { opacity: 0, y: 0.5 }, // Boshlang'ich holat: pastroqda va ko'rinmas
        visible: { opacity: 1, y: 1 }, // Ko'rinadigan holat: asl joyiga chiqadi
    };

    return (
        <div className="about">
            <div className="container">
                <motion.div className="about_headImg">
                    <motion.img
                        src={aboutImg}
                        alt=""
                        width="100%"
                        height="100%"
                        variants={imgVariants} // Animatsiya variantlari
                        initial="hidden" // Boshlang'ich holat
                        animate="visible" // Animatsiya boshlash holati
                        transition={{ duration: 2, ease: "easeOut" }} // Animatsiya vaqti
                    />
                </motion.div>
                <Company />
            </div>
        </div>
    );
};

export default About;
