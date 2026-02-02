import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MasterBusinessAdministration = () => {
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
        { name: "Dr. Thimmana Gouda", role: "Assistant Professor", img: "/assets/images/mba/faculty/thimmana.jpg" },
        { name: "Mr. K.S. Hiremath", role: "Assistant Professor", img: "/assets/images/mba/faculty/hiremath.jpg" },
        { name: "Mr. Vinay Gadigi", role: "Assistant Professor", img: "/assets/images/mba/faculty/vinay.jpg" },
        { name: "Mr. D. Viswanath Reddy", role: "Assistant Professor", img: "/assets/images/mba/faculty/viswanath.jpg" },
        { name: "Mrs. Umadevi", role: "Assistant Professor", img: "/assets/images/mba/faculty/umadevi.jpg" },
        { name: "Mr. Gideon", role: "Assistant Professor", img: "/assets/images/mba/faculty/gideon.jpg" },
        { name: "Mrs. Anuradha S G", role: "Assistant Professor", img: "/assets/images/mba/faculty/12_anuradha-s-g.jpg" }
    ];

    const images = [
        "/assets/images/mba/gallery/img1.jpg",
        "/assets/images/mba/gallery/img2.jpg",
        "/assets/images/mba/gallery/img3.jpg",
        "/assets/images/mba/events/navigating_success_2.jpg"
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
                                    src="/assets/images/mba/hod.jpg"
                                    alt="HOD"
                                    className="w-full h-auto rounded-lg shadow-md object-cover"
                                />
                                <div className="mt-4 text-center">
                                    <h3 className="font-bold text-lg text-cu-blue">HOD MBA</h3>
                                    <p className="text-gray-600">Head of Department</p>
                                </div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-2xl font-bold text-cu-blue mb-4">HOD's Message</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    The Department of Master of Business Administration Was established in the year 2008 with an intake of 60 students. It has an excellent infrastructure with well equipped laboratories. The Department has qualified, dedicated and experienced faculty members.
                                </p>
                            </div>
                        </div>

                        {/* Vision & Mission */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
                                <h3 className="text-xl font-bold text-cu-blue mb-4">Vision</h3>
                                <p className="text-gray-700 italic">
                                    "To be a centre of excellence in Management education, Research and Entrepreneurship."
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
                                <h3 className="text-xl font-bold text-cu-blue mb-4">Mission</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex gap-2">
                                        <span className="font-bold text-cu-gold">M1:</span>
                                        To impart quality management education through innovation and continuous improvement.
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-cu-gold">M2:</span>
                                        To enhance industry institute interaction.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                );

            case 'programmes':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Programmes Offered</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Postgraduate Program</h4>
                            <p className="text-gray-600 mb-4">Master of Business Administration (MBA).</p>
                            <div className="mt-8">
                                <h5 className="font-bold text-gray-800 mb-4">Specializations</h5>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>Finance</li>
                                    <li>Marketing</li>
                                    <li>Human Resources</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'academics':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Academics & Learning Resources</h3>

                        {/* Learning Resources Links */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">E-Learning Resources</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="/assets/documents/mba/learning-resources/sem1.pdf" target="_blank" className="flex items-center text-blue-600 hover:text-blue-800">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                        E-Learning Resources of 1st Semester MBA
                                    </a>
                                </li>
                                <li>
                                    <a href="/assets/documents/mba/learning-resources/sem3.pdf" target="_blank" className="flex items-center text-blue-600 hover:text-blue-800">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                        E-Learning Resources of 3rd Semester MBA
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Teaching Learning Process</h4>
                            <div className="space-y-4 text-gray-700">
                                <div>
                                    <h5 className="font-semibold text-cu-blue">Course Plan</h5>
                                    <p>The faculty members will prepare the course plan for the respective subject they handle before the commencement of the semester. This helps in structured delivery of the curriculum.</p>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-cu-blue">Internal Assessment</h5>
                                    <p>Continuous evaluation is done through internal assessment tests such as I.A. Test 1, I.A. Test 2 and I.A. Test 3 as per university norms.</p>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-cu-blue">Assignment</h5>
                                    <p>Regular assignments are given to students to enhance their understanding of the subject and encourage self-study.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );

            case 'laboratory':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Laboratory</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h4 className="text-lg font-bold text-gray-800 mb-2">Business Analytics Lab</h4>
                                <p className="text-gray-600">Equipped with latest statistical software like SPSS to help students analyze business data and make informed decisions.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h4 className="text-lg font-bold text-gray-800 mb-2">Computer Application Lab</h4>
                                <p className="text-gray-600">Modern computer lab with high-speed internet to facilitate learning of various business software packages including Tally.</p>
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
            case 'reports':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Reports</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/assets/documents/mba/reports/speakup_2025.pdf" target="_blank" className="flex items-center text-blue-600 hover:text-blue-800">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                    Report of SPEAKUP ARENA 2K25
                                </a>
                            </li>
                            <li>
                                <a href="/assets/documents/mba/reports/financial_awareness.pdf" target="_blank" className="flex items-center text-blue-600 hover:text-blue-800">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                    Report of Financial Awareness
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )
            // Default placeholder for other sections
            case 'fdp':
            case 'placement':
            case 'research':
            case 'societies':
            case 'forum':
            case 'achievements':
            case 'committees':
            case 'publications':
            case 'workshops':
            case 'newsletter':
            case 'results':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">{sidebarItems.find(i => i.id === activeTab)?.label}</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <p className="text-gray-600">Information for this section is currently being updated by the department.</p>
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
                                <p className="text-blue-100 text-sm mt-1">MBA</p>
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

export default MasterBusinessAdministration;
