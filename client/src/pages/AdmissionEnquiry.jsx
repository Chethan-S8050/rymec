import React from 'react';
import { motion } from 'framer-motion';

const AdmissionEnquiry = () => {
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
                        Admission Enquiry
                    </motion.h1>
                    <div className="w-20 h-1 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">

                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Get in Touch</h2>
                        <p className="text-gray-600 mb-6">Fill out the form below and our admissions team will get back to you soon.</p>

                        <div className="flex flex-col md:flex-row justify-center gap-6 text-sm text-gray-600 bg-blue-50 p-4 rounded-xl border border-blue-100 inline-flex mx-auto">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cu-blue" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span>principal@rymec.in</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cu-blue" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span>08392-244809</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cu-blue" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span>Cantonment, Ballari 583104</span>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6 max-w-2xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cu-blue focus:border-cu-blue transition-all outline-none"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cu-blue focus:border-cu-blue transition-all outline-none"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cu-blue focus:border-cu-blue transition-all outline-none"
                                    placeholder="Enter your mobile number"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Program</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cu-blue focus:border-cu-blue transition-all outline-none bg-white">
                                    <option value="">Select Program</option>
                                    <option value="UG">Undergraduate (B.E)</option>
                                    <option value="PG">Postgraduate (MBA/M.Tech/MCA)</option>
                                    <option value="PhD">Ph.D</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message / Query</label>
                            <textarea
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cu-blue focus:border-cu-blue transition-all outline-none resize-none"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>

                        <div className="text-center pt-4">
                            <button
                                type="button"
                                className="px-8 py-3 bg-cu-blue text-white rounded-lg font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20 transform hover:-translate-y-1 active:translate-y-0"
                            >
                                Submit Enquiry
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdmissionEnquiry;
