import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Building2, TrendingUp, UserCheck, Briefcase, Award, Star, ExternalLink, FileText } from 'lucide-react';
import placementSuccessImg from '../assets/rymec/placement-success.png';
import achievement1 from '../assets/rymec/achievement1.jpg';
import achievement2 from '../assets/rymec/achievement2.jpg';
import achievement3 from '../assets/rymec/achievement3.jpg';
import placementDirectorImg from '../assets/rymec/placement_director.jpg';

const Placements = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    // Map URL paths to tab IDs
    const pathMap = {
        '/about-placements': 'about',
        '/placement-training': 'training',
        '/placement-achievements': 'achievements',
        '/placement-staff': 'staff',
        '/placement-statistics': 'statistics',
        '/placement-activities': 'activities',
        '/recruiting-companies': 'recruiting'
    };

    const getInitialTab = () => {
        const pathTab = pathMap[location.pathname];
        if (pathTab) return pathTab;
        return searchParams.get('tab') || 'about';
    };

    const activeTab = getInitialTab();

    const tabs = [
        { id: 'about', label: 'About Placements' },
        { id: 'training', label: 'Placement Training' },
        { id: 'achievements', label: 'Placement Achievements' },
        { id: 'staff', label: 'Staff' },
        { id: 'statistics', label: 'Placement Statistics' },
        { id: 'activities', label: 'Placement Activities' },
        { id: 'recruiting', label: 'Recruiting Companies' },
    ];

    const handleTabChange = (tabId) => {
        setSearchParams({ tab: tabId });
    };

    // Content Data (Extracted from source)
    const placementContent = {
        about: {
            title: "TRAINING & PLACEMENT CELL",
            tagline: "\"GOD HAS PROVIDED A JOB FOR EVERY ONE & OUR JOB IS TO GET YOU ONE\"",
            description: "The Training and Placement Cell imparts training to students by giving emphasis on General Aptitude, Motivational Skills, Communication Skills, Interpersonal Relationships, Leadership Qualities, Group Discussions & Interview Techniques. Resource persons and professionals from reputed organizations along with college faculties train the students. The Training and Placement Cell also helps the weak students to improve their academic performance by counseling. The Training and Placement Cell provides the infra-structural facilities to conduct group discussions, tests & interviews besides catering to other logistics. The database of the students is managed by the cell, which plays a critical role in getting jobs to the students.",
            roles: [
                "Prepare students for successful performance in competitive exams like GATE, GRE, TOEFL, CAT, GMAT, AMCAT, COCUBES etc",
                "Develop communication abilities by conducting GD’s and mock interviews.",
                "Invite Industry and prospective employers to organize campus interviews.",
                "Provide fruitful industry-institute interaction."
            ],
            focus: "The focus of the Training and Placement cell is to strike a match between recruiter expectations and student aspirations. The main aim of the Training and Placement cell is to provide a unique platform to the students by acting as a link between the industries and the academia.",
            vision: "Sustained excellence in Training, Placement & Career Orientation",
            mission: [
                "To assist the development of graduates with a balanced set of technical skills, interpersonal skills and with a positive attitude for life.",
                "To act as a nodal agency in the institution for bridging the technology alliance between the departments of RYMEC and the industries.",
                "To act as a seamless conduit between the industry and the institute and provide quality technocrats to suit every organizational need."
            ],
            objectives: [
                "To impart training in skill development, personal grooming and total personality development of students.",
                "To organize campus recruitments for maximum placements of students.",
                "To arrange different training programs, Such as mock written test, mock group discussion, mock interviews, personality development courses etc.",
                "To counsel students in choosing appropriate jobs and institutions for higher education.",
                "To conduct personality training programs outside the curricula to provide better placements.",
                "To generate and handle the database of industries and students.",
                "To provide better industry institute interaction."
            ]
        },
        training: {
            title: "Placement Training",
            downloads: [
                { name: "Campus Training Details", url: "https://rymec.edu.in/wp-content/uploads/2024/06/TRAINING-DETAILS.pdf" },
                { name: "Placement Career Guidance", url: "https://rymec.edu.in/wp-content/uploads/2023/06/5.1.4.pdf" },
                { name: "Career Orientation Program", url: "https://rymec.edu.in/wp-content/uploads/2023/06/Career-Orientation-Program.pdf" },
                { name: "Camps Recruitment Training Program", url: "https://rymec.edu.in/wp-content/uploads/2023/06/Camps-Recruitment-Training-Program.pdf" }
            ],
            partners: [
                "ETHNUS, BANGALORE", "BIZOTIC TALENT SOLUTIONS, BANGALORE", "UNIVERSAL EDUCATION, BANGALORE",
                "SEVENTH SENSE TALENT SOLUTIONS, BANGALORE", "FACE, BANGALORE", "SMART, CHENNAI",
                "QUANTECH ORIGIN, BANGALORE", "INNOVATIONS UNLIMITED, BANGALORE", "TIME, BANGALORE"
            ],
            assessment: ["AMCAT", "COCUBES", "FIRST NAUKARI", "HIREMEE", "MONSTER"],
            curriculum: {
                quantitative: [
                    "Introduction to Number System", "HCF & LCM", "Average", "Partnership", "Profit and Loss",
                    "Ratio, Proportion and variations", "Time and Work", "Percentages", "Alligation and Mixture",
                    "Time and Distance", "Permutation & Combination", "Probability", "Ages", "Pipes & Cisterns",
                    "Simple & Compound Interest", "Data Interpretation", "Syllogisms", "Progressions"
                ],
                reasoning: [
                    "Number Series", "Letter Series", "Seating Arrangement", "Blood Relations", "Puzzle Test",
                    "Analogy", "Coding & Decoding", "Direction Sense Test", "Cubes", "Clocks and Calendars", "Analytical reasoning"
                ],
                verbal: [
                    "Antonyms", "Closet Test", "Sentence Correction", "Ordering of Sentences", "Synonyms",
                    "Comprehension", "Change of Speech", "Change of Voice"
                ],
                softSkills: [
                    "Attitude building", "Resume building", "Communication Skills", "Group discussions",
                    "Extempore", "JAM (Just A Minute)", "Interview etiquettes", "Dressing Etiquettes",
                    "Body Language", "Corporate Etiquettes"
                ]
            }
        },
        achievements: {
            title: "Placement Achievements",
            posters: [achievement1, achievement2, achievement3],
            tables: [
                {
                    headers: ["COMPANY", "NUMBER OF SELECTIONS", "PACKAGE"],
                    rows: [
                        ["TCS", "33", "7.00 & 3.36 LPA"],
                        ["COGNIZANT", "51", "4.00 LPA"]
                    ]
                },
                {
                    headers: ["COMPANY", "NUMBER OF SELECTIONS", "PACKAGE"],
                    rows: [
                        ["BEL", "4", "13.00 LPA"],
                        ["BOTTOM LINE TECHNOLOGIES", "2", "11.00 LPA"],
                        ["MERCEDEZ BENZ", "2", "10.00 LPA"],
                        ["BYJU'S", "1", "10.00 LPA"],
                        ["NCPI", "3", "6.89 LPA"],
                        ["PELATRO", "2", "6.50 LPA"]
                    ]
                }
            ]
        },
        staff: {
            title: "TRAINING & PLACEMENT TEAM",
            director: {
                name: "Dr. Prashanth K Y",
                role: "Placement Director",
                image: placementDirectorImg
            },
            assistant: {
                name: "Shivananda K B",
                role: "Asst. Placement Officer",
                image: placementDirectorImg
            },
            coordinators: [
                { name: "Megha N Belagal", branch: "CIVIL" },
                { name: "Dr.H M Naveen", branch: "MECHANICAL" },
                { name: "Sreekanth N", branch: "ECE" },
                { name: "Dr.K.Lingaraj", branch: "CSE" },
                { name: "K. Rajashekar", branch: "EEE" },
                { name: "Dr.Mahantesh HM", branch: "ISE" },
                { name: "Gideon G", branch: "MBA" }
            ]
        },
        statistics: {
            title: "Placement Statistics",
            reports: [
                { year: "2024 – 2025", name: "Campus Placements Report", url: "https://rymec.edu.in/wp-content/uploads/2025/04/CAMPUS-PLACEMENTS-2024-2025.pdf" },
                { year: "2023 – 2024", name: "Campus Results Student List", url: "https://rymec.edu.in/wp-content/uploads/2024/06/Campus-Results-2023-24-Students-List.pdf" },
                { year: "2022 – 2023", name: "Placement Activities Report", url: "https://rymec.edu.in/wp-content/uploads/2023/06/Placement-Activities-2023.pdf" }
            ],
            selections2022: {
                title: "CAMPUS SELECTIONS FOR 2022 BATCH",
                headers: ["SL.NO", "USN", "NAME", "BRANCH", "COMPANY"],
                rows: [
                    ["1", "3VC18CS053", "HARSHITH T J", "CSE", "SLK SOFTWARE"],
                    ["2", "3VC18CS098", "B PAVANI KUMARI", "CSE", "SLK SOFTWARE"],
                    ["3", "3VC18CS104", "RAHUL Y", "CSE", "SLK SOFTWARE"],
                    ["4", "3VC18CS119", "S SOWMYA", "CSE", "SLK SOFTWARE"],
                    ["5", "3VC18CS131", "S G VAIBHAV", "CSE", "SLK SOFTWARE"],
                    ["6", "3VC18CS156", "THAMMINENI PUSHYAMITRA", "CSE", "SLK SOFTWARE"],
                    ["7", "3VC18CS170", "YASHODHA G", "CSE", "SLK SOFTWARE"],
                    ["8", "3VC18EC023", "KADAPPA KADAGOUDAR", "ECE", "SLK SOFTWARE"],
                    ["9", "3VC18EC043", "S MANOJ KUMAR", "ECE", "SLK SOFTWARE"],
                    ["10", "3VC18EC047", "SAHANA P KEMBHAVI", "ECE", "SLK SOFTWARE"]
                ]
            },
            contact: "ISE24@GMAIL.COM"
        },
        activities: {
            title: "Placement Activities",
            vision: "Sustained excellence in Training, Placement & Career Orientation.",
            mission: "To assist the development of graduates with a balanced set of technical skills, interpersonal skills and with a positive attitude for life.",
            objectives: [
                "To impart training in skill development and total personality development.",
                "To organize campus recruitments for maximum placements.",
                "To arrange mock tests, group discussions, and interviews.",
                "To counsel students in choosing appropriate jobs.",
                "To conduct personality training programs outside the curricula.",
                "To generate and handle the database of industries and students."
            ]
        },
        recruiting: {
            title: "Recruiting Companies",
            companies: [
                "TATA Consultancy Services", "Infosys", "Wipro", "Cognizant", "Capgemini", "Accenture",
                "DXC Technology", "Tech Mahindra", "SLK Software", "Mindtree", "Quest Global",
                "Slumberger", "Palle Technologies", "QSpiders", "JSpiders", "Global Edge",
                "Evive Health", "Prerana Motors", "Bharat Electronics", "TATA Elxsi"
            ]
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Hero Section */}
            <div className="bg-cu-blue py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        Placements
                    </motion.h1>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                        Empowering students with industry-ready skills and connecting them with global career opportunities.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Tabs */}
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => handleTabChange(tab.id)}
                                    className={`w-full px-6 py-4 text-left font-semibold transition-all duration-300 border-l-4 ${activeTab === tab.id
                                        ? "bg-blue-50 text-cu-blue border-cu-blue"
                                        : "text-gray-600 border-transparent hover:bg-gray-50"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:w-3/4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 min-h-[500px]"
                            >
                                {activeTab === 'about' && (
                                    <div className="space-y-12">
                                        <div className="text-center space-y-4">
                                            <h2 className="text-3xl font-bold text-cu-blue uppercase tracking-tight">{placementContent.about.title}</h2>
                                            <p className="text-blue-600 font-bold text-lg max-w-2xl mx-auto border-y border-blue-100 py-3 italic">
                                                {placementContent.about.tagline}
                                            </p>
                                        </div>

                                        <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed text-lg">
                                            <p>{placementContent.about.description}</p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
                                                <h3 className="text-xl font-bold text-cu-blue mb-6 flex items-center gap-2">
                                                    <div className="w-2 h-8 bg-cu-gold rounded-full"></div>
                                                    Primary Roles
                                                </h3>
                                                <ul className="space-y-4">
                                                    {placementContent.about.roles.map((role, idx) => (
                                                        <li key={idx} className="flex items-start gap-4">
                                                            <div className="mt-1.5 w-5 h-5 rounded-full bg-cu-blue flex items-center justify-center flex-shrink-0">
                                                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                                            </div>
                                                            <span className="text-gray-700 font-medium">{role}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="bg-amber-50/50 p-8 rounded-3xl border border-amber-100">
                                                <h3 className="text-xl font-bold text-amber-800 mb-6 flex items-center gap-2">
                                                    <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
                                                    Core Focus
                                                </h3>
                                                <p className="text-gray-700 font-medium leading-relaxed italic">
                                                    {placementContent.about.focus}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-6">
                                                <div className="p-8 rounded-3xl bg-cu-blue text-white overflow-hidden relative">
                                                    <div className="relative z-10">
                                                        <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Vision</h3>
                                                        <p className="text-blue-50 text-xl font-bold border-l-4 border-cu-gold pl-4">{placementContent.about.vision}</p>
                                                    </div>
                                                </div>
                                                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                                                    <h3 className="text-2xl font-bold text-gray-800 mb-6 uppercase tracking-wider">Mission</h3>
                                                    <ul className="space-y-4">
                                                        {placementContent.about.mission.map((item, idx) => (
                                                            <li key={idx} className="flex gap-4">
                                                                <Star className="text-cu-gold flex-shrink-0" size={20} />
                                                                <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 h-full">
                                                <h3 className="text-2xl font-bold text-gray-800 mb-6 uppercase tracking-wider">Objectives</h3>
                                                <div className="space-y-3">
                                                    {placementContent.about.objectives.map((obj, idx) => (
                                                        <div key={idx} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-50 hover:border-cu-blue transition-all">
                                                            <span className="text-cu-blue font-black text-xl">{idx + 1}.</span>
                                                            <p className="text-gray-700 font-medium text-sm">{obj}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'training' && (
                                    <div className="space-y-12">
                                        <h2 className="text-3xl font-bold text-cu-blue mb-8 uppercase tracking-tight">{placementContent.training.title}</h2>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            {/* Download Links */}
                                            <div className="space-y-4">
                                                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                                    <div className="w-2 h-8 bg-cu-gold rounded-full"></div>
                                                    Important Documents
                                                </h3>
                                                <div className="space-y-3">
                                                    {placementContent.training.downloads.map((doc, idx) => (
                                                        <a key={idx} href={doc.url} target="_blank" className="flex items-center justify-between p-4 bg-gray-50 hover:bg-cu-blue hover:text-white rounded-xl transition-all group border border-gray-100">
                                                            <span className="font-semibold">{doc.name}</span>
                                                            <svg className="w-5 h-5 opacity-50 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Partners */}
                                            <div className="space-y-6">
                                                <div className="bg-cu-blue p-8 rounded-3xl text-white">
                                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                                        <Star size={20} className="text-cu-gold" /> Training Partners
                                                    </h3>
                                                    <ul className="grid grid-cols-1 gap-2 text-sm text-blue-100">
                                                        {placementContent.training.partners.map((partner, idx) => (
                                                            <li key={idx} className="flex gap-2 items-center">
                                                                <div className="w-1.5 h-1.5 bg-cu-gold rounded-full"></div>
                                                                {partner}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="bg-cu-gold p-8 rounded-3xl text-cu-blue">
                                                    <h3 className="text-xl font-bold mb-4">Assessment Test Partners</h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {placementContent.training.assessment.map((test, idx) => (
                                                            <span key={idx} className="px-3 py-1 bg-white/50 rounded-lg font-bold text-xs uppercase border border-cu-blue/10">{test}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Detailed Curriculum Section */}
                                        <div className="space-y-8">
                                            <h3 className="text-2xl font-bold text-cu-blue text-center uppercase tracking-wider">Campus Recruitment Training Content (60 Hours)</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                                {/* Quantitative */}
                                                <div className="space-y-4">
                                                    <h4 className="p-3 bg-blue-900 text-white rounded-xl font-bold text-sm uppercase text-center">Quantitative</h4>
                                                    <ul className="space-y-1.5 px-2">
                                                        {placementContent.training.curriculum.quantitative.map((item, idx) => (
                                                            <li key={idx} className="text-xs text-gray-600 font-medium border-l-2 border-blue-200 pl-3">{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                {/* Reasoning */}
                                                <div className="space-y-4">
                                                    <h4 className="p-3 bg-blue-700 text-white rounded-xl font-bold text-sm uppercase text-center">Reasoning</h4>
                                                    <ul className="space-y-1.5 px-2">
                                                        {placementContent.training.curriculum.reasoning.map((item, idx) => (
                                                            <li key={idx} className="text-xs text-gray-600 font-medium border-l-2 border-blue-400 pl-3">{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                {/* Verbal */}
                                                <div className="space-y-4">
                                                    <h4 className="p-3 bg-blue-500 text-white rounded-xl font-bold text-sm uppercase text-center">Verbal</h4>
                                                    <ul className="space-y-1.5 px-2">
                                                        {placementContent.training.curriculum.verbal.map((item, idx) => (
                                                            <li key={idx} className="text-xs text-gray-600 font-medium border-l-2 border-blue-600 pl-3">{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                {/* Soft Skills */}
                                                <div className="space-y-4">
                                                    <h4 className="p-3 bg-cu-gold text-cu-blue rounded-xl font-bold text-sm uppercase text-center">Soft Skills</h4>
                                                    <ul className="space-y-1.5 px-2">
                                                        {placementContent.training.curriculum.softSkills.map((item, idx) => (
                                                            <li key={idx} className="text-xs text-gray-600 font-medium border-l-2 border-cu-gold pl-3">{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'achievements' && (
                                    <div className="space-y-12">
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                            <h2 className="text-3xl font-bold text-cu-blue">{placementContent.achievements.title}</h2>
                                            <div className="flex gap-2">
                                                <span className="px-4 py-1 bg-blue-100 text-cu-blue text-sm font-bold rounded-full border border-blue-200">Official Records</span>
                                                <span className="px-4 py-1 bg-amber-100 text-amber-700 text-sm font-bold rounded-full border border-amber-200 italic">Extracted from Source</span>
                                            </div>
                                        </div>

                                        {/* Achievement Posters */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {placementContent.achievements.posters.map((img, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    whileHover={{ scale: 1.02 }}
                                                    className="rounded-2xl overflow-hidden shadow-lg border border-gray-200"
                                                >
                                                    <img src={img} alt={`Achievement ${idx + 1}`} className="w-full h-auto object-cover" />
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Selection Tables */}
                                        <div className="space-y-8">
                                            {placementContent.achievements.tables.map((table, tIdx) => (
                                                <div key={tIdx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                                                    <div className="p-6 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                                                        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                                            <Award className="text-cu-gold" /> {tIdx === 0 ? "Core Recruiters" : "High Package Placements"}
                                                        </h3>
                                                    </div>
                                                    <div className="overflow-x-auto">
                                                        <table className="w-full text-left">
                                                            <thead>
                                                                <tr className="bg-white text-gray-400 text-xs font-bold uppercase tracking-wider">
                                                                    {table.headers.map((header, hIdx) => (
                                                                        <th key={hIdx} className="px-6 py-4">{header}</th>
                                                                    ))}
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-gray-100">
                                                                {table.rows.map((row, rIdx) => (
                                                                    <tr key={rIdx} className="hover:bg-blue-50/30 transition-colors">
                                                                        {row.map((cell, cIdx) => (
                                                                            <td key={cIdx} className={`px-6 py-4 ${cIdx === 0 ? 'font-bold text-gray-800' : 'text-gray-600 font-medium'}`}>
                                                                                {cIdx === 2 ? (
                                                                                    <span className="px-3 py-1 bg-cu-gold/10 text-cu-blue font-bold rounded-lg text-sm">{cell}</span>
                                                                                ) : cell}
                                                                            </td>
                                                                        ))}
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Hero Footer */}
                                        <div className="relative rounded-3xl overflow-hidden h-48 shadow-lg group">
                                            <img src={placementSuccessImg} alt="Placement Success" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                            <div className="absolute inset-0 bg-cu-blue/60 backdrop-blur-sm flex items-center justify-center p-8 text-center">
                                                <div className="text-white">
                                                    <h3 className="text-2xl font-bold mb-2">Driving Career Excellence</h3>
                                                    <p className="text-blue-50 opacity-90 max-w-lg mx-auto">Our students are trained to meet the dynamic challenges of the global industry.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'staff' && (
                                    <div className="space-y-12">
                                        {/* Intro Section (Shared with About) */}
                                        <div className="space-y-12 pb-12 border-b border-gray-100">
                                            <div className="text-center space-y-4">
                                                <h2 className="text-3xl font-bold text-cu-blue uppercase tracking-tight">{placementContent.about.title}</h2>
                                                <p className="text-blue-600 font-bold text-lg max-w-2xl mx-auto border-y border-blue-100 py-3 italic">
                                                    {placementContent.about.tagline}
                                                </p>
                                            </div>

                                            <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed text-lg">
                                                <p>{placementContent.about.description}</p>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
                                                    <h3 className="text-xl font-bold text-cu-blue mb-6 flex items-center gap-2">
                                                        <div className="w-2 h-8 bg-cu-gold rounded-full"></div>
                                                        Primary Roles
                                                    </h3>
                                                    <ul className="space-y-4">
                                                        {placementContent.about.roles.map((role, idx) => (
                                                            <li key={idx} className="flex items-start gap-4">
                                                                <div className="mt-1.5 w-5 h-5 rounded-full bg-cu-blue flex items-center justify-center flex-shrink-0">
                                                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                                                </div>
                                                                <span className="text-gray-700 font-medium">{role}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="bg-amber-50/50 p-8 rounded-3xl border border-amber-100">
                                                    <h3 className="text-xl font-bold text-amber-800 mb-6 flex items-center gap-2">
                                                        <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
                                                        Core Focus
                                                    </h3>
                                                    <p className="text-gray-700 font-medium leading-relaxed italic">
                                                        {placementContent.about.focus}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-6">
                                                    <div className="p-8 rounded-3xl bg-cu-blue text-white overflow-hidden relative">
                                                        <div className="relative z-10">
                                                            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Vision</h3>
                                                            <p className="text-blue-50 text-xl font-bold border-l-4 border-cu-gold pl-4">{placementContent.about.vision}</p>
                                                        </div>
                                                    </div>
                                                    <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                                                        <h3 className="text-2xl font-bold text-gray-800 mb-6 uppercase tracking-wider">Mission</h3>
                                                        <ul className="space-y-4">
                                                            {placementContent.about.mission.map((item, idx) => (
                                                                <li key={idx} className="flex gap-4">
                                                                    <Star className="text-cu-gold flex-shrink-0" size={20} />
                                                                    <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 h-full">
                                                    <h3 className="text-2xl font-bold text-gray-800 mb-6 uppercase tracking-wider">Objectives</h3>
                                                    <div className="space-y-3">
                                                        {placementContent.about.objectives.map((obj, idx) => (
                                                            <div key={idx} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-50 hover:border-cu-blue transition-all">
                                                                <span className="text-cu-blue font-black text-xl">{idx + 1}.</span>
                                                                <p className="text-gray-700 font-medium text-sm">{obj}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <h2 className="text-3xl font-bold text-cu-blue mb-8 uppercase tracking-tight text-center">{placementContent.staff.title}</h2>

                                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                            {/* Director Card */}
                                            <motion.div
                                                whileHover={{ y: -5 }}
                                                className="group p-8 rounded-3xl bg-blue-900 text-white shadow-xl relative overflow-hidden text-center"
                                            >
                                                <div className="relative z-10">
                                                    <div className="w-28 h-28 bg-white rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-4 border-white/30 backdrop-blur-sm shadow-inner group-hover:scale-110 transition-transform duration-500">
                                                        <img
                                                            src={placementContent.staff.director.image}
                                                            alt={placementContent.staff.director.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <h3 className="text-2xl font-bold mb-1">{placementContent.staff.director.name}</h3>
                                                    <p className="text-blue-200 font-bold tracking-widest uppercase text-xs mb-4">{placementContent.staff.director.role}</p>
                                                    <div className="h-1.5 w-16 bg-cu-gold mx-auto rounded-full"></div>
                                                </div>
                                            </motion.div>

                                            {/* Asst. Officer Card */}
                                            <motion.div
                                                whileHover={{ y: -5 }}
                                                className="group p-8 rounded-3xl bg-gray-900 text-white shadow-xl relative overflow-hidden text-center"
                                            >
                                                <div className="relative z-10">
                                                    <div className="w-28 h-28 bg-white rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-4 border-white/30 backdrop-blur-sm shadow-inner group-hover:scale-110 transition-transform duration-500">
                                                        <img
                                                            src={placementContent.staff.assistant.image}
                                                            alt={placementContent.staff.assistant.name}
                                                            className="w-full h-full object-cover p-2"
                                                        />
                                                    </div>
                                                    <h3 className="text-2xl font-bold mb-1">{placementContent.staff.assistant.name}</h3>
                                                    <p className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-4">{placementContent.staff.assistant.role}</p>
                                                    <div className="h-1.5 w-16 bg-cu-gold mx-auto rounded-full"></div>
                                                </div>
                                            </motion.div>
                                        </div>

                                        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mt-12">
                                            <div className="p-6 bg-gray-50 border-b border-gray-100">
                                                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 uppercase tracking-wider">
                                                    Dept Placement Co-Ordinators
                                                </h3>
                                            </div>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-left">
                                                    <thead>
                                                        <tr className="bg-white text-gray-400 text-xs font-bold uppercase tracking-wider">
                                                            <th className="px-6 py-4">SL.NO</th>
                                                            <th className="px-6 py-4">NAME</th>
                                                            <th className="px-6 py-4">BRANCH</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-100">
                                                        {placementContent.staff.coordinators.map((coordinator, idx) => (
                                                            <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                                                                <td className="px-6 py-4 text-gray-400 font-bold">{idx + 1}</td>
                                                                <td className="px-6 py-4 text-gray-800 font-bold">{coordinator.name}</td>
                                                                <td className="px-6 py-4">
                                                                    <span className="px-3 py-1 bg-blue-100 text-cu-blue font-bold rounded-lg text-xs tracking-widest uppercase">
                                                                        {coordinator.branch}
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'statistics' && (
                                    <div className="space-y-12">
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                            <h2 className="text-3xl font-bold text-cu-blue uppercase tracking-tight">{placementContent.statistics.title}</h2>
                                            <div className="px-4 py-2 bg-blue-50 text-cu-blue rounded-xl border border-blue-100 flex items-center gap-2">
                                                <div className="w-2 h-2 bg-cu-gold rounded-full animate-pulse"></div>
                                                <span className="text-sm font-bold">Official Placement Reports</span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {placementContent.statistics.reports.map((report, idx) => (
                                                <motion.a
                                                    whileHover={{ y: -5 }}
                                                    key={idx}
                                                    href={report.url}
                                                    target="_blank"
                                                    className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all group relative overflow-hidden"
                                                >
                                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                                        <FileText size={80} />
                                                    </div>
                                                    <div className="relative z-10">
                                                        <div className="w-12 h-12 bg-blue-50 text-cu-blue rounded-2xl flex items-center justify-center mb-4 group-hover:bg-cu-blue group-hover:text-white transition-colors">
                                                            <TrendingUp size={24} />
                                                        </div>
                                                        <h3 className="text-lg font-bold text-gray-800 mb-1">{report.year}</h3>
                                                        <p className="text-gray-500 text-sm font-medium mb-4">{report.name}</p>
                                                        <div className="flex items-center gap-2 text-cu-blue font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-lg w-fit group-hover:bg-cu-gold group-hover:text-cu-blue transition-colors">
                                                            View Report <ExternalLink size={12} />
                                                        </div>
                                                    </div>
                                                </motion.a>
                                            ))}
                                        </div>

                                        {/* Detailed Table for 2022 Batch */}
                                        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm mt-8">
                                            <div className="p-8 bg-gray-50 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-800 uppercase tracking-wider flex items-center gap-3">
                                                        <Award className="text-cu-gold" /> {placementContent.statistics.selections2022.title}
                                                    </h3>
                                                    <p className="text-gray-500 text-sm mt-1 font-medium italic">Showing Top 10 Placements from the 2022 Batch Records</p>
                                                </div>
                                            </div>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-left">
                                                    <thead>
                                                        <tr className="bg-white text-gray-400 text-xs font-bold uppercase tracking-wider">
                                                            {placementContent.statistics.selections2022.headers.map((header, hIdx) => (
                                                                <th key={hIdx} className="px-6 py-5 border-b border-gray-50">{header}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-50">
                                                        {placementContent.statistics.selections2022.rows.map((row, rIdx) => (
                                                            <tr key={rIdx} className="hover:bg-blue-50/30 transition-colors group">
                                                                {row.map((cell, cIdx) => (
                                                                    <td key={cIdx} className={`px-6 py-4 ${cIdx === 2 ? 'font-bold text-gray-800' : 'text-gray-600 font-medium'} text-sm`}>
                                                                        {cIdx === 4 ? (
                                                                            <span className="px-3 py-1 bg-cu-blue/10 text-cu-blue font-bold rounded-lg text-xs tracking-wider">
                                                                                {cell}
                                                                            </span>
                                                                        ) : cell}
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="p-4 bg-gray-50 text-center border-t border-gray-100">
                                                <p className="text-gray-400 text-xs font-bold uppercase tracking-tighter italic">Source: Official RYMEC Placement Records 2022</p>
                                            </div>
                                        </div>

                                        <div className="mt-12 p-10 bg-gray-900 rounded-[3rem] text-center text-white relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
                                            <div className="relative z-10 max-w-2xl mx-auto">
                                                <h3 className="text-2xl font-bold mb-4">Request Detailed Archive</h3>
                                                <p className="text-gray-400 mb-8 leading-relaxed">For complete historical data beyond the current records or department-wise recruitment analytics, please contact our placement cell.</p>
                                                <a href={`mailto:${placementContent.statistics.contact}`} className="inline-flex items-center gap-3 px-10 py-4 bg-cu-gold text-cu-blue font-bold rounded-2xl hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg group">
                                                    <Briefcase size={20} className="group-hover:rotate-12 transition-transform" />
                                                    {placementContent.statistics.contact}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'activities' && (
                                    <div className="space-y-10">
                                        <h2 className="text-3xl font-bold text-cu-blue mb-4">{placementContent.activities.title}</h2>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="p-8 rounded-3xl bg-cu-blue text-white overflow-hidden relative">
                                                <div className="relative z-10">
                                                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                                                    <p className="text-blue-50 text-lg leading-relaxed">{placementContent.activities.vision}</p>
                                                </div>
                                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                                    <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg>
                                                </div>
                                            </div>
                                            <div className="p-8 rounded-3xl bg-cu-gold text-cu-blue">
                                                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                                                <p className="font-semibold text-lg leading-relaxed">{placementContent.activities.mission}</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 p-8 rounded-3xl">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Objectives</h3>
                                            <div className="space-y-4">
                                                {placementContent.activities.objectives.map((obj, idx) => (
                                                    <div key={idx} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
                                                        <span className="text-cu-blue font-black text-xl">{idx + 1}.</span>
                                                        <p className="text-gray-700 font-medium">{obj}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'recruiting' && (
                                    <div className="space-y-8">
                                        <h2 className="text-3xl font-bold text-cu-blue mb-6">{placementContent.recruiting.title}</h2>
                                        <p className="text-gray-600 text-lg mb-8">
                                            RYMEC is proud to be associated with several leading companies for campus recruitment. We are constantly expanding our network to provide the best opportunities for our students.
                                        </p>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {placementContent.recruiting.companies.map((company, idx) => (
                                                <div key={idx} className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-cu-blue/20 transition-all flex items-center justify-center text-center group">
                                                    <span className="text-gray-800 font-bold group-hover:text-cu-blue transition-colors">{company}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-12 bg-blue-50 p-8 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center gap-8">
                                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-cu-blue">
                                                <Star size={32} />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-cu-blue mb-2">Want to recruit from RYMEC?</h4>
                                                <p className="text-gray-600">Join our network of 100+ recruiters and tap into our pool of talented engineers.</p>
                                            </div>
                                            <button className="whitespace-nowrap px-8 py-3 bg-cu-blue text-white font-bold rounded-xl hover:bg-blue-800 transition-colors md:ml-auto">
                                                Recruiter Registration
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Placements;
