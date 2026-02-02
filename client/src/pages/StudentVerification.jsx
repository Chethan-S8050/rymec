import React from 'react';
import { motion } from 'framer-motion';
import {
    UserCheck,
    CreditCard,
    Mail,
    Phone,
    Info,
    ArrowRightCircle,
    CheckCircle2,
    FileText,
    Building,
    Clock,
    ClipboardCheck,
    AlertCircle,
    Zap
} from 'lucide-react';

const StudentVerification = () => {
    const steps = [
        {
            title: "Verification Fee",
            desc: "Pay Rs 1000/- towards Verification charges to the designated bank account through any electronic transfer mode.",
            icon: CreditCard
        },
        {
            title: "Document Prep",
            desc: "Prepare clear soft copies of Students Marks Card, Degree Certificate, and the Payment Receipt.",
            icon: FileText
        },
        {
            title: "Submit Details",
            desc: "Email all details including Student Details and documents to verify@rymec.in.",
            icon: Mail
        },
        {
            title: "Response",
            desc: "Our Examination Cell will process the request and send the verification details through email.",
            icon: Clock
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
                            <Zap className="w-5 h-5 flex-shrink-0" />
                            <span className="text-sm font-bold tracking-widest uppercase italic">Efficiency & Integrity</span>
                            <Zap className="w-5 h-5 flex-shrink-0" />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-7xl font-bold font-display mb-8"
                        >
                            Student <span className="text-cu-gold uppercase">Verification</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-blue-100/90 leading-relaxed font-light max-w-2xl mx-auto italic"
                        >
                            "Procedure for official verification of student credentials and academic records."
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 mt-16 max-w-7xl">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Process Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
                            {/* Decorative background shapes "shapeshapeshape" */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cu-gold/5 rounded-full -mr-32 -mt-32 blur-2xl"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cu-blue/5 rounded-full -ml-32 -mb-32 blur-2xl"></div>

                            <div className="flex items-center justify-between mb-12 border-b border-gray-100 pb-8 relative z-10">
                                <div>
                                    <h2 className="text-3xl font-bold text-cu-blue font-display">Procedure for Verification</h2>
                                    <p className="text-gray-500 font-medium mt-1">Following are the steps to be followed towards student verification.</p>
                                </div>
                                <ClipboardCheck className="w-16 h-16 text-cu-gold/20" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 relative z-10">
                                {steps.map((step, idx) => (
                                    <div key={idx} className="relative group">
                                        <div className="flex items-start gap-5">
                                            <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-cu-blue shrink-0 group-hover:bg-cu-blue group-hover:text-white transition-all duration-300 shadow-sm">
                                                <step.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                                                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 bg-rose-50 border border-rose-100 rounded-3xl p-8 relative z-10">
                                <div className="flex items-start gap-4 mb-4">
                                    <AlertCircle className="w-6 h-6 text-rose-500 shrink-0" />
                                    <h4 className="text-lg font-bold text-rose-900">Important Instruction</h4>
                                </div>
                                <div className="space-y-4 text-rose-800/80 font-medium leading-relaxed">
                                    <p className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
                                        Send address and email-id to whom verification details to be sent.
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
                                        All correspondence will be through e-mail only.
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
                                        Incomplete data submission will not be considered / entertained.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Payment Details Card */}
                        <div className="bg-[#121c3d] text-white rounded-[3.5rem] p-10 md:p-16 relative overflow-hidden group shadow-2xl">
                            <div className="absolute top-0 right-0 p-8 opacity-5 scale-150 rotate-12 group-hover:rotate-45 transition-transform duration-700">
                                <Building className="w-48 h-48" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-6 mb-12">
                                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-cu-gold">
                                        <CreditCard className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-cu-gold uppercase tracking-tight">Bank Details</h3>
                                </div>

                                <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
                                    {[
                                        { label: "Account Holder", value: "Principal, RYMEC" },
                                        { label: "Account Number", value: "10884101001459" },
                                        { label: "IFSC Code", value: "PKGB0010884" },
                                        { label: "Bank Name", value: "Karnataka Garmina Bank" },
                                        { label: "Branch Info", value: "RYMEC Campus, Cantonment, Ballari" },
                                        { label: "Verification Charge", value: "Rs. 1000/-" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="border-l-2 border-white/10 pl-6 group/item hover:border-cu-gold transition-colors">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200/40 block mb-2">
                                                {item.label}
                                            </span>
                                            <span className="text-xl font-bold text-white tracking-wide">
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Column */}
                    <div className="space-y-8">
                        {/* Dean Contact */}
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden relative group">
                            <div className="absolute top-0 right-0 p-6 opacity-[0.03] rotate-12 group-hover:rotate-0 transition-transform">
                                <CheckCircle2 className="w-32 h-32 text-cu-blue" />
                            </div>
                            <h3 className="text-2xl font-bold text-cu-blue mb-10 flex items-center gap-3">
                                <Building className="w-6 h-6 text-cu-gold" />
                                Authorities
                            </h3>
                            <div className="space-y-10">
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-cu-blue shrink-0 shadow-sm">
                                        <UserCheck className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Dean-Exams</span>
                                        <span className="block text-xl font-bold text-gray-800 tracking-tight">Dr. Sreepathi B</span>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
                                        <Phone className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Mobile</span>
                                        <a href="tel:9448173113" className="block text-xl font-bold text-gray-800 hover:text-cu-blue transition-colors tracking-widest">
                                            9448173113
                                        </a>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 shadow-sm">
                                        <Mail className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Official Email</span>
                                        <a href="mailto:verify@rymec.in" className="block text-lg font-bold text-gray-800 hover:text-cu-blue transition-colors break-all">
                                            verify@rymec.in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Note Card */}
                        <div className="bg-gradient-to-br from-cu-gold/20 to-amber-100 rounded-[2.5rem] p-10 border border-cu-gold/30 shadow-sm">
                            <h3 className="text-2xl font-bold text-cu-blue mb-6 flex items-center gap-3 italic">
                                <Info className="w-7 h-7 text-cu-gold" />
                                Notice
                            </h3>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                "The institution maintains high standards of confidentiality. Verification reports are sent directly to the requesting organization/email provided."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentVerification;
