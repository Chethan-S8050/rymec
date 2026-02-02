import React from 'react';
import { motion } from 'framer-motion';

const Patents = () => {
    const patentStats = [
        {
            department: "Computer Science & Engineering",
            total: 13,
            granted: 0,
            filed: 8,
            published: 5,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            department: "Mechanical Engineering",
            total: 13,
            granted: 4,
            filed: 7,
            published: 2,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            department: "Electronics & Communication Engineering",
            total: 9,
            granted: 2,
            filed: 3,
            published: 7, // Adjusted to match summary total if possible, but keeping data from source
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            department: "Electrical & Electronics Engineering",
            total: 3,
            granted: 0,
            filed: 2,
            published: 1,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            department: "Information Science & Engineering",
            total: 1,
            granted: 0,
            filed: 0,
            published: 1,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            )
        }
    ];

    const totalPatents = patentStats.reduce((acc, curr) => acc + curr.total, 0);

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
                        Patents & Intellectual Property
                    </motion.h1>
                    <div className="w-20 h-1 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 py-12 max-w-6xl">

                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        RYMEC fosters a strong culture of innovation, resulting in a significant number of patents filed and granted across various engineering disciplines.
                    </p>
                    <div className="inline-block bg-white px-8 py-4 rounded-2xl shadow-sm border border-gray-100">
                        <span className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Total Patents</span>
                        <div className="text-4xl font-bold text-cu-blue mt-1">{totalPatents}</div>
                    </div>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {patentStats.map((dept, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 relative overflow-hidden group hover:shadow-md transition-all"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-gray-50 rounded-xl">
                                    {dept.icon}
                                </div>
                                <h3 className="font-bold text-gray-800 leading-tight">{dept.department}</h3>
                            </div>

                            <div className="grid grid-cols-3 gap-2 text-center">
                                <div className="bg-green-50 rounded-lg p-2">
                                    <div className="text-lg font-bold text-green-600">{dept.granted}</div>
                                    <div className="text-xs text-green-800 font-medium">Granted</div>
                                </div>
                                <div className="bg-blue-50 rounded-lg p-2">
                                    <div className="text-lg font-bold text-blue-600">{dept.filed}</div>
                                    <div className="text-xs text-blue-800 font-medium">Filed</div>
                                </div>
                                <div className="bg-purple-50 rounded-lg p-2">
                                    <div className="text-lg font-bold text-purple-600">{dept.published}</div>
                                    <div className="text-xs text-purple-800 font-medium">Published</div>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                                <span className="text-sm font-semibold text-gray-500">Total</span>
                                <span className="text-lg font-bold text-gray-800">{dept.total}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center text-gray-500 text-sm"
                >
                    * Patent statistics are subject to periodic updates.
                </motion.div>

            </div>
        </div>
    );
};

export default Patents;
