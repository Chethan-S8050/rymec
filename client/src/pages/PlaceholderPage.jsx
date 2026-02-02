import React from 'react';
import { motion } from 'framer-motion';

const PlaceholderPage = ({ title }) => {
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
                        {title}
                    </motion.h1>
                    <div className="w-20 h-1 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 py-12 max-w-4xl text-center">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                        <span className="text-3xl">🚧</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Content Coming Soon</h2>
                    <p className="text-gray-500">
                        The content for <strong>{title}</strong> is currently being updated. Please check back later.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PlaceholderPage;
