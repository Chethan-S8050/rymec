import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ShieldCheck, ExternalLink, Award, BarChart3, ChevronRight, Search } from 'lucide-react';

const Nirf = () => {
    const documents = [
        {
            year: '2024-25',
            title: 'NIRF Data 2025 (OVERALL)',
            category: 'Overall Institutional Ranking',
            url: 'https://rymec.edu.in/wp-content/uploads/2025/02/NIRF-Raking-overall-2024-25.pdf'
        },
        {
            year: '2024-25',
            title: 'NIRF Data 2025 (Engineering)',
            category: 'Engineering Discipline Ranking',
            url: 'https://rymec.edu.in/wp-content/uploads/2025/02/NIRF-Raking-2024-25.pdf'
        },
        {
            year: '2022-23',
            title: 'NIRF Ranking Report 2022-23 (Full)',
            category: 'Consolidated Ranking Data',
            url: 'https://rymec.edu.in/wp-content/uploads/2023/03/NIRF-Ranking-2022-23.pdf'
        },
        {
            year: '2022-23',
            title: 'NIRF Ranking Submission 2022-23',
            category: 'Data Submission Report',
            url: 'https://rymec.edu.in/wp-content/uploads/2023/03/NIRF-Raking-2022-23.pdf'
        }
    ];

    return (
        <div className="min-h-screen pt-20 pb-12 bg-gray-50/50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#121c3d] to-[#1D316E] text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-cu-gold rounded-full -ml-48 -mb-48 blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cu-gold mb-6">
                            <BarChart3 className="w-5 h-5" />
                            <span className="text-sm font-bold tracking-wider uppercase">NIRF DATA REPOSITORY</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">National Institutional Ranking Framework</h1>
                        <p className="text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed font-light">
                            Transparently sharing our institutional performance metrics and data submissions as per the Ministry of Education guidelines.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 mt-12 max-w-5xl">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 mb-12">
                    <div className="flex items-center justify-between mb-10 border-b border-gray-100 pb-6">
                        <div>
                            <h2 className="text-3xl font-bold text-cu-blue font-display">NIRF Ranking Data</h2>
                            <p className="text-gray-500 font-medium mt-1">Official reports and data submissions for various cycles.</p>
                        </div>
                        <ShieldCheck className="w-12 h-12 text-cu-gold/20" />
                    </div>

                    <div className="grid gap-6">
                        {documents.map((doc, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-gray-50/50 hover:bg-white rounded-3xl p-6 border border-transparent hover:border-cu-blue/10 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="flex items-start gap-6">
                                        <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-cu-blue shrink-0 group-hover:bg-cu-blue group-hover:text-white transition-all duration-500">
                                            <FileText className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className="px-2.5 py-0.5 rounded-lg bg-cu-gold/10 text-cu-gold text-xs font-bold uppercase tracking-wider">
                                                    {doc.year}
                                                </span>
                                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{doc.category}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-cu-blue transition-colors">
                                                {doc.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <a
                                            href={doc.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-white text-cu-blue border border-gray-200 px-6 py-3 rounded-2xl font-bold hover:bg-cu-blue hover:text-white hover:border-cu-blue transition-all group/btn"
                                        >
                                            View Report
                                            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </a>
                                        <a
                                            href={doc.url}
                                            download
                                            className="p-3.5 bg-gray-100 text-gray-400 rounded-2xl hover:bg-cu-gold hover:text-white transition-all shadow-sm"
                                            title="Download PDF"
                                        >
                                            <Download className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* About NIRF Section */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[#1D316E] text-white rounded-[2.5rem] p-10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                            <Award className="w-32 h-32" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 relative z-10">About NIRF</h3>
                        <p className="text-blue-100/80 leading-relaxed mb-8 relative z-10">
                            The National Institutional Ranking Framework (NIRF) was approved by the MHRD and launched by the Honorable Minister of Human Resource Development.
                            This framework outlines a methodology to rank institutions across the country based on parameters including Teaching, Learning & Resources, Research & Professional Practice, and Graduate Outcomes.
                        </p>
                        <a
                            href="https://www.nirfindia.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-cu-gold font-bold hover:gap-3 transition-all relative z-10"
                        >
                            Official NIRF Website <ChevronRight className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-lg shadow-gray-200/50 flex flex-col justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-cu-gold/10 text-cu-gold flex items-center justify-center mb-6">
                            <Search className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-cu-blue mb-4">Quality & Excellence</h3>
                        <p className="text-gray-600 leading-relaxed">
                            RYMEC's participation in the NIRF ranking reflects our commitment to continuous quality improvement and excellence in higher technical education.
                            We undergo rigorous data verification to ensure accuracy in our submissions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nirf;
