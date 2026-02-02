import React from 'react';
import { motion } from 'framer-motion';

const MedicalCentre = () => {
    const facilities = [
        { name: "ICT", href: "/ict" },
        { name: "Auditorium", href: "/auditorium" },
        { name: "Sports", href: "/sports" },
        { name: "Medical Centre", href: "/medical-centre", active: true },
        { name: "Hostel", href: "/hostel" },
        { name: "Transport", href: "/transport" },
        { name: "Bank", href: "/bank" }
    ];

    return (
        <div className="min-h-screen pt-20 pb-10 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-24 -left-24 w-96 h-96 bg-cu-blue/5 rounded-[40%] blur-3xl"
                />
            </div>

            <div className="bg-cu-blue text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-4 inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        Facilities
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold font-display mb-6 tracking-tight uppercase"
                    >
                        Medical Centre
                    </motion.h1>
                    <div className="w-24 h-1.5 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            <div className="bg-white border-b border-gray-100 py-4">
                <div className="container mx-auto px-4 md:px-8">
                    <nav className="flex text-sm font-medium text-gray-500">
                        <a href="/" className="hover:text-cu-blue transition-colors">Home</a>
                        <span className="mx-2">/</span>
                        <span className="text-cu-blue">Medical Centre</span>
                    </nav>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 py-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-12 text-center"
                        >
                            <div className="flex flex-col items-center justify-center space-y-6">
                                <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center shadow-inner">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Content Coming Soon</h2>
                                <div className="w-16 h-1 bg-cu-gold"></div>
                                <p className="text-gray-600 leading-relaxed text-lg max-w-lg mx-auto">
                                    We are currently updating the information for our campus Medical Centre. Please check back soon for detailed information about healthcare services and emergency facilities.
                                </p>
                                <div className="pt-8">
                                    <div className="inline-flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100 text-left">
                                        <div className="p-3 bg-cu-blue text-white rounded-xl">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Emergency Contact</p>
                                            <p className="text-xl font-bold text-cu-blue">08392-244809</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100 p-8">
                            <h4 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4 tracking-tight">Campus Facilities</h4>
                            <ul className="space-y-3">
                                {facilities.map((item, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={item.href}
                                            className={`block p-4 rounded-xl font-semibold transition-all duration-300 ${item.active
                                                ? "bg-cu-blue text-white shadow-lg shadow-blue-900/20 translate-x-2"
                                                : "text-gray-600 hover:bg-gray-50 hover:text-cu-blue hover:translate-x-1"
                                                }`}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalCentre;
