import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Award, Search, CheckCircle, ChevronRight, ExternalLink, Calendar, ShieldCheck, BarChart3 } from 'lucide-react';

const Naac = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
        { id: 'overview', label: 'Overview', icon: BarChart3 },
        { id: 'certificates', label: 'Certificates', icon: Award },
        { id: 'aqars', label: 'AQAR Reports', icon: FileText },
        { id: 'dvv', label: 'DVV Verification', icon: ShieldCheck },
        { id: 'cycles', label: 'SSR Cycles', icon: Calendar },
        { id: 'audits', label: 'Financial Audits', icon: ShieldCheck }
    ];

    const documents = {
        certificates: [
            { name: 'NAAC A+ Certificate (Valid upto 7-7-2028)', url: 'https://rymec.edu.in/wp-content/uploads/2024/06/NAAC-A-Certificate-valid-upto-7-7-2028.pdf' },
            { name: 'NAAC Quality Profile', url: 'https://rymec.edu.in/wp-content/themes/ryse/pdf/NAAC_Quality_Profile.pdf' },
            { name: 'NAAC Accreditation Certificate (upto 2022)', url: 'https://rymec.edu.in/wp-content/themes/ryse/pdf/NAAC_Accrditation_Certificate_upto_29-Oct-2022.pdf' }
        ],
        aqars: [
            {
                year: '2023-24', criteria: [
                    { id: '1.1.1', name: 'Curricular Planning (1.1.1)', url: 'https://rymec.edu.in/wp-content/uploads/2025/01/1.1.1.pdf' },
                    { id: '1.2.1', name: 'Academic Flexibility (1.2.1)', url: 'https://rymec.edu.in/wp-content/uploads/2025/01/1.2.1.pdf' },
                    { id: '2.1.2', name: 'Student Enrollment (2.1.2)', url: 'https://rymec.edu.in/wp-content/uploads/2025/01/2.1.2.pdf' },
                    { id: '3.2.2', name: 'Research Grants (3.2.2)', url: 'https://rymec.edu.in/wp-content/uploads/2025/02/3.2.2.pdf' },
                    { id: '4.1.1', name: 'Physical Facilities (4.1.1)', url: 'https://rymec.edu.in/wp-content/uploads/2025/01/4.1.1.pdf' },
                    { id: '4.2.2', name: 'Library Resources (4.2.2)', url: 'https://rymec.edu.in/wp-content/uploads/2025/02/4.2.2.pdf' },
                    { id: '5.1.1', name: 'Student Support (5.1.1)', url: 'https://rymec.edu.in/wp-content/uploads/2025/01/5.1.1.pdf' },
                    { id: '6.2.2', name: 'Quality Report (6.2.2)', url: 'https://rymec.edu.in/wp-content/uploads/2025/01/6.2.2-Annual-Quality-Assurance-Report.pdf' },
                    { id: '7.1.1', name: 'Gender Sensitization (7.1.1)', url: 'https://rymec.edu.in/wp-content/uploads/2025/02/7.1.1.pdf' }
                ]
            },
            {
                year: '2022-23', criteria: [
                    { id: '1.1.1', name: 'Curricular Planning', url: 'https://rymec.edu.in/wp-content/uploads/2024/11/1.1.1.pdf' },
                    { id: '1.4.1', name: 'Feedback System', url: 'https://rymec.edu.in/wp-content/uploads/2024/11/1.4.1.pdf' },
                    { id: '2.3.1', name: 'Learning Process', url: 'https://rymec.edu.in/wp-content/uploads/2024/12/2.3.1.pdf' },
                    { id: '4.2.2', name: 'Library Content', url: 'https://rymec.edu.in/wp-content/uploads/2024/11/4.2.2.pdf' },
                    { id: '6.1.1', name: 'Governance', url: 'https://rymec.edu.in/wp-content/uploads/2024/11/6.1.1.pdf' },
                    { id: '7.1.1', name: 'Institutional Values', url: 'https://rymec.edu.in/wp-content/uploads/2024/11/7.1.1.pdf' }
                ]
            },
            {
                year: '2021-22', criteria: [
                    { id: '1.1.1', name: 'Curriculum Planning', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/1.1.1-Curriculamplanning.pdf' },
                    { id: '2.1.1', name: 'Students Profile', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/2.1.1-Studentsadmitted.pdf' },
                    { id: '3.1.1', name: 'Grants Received', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/3.1.1-Grants.pdf' },
                    { id: '4.1.1', name: 'Physical Facilities', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/4.1.1-Facilities.pdf' }
                ]
            }
        ],
        dvv: [
            {
                section: 'Extended Profile Deviation',
                items: [
                    { name: 'Number of students year wise', id: '1.1', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/DVV-1.1-Extended' },
                    { name: 'Number of full time teachers', id: '2.1', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/DVV-2.1-Extended' },
                    { name: 'Expenditure excluding salary', id: '3.1', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/DVV-3.1-Extended' }
                ]
            },
            {
                section: 'Criteria I-III',
                items: [
                    { name: 'Add on/Certificate programs', id: '1.2.1', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/DVV-1.2.1-Addon' },
                    { name: 'Internship projects', id: '1.3.2', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/DVV-1.3.2-Internship' },
                    { name: 'Feedback report', id: '1.4.1', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/DVV-1.4.1-Feedback' },
                    { name: 'Reserved categories admission', id: '2.1.2', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/DVV-2.1.2-reserved' },
                    { name: 'Sanctioned posts', id: '2.4.1', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/DVV-2.4.1-Sanction' },
                    { name: 'Pass percentage result', id: '2.6.2', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/DVV-2.6.2-Result' },
                    { name: 'Research grants', id: '3.1.1', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/DVV-3.1.1-Grants' },
                    { name: 'Functional MoUs', id: '3.5.1', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/DVV-3.5.1-MoU' }
                ]
            },
            {
                section: 'Criteria IV-VII',
                items: [
                    { name: 'Maintenance of infra', id: '4.4.1', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/DVV-4.4.1-Maintenanceofinfra.pdf' },
                    { name: 'Scholarships', id: '5.1.1', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/DVV-5.1.1-Scholarships' },
                    { name: 'Skill enhancement', id: '5.1.2', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/DVV-5.1.2-Skills' },
                    { name: 'Placement students', id: '5.2.1', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/DVV-5.2.1-Placement' },
                    { name: 'e-Governance implementation', id: '6.2.2', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/DVV-6.2-egovernance' },
                    { name: 'IQAC quality assurance', id: '6.5.2', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/DVV-6.5.2-IQAC' }
                ]
            }
        ],
        cycles: [
            {
                cycle: 'Cycle 2', links: [
                    { name: 'SSR Cycle-2 Report', url: 'https://rymec.edu.in/wp-content/uploads/2023/05/NAAC-SSR-01.03.2023.pdf' },
                    { name: 'SSR Compressed version', url: 'https://rymec.edu.in/wp-content/themes/ryse/pdf/SSR_compressed_opt.pdf' },
                    { name: 'DVV Verification Summary', url: 'https://rymec.edu.in/naac/' }
                ]
            },
            {
                cycle: 'Cycle 1', links: [
                    { name: 'SSR - VOL - 1 & 2', url: 'https://rymec.edu.in/naac/' }
                ]
            }
        ],
        audits: [
            { year: '2022-23', url: 'https://rymec.edu.in/wp-content/uploads/2024/06/Financial-Audit-Statement-2022-23.pdf' },
            { year: '2021-22', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/Audit-Statement-2021-2022.pdf' },
            { year: '2020-21', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/Audit-Statement-2020-21.pdf' },
            { year: '2019-20', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/Audit-Statement-2019-20.pdf' },
            { year: '2018-19', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/Audit-Statement-2018-19.pdf' },
            { year: '2017-18', url: 'https://rymec.edu.in/wp-content/uploads/2022/12/Audit-Statement-2017-18.pdf' },
            { year: '2016-17', url: 'https://rymec.edu.in/naac/' }
        ]
    };

    return (
        <div className="min-h-screen pt-20 pb-12 bg-gray-50/50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#1D316E] to-[#2a4596] text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-cu-gold rounded-full -ml-48 -mb-48 blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cu-gold mb-6">
                            <Award className="w-5 h-5" />
                            <span className="text-sm font-bold tracking-wider uppercase">Accredited A+ Grade by NAAC</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">NAAC Documentation</h1>
                        <p className="text-xl text-blue-100/90 leading-relaxed font-light">
                            Access our official Institutional Quality assessments, AQAR reports, and Accreditation certificates ensuring excellence in engineering education.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main Tabs Navigation */}
            <div className="container mx-auto px-4 -mt-10 mb-12 relative z-20">
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-2 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 max-w-5xl mx-auto">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-4 rounded-xl font-bold transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-cu-blue text-white shadow-lg shadow-blue-900/20 scale-[1.02]'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-cu-blue'
                                    }`}
                            >
                                <Icon className="w-5 h-5 text-current" />
                                <span className="hidden md:inline">{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Tab Content Area */}
            <div className="container mx-auto px-4 max-w-6xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 min-h-[400px]"
                    >
                        {activeTab === 'overview' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-cu-blue font-display flex items-center gap-3">
                                        <ShieldCheck className="w-8 h-8 text-cu-gold" />
                                        Accreditation Status
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        Rao Bahadur Y Mahabaleswarappa Engineering College (RYMEC) is proud to be accredited by the
                                        <strong> National Assessment and Accreditation Council (NAAC)</strong> with an
                                        <span className="text-cu-blue font-bold"> "A+" Grade.</span>
                                    </p>
                                    <div className="space-y-4">
                                        {[
                                            "Cycle 2 Accreditation: A+ Grade",
                                            "Validity: Up to July 7, 2028",
                                            "CGPA Score: 3.26",
                                            "Regular submissions of AQAR reports"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                                <div className="w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle className="w-4 h-4" />
                                                </div>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pt-6">
                                        <a
                                            href="https://rymec.edu.in/wp-content/uploads/2024/06/NAAC-A-Certificate-valid-upto-7-7-2028.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-cu-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20"
                                        >
                                            View Official Certificate
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-cu-gold/10 rounded-3xl rotate-3 blur-md"></div>
                                    <div className="relative bg-white p-6 rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4">
                                            <Award className="w-12 h-12 text-cu-gold/20" />
                                        </div>
                                        <h3 className="text-xl font-bold text-cu-blue mb-4">Quick Stats</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gray-50 p-4 rounded-2xl">
                                                <div className="text-sm font-bold text-gray-500 mb-1 tracking-wider uppercase">Grade</div>
                                                <div className="text-3xl font-display font-bold text-cu-blue">A+</div>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-2xl">
                                                <div className="text-sm font-bold text-gray-500 mb-1 tracking-wider uppercase">Cycle</div>
                                                <div className="text-3xl font-display font-bold text-cu-blue">2nd</div>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-2xl col-span-2">
                                                <div className="text-sm font-bold text-gray-500 mb-1 tracking-wider uppercase">Valid Upto</div>
                                                <div className="text-2xl font-display font-bold text-cu-blue">July 2028</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'certificates' && (
                            <div className="space-y-8">
                                <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                                    <h2 className="text-3xl font-bold text-cu-blue font-display">Accreditation Certificates</h2>
                                    <Award className="w-10 h-10 text-cu-gold/30" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {documents.certificates.map((doc, idx) => (
                                        <a
                                            key={idx}
                                            href={doc.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-cu-blue/30 transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-cu-blue flex items-center justify-center group-hover:bg-cu-blue group-hover:text-white transition-colors">
                                                    <FileText className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <span className="block font-bold text-gray-800 text-lg">{doc.name}</span>
                                                    <span className="text-sm text-gray-500 font-medium">PDF Document</span>
                                                </div>
                                            </div>
                                            <Download className="w-6 h-6 text-gray-400 group-hover:text-cu-blue transition-colors" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'aqars' && (
                            <div className="space-y-10">
                                <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                                    <h2 className="text-3xl font-bold text-cu-blue font-display">AQAR Reports</h2>
                                    <BarChart3 className="w-10 h-10 text-cu-gold/30" />
                                </div>
                                {documents.aqars.map((yearGroup, idx) => (
                                    <div key={idx} className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="px-4 py-1.5 rounded-full bg-cu-blue text-white text-sm font-bold tracking-wider uppercase">
                                                Session {yearGroup.year}
                                            </div>
                                            <div className="h-px flex-1 bg-gray-100"></div>
                                        </div>
                                        {yearGroup.criteria ? (
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                {yearGroup.criteria.map((item, i) => (
                                                    <a
                                                        key={i}
                                                        href={item.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group p-6 bg-gray-50/50 rounded-2xl border border-transparent hover:border-cu-blue/20 hover:bg-white hover:shadow-lg transition-all duration-300"
                                                    >
                                                        <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center mb-4 group-hover:bg-cu-blue group-hover:text-white transition-colors">
                                                            <Search className="w-5 h-5 text-cu-blue group-hover:text-white" />
                                                        </div>
                                                        <div className="font-bold text-gray-800 mb-1">{item.name}</div>
                                                        <div className="flex items-center gap-1 text-cu-blue text-sm font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                            Download PDF <Download className="w-4 h-4" />
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="p-12 text-center bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
                                                <p className="text-gray-500 font-medium">Historical data for {yearGroup.year} is currently being archived.</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'dvv' && (
                            <div className="space-y-12">
                                <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                                    <h2 className="text-3xl font-bold text-cu-blue font-display">DVV Verification</h2>
                                    <ShieldCheck className="w-10 h-10 text-cu-gold/30" />
                                </div>
                                {documents.dvv.map((section, idx) => (
                                    <div key={idx} className="space-y-6">
                                        <h3 className="text-xl font-bold text-cu-blue flex items-center gap-3">
                                            <div className="w-2 h-8 bg-cu-gold rounded-full"></div>
                                            {section.section}
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {section.items.map((item, i) => (
                                                <a
                                                    key={i}
                                                    href={item.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-between p-5 bg-gray-50/50 rounded-2xl border border-transparent hover:border-cu-blue/20 hover:bg-white hover:shadow-md transition-all duration-300 group"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-cu-blue group-hover:bg-cu-blue group-hover:text-white transition-colors">
                                                            <span className="text-xs font-bold">{item.id}</span>
                                                        </div>
                                                        <span className="font-bold text-gray-700">{item.name}</span>
                                                    </div>
                                                    <Download className="w-5 h-5 text-gray-300 group-hover:text-cu-blue transition-colors" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'cycles' && (
                            <div className="space-y-8">
                                {documents.cycles.map((cycle, idx) => (
                                    <div key={idx} className="group overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
                                        <div className="bg-gray-50 p-6 flex items-center justify-between group-hover:bg-cu-blue/5 transition-colors">
                                            <h3 className="text-2xl font-bold text-cu-blue font-display">{cycle.cycle} SSR Reports</h3>
                                            <ChevronRight className="w-6 h-6 text-cu-blue" />
                                        </div>
                                        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {cycle.links.map((link, i) => (
                                                <a
                                                    key={i}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-cu-blue/30 hover:shadow-md transition-all duration-300 group/link"
                                                >
                                                    <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center group-hover/link:bg-orange-600 group-hover/link:text-white transition-colors">
                                                        <FileText className="w-5 h-5" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <span className="block font-bold text-gray-800">{link.name}</span>
                                                        <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Institutional Report</span>
                                                    </div>
                                                    <Download className="w-5 h-5 text-gray-300 group-hover/link:text-cu-blue transition-colors" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'audits' && (
                            <div className="space-y-8">
                                <div className="bg-[#1D316E]/5 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 mb-12 border border-[#1D316E]/10">
                                    <div className="p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                                        <ShieldCheck className="w-12 h-12 text-[#1D316E]" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-cu-blue mb-2">Financial Transparency</h3>
                                        <p className="text-gray-600 font-medium max-w-2xl">
                                            RYMEC maintains strict financial audits conducted annually. Here you can find the transparency
                                            reports and financial statements for previous academic years.
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {documents.audits.map((audit, idx) => (
                                        <a
                                            key={idx}
                                            href={audit.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                        >
                                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                                <BarChart3 className="w-16 h-16" />
                                            </div>
                                            <div className="text-sm font-bold text-cu-gold mb-2 tracking-widest uppercase">Financial Year</div>
                                            <div className="text-2xl font-display font-bold text-cu-blue mb-6">{audit.year}</div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-500 font-bold text-xs uppercase tracking-wider">Audit Statement</span>
                                                <div className="p-2 rounded-full bg-gray-50 text-gray-400 group-hover:bg-cu-blue group-hover:text-white transition-colors">
                                                    <Download className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Footer Notice */}
            <div className="container mx-auto px-4 mt-20 text-center">
                <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
                    <Search className="w-8 h-8 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">
                        Looking for more specific documents? Please check the <a href="/iqac" className="text-cu-blue font-bold hover:underline">IQAC page</a> or contact the Institutional Quality Cell directly.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Naac;
