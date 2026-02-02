import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Award,
    Trophy,
    CheckCircle2,
    Target,
    Users,
    BookOpen,
    Search,
    Layers
} from 'lucide-react';

const MathematicsDepartment = () => {
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
        { name: "Dr. Sumangala B", role: "Professor & HOD", img: "/assets/images/math/staff_group.png" }, // Placeholder updated to group photo for safety
        { name: "Dr. B. Veeresh", role: "Associate Professor", img: "/assets/images/math/veeresh.png" },
        { name: "Dr. P. Shaikshavali", role: "Associate Professor", img: "/assets/images/math/shaikshavali.png" },
        { name: "Mr. H.M. Manjunath", role: "Assistant Professor", img: "/assets/images/math/manjunath.jpg" },
        { name: "Mr. K. Sangameshwar", role: "Assistant Professor", img: "/assets/images/math/sangameshwar.png" },
        { name: "Mrs. A. Sivamma", role: "Assistant Professor", img: "/assets/images/math/sivamma.png" },
        { name: "Mr. Prabhakar Meti", role: "Assistant Professor", img: "/assets/images/math/prabakar.jpg" },
        { name: "Mrs. Ambika G M", role: "Assistant Professor", img: "/assets/images/math/ambika.png" },
        { name: "Mrs. Gangamma G", role: "Assistant Professor", img: "/assets/images/math/gangamma.png" },
        { name: "Mr. Megalamane Manikanta", role: "Assistant Professor", img: "/assets/images/math/manikanta.jpg" },
        { name: "Ms. Anjali", role: "Assistant Professor", img: "/assets/images/math/anjali.jpg" }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-full md:w-1/3 flex-shrink-0">
                                <img
                                    src="/assets/images/math/staff_group.png"
                                    alt="HOD"
                                    className="w-full h-auto rounded-lg shadow-md object-cover"
                                />
                                <div className="mt-4 text-center">
                                    <h3 className="font-bold text-lg text-cu-blue">Dr. Sumangala B</h3>
                                    <p className="text-gray-600">Professor & Head</p>
                                </div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-2xl font-bold text-cu-blue mb-4">About the Department</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Department of Mathematics aims to enhance the knowledge and skill of the student in Mathematics by grooming the students in solving application oriented problems using analytic methods and also modern tools.
                                </p>
                                <h3 className="text-2xl font-bold text-cu-blue mb-4">HOD Message</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    The purpose of Mathematics in Engineering study is to lay a strong foundation in the various area of Mathematics in the minds of learners so that they can proceed to rest of their years of study with update knowledge and Engineering Mathematics skills. The teaching comprises lectures and tutorials. The methodology adopted in the classroom teaching is based on the application of innovative strategies, comprehensive lectures, regular assignments and interaction between teachers and students.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
                                <h3 className="text-xl font-bold text-cu-blue mb-4">Vision</h3>
                                <p className="text-gray-700 italic">
                                    "To mold the students to have strong mathematical logic and problem-solving skills."
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
                                <h3 className="text-xl font-bold text-cu-blue mb-4">Mission</h3>
                                <p className="text-gray-700">
                                    To provide excellent teaching and learning environment to master mathematical concepts.
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
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Research Program</h4>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                                <li>Ph.D in Mathematics</li>
                            </ul>
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Academic Scheme & Syllabus</h4>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left text-gray-500">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3">Year</th>
                                            <th className="px-6 py-3">ODD Sem</th>
                                            <th className="px-6 py-3">EVEN Sem</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b">
                                            <td className="px-6 py-4 font-medium text-gray-900">1</td>
                                            <td className="px-6 py-4"><a href="/assets/documents/math/18MAT11.pdf" target="_blank" className="text-cu-blue hover:underline">Calculus and Linear Algebra (18MAT11)</a></td>
                                            <td className="px-6 py-4"><a href="/assets/documents/math/18MAT21.pdf" target="_blank" className="text-cu-blue hover:underline">Advanced Calculus and Numerical Methods (18MAT21)</a></td>
                                        </tr>
                                        <tr className="bg-white border-b">
                                            <td className="px-6 py-4 font-medium text-gray-900">2</td>
                                            <td className="px-6 py-4">
                                                <a href="/assets/documents/math/18MAT31.pdf" target="_blank" className="text-cu-blue hover:underline block">Transform Calculus (18MAT31)</a>
                                                <a href="/assets/documents/math/18MATDIP31.pdf" target="_blank" className="text-cu-blue hover:underline block mt-2">Additional Mathematics-I (18MATDIP31)</a>
                                            </td>
                                            <td className="px-6 py-4">
                                                <a href="/assets/documents/math/18MAT41.pdf" target="_blank" className="text-cu-blue hover:underline block">Complex Analysis (18MAT41)</a>
                                                <a href="/assets/documents/math/18MATDIP41.pdf" target="_blank" className="text-cu-blue hover:underline block mt-2">Additional Mathematics-II (18MATDIP41)</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Scheme and Syllabus</h4>
                            <table className="w-full border-collapse border border-gray-200">
                                <tbody>
                                    <tr>
                                        <th className="border border-gray-200 p-3 text-left w-1/3 bg-gray-50">Scheme and Syllabus</th>
                                        <td className="border border-gray-200 p-3">
                                            <a href="https://rymec.edu.in/wp-content/uploads/2023/06/2MATS11set1.pdf" target="_blank" className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700 transition-colors">
                                                <span className="mr-2">⬇️</span> Download
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                );
            case 'publications':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Publications</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-4">2021-22</h4>
                                    <div className="space-y-4">
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <p className="font-semibold text-gray-800">MHD FREE CONVECTIVE AND VISCOUS DISSIPATIVE FLOW WITH TEMEPRARUTE AND CONCENTRATION DEPENDENT GRADIENT PAST A POROUS STRETCHING SHEET WITH THRMAL DIFFUSION</p>
                                            <p className="text-sm text-gray-600 mt-2">Author: J Phakirappa</p>
                                            <p className="text-sm text-gray-600">Journal: COMPLEX SYSTEMS AND COMPLEXITY SCIENCE JOURNAL</p>
                                            <a href="https://www.scimagojr.com/" target="_blank" className="inline-block mt-2 text-red-500 font-medium hover:underline">Link</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-4">2020-21</h4>
                                    <div className="space-y-4">
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <p className="font-semibold text-gray-800">Save the Diesel during idling run over of locomotive using in industries</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-4">2019-20</h4>
                                    <div className="space-y-4">
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <p className="font-semibold text-gray-800">Smart Power Source Selector using GSM</p>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <p className="font-semibold text-gray-800">MHD FREE CONVECTIVE AND VISCOUS DISSIPATIVE FLOW WITH TEMEPRARUTE AND CONCENTRATION DEPENDENT GRADIENT PAST A POROUS STRETCHING SHEET WITH THRMAL DIFFUSION</p>
                                            <p className="text-sm text-gray-600 mt-2">Author: J Phakirappa</p>
                                            <p className="text-sm text-gray-600">Journal: COMPLEX SYSTEMS AND COMPLEXITY SCIENCE JOURNAL</p>
                                            <a href="https://www.scimagojr.com/" target="_blank" className="inline-block mt-2 text-red-500 font-medium hover:underline">Link</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-4">2017-18</h4>
                                    <div className="space-y-4">
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <p className="font-semibold text-gray-800">Wavelet Full-Approximation Scheme for the Numerical Solution of Nonlinear Fredholm- Hammerstein Integral Equations</p>
                                            <p className="text-sm text-gray-600 mt-2">Author: Dr B Veeresh</p>
                                            <p className="text-sm text-gray-600">Journal: International Journal of Computational and Applied Mathematics</p>
                                            <a href="http://www.ripublication.com/" target="_blank" className="inline-block mt-2 text-red-500 font-medium hover:underline">Link</a>
                                        </div>
                                    </div>
                                </div>
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
                                        { name: "Dr. Sumangala B (HOD)", ach: "Providing strong leadership and academic excellence in engineering mathematics." },
                                        { name: "Research Publications", ach: "Faculty members like J Phakirappa and Dr B Veeresh publishing in international journals." },
                                        { name: "Doctoral Guidance", ach: "Experienced Ph.D faculty guiding students in advanced mathematical research." }
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
                                <h3 className="text-2xl font-bold text-cu-blue mb-6 italic">Academic Highlights</h3>
                                <div className="space-y-4">
                                    {[
                                        "Consistently strong mathematical foundation provided to all engineering streams.",
                                        "Successful implementation of interactive tutorial sessions and assignments.",
                                        "Active involvement of students in mathematics forum activities."
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
                                <Layers className="w-48 h-48" />
                            </div>
                            <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-6 italic text-cu-gold">Department Overview</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { label: "Faculty", value: "11" },
                                            { label: "Ph.Ds", value: "03" },
                                            { label: "Research Center", value: "Active" },
                                            { label: "Impact", value: "High" }
                                        ].map((stat, i) => (
                                            <div key={i} className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                                                <p className="text-2xl font-bold text-cu-gold italic">{stat.value}</p>
                                                <p className="text-[10px] text-blue-100/60 font-bold uppercase tracking-widest italic">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="md:w-1/3 p-6 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-sm">
                                    <h4 className="text-cu-gold font-bold mb-3 italic">Analytical Logic</h4>
                                    <p className="text-sm text-blue-100/80 italic leading-relaxed">
                                        Our mission is to mold students with strong mathematical logic and analytical problem-solving skills.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            default:
                // Handle all other tabs including Laboratory, FDP, Placement etc. which are 'Coming Soon'
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">{sidebarItems.find(i => i.id === activeTab)?.label}</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <p className="text-gray-600">Coming Soon...</p>
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
                                <p className="text-blue-100 text-sm mt-1">Mathematics</p>
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

export default MathematicsDepartment;
