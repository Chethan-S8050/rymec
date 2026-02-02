import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Award, ShieldCheck, CheckCircle, ExternalLink, Calendar, BookOpen } from 'lucide-react';

const Nba = () => {
    const programs = [
        {
            name: 'Civil Engineering',
            status: 'ACCREDITED',
            validity: 'Valid up to 30-06-2024',
            certificate: 'https://rymec.edu.in/wp-content/uploads/2024/06/NBA-Accreditation-Certificate.pdf',
            compliance: 'https://rymec.edu.in/wp-content/uploads/2024/06/CIVIL-COMPLIANCE-REPORT.pdf',
            sar: 'https://rymec.edu.in/wp-content/uploads/2024/06/Civil-Sar-2023-24.pdf'
        },
        {
            name: 'Mechanical Engineering',
            status: 'ACCREDITED',
            validity: 'Valid up to 30-06-2024',
            certificate: 'https://rymec.edu.in/wp-content/uploads/2024/06/NBA-Accreditation-Certificate.pdf',
            compliance: 'https://rymec.edu.in/wp-content/uploads/2024/06/MECH-COMPLIANCE-REPORT.pdf',
            sar: 'https://rymec.edu.in/wp-content/uploads/2024/06/SAR_Mechanical_22-06-2024.pdf'
        },
        {
            name: 'Electrical & Electronics Engineering',
            status: 'ACCREDITED',
            validity: 'Valid up to 30-06-2026',
            certificate: 'https://rymec.edu.in/wp-content/uploads/2024/06/EEE-NBA-ACCREDITATION-CERTIFICATE.pdf',
            compliance: null,
            sar: null
        },
        {
            name: 'Electronics & Communication Engineering',
            status: 'ACCREDITED',
            validity: 'Valid up to 30-06-2024',
            certificate: 'https://rymec.edu.in/wp-content/uploads/2024/06/NBA-Accreditation-Certificate.pdf',
            compliance: 'https://rymec.edu.in/wp-content/uploads/2024/06/ECE-COMPLIANCE-REPORT.pdf',
            sar: 'https://rymec.edu.in/wp-content/uploads/2024/06/Ece-Sar.pdf'
        },
        {
            name: 'Computer Science & Engineering',
            status: 'ACCREDITED',
            validity: 'Valid up to 30-06-2023',
            certificate: 'https://rymec.edu.in/wp-content/uploads/2024/06/CSE-NBA-ACCREDITATION-CERTIFICATE.pdf',
            compliance: null,
            sar: null
        },
        {
            name: 'Information Science & Engineering',
            status: 'YET TO APPLY',
            validity: '-',
            certificate: null,
            compliance: null,
            sar: null
        },
        {
            name: 'CSE (Artificial Intelligence & Machine Learning)',
            status: 'YET TO APPLY',
            validity: '-',
            certificate: null,
            compliance: null,
            sar: null
        },
        {
            name: 'CSE (Data Science)',
            status: 'YET TO APPLY',
            validity: '-',
            certificate: null,
            compliance: null,
            sar: null
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
                            <ShieldCheck className="w-5 h-5" />
                            <span className="text-sm font-bold tracking-wider uppercase">NBA ACCREDITATION</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">National Board of Accreditation</h1>
                        <p className="text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed font-light">
                            Verifying educational quality and professional relevance across our engineering programs through rigorous external assessment.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 mt-12 max-w-6xl">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 mb-12">
                    <div className="flex items-center justify-between mb-10 border-b border-gray-100 pb-6">
                        <div>
                            <h2 className="text-3xl font-bold text-cu-blue font-display">Program Accreditation Status</h2>
                            <p className="text-gray-500 font-medium mt-1">Detailed status and reports for individual engineering departments.</p>
                        </div>
                        <Award className="w-12 h-12 text-cu-gold/20" />
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50/80">
                                    <th className="px-6 py-5 font-bold text-cu-blue uppercase text-sm tracking-wider rounded-tl-2xl border-b border-gray-100">Programme</th>
                                    <th className="px-6 py-5 font-bold text-cu-blue uppercase text-sm tracking-wider border-b border-gray-100">Accreditation Status</th>
                                    <th className="px-6 py-5 font-bold text-cu-blue uppercase text-sm tracking-wider rounded-tr-2xl border-b border-gray-100">Reports</th>
                                </tr>
                            </thead>
                            <tbody>
                                {programs.map((program, idx) => (
                                    <tr key={idx} className="group hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-8 border-b border-gray-100">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-cu-blue flex items-center justify-center group-hover:bg-cu-blue group-hover:text-white transition-all">
                                                    <BookOpen className="w-5 h-5" />
                                                </div>
                                                <span className="font-bold text-gray-800 text-lg">{program.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-8 border-b border-gray-100">
                                            <div className="space-y-2">
                                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${program.status === 'ACCREDITED'
                                                        ? 'bg-green-50 text-green-600 border border-green-100'
                                                        : 'bg-orange-50 text-orange-600 border border-orange-100'
                                                    }`}>
                                                    {program.status === 'ACCREDITED' ? <CheckCircle className="w-3 h-3" /> : <Calendar className="w-3 h-3" />}
                                                    {program.status}
                                                </div>
                                                <div className="text-sm font-bold text-gray-500">{program.validity}</div>
                                                {program.certificate && (
                                                    <a
                                                        href={program.certificate}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1.5 text-cu-blue text-xs font-bold hover:underline"
                                                    >
                                                        <Award className="w-3 h-3" /> Accreditation Certificate
                                                    </a>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-8 border-b border-gray-100">
                                            <div className="flex flex-col gap-3">
                                                {program.compliance ? (
                                                    <a
                                                        href={program.compliance}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-cu-blue transition-colors group/link"
                                                    >
                                                        <FileText className="w-4 h-4 text-cu-blue group-hover/link:scale-110 transition-transform" />
                                                        Compliance Report
                                                        <Download className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                                    </a>
                                                ) : program.status === 'ACCREDITED' ? (
                                                    <span className="text-xs font-bold text-gray-400">Available in internal archive</span>
                                                ) : null}

                                                {program.sar ? (
                                                    <a
                                                        href={program.sar}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-cu-blue transition-colors group/link"
                                                    >
                                                        <FileText className="w-4 h-4 text-orange-500 group-hover/link:scale-110 transition-transform" />
                                                        SAR (Self Assessment Report)
                                                        <Download className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                                    </a>
                                                ) : program.status === 'ACCREDITED' ? (
                                                    <span className="text-xs font-bold text-gray-400">SAR pending verification</span>
                                                ) : (
                                                    <span className="text-sm font-bold text-gray-400">—</span>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Info Card */}
                <div className="bg-[#1D316E]/5 rounded-3xl p-8 border border-[#1D316E]/10 md:flex items-center gap-8 shadow-sm">
                    <div className="p-5 bg-white rounded-2xl shadow-sm mb-6 md:mb-0">
                        <Award className="w-12 h-12 text-[#1D316E]" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-cu-blue mb-2">NBA Quality Assurance</h3>
                        <p className="text-black/70 font-medium max-w-3xl leading-relaxed">
                            The National Board of Accreditation (NBA) accreditation process is based on a set of outcome-based criteria.
                            It serves as a tool for institutional self-improvement and provides a signal of educational excellence to the industry and future candidates.
                        </p>
                    </div>
                    <div className="ml-auto mt-6 md:mt-0">
                        <a
                            href="https://www.nbaind.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-cu-blue border border-gray-200 px-6 py-3 rounded-xl font-bold hover:shadow-md transition-all whitespace-nowrap"
                        >
                            NBA Official Portal
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nba;
