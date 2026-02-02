import React from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck,
    Download,
    ExternalLink,
    FileText,
    CheckCircle2,
    Info,
    Calendar,
    ArrowRightCircle,
    Building2,
    Scale
} from 'lucide-react';

const MandatoryDisclosure = () => {
    const documents = [
        {
            year: "2024-25",
            title: "Mandatory Disclosure 2024-25",
            date: "May 02, 2025",
            url: "https://rymec.edu.in/wp-content/uploads/2025/05/MandatoryDisclouser-2024-25-02-05-2025.pdf",
            status: "Latest"
        },
        {
            year: "2023-24",
            title: "Mandatory Disclosure 2023-24",
            date: "Feb 2025",
            url: "https://rymec.edu.in/wp-content/uploads/2025/02/Mandatory_Disclousre-2023-2024.pdf",
            status: "Archived"
        },
        {
            year: "2022-23",
            title: "Mandatory Disclosure 2022-23",
            date: "April 2024",
            url: "https://rymec.edu.in/wp-content/uploads/2024/04/2022-23-Mandatory-Disclosure.pdf",
            status: "Archived"
        },
        {
            year: "2021-22",
            title: "Mandatory Disclosure 2021-22",
            date: "April 2024",
            url: "https://rymec.edu.in/wp-content/uploads/2024/04/2021-22-Mandatory-Disclosure.pdf",
            status: "Archived"
        }
    ];

    return (
        <div className="min-h-screen pt-20 pb-12 bg-gray-50/50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#121c3d] to-[#1D316E] text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full -mr-72 -mt-72 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cu-gold rounded-full -ml-72 -mb-72 blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cu-gold mb-8 shadow-2xl"
                        >
                            <ShieldCheck className="w-5 h-5" />
                            <span className="text-sm font-bold tracking-widest uppercase">Regulatory Compliance</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-7xl font-bold font-display mb-8"
                        >
                            Mandatory <span className="text-cu-gold">Disclosure</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-blue-100/90 leading-relaxed font-light max-w-2xl mx-auto"
                        >
                            Ensuring institutional transparency through public disclosure of academic, infrastructure, and administrative metrics.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 mt-16 max-w-5xl">
                <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 mb-12">
                    <div className="flex items-center justify-between mb-12 border-b border-gray-100 pb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-cu-blue font-display">Compliance Reports</h2>
                            <p className="text-gray-500 font-medium mt-1">Official AICTE mandatory disclosure records by academic cycle.</p>
                        </div>
                        <Building2 className="w-16 h-16 text-cu-gold/20" />
                    </div>

                    <div className="space-y-6">
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
                                                <span className={`px-2.5 py-0.5 rounded-lg text-xs font-bold uppercase tracking-wider ${doc.status === 'Latest' ? 'bg-emerald-100 text-emerald-700' : 'bg-cu-gold/10 text-cu-gold'
                                                    }`}>
                                                    {doc.year}
                                                </span>
                                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    Updated: {doc.date}
                                                </span>
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

                {/* Statutory Information Card */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[#121c3d] text-white rounded-[2.5rem] p-10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 scale-150 rotate-12 group-hover:rotate-45 transition-transform duration-700">
                            <Scale className="w-32 h-32" />
                        </div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-cu-gold">
                            <CheckCircle2 className="w-7 h-7" />
                            Statutory Compliance
                        </h3>
                        <p className="text-blue-100/80 leading-relaxed mb-8">
                            These disclosures are prepared in accordance with AICTE regulations to provide stakeholders with validated institutional data.
                        </p>
                        <ul className="space-y-4">
                            {['Infrastructure Details', 'Faculty Repository', 'Admission Process', 'Academic Audit'].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm font-medium text-blue-100">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cu-gold"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-cu-gold/5 border border-cu-gold/20 rounded-[2.5rem] p-10">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-cu-gold mb-8 shadow-sm">
                            <Info className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-cu-blue mb-4">Verification Note</h3>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            For any further technical verification or specific institutional data requests, please contact the administrative cell.
                        </p>
                        <a href="mailto:admin@rymec.in" className="inline-flex items-center gap-2 font-bold text-cu-blue hover:text-cu-gold transition-colors">
                            admin@rymec.in <ArrowRightCircle className="w-5 h-5 text-cu-gold" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MandatoryDisclosure;
