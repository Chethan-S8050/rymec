import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users,
    Calendar,
    Award,
    Trophy,
    CheckCircle2,
    Target,
    Zap,
    Download,
    FileText,
    ExternalLink,
    ChevronRight,
    Star,
    BookOpen,
    Layers,
    FlaskConical,
    Search,
    Newspaper,
    List,
    Image as ImageIcon
} from 'lucide-react';

const ElectricalElectronicsEngineering = () => {
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
        { id: 'rd_special', label: 'R & D' },
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
        { name: "Dr. S. Kotresh", role: "Professor & Head", img: "/assets/images/eee/hod.jpg" },
        { name: "B. Doddabasavana Goud", role: "Assistant Professor", img: "/assets/images/eee/faculty/doddabasavana.jpg" },
        { name: "Anusuya Patil", role: "Assistant Professor", img: "/assets/images/eee/faculty/anusuya.jpg" },
        { name: "Gururaj K K", role: "Assistant Professor", img: "/assets/images/eee/faculty/gururaj.jpg" },
        { name: "Dr. Hanumantha Rao", role: "Assistant Professor", img: "/assets/images/eee/faculty/hanumantha.png" },
        { name: "Shambulingana Goud", role: "Assistant Professor", img: "/assets/images/eee/faculty/shambulingana.jpg" },
        { name: "Kumuda B K", role: "Assistant Professor", img: "/assets/images/eee/faculty/kumuda.jpg" },
        { name: "Gayathri J", role: "Assistant Professor", img: "/assets/images/eee/faculty/gayathri.jpg" },
        { name: "Linganagouda R", role: "Assistant Professor", img: "/assets/images/eee/faculty/linganagouda.jpg" },
        { name: "Vinaykumar Havinal", role: "Assistant Professor", img: "/assets/images/eee/faculty/vinaykumar.png" },
        { name: "U Shantha Kumar", role: "Assistant Professor", img: "/assets/images/eee/faculty/shanthakumar.jpg" },
        { name: "Hanumanthreddy", role: "Assistant Professor", img: "/assets/images/eee/faculty/hanumanthreddy.jpg" },
        { name: "Rajashekar K", role: "Assistant Professor", img: "/assets/images/eee/faculty/rajashekar.jpg" },
        { name: "Deepa", role: "Assistant Professor", img: "/assets/images/eee/faculty/deepa.jpg" },
        { name: "Ravi", role: "Assistant Professor", img: "/assets/images/eee/faculty/ravi.jpg" },
        { name: "Diwakar B", role: "Assistant Professor", img: "/assets/images/eee/faculty/diwakar.jpg" },
        { name: "A Meenakshi", role: "Assistant Professor", img: "/assets/images/eee/faculty/meenakashi.jpg" },
        { name: "Gangadhar", role: "Assistant Professor", img: "/assets/images/eee/faculty/gangadhar.jpg" },
        { name: "Rashmi H N", role: "Assistant Professor", img: "/assets/images/eee/faculty/rashmi.jpg" },
        { name: "Pooja G Solanki", role: "Assistant Professor", img: "/assets/images/eee/faculty/pooja.jpg" },
        { name: "Nagabhushan K", role: "Assistant Professor", img: "/assets/images/eee/faculty/nagabhushan.jpg" }
    ];

    const images = [
        "/assets/images/eee/dept-main.jpg",
        "/assets/images/eee/gallery/1.jpg",
        "/assets/images/eee/gallery/2.jpg",
        "/assets/images/eee/gallery/3.jpg",
        "/assets/images/eee/gallery/4.jpg",
        "/assets/images/eee/gallery/v.jpg"
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
                                    src="/assets/images/eee/hod.jpg"
                                    alt="HOD"
                                    className="w-full h-auto rounded-lg shadow-md object-cover"
                                />
                                <div className="mt-4 text-center">
                                    <h3 className="font-bold text-lg text-cu-blue">Dr. S. Kotresh</h3>
                                    <p className="text-gray-600">Professor & Head</p>
                                    <p className="text-sm text-gray-500 mt-1">9986275325</p>
                                    <p className="text-sm text-gray-500">kotreshshanbhog@gmail.com</p>
                                </div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-2xl font-bold text-cu-blue mb-4">HOD's Message</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Welcome to the department of ELECTRICAL AND ELECTRONICS. The department works with the objective
                                    of addressing critical challenges faced by the Industry, society and the academia. The department is also moving
                                    forward towards the goal of providing innovative and quality education with high standard to achieve academic
                                    excellence through a nice blend of course work and projects.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    The department endows students with ability to apply knowledge of science, mathematics and engineering
                                    to work effectively in multidisciplinary teams, develop leadership, technical expertise, and practice
                                    engineering with ethical approaches which is concern for society and environment... Thus we are confident
                                    that our engineers will emerge as assets not only to this institution and to the organization they belong.
                                </p>
                            </div>
                        </div>

                        {/* Vision & Mission */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
                                <h3 className="text-xl font-bold text-cu-blue mb-4">Vision</h3>
                                <p className="text-gray-700 italic">
                                    "To produce Professionally Excellent, Knowledgeable, Globally Competitive, Socially Responsible Electrical & Electronics Engineers and Entrepreneurs"
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
                                <h3 className="text-xl font-bold text-cu-blue mb-4">Mission</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex gap-2">
                                        <span className="font-bold text-cu-gold">M1:</span>
                                        To impart quality education in Electrical & Electronics Engineering.
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-cu-gold">M2:</span>
                                        To establish a continuous Industry-Institute Interaction, Participation and collaboration to inculcate skilled Electrical & Electronics Engineers.
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
                                    <p className="text-gray-700">Graduates will have successful professional career with employment in various industrial and government sectors, both at national and international level endowed with competence and ethical acumen.</p>
                                </div>
                                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center text-cu-blue font-bold">02</div>
                                    <p className="text-gray-700">Graduates will have ability to pursue higher education and career in multi disciplinary areas involving core engineering subjects with appropriate solutions to social and environmental issues.</p>
                                </div>
                                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center text-cu-blue font-bold">03</div>
                                    <p className="text-gray-700">Graduates will have capacity for lifelong learning with emerging technologies in academics, as an entrepreneur or in research and development.</p>
                                </div>
                            </div>
                        </div>

                        {/* PSOs */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-cu-blue mb-6">Program Specific Outcomes (PSOs)</h3>
                            <div className="space-y-4">
                                <div className="p-4 border-l-4 border-cu-gold bg-yellow-50">
                                    <h4 className="font-bold text-gray-800 mb-1">PSO1</h4>
                                    <p className="text-gray-700">Apply Fundamental Knowledge To Identify, Formulate, Design And Investigate Various Problems Of Electrical And Electronic Circuits, Power Electronics And Power Systems.</p>
                                </div>
                                <div className="p-4 border-l-4 border-cu-gold bg-yellow-50">
                                    <h4 className="font-bold text-gray-800 mb-1">PSO2</h4>
                                    <p className="text-gray-700">Apply modern software tools for design simulation and analysis of electrical systems to engage in lifelong leanings and to successfully adopt in multi disciplinary environments.</p>
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
                            <p className="text-gray-600 mb-4">The department offers a 4-year Bachelor of Engineering (B.E.) degree in Electrical & Electronics Engineering.</p>

                            <h5 className="font-bold text-gray-800 mb-2">Curriculum Highlights:</h5>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li>Power Systems and Power Electronics</li>
                                <li>Control Systems and Automation</li>
                                <li>Electric Machines and Drives</li>
                                <li>Signal Processing and Microcontrollers</li>
                                <li>Renewable Energy Systems</li>
                            </ul>

                            <div className="mt-8">
                                <h5 className="font-bold text-gray-800 mb-4">Syllabus & Schemes</h5>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <a href="/assets/documents/eee/syllabus/2018-scheme.pdf" target="_blank" className="block p-4 border rounded hover:border-blue-500 hover:text-blue-600 transition-colors">
                                        2018 Scheme Syllabus
                                    </a>
                                    <a href="/assets/documents/eee/syllabus/2021-scheme.pdf" target="_blank" className="block p-4 border rounded hover:border-blue-500 hover:text-blue-600 transition-colors">
                                        2021 Scheme Syllabus
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
                            <h4 className="font-bold text-gray-800 mb-4">Learning Materials</h4>
                            <ul className="list-disc pl-5 space-y-3 text-gray-700">
                                <li>Lecture Notes and Study Materials</li>
                                <li>Question Banks and Model Papers</li>
                                <li>Laboratory Manuals</li>
                                <li>NPTEL / Swayam Course Links</li>
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
                                "Electrical Machines Lab",
                                "Power Electronics Lab",
                                "Microcontroller Lab",
                                "Control Systems Lab",
                                "Relay & High Voltage Lab",
                                "Basic Electrical Engineering Lab"
                            ].map((lab, i) => (
                                <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:border-cu-blue transition-colors">
                                    <h4 className="font-bold text-lg text-gray-800">{lab}</h4>
                                    <p className="text-sm text-gray-500 mt-2">Equipped with state-of-the-art instruments for practical learning.</p>
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
                            <h4 className="font-bold text-gray-800 mb-4">Recent Programs</h4>
                            <p className="text-gray-600">Details of Faculty Development Programs and Conferences organized by the department.</p>
                        </div>
                    </motion.div>
                );

            case 'placement':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Placement</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="font-bold text-gray-800 mb-4">Placement Highlights</h4>
                            <p className="text-gray-600 mb-4">Our students have been placed in reputed companies like:</p>
                            <div className="flex flex-wrap gap-3">
                                {['TCS', 'Infosys', 'Wipro', 'HCL', 'Robert Bosch', 'Kpuit'].map((c, i) => (
                                    <span key={i} className="px-4 py-2 bg-blue-50 text-cu-blue rounded-full font-medium text-sm">{c}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );

            case 'research':
            case 'rd_special':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Research & Development</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="font-bold text-gray-800 mb-4">Research Areas</h4>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                                <li>Power System Optimization</li>
                                <li>Renewable Energy Integration</li>
                                <li>Electric Vehicle Technology</li>
                                <li>Smart Grid Applications</li>
                            </ul>
                            <a href="/assets/documents/eee/reports/vidyutsav.pdf" target="_blank" className="text-cu-blue hover:underline">
                                View R&D Activities Report
                            </a>
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
                                    <span className="text-3xl font-bold text-cu-blue">ISTE</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-2">Indian Society for Technical Education (ISTE)</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        The Indian Society for Technical Education (ISTE) is the leading National Professional non-profit making Society for the Technical Education System in our country.
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
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Department Forum Activities</h4>
                            <p className="text-gray-600 mb-6">The department forum organizes various technical and non-technical events.</p>
                            <div className="grid md:grid-cols-2 gap-4 text-left">
                                <a href="/assets/documents/eee/reports/prakalp-2k22.pdf" target="_blank" className="p-4 bg-gray-50 rounded hover:bg-gray-100 flex items-center justify-between">
                                    <span>Prakalp 2K22 Report</span>
                                    <span className="text-cu-blue text-sm">PDF</span>
                                </a>
                                <a href="/assets/documents/eee/reports/vidyutsav.pdf" target="_blank" className="p-4 bg-gray-50 rounded hover:bg-gray-100 flex items-center justify-between">
                                    <span>Vidyutsav Report</span>
                                    <span className="text-cu-blue text-sm">PDF</span>
                                </a>
                            </div>
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
                                        { name: "Dr. S. Kotresh (HOD)", ach: "International publication in Bali, Indonesia (ICCIDC 2025) on Lithium-Ion batteries." },
                                        { name: "Gangadhar J", ach: "Co-authored the ICCIDC 2025 research paper." },
                                        { name: "Dr. Linganagouda R", ach: "Reviewer for IEEE NKcon-25 and Elsevier ISA transactions (2022-25)." }
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
                                        "Successful completion of social responsibility projects like the Plantation Drive.",
                                        "Students consistently placed in reputed companies with high packages.",
                                        "Active participation in the 'ELITE-EEE' student forum activities.",
                                        "Prizes won in technical fests and state-level exhibitions."
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
                                            { label: "Faculty PhDs", value: "2+" },
                                            { label: "Placement", value: "80%+" },
                                            { label: "Research Focus", value: "Smart Grid" }
                                        ].map((stat, i) => (
                                            <div key={i} className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                                                <p className="text-2xl font-bold text-cu-gold italic">{stat.value}</p>
                                                <p className="text-[10px] text-blue-100/60 font-bold uppercase tracking-widest italic">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="md:w-1/3 p-6 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-sm">
                                    <h4 className="text-cu-gold font-bold mb-3 italic">Social Responsibility</h4>
                                    <p className="text-sm text-blue-100/80 italic leading-relaxed">
                                        Our students are not just engineers but socially responsible citizens, actively leading plantation drives and environmental awareness programs.
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
                        <div className="grid gap-4">
                            <a href="/assets/documents/eee/reports/nba-committees.pdf" target="_blank" className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 font-medium text-gray-800 hover:bg-blue-50 transition-colors flex justify-between items-center">
                                <span>NBA Committees</span>
                                <span className="text-xs text-blue-500 bg-blue-100 px-2 py-1 rounded">View PDF</span>
                            </a>
                        </div>
                    </motion.div>
                );

            case 'publications':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Publications</h3>
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
                            {[
                                "Journal of Emerging Technologies and Innovative Research (JETIR)",
                                "International Journal for Research in Applied Science and Engineering Technology (IJRASET)",
                                "International Journal of Emerging Technologies in Engineering Research (IJETER)",
                                "The International Journal of Advanced Research in Electrical, Electronics and Instrumentation Engineering (IJAREEIE)",
                                "International Journal of Research in Engineering and Technology (IRJET)"
                            ].map((journal, i) => (
                                <div key={i} className="p-4 hover:bg-gray-50 transition-colors">
                                    <h5 className="font-medium text-gray-800">{journal}</h5>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            <a href="/assets/documents/eee/reports/co-po.pdf" target="_blank" className="text-cu-blue hover:underline">View CO-PO Mapping Details</a>
                        </div>
                    </motion.div>
                );

            case 'workshops':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Workshop / Seminar</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { name: "R&D Workshop", file: "drone-workshop.pdf" },
                                { name: "Technical Session on GATE", file: "gate-session.pdf" },
                                { name: "Webinar on Control of Electrical Machines", file: "electrical-maintenance.pdf" }
                            ].map((item, i) => (
                                <a key={i} href={`/assets/documents/eee/reports/${item.file}`} target="_blank" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group block">
                                    <h4 className="font-bold text-gray-800 group-hover:text-cu-blue mb-2">{item.name}</h4>
                                    <span className="text-sm text-gray-500">Click to download report</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                );

            case 'newsletter':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Newsletters</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                { name: "Newsletter 2021-22", file: "newsletter-2021-22.pdf" },
                                { name: "Newsletter 2020-21", file: "newsletter-2020-21.pdf" }
                            ].map((item, i) => (
                                <a key={i} href={`/assets/documents/eee/newsletters/${item.file}`} target="_blank" className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-center">
                                    <div className="text-4xl text-cu-blue mb-3">📰</div>
                                    <h5 className="font-bold text-gray-800">{item.name}</h5>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                );

            case 'results':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Results</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <p className="text-gray-600 mb-4">Consolidated result analysis for various semesters.</p>
                            <a href="/assets/documents/eee/reports/iqac-nov-dec-2025.pdf" target="_blank" className="text-cu-blue font-bold hover:underline">
                                View Latest IQAC / Result Report
                            </a>
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
                                <p className="text-blue-100 text-sm mt-1">Electrical & Electronics</p>
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

export default ElectricalElectronicsEngineering;
