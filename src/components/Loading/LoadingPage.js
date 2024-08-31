// src/components/LoadingPage.js

import React from 'react';
import { motion } from 'framer-motion';
import './LoadingPage.scss'; // Make sure to create this CSS file for additional styles

const LoadingPage = () => {
    return (
        <div className="loading-page">
            <motion.div
                className="loading-circle"
                animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 360, 720],
                    borderRadius: ["20%", "50%", "20%"],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
            />
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
                Loading...
            </motion.h2>
        </div>
    );
};

export default LoadingPage;