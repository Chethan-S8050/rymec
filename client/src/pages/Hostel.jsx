import React from 'react';
import { motion } from 'framer-motion';

const Hostel = () => {
    const facilities = [
        { name: "ICT", href: "/ict" },
        { name: "Auditorium", href: "/auditorium" },
        { name: "Sports", href: "/sports" },
        { name: "Medical Centre", href: "/medical-centre" },
        { name: "Hostel", href: "/hostel", active: true },
        { name: "Transport", href: "/transport" },
        { name: "Bank", href: "/bank" }
    ];

    const hostelImages = [
        { url: "https://rymec.edu.in/wp-content/uploads/2024/06/BoysHostel.jpg", alt: "RYMEC Boys Hostel Building" },
        { url: "https://rymec.edu.in/wp-content/uploads/2024/06/SwimmingPool.jpg", alt: "Campus Swimming Pool Facility" },
        { url: "https://rymec.edu.in/wp-content/uploads/2023/06/img2.jpg", alt: "Hostel Interior/Common Area" }
    ];

    const hostelFeatures = [
        { title: "Power Backup", desc: "Separate D.G. set to provide uninterrupted power supply." },
        { title: "Drinking Water", desc: "Municipality sweet water with UV and RO purification systems." },
        { title: "24/7 Security", desc: "Round-the-clock guards ensuring student safety." },
        { title: "Bore Water", desc: "Separate supply for non-drinking and utility purposes." },
        { title: "Solar Heating", desc: "Eco-friendly solar water heaters for hot water supply." },
        { title: "Veg Mess", desc: "Well-furnished mess serving quality vegetarian food." },
        { title: "Internet/Wi-Fi", desc: "High-speed internet connectivity for all inmates." },
        { title: "Recreation", desc: "TV, Carrom, Table Tennis, Volleyball, and Badminton courts." },
        { title: "Library", desc: "Dedicated library and reading room within the hostel." },
        { title: "Transportation", desc: "Separate buses for hostel student local transportation." },
        { title: "Medical Emergency", desc: "24/7 dedicated driver for hospital visits." },
        { title: "CCTV Surveillance", desc: "Comprehensive monitoring for enhanced security." }
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
                        Hostels
                    </motion.h1>
                    <div className="w-24 h-1.5 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            <div className="bg-white border-b border-gray-100 py-4">
                <div className="container mx-auto px-4 md:px-8">
                    <nav className="flex text-sm font-medium text-gray-500">
                        <a href="/" className="hover:text-cu-blue transition-colors">Home</a>
                        <span className="mx-2">/</span>
                        <span className="text-cu-blue">Hostel</span>
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
                                <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Residential Facilities</h2>
                                <div className="w-16 h-1 bg-cu-gold"></div>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    RYMEC offers comfortable and secure residential facilities with a total of 4 hostels (2 for Boys and 2 for Girls), providing a home away from home.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {hostelFeatures.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-cu-blue/30 transition-colors group"
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center text-cu-blue font-bold group-hover:bg-cu-blue group-hover:text-white transition-all">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 mb-1">{feature.title}</h3>
                                            <p className="text-sm text-gray-600 leading-snug">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                                {hostelImages.map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className={`group relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 ${idx === 0 ? "md:col-span-2" : ""}`}
                                    >
                                        <img
                                            src={img.url}
                                            alt={img.alt}
                                            className={`w-full ${idx === 0 ? "h-96" : "h-64"} object-cover transform group-hover:scale-105 transition-transform duration-700`}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                            <p className="text-white font-bold text-lg">{img.alt}</p>
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

export default Hostel;
