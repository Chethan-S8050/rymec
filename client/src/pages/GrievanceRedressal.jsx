import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Send,
    ShieldCheck,
    FileText,
    Download,
    Users,
    MessageSquare,
    LifeBuoy,
    CheckCircle2,
    Clock,
    UserCircle,
    Mail,
    PhoneCall,
    ChevronRight,
    Search
} from 'lucide-react';

const GrievanceRedressal = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        userType: '--Select Type--',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const committees = [
        {
            title: "Central Grievances Redressal Committee",
            details: "Principal (Chairman), Deans, and Senior Faculty members handling institutional grievances.",
            status: "Active"
        },
        {
            title: "Internal Complaint Committee (CICC)",
            details: "Dedicated cell for gender-related complaints and work-place harassment issues.",
            status: "Active"
        },
        {
            title: "Anti-Ragging Committee",
            details: "Zero-tolerance monitoring squad for campus and hostel discipline.",
            status: "Active"
        }
    ];

    const documents = [
        {
            title: "AICTE Grievance Compliance",
            url: "https://rymec.edu.in/wp-content/uploads/2022/12/5.1.4_1676111944_8621.pdf"
        },
        {
            title: "Women's Cell Regulations",
            url: "https://www.rymec.in/images/NAAC/WEMEN_CELL_opt.pdf"
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Simulation of submission
        setTimeout(() => {
            alert("This is a demonstration. In the production environment, your grievance will be submitted to the committee.");
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                userType: '--Select Type--',
                message: ''
            });
        }, 1000);
    };

    return (
        <div className="min-h-screen pt-20 pb-12 bg-gray-50/50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#121c3d] to-[#1D316E] text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full -mr-64 -mt-64 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cu-gold rounded-full -ml-64 -mb-64 blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cu-gold mb-6">
                            <ShieldCheck className="w-5 h-5" />
                            <span className="text-sm font-bold tracking-wider uppercase">GRIEVANCE REDRESSAL MECHANISM</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">Voice Your Concerns</h1>
                        <p className="text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed font-light">
                            Ensuring a transparent, fair, and responsive environment for students, parents, and staff at RYMEC.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 mt-12 max-w-7xl">
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Form Column */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
                            <div className="flex items-center justify-between mb-10 border-b border-gray-100 pb-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-cu-blue font-display">Submit a Grievance</h2>
                                    <p className="text-gray-500 font-medium mt-1">Please provide accurate details for prompt resolution.</p>
                                </div>
                                <MessageSquare className="w-12 h-12 text-cu-gold/20" />
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Full Name *</label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-cu-blue text-gray-400 transition-colors">
                                                <UserCircle className="w-5 h-5" />
                                            </div>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-cu-blue/10 focus:border-cu-blue focus:bg-white outline-none transition-all"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Email Address *</label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-cu-blue text-gray-400 transition-colors">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-cu-blue/10 focus:border-cu-blue focus:bg-white outline-none transition-all"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Phone Number *</label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-cu-blue text-gray-400 transition-colors">
                                                <PhoneCall className="w-5 h-5" />
                                            </div>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-cu-blue/10 focus:border-cu-blue focus:bg-white outline-none transition-all"
                                                placeholder="Enter phone number"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">User Type *</label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-cu-blue text-gray-400 transition-colors">
                                                <Users className="w-5 h-5" />
                                            </div>
                                            <select
                                                name="userType"
                                                required
                                                value={formData.userType}
                                                onChange={handleInputChange}
                                                className="w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl appearance-none focus:ring-2 focus:ring-cu-blue/10 focus:border-cu-blue focus:bg-white outline-none transition-all"
                                            >
                                                <option value="--Select Type--">--Select Type--</option>
                                                <option value="Student">Student</option>
                                                <option value="Parents">Parents</option>
                                                <option value="Teaching Staff">Teaching Staff</option>
                                                <option value="Non Teaching Staff">Non Teaching Staff</option>
                                                <option value="Public">Public</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Grievance Description *</label>
                                    <textarea
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-6 py-4 bg-gray-50/50 border border-gray-100 rounded-3xl focus:ring-2 focus:ring-cu-blue/10 focus:border-cu-blue focus:bg-white outline-none transition-all h-40 resize-none"
                                        placeholder="Please describe your concern in detail..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitted}
                                    className="w-full md:w-auto px-10 py-4 bg-cu-blue text-white rounded-2xl font-bold hover:bg-blue-800 transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-900/20 disabled:opacity-50 disabled:cursor-not-allowed group"
                                >
                                    {submitted ? "Submitting..." : "Submit Grievance"}
                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Sidebar Column */}
                    <div className="space-y-8">
                        {/* Process Flow */}
                        <div className="bg-[#121c3d] text-white rounded-[2.5rem] p-8 shadow-xl shadow-blue-900/10">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-cu-gold">
                                <Clock className="w-6 h-6" />
                                Grievance Process
                            </h3>
                            <div className="space-y-6 relative">
                                <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-white/10"></div>
                                {[
                                    { step: "Submission", desc: "Form received by the Grievance Cell." },
                                    { step: "Verification", desc: "Assigning to the relevant committee." },
                                    { step: "Action", desc: "Investigation and decision making." },
                                    { step: "Resolution", desc: "Communicating the outcome to you." }
                                ].map((step, idx) => (
                                    <div key={idx} className="relative pl-10">
                                        <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-cu-gold border-4 border-[#121c3d]"></div>
                                        <h4 className="font-bold text-sm text-cu-gold uppercase tracking-widest">{step.step}</h4>
                                        <p className="text-blue-100/70 text-sm mt-1">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Documents */}
                        <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl shadow-gray-200/50">
                            <h3 className="text-xl font-bold text-cu-blue mb-6 flex items-center gap-3">
                                <FileText className="w-6 h-6 text-cu-gold" />
                                Compliance Docs
                            </h3>
                            <div className="space-y-3">
                                {documents.map((doc, idx) => (
                                    <a
                                        key={idx}
                                        href={doc.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-cu-blue/30 hover:bg-white transition-all group"
                                    >
                                        <span className="text-sm font-bold text-gray-700 group-hover:text-cu-blue">{doc.title}</span>
                                        <Download className="w-4 h-4 text-gray-400 group-hover:text-cu-blue" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Committees */}
                        <div className="bg-cu-gold/5 rounded-[2.5rem] p-8 border border-cu-gold/10">
                            <h3 className="text-xl font-bold text-cu-blue mb-6">Redressal Cells</h3>
                            <div className="space-y-4">
                                {committees.map((cell, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-5 h-5 text-cu-gold" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 text-sm">{cell.title}</h4>
                                            <p className="text-xs text-gray-500 mt-1 leading-relaxed">{cell.details}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Information Notice */}
                <div className="mt-12 bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-8">
                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                        <LifeBuoy className="w-10 h-10 text-cu-blue" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-cu-blue mb-2">Need Immediate Assistance?</h3>
                        <p className="text-gray-600 leading-relaxed max-w-3xl">
                            If you require urgent support regarding campus safety or mental well-being, please contact the Principal's Office directly or reach out to your department HOD.
                            All information shared via this form is kept strictly confidential as per institutional privacy policies.
                        </p>
                    </div>
                    <div className="shrink-0">
                        <a href="mailto:principal@rymec.in" className="inline-flex items-center gap-2 font-bold text-cu-blue hover:text-cu-gold transition-colors">
                            principal@rymec.in <ChevronRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrievanceRedressal;
