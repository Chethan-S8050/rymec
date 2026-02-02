import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ShieldCheck, Users, ClipboardList, FileText, Search,
    Award, Layers, Sparkles, MessageSquare, Download,
    CheckCircle, Target, Info
} from 'lucide-react';

const Iqac = () => {
    const [activeTab, setActiveTab] = useState('about');

    const tabs = [
        { id: 'about', title: 'About IQAC', icon: Info },
        { id: 'committee', title: 'Committee', icon: Users },
        { id: 'moms', title: "MOM's & Action Taken", icon: ClipboardList },
        { id: 'aqar', title: 'AQAR Reports', icon: FileText },
        { id: 'audit', title: 'Audit Report', icon: Search },
        { id: 'accreditation', title: 'Accreditation', icon: Award },
        { id: 'best-practices', title: 'Best Practices', icon: Sparkles },
        { id: 'feedback', title: 'Feedback', icon: MessageSquare },
        { id: 'others', title: 'Others', icon: Layers },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-12"
                    >
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-cu-blue/10 rounded-lg text-cu-blue">
                                    <ShieldCheck size={28} />
                                </div>
                                <h2 className="text-3xl font-bold text-cu-blue">Establishment of IQAC</h2>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                The R.Y.M.E.C. established the Internal Quality Assurance Cell (IQAC) during July 2017 to develop a quality system for conscious, consistent, and catalytic programmed action to improve the academic and administrative performance of the college and to promote measures for institutional functioning towards quality enhancement through internationalization of quality culture and institutionalization of best practices.
                            </p>
                        </section>

                        <div className="grid md:grid-cols-2 gap-8">
                            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <Target className="text-cu-gold" size={24} />
                                    <h3 className="text-xl font-bold text-cu-blue">Objectives</h3>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "To develop a system for conscious, consistent, and catalytic programmed action to improve the academic and administrative performance of the Institution.",
                                        "To promote the institution measures for functioning towards quality enhancement through internationalization of quality culture and institutionalization of best practices."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="text-cu-gold mt-1 flex-shrink-0" size={18} />
                                            <span className="text-gray-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <Layers className="text-cu-gold" size={24} />
                                    <h3 className="text-xl font-bold text-cu-blue">Roles & Responsibilities</h3>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Preparation of Academic Calendar with Dean Academics.",
                                        "Establishment of Institute Innovation Council (IIC) under MHRD.",
                                        "Guidelines follow up for Research and Development Cell.",
                                        "Conducting quality programs (seminars, webinars, conferences).",
                                        "Stakeholder feedback analysis and action taken.",
                                        "Enhance ICT tools for teaching-learning process.",
                                        "Submitting Annual Quality Assurance Report (AQAR) to NAAC.",
                                        "Mentor-mentee process effective implementation.",
                                        "Participation in NIRF, ARIIA, NBA, AISHE rankings.",
                                        "Conduction of Academic, Green, and Energy audits."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 bg-cu-gold rounded-full mt-2 flex-shrink-0" />
                                            <span className="text-sm text-gray-600 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </motion.div>
                );

            case 'committee':
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                    >
                        <div className="bg-cu-blue p-8 text-white">
                            <h2 className="text-2xl font-bold">IQAC Committee Members</h2>
                            <p className="opacity-80 mt-1">Ensuring quality across all institutional processes</p>
                        </div>
                        <div className="p-8">
                            <div className="grid gap-4">
                                {[
                                    { title: "IQAC Committee 2022-2023", url: "https://rymec.edu.in/wp-content/uploads/2023/06/iqac-comittee-2022-2023.pdf" },
                                    { title: "IQAC Committee 2021-2022", url: "https://rymec.edu.in/wp-content/uploads/2023/06/IQAC-Committee-2021-2022.pdf" },
                                    { title: "IQAC Committee for AY 2021-22 (Sept 2021)", url: "https://rymec.edu.in/wp-content/uploads/2023/02/IQAC-Committee-for-the-AY-2021-22-September-2021.pdf" },
                                    { title: "IQAC Committee for AY 2017-18", url: "https://rymec.edu.in/wp-content/uploads/2023/02/IQAC-Committee-for-the-AY-2017-18.pdf" },
                                ].map((doc, idx) => (
                                    <a
                                        key={idx}
                                        href={doc.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-cu-blue hover:text-white transition-all group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <FileText className="text-cu-gold group-hover:text-white" size={20} />
                                            <span className="font-semibold">{doc.title}</span>
                                        </div>
                                        <Download size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );

            case 'moms':
                const moms = [
                    { year: "2023-2024", mom: "https://rymec.edu.in/wp-content/uploads/2025/01/6.5.2.pdf", action: "https://rymec.edu.in/wp-content/uploads/2025/01/6.5.3.pdf", extra: "https://rymec.edu.in/wp-content/uploads/2025/01/6.5.1.pdf", title: "Quality Initiatives & Incremental Improvements" },
                    { year: "2022-2023", mom: "https://rymec.edu.in/wp-content/uploads/2024/10/MOMs-Proceedings-2022-2023.pdf", action: "https://rymec.edu.in/wp-content/uploads/2024/10/6.5.3.pdf" },
                    { year: "2021-2022", mom: "https://rymec.edu.in/wp-content/uploads/2023/02/MOM-Proceedings-2021-2022.pdf", action: "https://rymec.edu.in/wp-content/uploads/2023/03/Action-Plan-and-Action-Taken-2021-2022.pdf" },
                    { year: "2020-2021", mom: "https://rymec.edu.in/wp-content/uploads/2023/02/MOM-Proceedings-2020-2021.pdf", action: "https://rymec.edu.in/wp-content/uploads/2023/03/Action-Plan-and-Action-Taken-2020-2021.pdf" },
                    { year: "2019-2020", mom: "https://rymec.edu.in/wp-content/uploads/2023/02/MOM-Proceedings-2019-2020.pdf", action: "https://rymec.edu.in/wp-content/uploads/2023/03/Action-Plan-and-Action-Taken-2019-2020.pdf" },
                    { year: "2018-2019", mom: "https://rymec.edu.in/wp-content/uploads/2023/02/MOM-Proceedings-2018-2019.pdf", action: "https://rymec.edu.in/wp-content/uploads/2023/03/Action-Plan-and-Action-Taken-2018-2019.pdf" },
                    { year: "2017-2018", mom: "https://rymec.edu.in/wp-content/uploads/2023/02/MOM-Proceedings-2017-2018.pdf", action: null },
                ];

                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {moms.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-cu-blue uppercase tracking-wider">{item.year}</h3>
                                        {item.title && <span className="text-[10px] bg-cu-gold/10 text-cu-gold font-bold px-2 py-1 rounded uppercase">{item.title}</span>}
                                    </div>
                                    <div className="space-y-3">
                                        <a href={item.mom} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-cu-blue hover:text-white transition-all">
                                            <FileText size={18} />
                                            <span className="text-sm font-semibold">{item.year === "2023-2024" ? "Periodic Reviews (6.5.2)" : "Minutes of Meeting"}</span>
                                        </a>
                                        {item.action && (
                                            <a href={item.action} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-cu-gold hover:text-cu-blue transition-all">
                                                <CheckCircle size={18} />
                                                <span className="text-sm font-semibold">{item.year === "2023-2024" ? "Incremental Improvements (6.5.3)" : "Action Taken Report"}</span>
                                            </a>
                                        )}
                                        {item.extra && (
                                            <a href={item.extra} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-cu-blue/10 hover:text-cu-blue transition-all">
                                                <ShieldCheck size={18} />
                                                <span className="text-sm font-semibold">Quality Strategies (6.5.1)</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );

            case 'aqar':
                const aqars = [
                    { year: "2023-24", url: "https://rymec.edu.in/wp-content/uploads/2025/01/6.2.2-Annual-Quality-Assurance-Report.pdf", label: "Current Report" },
                    { year: "2022-23", url: "https://rymec.edu.in/wp-content/uploads/2024/11/6.1.1.pdf", label: "Supporting Data" },
                    { year: "2020-21", url: "https://rymec.edu.in/wp-content/uploads/2023/02/2020-2021.pdf" },
                    { year: "2019-20", url: "https://rymec.edu.in/wp-content/uploads/2023/02/2019-2020.pdf" },
                    { year: "2018-19", url: "https://rymec.edu.in/wp-content/uploads/2023/02/2018-2019.pdf" },
                    { year: "2017-18", url: "https://rymec.edu.in/wp-content/uploads/2023/02/2017-2018.pdf" },
                ];
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-cu-blue mb-8">Annual Quality Assurance Reports</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {aqars.map((aqar, idx) => (
                                <a
                                    key={idx}
                                    href={aqar.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-6 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center gap-4 hover:border-cu-blue hover:bg-gray-50 transition-all group text-center relative overflow-hidden"
                                >
                                    {aqar.label && (
                                        <div className="absolute top-2 right-2 bg-cu-gold text-cu-blue text-[8px] font-bold px-2 py-1 rounded-full uppercase">
                                            {aqar.label}
                                        </div>
                                    )}
                                    <div className="p-4 bg-gray-100 rounded-full text-gray-400 group-hover:bg-cu-blue group-hover:text-white transition-all">
                                        <FileText size={32} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">AQAR Report</h4>
                                        <p className="text-sm text-gray-500 font-medium uppercase tracking-widest">{aqar.year}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                );

            case 'audit':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-cu-blue mb-6 border-l-4 border-cu-gold pl-4">Internal Audit</h3>
                            <p className="text-gray-600 mb-6">Regular internal checks to ensure adherence to quality standards and processes.</p>
                            <a
                                href="https://rymec.edu.in/wp-content/uploads/2023/03/Internal-Audit-2021-22.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-cu-blue text-white rounded-xl font-bold hover:shadow-lg transition-all"
                            >
                                <Download size={20} />
                                Download 2021-22 Report
                            </a>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-cu-blue mb-6 border-l-4 border-cu-gold pl-4">External Audit</h3>
                            <p className="text-gray-600 mb-6">Third-party evaluations to validate institutional performance and benchmarks.</p>
                            <a
                                href="https://rymec.edu.in/wp-content/uploads/2023/03/External-Audit-2021-22.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-cu-gold text-cu-blue rounded-xl font-bold hover:shadow-lg transition-all"
                            >
                                <Download size={20} />
                                Download 2021-22 Report
                            </a>
                        </div>
                    </motion.div>
                );

            case 'accreditation':
                const certs = [
                    { title: "NAAC 'A' Certificate (Valid upto 7-7-2028)", url: "https://rymec.edu.in/wp-content/uploads/2024/06/NAAC-A-Certificate-valid-upto-7-7-2028.pdf" },
                    { title: "NAAC Certificate (Valid upto 29-Oct-2022)", url: "https://rymec.edu.in/wp-content/uploads/2023/03/NAAC_Accrditation-Certificate_upto-29-Oct-2022.pdf" },
                    { title: "NBA Accreditation (Civil, Mechanical, ECE)", url: "https://rymec.edu.in/wp-content/uploads/2023/03/NBA-Accrediation-Civil-Mechanical-ECE.pdf" },
                    { title: "NBA Accreditation (CSE 2020-2023)", url: "https://rymec.edu.in/wp-content/uploads/2023/03/RYMEC_CSE_28_05_2020-2020-2023.pdf" },
                    { title: "AICTE EOA Report 2024-25", url: "https://rymec.edu.in/wp-content/uploads/2024/06/EOA-Report-2024-25.pdf" },
                    { title: "AICTE EOA Appeal Report 22-23", url: "https://rymec.edu.in/wp-content/uploads/2023/03/EOA-APPEAL-REPORT-22-23.pdf" },
                ];
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                        <div className="grid gap-4">
                            {certs.map((cert, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl flex items-center gap-6 shadow-sm border border-gray-100 hover:border-cu-blue/30 transition-all">
                                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-cu-gold">
                                        <Award size={32} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-800 text-lg">{cert.title}</h4>
                                        <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-cu-blue font-bold text-sm hover:underline mt-1 inline-block">View Certificate →</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );

            case 'best-practices':
                const practices = {
                    "2023-24": ["https://rymec.edu.in/wp-content/uploads/2025/01/Bestpractice-1.pdf", "https://rymec.edu.in/wp-content/uploads/2025/01/Bestpractice-2.pdf", "https://rymec.edu.in/wp-content/uploads/2025/01/BestPractice-3.pdf"],
                    "2022-23": ["https://rymec.edu.in/wp-content/uploads/2024/11/Best-Practice-1.pdf", "https://rymec.edu.in/wp-content/uploads/2024/11/Best-Practice-2.pdf"],
                    "Other": ["https://rymec.edu.in/wp-content/uploads/2023/02/Best-Practice-1.pdf", "https://rymec.edu.in/wp-content/uploads/2023/02/Best-Practice-2.pdf"]
                };
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                        {Object.entries(practices).map(([year, links], idx) => (
                            <section key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-cu-blue mb-6 uppercase tracking-widest bg-gray-50 p-3 rounded-lg inline-block">{year}</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {links.map((link, lIdx) => (
                                        <a key={lIdx} href={link} target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-50 rounded-xl flex items-center gap-3 hover:bg-cu-blue hover:text-white transition-all font-bold">
                                            <Sparkles size={18} />
                                            Best Practice {lIdx + 1}
                                        </a>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </motion.div>
                );

            case 'feedback':
                const feedbackTypes = [
                    {
                        title: "Student Feedback",
                        links: [
                            { name: "Analysis & Action 2022-23", url: "https://rymec.edu.in/wp-content/uploads/2024/11/feedback-analysis-and-action-taken-2022-2023-student.pdf" },
                            { name: "Analysis & Action 2021-22", url: "https://rymec.edu.in/wp-content/uploads/2023/06/feedback-analysis-and-action-taken-2021-2022-student.pdf" },
                            { name: "Analysis & Action 2020-21", url: "https://rymec.edu.in/wp-content/uploads/2023/06/feedback-analysis-and-action-taken-2020-2021-student.pdf" },
                            { name: "Analysis & Action 2019-20", url: "https://rymec.edu.in/wp-content/uploads/2023/06/feedback-analysis-and-action-taken-2019-2020-student.pdf" },
                            { name: "Analysis & Action 2018-19", url: "https://rymec.edu.in/wp-content/uploads/2023/06/feedback-analysis-and-action-taken-2018-2019-student.pdf" },
                            { name: "Analysis & Action 2017-18", url: "https://rymec.edu.in/wp-content/uploads/2023/06/feedback-analysis-and-action-taken-2017-2018-student.pdf" },
                        ]
                    },
                    {
                        title: "Parent Feedback",
                        links: [
                            { name: "Analysis & Action 2022-23", url: "https://rymec.edu.in/wp-content/uploads/2024/11/feedback-analysis-and-action-taken-2022-2023-Parent.pdf" },
                            { name: "Analysis & Action 2021-22", url: "https://rymec.edu.in/wp-content/uploads/2023/06/feedback-analysis-and-action-taken-2021-2022-parent.pdf" },
                            { name: "Analysis & Action 2020-21", url: "https://rymec.edu.in/wp-content/uploads/2023/06/feedback-analysis-and-action-taken-2020-2021-parent.pdf" },
                            { name: "Analysis & Action 2019-20", url: "https://rymec.edu.in/wp-content/uploads/2023/06/feedback-analysis-and-action-taken-2019-2020-parent.pdf" },
                            { name: "Analysis & Action 2018-19", url: "https://rymec.edu.in/wp-content/uploads/2023/06/feedback-analysis-and-action-taken-2018-2019-parent.pdf" },
                            { name: "Analysis & Action 2017-18", url: "https://rymec.edu.in/wp-content/uploads/2023/06/feedback-analysis-and-action-taken-2017-2018-parent.pdf" },
                        ]
                    },
                    {
                        title: "Alumni Feedback",
                        links: [
                            { name: "Analysis & Action 2022-23", url: "https://rymec.edu.in/wp-content/uploads/2024/11/feedback-analysis-and-action-taken-2022-2023-Alumni.pdf" },
                            { name: "Analysis & Action 2021-22", url: "https://rymec.edu.in/wp-content/uploads/2023/06/feedback-analysis-and-action-taken-2021-2022-alumni.pdf" },
                            { name: "Analysis & Action 2020-21", url: "https://rymec.edu.in/wp-content/uploads/2023/06/feedback-analysis-and-action-taken-2020-2021-alumni.pdf" },
                            { name: "Analysis & Action 2019-20", url: "https://rymec.edu.in/wp-content/uploads/2023/06/feedback-analysis-and-action-taken-2019-2020-alumni.pdf" },
                            { name: "Analysis & Action 2018-19", url: "https://rymec.edu.in/wp-content/uploads/2023/06/feedback-analysis-and-action-taken-2018-2019-alumni.pdf" },
                            { name: "Analysis & Action 2017-18", url: "https://rymec.edu.in/wp-content/uploads/2023/06/feedback-analysis-and-action-taken-2017-2018-alumni.pdf" },
                        ]
                    }
                ];
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                        {feedbackTypes.map((type, idx) => (
                            <section key={idx}>
                                <h3 className="text-2xl font-bold text-cu-blue mb-6 border-b-2 border-cu-gold inline-block pb-2">{type.title}</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {type.links.map((link, lIdx) => (
                                        <a key={lIdx} href={link.url} target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center gap-3 hover:shadow-md transition-all">
                                            <MessageSquare className="text-cu-gold" size={18} />
                                            <span className="text-sm font-semibold text-gray-700">{link.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </motion.div>
                );

            case 'others':
                return (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 text-center"
                    >
                        <Layers className="mx-auto text-cu-gold mb-6" size={64} />
                        <h2 className="text-3xl font-bold text-cu-blue mb-4">Institutional Distinctiveness</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                            Portraying the performance of the institution in one area distinctive to its priority and thrust.
                        </p>
                        <a
                            href="https://rymec.edu.in/wp-content/uploads/2023/03/Potray.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-cu-blue text-white rounded-2xl font-bold hover:bg-cu-gold hover:text-cu-blue transition-all"
                        >
                            <Download size={24} />
                            Download Portrayal Document
                        </a>
                    </motion.div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-12">
            {/* Hero Section */}
            <header className="bg-cu-blue text-white py-16 mb-12">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <span className="text-cu-gold font-bold tracking-widest uppercase text-sm mb-4 block">Process Excellence</span>
                        <h1 className="text-5xl font-bold">Internal Quality Assurance Cell (IQAC)</h1>
                        <div className="w-24 h-1 bg-cu-gold mx-auto mt-6"></div>
                    </motion.div>
                </div>
            </header>

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Navigation */}
                    <nav className="lg:w-1/4">
                        <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 sticky top-28">
                            <div className="space-y-1">
                                {tabs.map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl font-bold transition-all ${activeTab === tab.id
                                            ? 'bg-cu-blue text-white shadow-lg shadow-cu-blue/20'
                                            : 'text-gray-500 hover:bg-gray-50 hover:text-cu-blue'
                                            }`}
                                    >
                                        <tab.icon size={20} />
                                        <span>{tab.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </nav>

                    {/* Content Area */}
                    <main className="lg:w-3/4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {renderContent()}
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Iqac;
