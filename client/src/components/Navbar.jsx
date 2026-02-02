import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MenuOverlay from "./MenuOverlay";

// Import Logo
import logo from '../assets/rymec/vvs-logo.jpg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
                    : "bg-white py-4 shadow-sm"
                    }`}
            >
                <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-4 group">
                        <div className="relative overflow-hidden w-12 h-12 md:w-16 md:h-16">
                            <img
                                src={logo}
                                alt="RYMEC Logo"
                                className="object-contain w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-display font-bold text-cu-blue leading-tight tracking-tight">
                                RYMEC
                            </span>
                            <span className="text-[10px] md:text-xs text-gray-500 font-medium tracking-widest uppercase hidden sm:block">
                                Rao Bahadur Y. Mahabaleswarappa Engineering College
                            </span>
                        </div>
                    </Link>

                    {/* Right Section: Menu Trigger */}
                    <div className="flex items-center gap-6">

                        {/* Desktop Quick Links */}
                        <div className="hidden lg:flex items-center gap-6 mr-4">
                            <Link to="/contact" className="text-sm font-semibold text-gray-600 hover:text-cu-blue transition-colors">
                                Contact
                            </Link>
                            <Link to="/iqac" className="text-sm font-semibold text-gray-600 hover:text-cu-blue transition-colors">
                                IQAC
                            </Link>
                        </div>

                        {/* MENU Button */}
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="flex items-center gap-3 pl-6 border-l border-gray-200 group"
                        >
                            <span className="hidden md:block font-bold text-cu-blue text-sm uppercase tracking-widest group-hover:text-cu-gold transition-colors">
                                Menu
                            </span>
                            <div className="p-2 md:p-3 bg-gray-50 rounded-full group-hover:bg-cu-blue group-hover:text-white transition-all duration-300 shadow-sm">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* The Overlay Component */}
            <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
};

export default Navbar;
