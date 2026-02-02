import React from 'react';
import { motion } from 'framer-motion';

const committeeData = [
    {
        title: "AICTE Grievance",
        link: "https://rymec.edu.in/wp-content/uploads/2022/12/5.1.4_1676111944_8621.pdf"
    },
    {
        title: "WOMEN'S CELL ACTIVITIES",
        link: "https://www.rymec.in/images/NAAC/WEMEN_CELL_opt.pdf"
    },
    {
        title: "Internal Quality Assurance Cell (IQAC)",
        link: "https://www.rymec.in/images/cells/8._IQAC_Committee_Revised_25.07.2017.pdf"
    },
    {
        title: "Research and Development Committee (R & DC)",
        link: "https://www.rymec.in/images/cells/7._R_DC_24.05.2017.pdf"
    },
    {
        title: "Career Guidance Cell (CGC)",
        link: "https://www.rymec.in/images/cells/3._Career_Guidance_Cell_24.05.2017.pdf"
    },
    {
        title: "National Service Scheme (NSS)",
        link: "https://www.rymec.in/images/cells/6._NSS_24.05.2017.pdf"
    },
    {
        title: "College Internal Complaint Committee (CICC)",
        link: "https://www.rymec.in/images/cells/4._CICC_24.05.2017.pdf"
    },
    {
        title: "Entrepreneurship Development Cell (EDC)",
        link: "https://www.rymec.in/images/cells/5._EDC_24.05.2017.pdf"
    },
    {
        title: "Central Grievances Redressal Committee Details",
        link: null // Empty in source
    },
    {
        title: "Anti-Ragging Members, Anti-Ragging Squad",
        link: null // Empty in source
    },
    {
        title: "Anti- Sexual Harassment Committee",
        link: null // Empty in source
    },
    {
        title: "Committee of wardens",
        link: null // Empty in source
    },
    {
        title: "Composition of RTI cell",
        link: null // Empty in source
    }
];

const InstitutionalCommittee = () => {
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
                        Institutional Committee
                    </motion.h1>
                    <div className="w-20 h-1 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 py-12 max-w-5xl">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse min-w-[600px]">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200 text-left">
                                    <th className="p-4 font-bold text-gray-700 w-2/3">Details</th>
                                    <th className="p-4 font-bold text-gray-700 w-1/3 text-center">Download</th>
                                </tr>
                            </thead>
                            <tbody>
                                {committeeData.map((item, index) => (
                                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-medium text-gray-800">
                                            {item.title}
                                        </td>
                                        <td className="p-4 text-center">
                                            {item.link ? (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all text-sm font-medium"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                    </svg>
                                                    Download
                                                </a>
                                            ) : (
                                                <span className="text-gray-400 text-sm italic">Coming Soon</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstitutionalCommittee;
