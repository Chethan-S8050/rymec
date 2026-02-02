import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Award,
    Trophy,
    CheckCircle2,
    Target,
    Users,
    BookOpen,
    FlaskConical
} from 'lucide-react';

const ChemistryDepartment = () => {
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
        { name: "Dr. Kottureshwara N M", role: "Associate Professor & HOD", img: "/assets/images/chemistry/kottureshwara.jpg" },
        { name: "Mrs. M. Jayashree", role: "Assistant Professor", img: "/assets/images/chemistry/jayashree.jpg" },
        { name: "Dr. Chandana Y", role: "Assistant Professor", img: "/assets/images/chemistry/chandana.jpg" },
        { name: "Ms. Annapurna B", role: "Assistant Professor", img: "/assets/images/chemistry/annapurna.jpg" },
        { name: "Mr. Giri Prakash R", role: "Assistant Professor", img: "/assets/images/chemistry/giri_prakash.jpg" },
        { name: "Mr. M. Suresh", role: "Assistant Professor", img: "/assets/images/chemistry/suresh.jpg" }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-full md:w-1/3 flex-shrink-0">
                                <img
                                    src="/assets/images/chemistry/hod.jpg"
                                    alt="HOD"
                                    className="w-full h-auto rounded-lg shadow-md object-cover"
                                />
                                <div className="mt-4 text-center">
                                    <h3 className="font-bold text-lg text-cu-blue">Dr. Kottureshwara N M</h3>
                                    <p className="text-gray-600">Associate Professor & Head</p>
                                </div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-2xl font-bold text-cu-blue mb-4">About the Department</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    The Department of Chemistry exists from the day of the inception of the College.
                                    The Department is blessed with highly experienced and enthusiastic faculty with expertise in chemistry. Two of the four faculty members of the department are Ph.D. holders. The faculty of the department has published more than 15 papers in International and National journals and presented many papers in National conferences. The Chemistry laboratory is well equipped to perform the experiments as per the curriculum. It is a supporting department to the basic requirements of chemistry in engineering. To develop high quality technical personnel with inputs in chemistry along with emphasis on an overall development of the student.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
                                <h3 className="text-xl font-bold text-cu-blue mb-4">Vision</h3>
                                <p className="text-gray-700 italic">
                                    "To be a centre of excellence in teaching and research in chemical sciences."
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
                                <h3 className="text-xl font-bold text-cu-blue mb-4">Mission</h3>
                                <p className="text-gray-700">
                                    To provide quality education in chemistry and foster a scientific temper among students.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'programmes':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Programmes</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <ul className="space-y-4">
                                <li>
                                    <a href="https://drive.google.com/file/d/1tvWMNWDy7gpI6RAyMuFHPNm0qnnZffvJ/view" target="_blank" className="flex items-center text-lg text-cu-blue hover:underline">
                                        <span className="mr-2">📄</span> Chemistry Theory Syllabus
                                    </a>
                                </li>
                                <li>
                                    <a href="https://drive.google.com/file/d/1OIJbZmfgD-b-AqBXsTlp-iWXqzKQG3Gj/view" target="_blank" className="flex items-center text-lg text-cu-blue hover:underline">
                                        <span className="mr-2">📄</span> Chemistry Lab Syllabus
                                    </a>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <h4 className="text-xl font-bold text-gray-800 mb-4">Research Program</h4>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>Ph.D in Chemistry</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'academics':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Academics & Learning Resources</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="flex items-center text-gray-600 hover:text-cu-blue">
                                        <span className="mr-2">📅</span> Academic Timetable (Coming Soon)
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-gray-600 hover:text-cu-blue">
                                        <span className="mr-2">📊</span> CO's and PO's (Coming Soon)
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                );
            case 'laboratory':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Laboratories</h3>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-lg font-bold text-gray-800 mb-4">Lab Resources</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="https://drive.google.com/file/d/137FulS4uI7O_uZWZG6TTeG6F44zRTYKo/view?usp=sharing" target="_blank" className="flex items-center text-cu-blue hover:underline">
                                        <span className="mr-2">📘</span> Chemistry Lab Record
                                    </a>
                                </li>
                            </ul>
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
                                            <p className="font-semibold text-gray-800">Appraisal of ground water quality of Hospet Taluk, Karnataka, India-Cat ion An ion and multivariate Techniques</p>
                                            <p className="text-sm text-gray-600 mt-2">Author/s: N M Kottureshwara, T Suresh, M Jayashree, Manjappa, S.And Suresh B</p>
                                            <p className="text-sm text-gray-600">Journal: World Wide Journal of Multidisciplinary Research and Development</p>
                                            <a href="https://wwjmrd.com/" target="_blank" className="inline-block mt-2 text-red-500 font-medium hover:underline">Link</a>
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
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-4">2017-18</h4>
                                    <div className="space-y-4">
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <p className="font-semibold text-gray-800">Appraisal of ground water characteristics and water quality index of rich Iron mineral city, Karnataka State, India</p>
                                            <p className="text-sm text-gray-600 mt-2">Author/s: N M Kottureshwara, T Suresh, S.Manjappa, Jayashree M, Sunitha R.M</p>
                                            <p className="text-sm text-gray-600">Journal: International Journal of Innovative Research in Advanced Engineering</p>
                                            <a href="https://www.ijirae.com/" target="_blank" className="inline-block mt-2 text-red-500 font-medium hover:underline">Link</a>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <p className="font-semibold text-gray-800">Investigation of ground water quality in selected areas of Huvinahadagali taluk in Ballari district, Karnataka</p>
                                            <p className="text-sm text-gray-600 mt-2">Author/s: Kottureshwara N M, Suresh T, Jayashree M, Sunitha R.M</p>
                                            <p className="text-sm text-gray-600">Journal: International Journal of Innovative Science, Engineering and Technology</p>
                                            <a href="https://ijiset.com/" target="_blank" className="inline-block mt-2 text-red-500 font-medium hover:underline">Link</a>
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
                                        { name: "Research Excellence", ach: "Faculty members have published 15+ papers in International and National journals." },
                                        { name: "Conference Presentations", ach: "Regular participation and paper presentations in National conferences." },
                                        { name: "Ph.D. Holders", ach: "The department is led by highly qualified Ph.D. faculty members." }
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
                                        "Strong foundation provided to all first-year engineering students.",
                                        "Consistently high pass percentages in Engineering Chemistry.",
                                        "Active participation in campus-wide technical and cultural events."
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
                                <FlaskConical className="w-48 h-48" />
                            </div>
                            <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-6 italic text-cu-gold">Department Stats</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { label: "Faculty", value: "06" },
                                            { label: "Ph.Ds", value: "02" },
                                            { label: "Publications", value: "15+" },
                                            { label: "Experience", value: "Rich" }
                                        ].map((stat, i) => (
                                            <div key={i} className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                                                <p className="text-2xl font-bold text-cu-gold italic">{stat.value}</p>
                                                <p className="text-[10px] text-blue-100/60 font-bold uppercase tracking-widest italic">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="md:w-1/3 p-6 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-sm">
                                    <h4 className="text-cu-gold font-bold mb-3 italic">Analytical Focus</h4>
                                    <p className="text-sm text-blue-100/80 italic leading-relaxed">
                                        The department emphasizes the fundamentals of chemical sciences essential for modern engineering applications.
                                    </p>
                                </div>
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
                                <p className="text-blue-100 text-sm mt-1">Chemistry</p>
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

export default ChemistryDepartment;
