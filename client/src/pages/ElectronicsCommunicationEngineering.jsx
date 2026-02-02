import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Award,
    Users,
    Trophy,
    CheckCircle2,
    Target,
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
    Image as ImageIcon
} from 'lucide-react';

const ElectronicsCommunicationEngineering = () => {
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
        { name: "Dr. S. Prabhavathi", role: "Professor & Head", img: "/assets/images/ece/hod.jpg" },
        { name: "Mrs. Savita Sonoli", role: "Associate Professor", img: "/assets/images/ece/faculty/savita.jpg" },
        { name: "Mr. Chandrashekar", role: "Assistant Professor", img: "/assets/images/ece/faculty/chandrashekar.jpg" },
        { name: "Mr. Chinna Venkatesh", role: "Assistant Professor", img: "/assets/images/ece/faculty/chinnavenkatesh.jpg" },
        { name: "Mrs. Rakhee", role: "Assistant Professor", img: "/assets/images/ece/faculty/rakhee.jpg" },
        { name: "Mr. Surendranath H", role: "Assistant Professor", img: "/assets/images/ece/faculty/surendranath.jpg" },
        { name: "Mr. Khaja Moinuddin", role: "Assistant Professor", img: "/assets/images/ece/faculty/khajamoinuddin.jpg" },
        { name: "Mrs. Suvarna", role: "Assistant Professor", img: "/assets/images/ece/faculty/suvarna.jpg" },
        { name: "Mr. Shridhar", role: "Assistant Professor", img: "/assets/images/ece/faculty/shridhar.jpg" },
        { name: "Mr. Lokesh", role: "Assistant Professor", img: "/assets/images/ece/faculty/lokesh.jpg" },
        { name: "Mrs. Anita", role: "Assistant Professor", img: "/assets/images/ece/faculty/aanita.jpg" },
        { name: "Mr. Sudarshan", role: "Assistant Professor", img: "/assets/images/ece/faculty/sudarshan.jpg" },
        { name: "Mr. Shrikanth", role: "Assistant Professor", img: "/assets/images/ece/faculty/shrikanth.jpg" },
        { name: "Mrs. Ashwini", role: "Assistant Professor", img: "/assets/images/ece/faculty/ashwini.jpg" },
        { name: "Mrs. Vani", role: "Assistant Professor", img: "/assets/images/ece/faculty/vani.jpg" },
        { name: "Mr. Santosh", role: "Assistant Professor", img: "/assets/images/ece/faculty/santosh.jpg" },
        { name: "Mr. Vinay", role: "Assistant Professor", img: "/assets/images/ece/faculty/vinay.jpg" },
        { name: "Mr. Prashanth", role: "Assistant Professor", img: "/assets/images/ece/faculty/prashanth.jpg" }
    ];

    const images = [
        "/assets/images/ece/gallery/gallery1.png"
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
                                    src="/assets/images/ece/hod.jpg"
                                    alt="HOD"
                                    className="w-full h-auto rounded-lg shadow-md object-cover"
                                />
                                <div className="mt-4 text-center">
                                    <h3 className="font-bold text-lg text-cu-blue">Dr. S. Prabhavathi</h3>
                                    <p className="text-gray-600">Professor & Head</p>
                                </div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-2xl font-bold text-cu-blue mb-4">HOD's Message</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Welcome to the Department of Electronics and Communication Engineering. Our department is committed to providing a dynamic learning environment that fosters technical excellence, innovation, and ethical professional practice. We strive to prepare our students to meet the challenges of the rapidly evolving field of electronics and communication.
                                </p>
                            </div>
                        </div>

                        {/* Vision & Mission */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
                                <h3 className="text-xl font-bold text-cu-blue mb-4">Vision</h3>
                                <p className="text-gray-700 italic">
                                    "To produce Professionally Excellent, Knowledgeable, Globally Competitive, Socially Responsible Electronics and Communication Engineers."
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
                                <h3 className="text-xl font-bold text-cu-blue mb-4">Mission</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex gap-2">
                                        <span className="font-bold text-cu-gold">M1:</span>
                                        To provide quality education in Electronics and Communication Engineering.
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-cu-gold">M2:</span>
                                        To establish a continuous industry-institute interaction, participation and collaboration to contribute Electronics and Communication Engineering and Information Technology skilled Engineers.
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
                                    <p className="text-gray-700">Graduates of Electronics & Communication Engineering course will have Successful Professional Career.</p>
                                </div>
                                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center text-cu-blue font-bold">02</div>
                                    <p className="text-gray-700">Graduates of Electronics & Communication Engineering course will pursue Higher Education or to become an Entrepreneur.</p>
                                </div>
                                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center text-cu-blue font-bold">03</div>
                                    <p className="text-gray-700">Graduates of Electronics & Communication Engineering course will have ability for Lifelong Learning and to Serve the Society.</p>
                                </div>
                            </div>
                        </div>

                        {/* PSOs */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-cu-blue mb-6">Program Specific Outcomes (PSOs)</h3>
                            <div className="space-y-4">
                                <div className="p-4 border-l-4 border-cu-gold bg-yellow-50">
                                    <h4 className="font-bold text-gray-800 mb-1">PSO1</h4>
                                    <p className="text-gray-700">Ability to Design, Develop and Test the Electronics circuits & Communication Systems.</p>
                                </div>
                                <div className="p-4 border-l-4 border-cu-gold bg-yellow-50">
                                    <h4 className="font-bold text-gray-800 mb-1">PSO2</h4>
                                    <p className="text-gray-700">Ability to develop excellent programming and problem solving skills in the field of embedded system.</p>
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
                            <p className="text-gray-600 mb-4">The department offers a 4-year Bachelor of Engineering (B.E.) degree in Electronics & Communication Engineering.</p>
                            <div className="mt-8">
                                <h5 className="font-bold text-gray-800 mb-4">Downloads</h5>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <a href="/assets/documents/ece/reports/consolidated-list.pdf" target="_blank" className="block p-4 border rounded hover:border-blue-500 hover:text-blue-600 transition-colors">
                                        Consolidated List
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
                            <h4 className="font-bold text-gray-800 mb-4">Department Infrastructure</h4>
                            <ul className="list-disc pl-5 space-y-3 text-gray-700">
                                <li>Well-equipped Air Conditioned Seminar Hall.</li>
                                <li>Laboratories with modern equipment (CROs, Signal Generators, DSP Kits).</li>
                                <li>Department Library with over 1000 technical books.</li>
                                <li>Wi-Fi enabled classrooms.</li>
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
                                "Analog Electronics Lab",
                                "Digital Electronics Lab",
                                "Microcontroller & Embedded Systems Lab",
                                "Communication Lab",
                                "VLSI Lab",
                                "Power Electronics Lab",
                                "DSP Lab",
                                "HDL Lab"
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
                            <p className="text-gray-600">Information regarding Faculty Development Programs and Conferences will be updated here.</p>
                        </div>
                    </motion.div>
                );

            case 'placement':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Placement</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="font-bold text-gray-800 mb-4">Placement Records</h4>
                            <a href="/assets/documents/ece/placements/placement-2023-24.pdf" target="_blank" className="text-cu-blue hover:underline font-bold block mb-4">
                                Download Placement Data (Up to 2023-24)
                            </a>
                            <p className="text-gray-600 mb-4">Our graduates are placed in top companies including:</p>
                            <div className="flex flex-wrap gap-3">
                                {['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Tech Mahindra'].map((c, i) => (
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
                            <a href="/assets/documents/ece/reports/funds-data-2024.pdf" target="_blank" className="text-cu-blue hover:underline block mb-4">
                                View Funded Projects Information
                            </a>
                            <h4 className="font-bold text-gray-800 mb-4">Research Domains</h4>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li>Signal & Image Processing</li>
                                <li>VLSI Design</li>
                                <li>Wireless Communication</li>
                                <li>Embedded Systems</li>
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
                                    <span className="text-3xl font-bold text-cu-blue">IEEE</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-2">IEEE Student Branch</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        The IEEE Student Branch organizes technical talks, workshops, and conferences to keep students updated with the latest technological advancements.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-start gap-6">
                                <div className="w-20 h-20 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-3xl font-bold text-cu-blue">ISTE</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-2">ISTE Chapter</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        Active ISTE chapter conducting various faculty and student development programs.
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
                            <p className="text-gray-600">The Student Forum conducts annual technical fests, cultural events, and project exhibitions.</p>
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
                                        { name: "Dr. S. Prabhavathi (HOD)", ach: "Leading the department with focus on research excellence and technical innovation." },
                                        { name: "Faculty Publications", ach: "Regular research papers in indexed journals like JETIR, IJRTE, and IEEE Xplore." },
                                        { name: "Workshops & FDPs", ach: "Faculty members actively conducting and attending state-of-the-art technical workshops." }
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
                                        "Consistent high pass percentage in VTU examinations.",
                                        "Students winning prizes in National/State level technical paper presentations.",
                                        "Successful placements in top MNCs like TCS, Wipro, and Infosys.",
                                        "Active participation in IEEE Student Branch and ISTE Chapter activities."
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
                                            { label: "Lab Stations", value: "10+" },
                                            { label: "Library Books", value: "1000+" },
                                            { label: "Faculty Members", value: "18" },
                                            { label: "Avg. Placement", value: "75%+" }
                                        ].map((stat, i) => (
                                            <div key={i} className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                                                <p className="text-2xl font-bold text-cu-gold italic">{stat.value}</p>
                                                <p className="text-[10px] text-blue-100/60 font-bold uppercase tracking-widest italic">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="md:w-1/3 p-6 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-sm">
                                    <h4 className="text-cu-gold font-bold mb-3 italic">Vidyunmana Newsletter</h4>
                                    <p className="text-sm text-blue-100/80 italic leading-relaxed">
                                        Our departmental newsletter highlights the latest activities, achievements, and innovations of students and faculty.
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
                                <li>Department Advisory Board</li>
                                <li>Program Assessment Committee</li>
                                <li>Project Review Committee</li>
                                <li>Alumni Interaction Cell</li>
                            </ul>
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
                                "International Journal of Recent Technology and Engineering (IJRTE)",
                                "IEEE Xplore Digital Library",
                                "International Journal of Scientific Research in Science, Engineering and Technology (IJSRSET)"
                            ].map((journal, i) => (
                                <div key={i} className="p-4 hover:bg-gray-50 transition-colors">
                                    <h5 className="font-medium text-gray-800">{journal}</h5>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );

            case 'workshops':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Workshop / Seminar</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { name: "Workshops 2022-23", file: "workshop-2022-23.pdf" },
                                { name: "Workshops 2021-22", file: "workshop-2021-22.pdf" },
                                { name: "Workshops 2020-21", file: "workshop-2020-21.pdf" }
                            ].map((item, i) => (
                                <a key={i} href={`/assets/documents/ece/reports/${item.file}`} target="_blank" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group block">
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
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <p className="text-gray-600">The department newsletter "Vidyunmana" highlights the activities and achievements of the department.</p>
                        </div>
                    </motion.div>
                );

            case 'results':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Results</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <p className="text-gray-600">The department has consistently maintained excellent academic results.</p>
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
                                <p className="text-blue-100 text-sm mt-1">Electronics & Comm. Engg.</p>
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

export default ElectronicsCommunicationEngineering;
