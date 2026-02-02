import React from 'react';
import { motion } from 'framer-motion';

const Bank = () => {
    const facilities = [
        { name: "ICT", href: "/ict" },
        { name: "Auditorium", href: "/auditorium" },
        { name: "Sports", href: "/sports" },
        { name: "Medical Centre", href: "/medical-centre" },
        { name: "Hostel", href: "/hostel" },
        { name: "Transport", href: "/transport" },
        { name: "Bank", href: "/bank", active: true }
    ];

    const bankImages = [
        { url: "https://rymec.edu.in/wp-content/uploads/2023/02/img1.jpeg", alt: "Campus Banking Facility" }
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
                        Banking Services
                    </motion.h1>
                    <div className="w-24 h-1.5 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            <div className="bg-white border-b border-gray-100 py-4">
                <div className="container mx-auto px-4 md:px-8">
                    <nav className="flex text-sm font-medium text-gray-500">
                        <a href="/" className="hover:text-cu-blue transition-colors">Home</a>
                        <span className="mx-2">/</span>
                        <span className="text-cu-blue">Bank</span>
                    </nav>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 py-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-12"
                        >
                            <div className="space-y-4 mb-10">
                                <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Campus Banking & ATM</h2>
                                <div className="w-16 h-1 bg-cu-gold"></div>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    For the convenience of students and staff, RYMEC campus hosts a dedicated bank branch and ATM facility, ensuring easy access to financial services.
                                </p>
                            </div>

                            <div className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center gap-8">
                                <div className="w-24 h-24 bg-white rounded-2xl shadow-sm flex items-center justify-center text-cu-blue">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-cu-blue mb-2 uppercase tracking-tight">On-Campus Bank</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Comprehensive banking services ranging from account management to fee payments are available right within the campus premises.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-12">
                                {bankImages.map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="group relative rounded-3xl overflow-hidden shadow-xl border border-gray-100"
                                    >
                                        <img
                                            src={img.url}
                                            alt={img.alt}
                                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                            <p className="text-white font-bold text-xl">{img.alt}</p>
                                        </div>
                                    </motion.div>
                                ))}
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

export default Bank;
