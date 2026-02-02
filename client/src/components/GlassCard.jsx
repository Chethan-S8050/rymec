import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "", title }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className={`relative overflow-hidden rounded-xl border border-gray-200 bg-white/70 p-6 backdrop-blur-lg shadow-lg transition-colors hover:bg-white/90 hover:border-indigo-200 ${className}`}
        >
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 transition-opacity hover:opacity-100" />

            <div className="relative z-10">
                {title && (
                    <h3 className="mb-2 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {title}
                    </h3>
                )}
                <div className="text-gray-600">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};

export default GlassCard;
