import React from 'react';
import { motion } from 'framer-motion';

const ResearchCentres = () => {
    const researchCentres = [
        {
            name: "Department of Computer Science & Engineering",
            year: "2006",
            supervisors: 9,
            description: "A premier research hub recognized since 2006, focusing on Artificial Intelligence, Machine Learning, Data Science, and Cyber Security."
        },
        {
            name: "Department of Mechanical Engineering",
            year: "2011",
            supervisors: 11,
            description: "Established as a research centre in 2011, this department leads research in Thermal Engineering, Advanced Materials, and Manufacturing Processes."
        },
        {
            name: "Department of Electronics & Communication Engineering",
            year: "2014",
            supervisors: 4,
            description: "Recognized since 2014, with research focus areas including Signal Processing, VLSI Design, and Wireless Communication Systems."
        },
        {
            name: "Department of Civil Engineering",
            year: "2014",
            supervisors: 2,
            description: "Established in 2014, conducting significant research in Structural Engineering, Environmental Engineering, and Geotechnical Studies."
        },
        {
            name: "Department of Electrical & Electronics Engineering",
            year: "2018",
            supervisors: 3,
            description: "The latest addition (2018), specializing in Power Systems, Renewable Energy Integration, and Smart Grid Technology."
        },
        {
            name: "Department of Mathematics",
            year: "2011",
            supervisors: 1,
            description: "Supporting advanced engineering research since 2011 with theoretical and numerical analysis specialization."
        },
        {
            name: "Department of Physics",
            year: "2013",
            supervisors: 2,
            description: "Established in 2013, focusing on Applied Physics and Material Science research relevant to modern engineering."
        },
        {
            name: "Department of Chemistry",
            year: "2014",
            supervisors: 0, // Not explicitly in the table but listed in component
            description: "Active in Chemical Sciences, Environmental Engineering, and Polymer Science research."
        },
        {
            name: "Department of Management Studies (MBA)",
            year: "2016",
            supervisors: 3,
            description: "Recognized as a research centre in 2016, focusing on Strategic Management, HR, and Financial Systems."
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
                        Research Centres
                    </motion.h1>
                    <div className="w-20 h-1 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 py-12 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        RYMEC is proud to host several VTU recognized Research Centres where faculty and scholars pursue Ph.D. and M.Sc. (Engineering) by Research. These centres foster an ecosystem of innovation and advanced learning.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {researchCentres.map((centre, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 group flex flex-col h-full"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 bg-blue-50 rounded-2xl group-hover:bg-cu-gold/10 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-cu-blue group-hover:text-cu-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <div className="text-right">
                                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                                        Established
                                    </span>
                                    <span className="text-cu-blue font-bold">
                                        {centre.year}
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-cu-blue transition-colors">
                                {centre.name}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                                {centre.description}
                            </p>

                            <div className="pt-6 border-t border-gray-100 mt-auto">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">Eligible Research Supervisors</span>
                                    <span className="bg-cu-gold/10 text-cu-gold px-3 py-1 rounded-full font-bold">
                                        {centre.supervisors > 0 ? centre.supervisors : "N/A"}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResearchCentres;
