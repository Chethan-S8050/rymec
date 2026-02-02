import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroBg1 from '../assets/rymec/slider-img-1.jpg';
import heroBg2 from '../assets/rymec/slider-img-2.jpg';
import heroBg3 from '../assets/rymec/slider-img-3.jpg';
import heroBg4 from '../assets/rymec/slider-img-4.jpg';
import heroBg5 from '../assets/rymec/baim1.png';
import heroBg6 from '../assets/rymec/baim2.png';
import heroBg7 from '../assets/rymec/rybim.png';

const heroImages = [heroBg1, heroBg2, heroBg3, heroBg4, heroBg5, heroBg6, heroBg7];

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image Slider */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={heroImages[currentImage]}
                        alt="RYMEC Campus"
                        className="w-full h-full object-cover select-none brightness-[0.85] contrast-[1.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute inset-0 bg-cu-blue/10 mix-blend-multiply" />
                </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="z-10 text-center px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tighter drop-shadow-2xl">
                        <span className="text-cu-gold">RYMEC</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-white/95 mb-8 font-medium italic leading-relaxed drop-shadow-lg">
                        "To Produce Professionally Excellent, Knowledgeable, Globally Competitive, Socially Responsible Engineers and Entrepreneurs."
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-cu-gold hover:bg-yellow-500 text-cu-blue font-bold rounded-xl shadow-2xl transition-all"
                        >
                            Apply Now
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
                        >
                            Explore Courses
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
