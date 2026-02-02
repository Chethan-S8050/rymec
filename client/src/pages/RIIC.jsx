import React from 'react';
import { motion } from 'framer-motion';

// Import local images
import riicImg1 from '../assets/images/riic/riic_img1.png';
import riicImg2 from '../assets/images/riic/riic_img2.png';

const RIIC = () => {
    const objectives = [
        "To develop innovative /Entrepreneurial/Startup mindset by providing facilities to conduct series of activities at Institute level.",
        "To Transform ideas into products which meets societal and rural issues.",
        "To promote critical /design thinking and to create Vibrant startup Ecosystem",
        "To prepare the institute for ATAL ranking of Institutions on innovation achievement framework and National institute Ranking Framework."
    ];

    const goals = [
        "To provide a minimal seed money to encourage Startup Company.",
        "To provide academic platform to exchange innovative practices",
        "To catalyze and promote development of Innovative driven Enterprises.",
        "To promote Innovative Driven product marketing and Research",
        "To adapt aggressive reforms to meet challenging needs of innovation."
    ];

    const members = [
        { sl: 1, name: "Dr. T. Hanumantha Reddy, Principal, RYMEC", role: "Head of the institution" },
        { sl: 2, name: "Dr. Kori Nagaraj, HOD, Department of Mechanical, RYMEC", role: "President" },
        { sl: 3, name: "Dr. N. Nagaraj, Professor, Department of Physics, RYMEC", role: "Vice- President" },
        { sl: 4, name: "Dr. Kotresh, HOD, Department of EEE, RYMEC", role: "Convener" },
        { sl: 5, name: "Dr. Balakrishna, Dean, Raja Rajeshwari Engg. College, Bangalore", role: "External Member" },
        { sl: 6, name: "Rajeswari R P, Assistant Professor, CSE, RYMEC", role: "ARIIA Coordinator" },
        { sl: 7, name: "Dr. Chidananda H, Associate Professor, CSE, RYMEC", role: "IPR activity Coordinator" },
        { sl: 8, name: "Dr. Prabhavathi S, Professor, ECE, RYMEC", role: "NIRF Coordinator" },
        { sl: 9, name: "Srisaila, Professor, CIVIL Dept, RYMEC", role: "Startup policy Coordinator" },
        { sl: 10, name: "Shivakumar V, Assistant Professor, CSE, RYMEC", role: "Internship activity Coordinator" },
        { sl: 11, name: "SwethaRamana V, Assistant Professor, CSE, RYMEC", role: "Internship activity Coordinator" },
        { sl: 12, name: "K. M. Shivaprasad, Assistant Professor, CSE, RYMEC", role: "Social media Coordinator" },
        { sl: 13, name: "Dr. veerabadrappa Algur, Professor, Mechanical, RYMEC", role: "Faculty member" },
        { sl: 14, name: "Dr. Shobha, Professor, CIVIL Dept, RYMEC", role: "Faculty member" },
        { sl: 15, name: "B. Kumuda, Assistant Professor, EEE, RYMEC", role: "Faculty member" },
        { sl: 16, name: "Manjula Patil, Assistant Professor, ISE, RYMEC", role: "Faculty member" },
        { sl: 17, name: "Khaja Moinuddin, Assistant Professor, ECE, RYMEC", role: "Faculty member" },
        { sl: 18, name: "Pavani, VIIthsem, CSE (student)", role: "Student member" },
        { sl: 19, name: "Ankitha N G, VIIthsem, ECE (student)", role: "Student member" },
        { sl: 20, name: "Aishwarya V M, VIIthsem, EEE (student)", role: "Student member" },
        { sl: 21, name: "B K Santosh, VIIthsem Mech (student)", role: "Student member" },
        { sl: 22, name: "Sushma Gattina, VIIthsem Civil (student)", role: "Student member" },
        { sl: 23, name: "Yamini Priya, VIIthsem, ISE (student)", role: "Student member" }
    ];

    return (
        <div className="min-h-screen pt-20 pb-10 bg-gray-50">
            {/* Header */}
            <div className="bg-cu-blue text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold font-display mb-4"
                    >
                        Institution Innovation Council (RIIC)
                    </motion.h1>
                    <div className="w-24 h-1 bg-cu-gold mx-auto rounded-full"></div>
                    <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto italic">
                        Established: 2021
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 md:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content Column */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Intro Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                        >
                            <img src={riicImg1} alt="RIIC Building/Lab" className="w-full h-auto rounded-xl" />
                        </motion.div>

                        <div className="prose max-w-none">
                            <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-cu-gold pl-4 mb-8">
                                Rao Bahadur Y Mahabaleswarappa Engineering College Institution Innovation Council(RIIC)
                            </h2>
                        </div>

                        {/* Objectives & Goals */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
                            >
                                <h3 className="text-2xl font-bold text-cu-blue mb-6 border-b pb-4">Objectives of RIIC</h3>
                                <ul className="space-y-4">
                                    {objectives.map((obj, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-600">
                                            <span className="w-2 h-2 rounded-full bg-cu-gold mt-2 flex-shrink-0"></span>
                                            <span>{obj}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
                            >
                                <h3 className="text-2xl font-bold text-cu-blue mb-6 border-b pb-4">Goals of RIIC</h3>
                                <ul className="space-y-4">
                                    {goals.map((goal, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-600">
                                            <span className="w-2 h-2 rounded-full bg-cu-gold mt-2 flex-shrink-0"></span>
                                            <span>{goal}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* Middle Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                        >
                            <img src={riicImg2} alt="RIIC Activities" className="w-full h-auto rounded-xl" />
                            <div className="mt-4 text-center">
                                <a href="#" className="text-cu-blue font-bold hover:text-cu-gold transition-colors underline">Click here for more details</a>
                            </div>
                        </motion.div>

                        {/* Members Table */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                        >
                            <div className="p-8 border-b">
                                <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-cu-gold pl-4">IIC Members</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-gray-50 border-b">
                                            <th className="px-6 py-4 font-bold text-gray-800">Sl. No.</th>
                                            <th className="px-6 py-4 font-bold text-gray-800">Name of the Member</th>
                                            <th className="px-6 py-4 font-bold text-gray-800">Key Role/Position assigned in IIC</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {members.map((member) => (
                                            <tr key={member.sl} className="hover:bg-blue-50/30 transition-colors">
                                                <td className="px-6 py-4 text-gray-600">{member.sl}</td>
                                                <td className="px-6 py-4 text-gray-800 font-medium">{member.name}</td>
                                                <td className="px-6 py-4 text-cu-blue font-semibold">{member.role}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Video Widget */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h4 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">Introduction Video</h4>
                            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/LvCaovzU9OY"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        {/* Quick Links / Facilities */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h4 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">Related Facilities</h4>
                            <ul className="space-y-3">
                                {[
                                    { name: "RIIC", href: "/riic", active: true },
                                    { name: "NAIN", href: "/nain" },
                                    { name: "Entrepreneurship Development Cell", href: "/edc" },
                                    { name: "ICT", href: "/ict" },
                                    { name: "Sports", href: "/sports" },
                                    { name: "Auditorium", href: "/auditorium" }
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={item.href}
                                            className={`block p-3 rounded-lg font-medium transition-all ${item.active
                                                    ? "bg-cu-blue text-white shadow-md"
                                                    : "text-gray-600 hover:bg-gray-50 hover:text-cu-blue"
                                                }`}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RIIC;
