import React from 'react';
import { motion } from 'framer-motion';

const notificationsData = [
    {
        title: "B.E Merit List of Management Quota -2022-23",
        link: "https://rymec.edu.in/wp-content/uploads/2023/06/MGMT-Merit-List.pdf",
    },
    {
        title: "B.E Merit List of Unfilled ComedK Quota -2022-23",
        link: "https://rymec.edu.in/wp-content/uploads/2023/06/29-3-23-ComedK-Merit-List.pdf",
    },
    {
        title: "B.E Merit List of Unfilled KEA Quota -2022-23",
        link: "https://rymec.edu.in/wp-content/uploads/2023/06/KEA-consolidated.pdf",
    }
];

const CircularsNotifications = () => {
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
                        Circulars & Notifications
                    </motion.h1>
                    <div className="w-20 h-1 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <div className="space-y-4">
                        {notificationsData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg hover:border-cu-blue hover:shadow-md transition-all group gap-4"
                            >
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-800 group-hover:text-cu-blue transition-colors">
                                        {item.title}
                                    </h3>
                                </div>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-red-50 text-red-600 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-all flex items-center gap-2 font-medium whitespace-nowrap"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CircularsNotifications;
