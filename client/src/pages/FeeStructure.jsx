import React from 'react';
import { motion } from 'framer-motion';
import feeStructureImg from '../assets/images/admission/fee_structure_2025_26.jpg';

const FeeStructure = () => {
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
                        Fee Structure
                    </motion.h1>
                    <div className="w-20 h-1 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 py-12 max-w-5xl">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 text-center">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="mb-8"
                    >
                        <div className="w-20 h-20 bg-blue-50 text-cu-blue rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Fees Structure for 2025-26</h2>
                        <p className="text-gray-600 max-w-lg mx-auto mb-10">
                            The comprehensive fee structure for the academic year 2025-26 including details for CET, COMED-K, and Management quota seats.
                        </p>

                        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl border-4 border-white max-w-4xl mx-auto ring-1 ring-gray-100">
                            <img
                                src={feeStructureImg}
                                alt="Fee Structure 2025-26"
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        <div className="p-6 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center text-center h-48">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Undergraduate (B.E)</h3>
                            <p className="text-gray-500 text-sm">Please contact the admission office for the detailed fee structure.</p>
                        </div>
                        <div className="p-6 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center text-center h-48">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Postgraduate (MBA/M.Tech/MCA)</h3>
                            <p className="text-gray-500 text-sm">Please contact the admission office for the detailed fee structure.</p>
                        </div>
                    </div>

                    <div className="mt-12 p-4 bg-orange-50 rounded-lg text-orange-800 text-sm border border-orange-100 inline-block">
                        <strong>Note:</strong> Fees are subject to change as per government regulations and university norms.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeeStructure;
