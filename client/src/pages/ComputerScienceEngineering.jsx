import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Award,
    Users,
    Trophy,
    CheckCircle2,
    Star,
    Target,
    Zap,
    Download,
    FileText,
    ExternalLink,
    ChevronRight,
    BookOpen,
    Layers,
    FlaskConical,
    Search,
    Newspaper,
    List,
    Image as ImageIcon
} from 'lucide-react';

const ComputerScienceEngineering = () => {
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
        { name: "Dr. H. Girisha", role: "Professor & Head", img: "/assets/images/cse/hod.jpg" },
        { name: "Dr. Sapna B Kulkarni", role: "Associate Professor", img: "/assets/images/cse/faculty/sapna.jpg" },
        { name: "Dr. Shiva Prasad K M", role: "Associate Professor", img: "/assets/images/cse/faculty/shivaprasad.jpg" },
        { name: "Mr. Pampapathi B M", role: "Associate Professor", img: "/assets/images/cse/faculty/pampapathi.jpg" },
        { name: "Ms. Nagaveni Biradar", role: "Associate Professor", img: "/assets/images/cse/faculty/nagaveni.jpg" },
        { name: "Ms. Kavitha Juliet", role: "Assistant Professor", img: "/assets/images/cse/faculty/kavitha.jpg" },
        { name: "Mrs. Rajeswari R P", role: "Assistant Professor", img: "/assets/images/cse/faculty/rajeswari.jpg" },
        { name: "Mrs. Sunitha S", role: "Assistant Professor", img: "/assets/images/cse/faculty/sunitha.jpg" },
        { name: "Mr. Suresh", role: "Assistant Professor", img: "/assets/images/cse/faculty/suresh.jpg" },
        { name: "Mr. Naveen Kumar B", role: "Assistant Professor", img: "/assets/images/cse/faculty/naveen.png" },
        { name: "Mr. Lingaraj K", role: "Assistant Professor", img: "/assets/images/cse/faculty/lingaraj.jpg" },
        { name: "Mr. Veeresh Gouda", role: "Assistant Professor", img: "/assets/images/cse/faculty/veeresh.jpg" },
        { name: "Sridevi Malipatil", role: "Assistant Professor", img: "/assets/images/cse/faculty/sridevi.jpg" },
        { name: "Sarvar Begum", role: "Assistant Professor", img: "/assets/images/cse/faculty/sarvar.jpg" },
        { name: "Mr. Puneeth G J", role: "Assistant Professor", img: "/assets/images/cse/faculty/puneeth.jpg" },
        { name: "Mr. Nagaraj M", role: "Assistant Professor", img: "/assets/images/cse/faculty/nagaraj.png" },
        { name: "Mrs. Vinutha Prashanth", role: "Assistant Professor", img: "/assets/images/cse/faculty/vinutha.jpg" },
        { name: "Mr. Prasanna Kumar", role: "Assistant Professor", img: "/assets/images/cse/faculty/prasanna.jpg" },
        { name: "Mrs. Sowmya A", role: "Assistant Professor", img: "/assets/images/cse/faculty/sowmya.jpg" },
        { name: "Mrs. Sharmila K", role: "Assistant Professor", img: "/assets/images/cse/faculty/sharmila.jpg" },
        { name: "Ms. Bilwashree H", role: "Assistant Professor", img: "/assets/images/cse/faculty/bilwashree.jpg" },
        { name: "Mrs. Nagaashwini Nayak", role: "Assistant Professor", img: "/assets/images/cse/faculty/nagaashwini.jpg" },
        { name: "Mr. Sampath Kumar R", role: "Assistant Professor", img: "/assets/images/cse/faculty/sampath.jpg" },
    ];

    const images = [
        "https://rymec.edu.in/wp-content/uploads/2025/08/im6-1.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2025/08/im3-1.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2025/08/im4-1.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2025/08/im5-1.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2025/08/im8.jpg"
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
                                    src="/assets/images/cse/hod.jpg"
                                    alt="HOD"
                                    className="w-full h-auto rounded-lg shadow-md object-cover"
                                />
                                <div className="mt-4 text-center">
                                    <h3 className="font-bold text-lg text-cu-blue">Dr. H. Girisha</h3>
                                    <p className="text-gray-600">Professor & Head</p>
                                </div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-2xl font-bold text-cu-blue mb-4">HOD's Message</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Welcome to the Department of Computer Science & Engineering. Our goal is to provide students with a balance of intellectual and practical experiences that enable them to serve a variety of societal needs. We have a team of dedicated faculty members who are committed to the overall development of the students.
                                </p>
                            </div>
                        </div>

                        {/* Vision & Mission */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
                                <h3 className="text-xl font-bold text-cu-blue mb-4">Vision</h3>
                                <p className="text-gray-700 italic">
                                    "To produce Professionally Excellent, Knowledgeable, Globally Competitive, Socially Responsible Computer Science Engineers and Entrepreneurs."
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
                                <h3 className="text-xl font-bold text-cu-blue mb-4">Mission</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex gap-2">
                                        <span className="font-bold text-cu-gold">M1:</span>
                                        To impart quality education in Computer Science & Engineering.
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-cu-gold">M2:</span>
                                        To establish a continuous Industry-Institute Interaction, Participation and collaboration to inculcate skilled Computer Science Engineers.
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-cu-gold">M3:</span>
                                        To encourage research and innovation among students and faculty.
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
                                    <p className="text-gray-700">Graduates will have successful professional career with employment in various industrial and government sectors.</p>
                                </div>
                                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center text-cu-blue font-bold">02</div>
                                    <p className="text-gray-700">Graduates will have ability to pursue higher education and career in multi disciplinary areas.</p>
                                </div>
                                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center text-cu-blue font-bold">03</div>
                                    <p className="text-gray-700">Graduates will have capacity for lifelong learning with emerging technologies in academics and research.</p>
                                </div>
                            </div>
                        </div>

                        {/* PSOs */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-cu-blue mb-6">Program Specific Outcomes (PSOs)</h3>
                            <div className="space-y-4">
                                <div className="p-4 border-l-4 border-cu-gold bg-yellow-50">
                                    <h4 className="font-bold text-gray-800 mb-1">PSO1</h4>
                                    <p className="text-gray-700">The ability to design, analyze and develop computer programs for efficient problem solving.</p>
                                </div>
                                <div className="p-4 border-l-4 border-cu-gold bg-yellow-50">
                                    <h4 className="font-bold text-gray-800 mb-1">PSO2</h4>
                                    <p className="text-gray-700">The ability to apply standard software engineering practices and strategies in software project development.</p>
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
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Undergraduate Program (B.E.)</h4>
                            <p className="text-gray-600 mb-4">The department offers a 4-year Bachelor of Engineering (B.E.) degree in Computer Science & Engineering.</p>

                            <div className="mt-8">
                                <h5 className="font-bold text-gray-800 mb-4">Syllabus & Schemes</h5>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <a href="/assets/documents/cse/syllabus/2022-scheme.pdf" target="_blank" className="block p-4 border rounded hover:border-blue-500 hover:text-blue-600 transition-colors">
                                        2022 Scheme Syllabus
                                    </a>
                                    <a href="/assets/documents/cse/syllabus/2021-scheme.pdf" target="_blank" className="block p-4 border rounded hover:border-blue-500 hover:text-blue-600 transition-colors">
                                        2021 Scheme Syllabus
                                    </a>
                                    <a href="/assets/documents/cse/syllabus/2018-scheme.pdf" target="_blank" className="block p-4 border rounded hover:border-blue-500 hover:text-blue-600 transition-colors">
                                        2018 Scheme Syllabus
                                    </a>
                                </div>
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

            case 'academics':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Academics & Learning Resources</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="font-bold text-gray-800 mb-4">Infrastructure</h4>
                            <ul className="list-disc pl-5 space-y-3 text-gray-700">
                                <li>High-performance Computing Labs</li>
                                <li>Department Library with digital resources</li>
                                <li>Seminar Halls with AV facilities</li>
                                <li>Wi-Fi enabled campus</li>
                            </ul>
                        </div>
                    </motion.div>
                );

            case 'laboratory':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Laboratories</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Data Structures Lab",
                                "Algorithms Lab",
                                "Database Management Systems Lab",
                                "Operating Systems Lab",
                                "Computer Networks Lab",
                                "Web Technology Lab",
                                "Machine Learning Lab",
                                "Project Lab"
                            ].map((lab, i) => (
                                <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:border-cu-blue transition-colors">
                                    <h4 className="font-bold text-lg text-gray-800">{lab}</h4>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            case 'fdp':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">FDP / Conference</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <p className="text-gray-600">The department regularly organizes Faculty Development Programs and National/International Conferences.</p>
                            <div className="mt-4">
                                <a href="/assets/documents/cse/reports/workshop-report.pdf" target="_blank" className="text-cu-blue hover:underline">View Recent Workshop Report</a>
                            </div>
                        </div>
                    </motion.div>
                );

            case 'placement':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Placement</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="font-bold text-gray-800 mb-4">Placement Statistics</h4>
                            <a href="/assets/documents/cse/placements/placement-data.pdf" target="_blank" className="text-cu-blue hover:underline font-bold block mb-4">
                                Download Detailed Placement Data
                            </a>
                            <p className="text-gray-600 mb-4">Our students are recruited by top product and service-based companies.</p>
                            <div className="flex flex-wrap gap-3">
                                {['Google', 'Microsoft', 'Amazon', 'TCS', 'Infosys', 'Wipro'].map((c, i) => (
                                    <span key={i} className="px-4 py-2 bg-blue-50 text-cu-blue rounded-full font-medium text-sm">{c}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );

            case 'research':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Research & Development</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="font-bold text-gray-800 mb-4">Research Focus</h4>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li>Artificial Intelligence & Machine Learning</li>
                                <li>Big Data Analytics</li>
                                <li>Internet of Things (IoT)</li>
                                <li>Cyber Security</li>
                            </ul>
                        </div>
                    </motion.div>
                );

            case 'societies':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Professional Societies</h3>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-start gap-6">
                                <div className="w-20 h-20 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-3xl font-bold text-cu-blue">CSI</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-2">Computer Society of India (CSI)</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        The department has an active CSI student chapter that organizes technical events, workshops, and expert lectures.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );

            case 'forum':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Student Forum</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Activities</h4>
                            <p className="text-gray-600">The Student Forum coordinates annual technical fests and co-curricular activities to enhance student skills.</p>
                        </div>
                    </motion.div>
                );

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
                                        { name: "Dr. H. Girisha (HOD)", ach: "Recognized for outstanding leadership and research contributions." },
                                        { name: "Dr. Shiva Prasad K M", ach: "Google Cloud Certified Cloud Digital Leader & Microsoft Azure Fundamentals." },
                                        { name: "Dr. Virupakshi Gouda R", ach: "Elite Gold NPTEL Certification & Best Paper Award." },
                                        { name: "Dr. Vaddin Chethan", ach: "Multiple Elite Silver NPTEL Certifications." }
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
                                        "Winners of MindSprint 2K25 Inter-college Technical Fest.",
                                        "Consistently achieving University Ranks in VTU Examinations.",
                                        "Best Project Awards in State Level Exhibitions.",
                                        "Paper Presentations in reputed International Conferences."
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
                                    <h3 className="text-2xl font-bold mb-6 italic">Department Highlights</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { label: "Faculty PhDs", value: "5+" },
                                            { label: "NPTEL Elites", value: "15+" },
                                            { label: "Placements", value: "85%+" },
                                            { label: "Research Papers", value: "50+" }
                                        ].map((stat, i) => (
                                            <div key={i} className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                                                <p className="text-2xl font-bold text-cu-gold italic">{stat.value}</p>
                                                <p className="text-[10px] text-blue-100/60 font-bold uppercase tracking-widest italic">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="md:w-1/3 p-6 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-sm">
                                    <h4 className="text-cu-gold font-bold mb-3 italic">Professional Societies</h4>
                                    <p className="text-sm text-blue-100/80 italic leading-relaxed">
                                        Active student chapters of IEEE, CSI, and ISTE providing continuous learning and networking opportunities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );

            case 'committees':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Committees / Cells</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li>Program Assessment Committee (PAC)</li>
                                <li>Department Advisory Board (DAB)</li>
                                <li>Project Monitoring Committee</li>
                            </ul>
                        </div>
                    </motion.div>
                );

            case 'publications':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Publications</h3>
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                            <p className="p-6 text-gray-600">Faculty and students regularly publish papers in reputed journals.</p>
                        </div>
                    </motion.div>
                );

            case 'workshops':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Workshop / Seminar</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <a href="/assets/documents/cse/reports/workshop-report.pdf" target="_blank" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group block">
                                <h4 className="font-bold text-gray-800 group-hover:text-cu-blue mb-2">Recent Workshops</h4>
                                <span className="text-sm text-gray-500">Click to download report</span>
                            </a>
                        </div>
                    </motion.div>
                );
            case 'newsletter':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Newsletters</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <a href="/assets/documents/cse/newsletters/newsletter-16-17-odd.pdf" target="_blank" className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-center">
                                <div className="text-4xl text-cu-blue mb-3">📰</div>
                                <h5 className="font-bold text-gray-800">Newsletter 2016-17</h5>
                            </a>
                        </div>
                    </motion.div>
                );

            case 'results':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Results</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <p className="text-gray-600">Consistently achieving high pass percentages in all semesters.</p>
                        </div>
                    </motion.div>
                );

            case 'gallery':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Gallery</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {images.map((img, idx) => (
                                <div key={idx} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-64">
                                    <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
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
                                <p className="text-blue-100 text-sm mt-1">Computer Science & Engg.</p>
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

export default ComputerScienceEngineering;
