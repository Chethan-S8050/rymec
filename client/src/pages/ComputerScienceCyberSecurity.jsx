import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Award,
    Trophy,
    CheckCircle2,
    Target,
    Users,
    BookOpen,
    Layers,
    FlaskConical,
    Search,
    Newspaper,
    List,
    FileText,
    Download,
    ExternalLink,
    ChevronRight,
    Star,
    Image as ImageIcon
} from 'lucide-react';

const ComputerScienceCyberSecurity = () => {
    const [activeTab, setActiveTab] = useState('about');

    const sidebarItems = [
        { id: 'about', label: 'About Course' },
        { id: 'programmes', label: 'Programmes' },
        { id: 'faculty', label: 'Faculty' },
        { id: 'academics', label: 'Academics & Learning Resources' },
        { id: 'laboratory', label: 'Laboratory' },
        { id: 'fdp', label: 'FDP / Conference' },
        { id: 'placement', label: 'Placement' },
        { id: 'research', label: 'Research and development' },
        { id: 'societies', label: 'Professional Societies' },
        { id: 'forum', label: 'Forum' },
        { id: 'achievements', label: 'Achievements & Awards' },
        { id: 'committees', label: 'Committee’s / Cell' },
        { id: 'publications', label: 'Publications' },
        { id: 'workshops', label: 'Workshop / Seminar' },
        { id: 'newsletter', label: 'Newsletter' },
        { id: 'results', label: 'Results' },
        { id: 'gallery', label: 'Gallery' }
    ];

    const faculty = [
        { name: "Dr. Shiva Prasad K M", role: "Associate Professor & HOD", img: "/assets/images/cs_cyber/hod.jpg" },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                        {/* HOD Message */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-full md:w-1/3 flex-shrink-0">
                                <img
                                    src="/assets/images/cs_cyber/hod.jpg"
                                    alt="HOD"
                                    className="w-full h-auto rounded-lg shadow-md object-cover"
                                />
                                <div className="mt-4 text-center">
                                    <h3 className="font-bold text-lg text-cu-blue">Dr. Shiva Prasad K M</h3>
                                    <p className="text-gray-600">Associate Professor & HOD</p>
                                </div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-2xl font-bold text-cu-blue mb-4">HOD's Message</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Welcome to the Department of CSE (Cyber Security) at RYMEC. Our program is designed to prepare students for the rapidly growing field of cyber defense by offering strong foundations in computing, networking, ethical hacking, digital forensics, and secure system design.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We are committed to shaping industry-ready, responsible, and innovative cyber security professionals who can secure the digital future.
                                </p>
                            </div>
                        </div>

                        {/* Vision & Mission */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
                                <h3 className="text-xl font-bold text-cu-blue mb-4">Vision</h3>
                                <p className="text-gray-700 italic">
                                    "To produce globally competent Cyber Security Professionals with ethical values to serve the society."
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
                                <h3 className="text-xl font-bold text-cu-blue mb-4">Mission</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex gap-2">
                                        <span className="font-bold text-cu-gold">M1:</span>
                                        To provide a robust foundation in Cyber Security concepts and technologies.
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-cu-gold">M2:</span>
                                        To foster research and development in the field of Cyber Security.
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-cu-gold">M3:</span>
                                        Encourage research, innovation, and entrepreneurship in cyber defense, digital forensics, and secure computing.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* PEOs */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-cu-blue mb-6">Program Educational Objectives (PEOs)</h3>
                            <div className="grid gap-4">
                                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center text-cu-blue font-bold">01</div>
                                    <p className="text-gray-700"><strong>To produce competent cyber security professionals</strong> with strong foundations in computing, networking, and security technologies.</p>
                                </div>
                                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center text-cu-blue font-bold">02</div>
                                    <p className="text-gray-700"><strong>To enable graduates to build successful careers</strong> in industry, academia, research, entrepreneurship, and consultancy.</p>
                                </div>
                                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center text-cu-blue font-bold">03</div>
                                    <p className="text-gray-700"><strong>To encourage continuous learning and innovation</strong> for solving real-world cyber threats while contributing to society.</p>
                                </div>
                            </div>
                        </div>

                        {/* PSOs */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-cu-blue mb-6">Program Specific Outcomes (PSOs)</h3>
                            <div className="space-y-4">
                                <div className="p-4 border-l-4 border-cu-gold bg-yellow-50">
                                    <h4 className="font-bold text-gray-800 mb-1">PSO1: Secure System Design & Defense</h4>
                                    <p className="text-gray-700">Ability to analyze, design, and implement secure computing systems by applying principles of cryptography, network security, secure coding, and vulnerability assessment.</p>
                                </div>
                                <div className="p-4 border-l-4 border-cu-gold bg-yellow-50">
                                    <h4 className="font-bold text-gray-800 mb-1">PSO2: Cyber Threat Analysis & Forensics</h4>
                                    <p className="text-gray-700">Ability to detect, investigate, and respond to cyber threats using tools and techniques in ethical hacking, digital forensics, malware analysis, and incident response.</p>
                                </div>
                                <div className="p-4 border-l-4 border-cu-gold bg-yellow-50">
                                    <h4 className="font-bold text-gray-800 mb-1">PSO3: Governance, Ethics & Emerging Technologies</h4>
                                    <p className="text-gray-700">Ability to apply cyber security laws, policies, ethical practices, and emerging technologies to develop innovative and responsible security solutions.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );

            case 'programmes':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Programmes Offered</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Undergraduate Program</h4>
                            <p className="text-gray-600 mb-4">B.E. in Computer Science & Engineering (Cyber Security).</p>
                            <div className="mt-8">
                                <h5 className="font-bold text-gray-800 mb-4">Career Prospects</h5>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>Cyber Security Analyst</li>
                                    <li>SOC Engineer</li>
                                    <li>Ethical Hacker</li>
                                    <li>Forensics Expert</li>
                                    <li>Security Consultant</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                );

            case 'faculty':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Faculty Members</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {faculty.map((f, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                    <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-gray-100">
                                        <img src={f.img} alt={f.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h4 className="font-bold text-lg text-gray-800">{f.name}</h4>
                                    <p className="text-cu-blue font-medium text-sm">{f.role}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            case 'laboratory':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Laboratories</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    "Cyber Security Lab",
                                    "Network Security Lab",
                                    "Digital Forensics Lab",
                                    "Cryptography Lab",
                                    "Ethical Hacking Lab"
                                ].map((lab, i) => (
                                    <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:border-cu-blue transition-colors">
                                        <h4 className="font-bold text-lg text-gray-800">{lab}</h4>
                                        <p className="text-sm text-gray-500 mt-2">Specialized lab for hands-on training.</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );

            // Default placeholder for other sections that share similar structure or "Coming Soon" status
            case 'achievements':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Achievements & Awards</h3>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h4 className="text-lg font-bold text-cu-blue mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-cu-gold/10 rounded-full flex items-center justify-center mr-3">
                                        <Award className="w-4 h-4 text-cu-gold" />
                                    </span>
                                    Faculty Achievements
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 bg-gray-50 rounded-lg">
                                        <h5 className="font-bold text-cu-blue text-sm">Dr Shiva Prasad KM</h5>
                                        <ul className="text-xs text-gray-600 mt-1 list-disc list-inside space-y-1">
                                            <li>Google Cloud Certified Cloud Digital Leader</li>
                                            <li>Microsoft Certified: Azure Fundamentals</li>
                                        </ul>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-lg">
                                        <h5 className="font-bold text-cu-blue text-sm">Dr Virupakshi Gouda R</h5>
                                        <ul className="text-xs text-gray-600 mt-1 list-disc list-inside space-y-1">
                                            <li>Elite Gold NPTEL Certification</li>
                                            <li>Best Paper Award</li>
                                        </ul>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-lg">
                                        <h5 className="font-bold text-cu-blue text-sm">Dr Vaddin Chethan</h5>
                                        <ul className="text-xs text-gray-600 mt-1 list-disc list-inside space-y-1">
                                            <li>Multiple Elite Silver NPTEL certifications</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );

            case 'academics':
            case 'fdp':
            case 'placement':
            case 'research':
            case 'societies':
            case 'forum':
            case 'gallery':
            case 'newsletter':
            case 'results':
            case 'workshops':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">{sidebarItems.find(i => i.id === activeTab)?.label}</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <p className="text-gray-600">Information for this section will be updated shortly.</p>
                        </div>
                    </motion.div>
                );

            case 'committees':
            case 'publications':
            case 'achievements':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-10 w-2 bg-cu-blue rounded-full"></div>
                            <h2 className="text-3xl font-bold text-cu-blue font-display tracking-tight uppercase italic">Achievements & Awards</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 scale-150 rotate-12 transition-transform group-hover:scale-[2]">
                                    <Award className="w-24 h-24 text-cu-blue" />
                                </div>
                                <h3 className="text-2xl font-bold text-cu-blue mb-6 italic">Faculty Achievements</h3>
                                <div className="space-y-4">
                                    {[
                                        { name: "Dr. Shiva Prasad K M (HOD)", ach: "Google Cloud Certified Cloud Digital Leader & Microsoft Azure Fundamentals." },
                                        { name: "Certification Excellence", ach: "Faculty members actively pursuing specialized certifications in Cybersecurity and Ethical Hacking." }
                                    ].map((f, i) => (
                                        <div key={i} className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50 flex flex-col gap-1">
                                            <p className="font-bold text-cu-blue text-sm italic">{f.name}</p>
                                            <p className="text-gray-600 text-xs italic">{f.ach}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 scale-150 rotate-12 transition-transform group-hover:scale-[2]">
                                    <Trophy className="w-24 h-24 text-cu-gold" />
                                </div>
                                <h3 className="text-2xl font-bold text-cu-blue mb-6 italic">Student Achievements</h3>
                                <div className="space-y-4">
                                    {[
                                        "Successful participation in various national-level hacking and cybersecurity competitions.",
                                        "Students presenting research papers in international conferences on network security.",
                                        "Active involvement in social awareness programs through 'Social Connect and Responsibility' projects.",
                                        "Consistently excellent academic records in security specialized domains."
                                    ].map((ach, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-cu-gold mt-1 flex-shrink-0" />
                                            <p className="text-gray-600 font-medium italic text-sm">{ach}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#121c3d] p-8 md:p-12 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform group-hover:scale-[2]">
                                <Target className="w-48 h-48" />
                            </div>
                            <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-6 italic text-cu-gold">Department Highlights</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { label: "Intake", value: "60" },
                                            { label: "Specialized Labs", value: "3" },
                                            { label: "Certifications", value: "Ongoing" },
                                            { label: "Research Publications", value: "Active" }
                                        ].map((stat, i) => (
                                            <div key={i} className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                                                <p className="text-2xl font-bold text-cu-gold italic">{stat.value}</p>
                                                <p className="text-[10px] text-blue-100/60 font-bold uppercase tracking-widest italic">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="md:w-1/3 p-6 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-sm">
                                    <h4 className="text-cu-gold font-bold mb-3 italic">Defending the Future</h4>
                                    <p className="text-sm text-blue-100/80 italic leading-relaxed">
                                        Our mission is to shape cyber-defenders with technical expertise and strong ethical values.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );

            default:
                return <div>Select a tab</div>;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="w-full lg:w-1/4 flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-28">
                            <div className="p-6 bg-cu-blue text-white">
                                <h2 className="text-xl font-bold">Departments</h2>
                                <p className="text-blue-100 text-sm mt-1">CSE (Cyber Security)</p>
                            </div>
                            <nav className="p-2">
                                {sidebarItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveTab(item.id)}
                                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 mb-1 flex items-center justify-between
                                            ${activeTab === item.id
                                                ? 'bg-blue-50 text-cu-blue shadow-sm'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            }`}
                                    >
                                        {item.label}
                                        {activeTab === item.id && (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="w-full lg:w-3/4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                {renderContent()}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComputerScienceCyberSecurity;
