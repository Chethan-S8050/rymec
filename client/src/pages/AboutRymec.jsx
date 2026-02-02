import React from 'react';
import { motion } from 'framer-motion';

const AboutRymec = () => {
    return (
        <div className="min-h-screen pt-20 pb-10 bg-gray-50">
            {/* Header */}
            <div className="bg-cu-blue text-white py-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold font-display mb-4"
                    >
                        About RYMEC
                    </motion.h1>
                    <div className="w-20 h-1 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 py-12 max-w-5xl">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">

                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        <span className="font-bold text-cu-blue">Rao Bahadur Y. Mahabaleswarappa Engineering College</span>
                        <span className="text-gray-500 italic"> (Formerly Vijayanagar Engineering College) </span>
                        aims to enhance the knowledge and skill of the student in the field of technology and
                        engineering by grooming the students in all theoretical and practical aspects and contribute
                        significantly towards creation of strong technical workforce that would bridge the gap
                        between industry requirements and academic orientation.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg mb-8">
                        The institution is committed to comply with the quality management system and progress
                        continually. The important objectives of this prestigious institution are to:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        {[
                            "Realize the potent talent and develop Human Resources Capital in technical education, aimed at nation building.",
                            "Facilitate maintenance of core competency in accordance with industry standards.",
                            "Meet the persistent demands of the industry against the background of rapid industrialization of the Bellary District.",
                            "Develop specialized expertise and sophisticated instrumentation in technical areas."
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                                className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md border border-gray-100 hover:border-cu-blue transition-all"
                            >
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cu-blue text-white flex items-center justify-center font-bold text-sm shadow-sm">
                                    {index + 1}
                                </div>
                                <p className="text-gray-700 text-sm md:text-base font-medium">
                                    {item}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutRymec;
