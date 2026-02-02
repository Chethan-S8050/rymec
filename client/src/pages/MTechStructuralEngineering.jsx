import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MTechStructuralEngineering = () => {
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
        {
            name: "Dr. Sachin Patil",
            role: "Professor & PG Co-ordinator",
            img: "/assets/images/mtech_struct/faculty/sachin.jpg",
            qualification: "Ph.D"
        },
        {
            name: "Dr. Adana Gouda",
            role: "Associate Professor",
            img: "/assets/images/mtech_struct/faculty/adana.jpg",
            qualification: "Ph.D",
            interest: "Concrete Technology"
        },
        {
            name: "Mr. M.I. Basavalinganagowda",
            role: "Assistant Professor",
            img: "/assets/images/mtech_struct/faculty/basavalinganagowda.jpg",
            qualification: "M.Tech"
        }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-full md:w-1/3 flex-shrink-0">
                                <img
                                    src="/assets/images/mtech_struct/faculty/sachin.jpg"
                                    alt="Professor"
                                    className="w-full h-auto rounded-lg shadow-md object-cover"
                                />
                                <div className="mt-4 text-center">
                                    <h3 className="font-bold text-lg text-cu-blue">Dr. Sachin Patil</h3>
                                    <p className="text-gray-600">Professor & PG Co-ordinator</p>
                                </div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-2xl font-bold text-cu-blue mb-4">About the Department</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    The vision of the Department is to enhance the skills and capabilities of students in all the fields of Civil Engineering, with a specific focus on Structural Engineering. The program equips students with the ability to analyze and design complex structures like tall buildings, bridges, and industrial structures.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    The department boasts qualified and experienced faculty members dedicated to research and teaching. Key research areas include Concrete Technology and Structural Analysis.
                                </p>
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
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li>M.Tech in Structural Engineering</li>
                            </ul>
                            <div className="mt-6">
                                <h5 className="font-bold text-gray-800 mb-2">Program Overview</h5>
                                <p className="text-gray-600">
                                    This program is designed to provide in-depth knowledge in structural mechanics, finite element analysis, structural dynamics, and design of advanced concrete and steel structures.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'laboratory':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Laboratories</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h4 className="text-lg font-bold text-gray-800 mb-2">Structural Engineering Lab</h4>
                                <p className="text-gray-600">Facilities for testing concrete, steel, and other structural materials. Equipped with Universal Testing Machines and Loading Frames.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h4 className="text-lg font-bold text-gray-800 mb-2">Computational Lab</h4>
                                <p className="text-gray-600">Equipped with high-end workstations and software like STAAD.Pro, Etabs, and ANSYS for structural analysis and simulation.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h4 className="text-lg font-bold text-gray-800 mb-2">Concrete Technology Lab</h4>
                                <p className="text-gray-600">Advanced equipment for testing fresh and hardened concrete properties, including non-destructive testing.</p>
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
                                    <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-gray-100 bg-gray-100">
                                        <img
                                            src={f.img}
                                            alt={f.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(f.name) + '&background=random' }}
                                        />
                                    </div>
                                    <h4 className="font-bold text-lg text-gray-800">{f.name}</h4>
                                    <p className="text-cu-blue font-medium text-sm">{f.role}</p>
                                    {f.qualification && <p className="text-gray-500 text-xs mt-1">{f.qualification}</p>}
                                    {f.interest && <p className="text-gray-500 text-xs mt-1">Area: {f.interest}</p>}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            case 'research':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Research & Development</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Research Areas</h4>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li>Concrete Technology</li>
                                <li>Structural Analysis and Design</li>
                                <li>Earthquake Engineering</li>
                                <li>Sustainable Construction Materials</li>
                            </ul>
                        </div>
                    </motion.div>
                );
            case 'academics':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Academics & Learning Resources</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-8">
                            <div>
                                <h4 className="text-xl font-bold text-gray-800 mb-4">Curriculum Highlights</h4>
                                <p className="text-gray-600 mb-4">
                                    The curriculum is designed to equip students with a strong foundation in structural analysis, design, and computational methods, aligned with VTU's updated schemes.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h5 className="font-bold text-gray-800 mb-3 border-b pb-2">Core Subjects</h5>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                                        <li>Computational Structural Mechanics</li>
                                        <li>Advanced Design of RCC Structures</li>
                                        <li>Matrix Methods of Structural Analysis</li>
                                        <li>Mechanics of Deformable Bodies</li>
                                        <li>Structural Dynamics</li>
                                        <li>Finite Element Method of Analysis</li>
                                        <li>Advanced Design of Steel Structures</li>
                                        <li>Earthquake Resistant Structures</li>
                                        <li>Research Methodology and IPR</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-800 mb-3 border-b pb-2">Elective Subjects</h5>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                                        <li>Design of Industrial Structures (RCC & Steel)</li>
                                        <li>Cold Formed Light Gauge Steel Structures</li>
                                        <li>Repair and Rehabilitation of Structures</li>
                                        <li>Reliability Analysis of Structures</li>
                                        <li>Design of Tall Structures</li>
                                        <li>Masonry Structures</li>
                                        <li>Design of Concrete Bridges</li>
                                        <li>Special Concretes</li>
                                        <li>Stability Analysis of Structures</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h5 className="font-bold text-gray-800 mb-3">Learning Resources</h5>
                                <p className="text-gray-600">
                                    Students have access to a dedicated departmental library with a rich collection of textbooks, reference books, and journals in the field of Structural Engineering. Access to e-journals and digital library facilities is also provided.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                );
            default:
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">{sidebarItems.find(i => i.id === activeTab)?.label}</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <p className="text-gray-600">Information for this section will be updated shortly.</p>
                        </div>
                    </motion.div>
                );
        }
    };
    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-1/4 flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-28">
                            <div className="p-6 bg-cu-blue text-white">
                                <h2 className="text-xl font-bold">Departments</h2>
                                <p className="text-blue-100 text-sm mt-1">M.Tech (Structure)</p>
                            </div>
                            <nav className="p-2">
                                {sidebarItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveTab(item.id)}
                                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 mb-1 flex items-center justify-between ${activeTab === item.id ? 'bg-blue-50 text-cu-blue shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/4">
                        <AnimatePresence mode="wait">
                            <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                {renderContent()}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MTechStructuralEngineering;
