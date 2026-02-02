import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-gray-50 backdrop-blur-md border-t border-gray-200 pt-16 pb-8 mt-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-600">
                            RYMEC
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Rao Bahadur Y. Mahabaleswarappa Engineering College.
                            Producing professionally excellent, knowledgeable, and globally competitive engineers.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                                <motion.a
                                    key={idx}
                                    href="#"
                                    whileHover={{ scale: 1.1, color: '#4f46e5' }}
                                    className="text-gray-500 transition-colors"
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Admissions', 'Departments', 'Placements', 'Alumni', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Departments */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-6">Departments</h4>
                        <ul className="space-y-3">
                            {['Computer Science', 'Electronics & Comm', 'Mechanical Eng', 'Civil Eng', 'Electrical & Electronics', 'MBA'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-6">Contact Us</h4>
                        <div className="space-y-4 text-sm text-gray-600">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-indigo-500 mt-1 shrink-0" size={18} />
                                <p>Cantonment, Bellary, Karnataka 583104</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-indigo-500 shrink-0" size={18} />
                                <p>+91 8392 244809</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="text-indigo-500 shrink-0" size={18} />
                                <p>principal@rymec.edu.in</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} RYMEC. All rights reserved. Designed with Antigravity.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
