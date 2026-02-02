import React from 'react';
import { motion } from 'framer-motion';

const Regulations = () => {
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
                        Regulations
                    </motion.h1>
                    <div className="w-20 h-1 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 py-12 max-w-6xl">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Main Content - Spreadsheet */}
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-cu-gold pl-4">
                                Regulation Documents
                            </h2>
                            <div className="aspect-[4/3] w-full bg-gray-100 rounded-xl overflow-hidden shadow-inner">
                                <iframe
                                    src="https://docs.google.com/spreadsheets/d/18Wx9WQmVJ1JCYOmRzmKlNGAS3btjR5zuPqf6uoGvTPg/edit?usp=sharing&embedded=true"
                                    className="w-full h-full border-0"
                                    title="Regulations Spreadsheet"
                                >Loading...</iframe>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Video & Quick Links */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Video Overview</h3>
                            <div className="aspect-video rounded-lg overflow-hidden bg-black/5">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/LvCaovzU9OY"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Regulations;
