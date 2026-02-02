import React from 'react';
import { motion } from 'framer-motion';
import notificationImg from '../assets/images/admission/notification_2026_27.jpg';

const notificationsData = [
    {
        title: "Seat Matrix Notification Of UG & PG [BE, MBA & M.Tech,] Courses For The Academic Year 2026-27",
        date: "2026-05-20", // Estimated date or leave generic
        link: "#", // Placeholder if no direct link found
        image: notificationImg
    }
];

const Notifications = () => {
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
                        Admission Notifications
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
                                className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 border rounded-xl hover:border-cu-blue hover:shadow-md transition-all group bg-white"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">New</span>
                                        <span className="text-gray-500 text-sm">{item.date}</span>
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-cu-blue transition-colors mb-4">
                                        {item.title}
                                    </h3>
                                    {item.image && (
                                        <div className="mt-4 rounded-lg overflow-hidden border border-gray-100 shadow-inner max-w-2xl">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                                            />
                                        </div>
                                    )}
                                </div>
                                {item.link !== "#" && (
                                    <div className="mt-4 md:mt-0 md:ml-6">
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-cu-blue hover:text-white transition-all font-medium flex items-center gap-2"
                                        >
                                            View Details
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notifications;
