import React from 'react';
import { motion } from 'framer-motion';

const ResearchIncentives = () => {
    const incentives = [
        {
            title: "Research Publications",
            description: "Faculty members are encouraged to publish research papers in reputed National and International Journals (Web of Science / Scopus indexed). Financial incentives and recognition are provided for high-impact publications."
        },
        {
            title: "Sponsored Research Projects",
            description: "Incentives are provided for faculty members who successfully secure funding from government and non-government agencies for research projects. A percentage of the grant amount or a fixed incentive is awarded."
        },
        {
            title: "Patents & Intellectual Property",
            description: "The institution supports faculty in filing patents for their innovations. Incentives are given upon filing and subsequent grant of patents."
        },
        {
            title: "Conference Participation",
            description: "Financial support is provided for registration fees and travel expenses to present papers at National and International conferences."
        },
        {
            title: "Book Publications",
            description: "Faculty members authoring text books or reference books with reputed publishers are recognized and rewarded."
        },
        {
            title: "Ph.D. Guidance",
            description: "Supervisors guiding research scholars towards successful completion of their Ph.D. are appreciated with incentives."
        }
    ];

    const sponsoredPapers = [
        {
            faculty: "Chidananda H",
            dept: "CSE",
            title: "A Natural Approach to convey numerical digits using hand activity recognition based on hand shape features.",
            venue: "Nanyang Technological University, Singapore",
            date: "May 02 2017",
            amount: "30,000/-"
        },
        {
            faculty: "Srishaila.J.M",
            dept: "Civil Engineering",
            title: "Effect of mineral admixtures on kinetic property and compressive strength of self Compacting Concrete",
            venue: "Hanoi, Vietnam",
            date: "May 2017",
            amount: "32,000/-"
        }
    ];

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
                        Research Incentives
                    </motion.h1>
                    <div className="w-20 h-1 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 py-12 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12 text-center md:text-left"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-cu-gold pl-4 md:inline-block">
                        Policy Overview
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-justify">
                        RYMEC is committed to promoting a culture of research and innovation among its faculty and students. The Research Incentive Policy is designed to motivate faculty members to engage in high-quality research, consultancy, and other research-related activities. The policy aims to recognize and reward the efforts of faculty members who contribute significantly to the research output of the institution.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {incentives.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-cu-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-3">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Sponsored Research Papers Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                >
                    <div className="p-8 border-b border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2 border-l-4 border-cu-gold pl-4">
                            Recent Sponsored Research Papers
                        </h2>
                        <p className="text-gray-500 text-sm">Recognizing faculty members for their global research contributions.</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 text-gray-700 text-sm uppercase tracking-wider">
                                    <th className="px-6 py-4 font-bold border-b border-gray-200">Sl. No</th>
                                    <th className="px-6 py-4 font-bold border-b border-gray-200">Faculty & Dept</th>
                                    <th className="px-6 py-4 font-bold border-b border-gray-200">Paper Title</th>
                                    <th className="px-6 py-4 font-bold border-b border-gray-200">Venue & Date</th>
                                    <th className="px-6 py-4 font-bold border-b border-gray-200 text-right">Incentive</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {sponsoredPapers.map((paper, index) => (
                                    <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-6 text-gray-500 font-medium">{index + 1}</td>
                                        <td className="px-6 py-6">
                                            <div className="font-bold text-gray-800">{paper.faculty}</div>
                                            <div className="text-xs text-cu-blue font-medium">{paper.dept}</div>
                                        </td>
                                        <td className="px-6 py-6 font-medium text-gray-700 max-w-xs">{paper.title}</td>
                                        <td className="px-6 py-6">
                                            <div className="text-sm text-gray-600">{paper.venue}</div>
                                            <div className="text-xs text-gray-400 mt-1">{paper.date}</div>
                                        </td>
                                        <td className="px-6 py-6 text-right">
                                            <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-bold border border-green-100 italic">
                                                Rs. {paper.amount}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ResearchIncentives;
