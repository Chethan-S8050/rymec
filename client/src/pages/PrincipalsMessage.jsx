import React from 'react';
import { motion } from 'framer-motion';

const PrincipalsMessage = () => {
    return (
        <div className="min-h-screen pt-20 pb-10 bg-gray-50">
            {/* Header */}
            <div className="bg-cu-blue text-white py-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold font-display mb-4"
                    >
                        Principal's Message
                    </motion.h1>
                    <div className="w-20 h-1 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 py-12 max-w-5xl">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                    {/* Vision / Intro */}
                    <div className="border-l-4 border-cu-gold pl-6 mb-8 italic text-lg text-gray-700 bg-gray-50 p-6 rounded-r-lg">
                        <p className="mb-4">"It is committed to provide quality Technical Education to all student stakeholders. RYMEC should become venue for quality education & research. It is our strong endower to make RYMEC as Autonomous Institution as early as possible. RYMEC follows V.V. Sangha adage of providing quality education at affordable fees.</p>
                        <p>It is commitment towards society and sustainable development. RYMEC follows message as 'work is worship'."</p>
                    </div>

                    <h2 className="text-3xl font-bold text-cu-blue mb-2">Dr. Rajasekaran Shanmugam</h2>
                    <p className="text-sm font-semibold text-cu-gold uppercase tracking-wider mb-6">Principal, RYMEC</p>

                    <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
                        <p>
                            Dr. Rajasekaran Shanmugam received an M.E. (Production/Robotics) and Ph.D. (Production/Robotics) (1995) (IIT-Bombay) in a full-time program from state and central Government institutions. He possesses a solid research background, complemented by significant senior leadership and management experience, which enables him to inspire and engage those around me.
                        </p>
                        <p>
                            He is an excellent communicator with 30 years of an exceptional research reputation and profile, following his Full-Time Ph.D. in Pulsed Current GMA Robotic Welding/Manufacturing Engineering with a unique combination of robotics, electrical, electronic, mechanical, and computer engineering from the prestigious Indian Institute of Technology, Bombay, India, in 1995. IIT-Bombay Ranked Third in the Indian-National Institutional Framework (NIRF) Ranking in 2025 and ranked 129 in the QS World University Rankings 2026 with an overall Score of 64.8.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-10">
                        {/* Responsibilities */}
                        <div>
                            <h3 className="text-xl font-bold text-cu-blue mb-4 border-b border-gray-100 pb-2">Key Responsibilities</h3>
                            <ul className="space-y-3 text-gray-700 list-none">
                                <li className="flex gap-3">
                                    <span className="text-cu-gold mt-1">➤</span>
                                    <span>Motivate students and faculty members towards skills, knowledge improvement, and research to equip them with today’s innovative technologies, student internships, projects, and training, and build a solid professional research network.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cu-gold mt-1">➤</span>
                                    <span>Foster a culture of high-quality/impactful research and interdisciplinary collaboration.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cu-gold mt-1">➤</span>
                                    <span>Build strong research/industry and academic linkages to enhance experiential learning, placements, and funded research.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cu-gold mt-1">➤</span>
                                    <span>Oversee budgeting, resource allocation, and infrastructure development for the Institution.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cu-gold mt-1">➤</span>
                                    <span>Proven record of research leadership/publications, and successful collaborations.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cu-gold mt-1">➤</span>
                                    <span>Visionary research leadership with excellent communication, team-building</span>
                                </li>
                            </ul>
                        </div>

                        {/* Skills */}
                        <div>
                            <h3 className="text-xl font-bold text-cu-blue mb-4 border-b border-gray-100 pb-2">Skills</h3>
                            <ul className="space-y-3 text-gray-700 list-none">
                                <li className="flex gap-3">
                                    <span className="text-cu-gold mt-1">✔</span>
                                    <span>Provide leadership, advocacy for, and management of research activities to deliver against the Institution’s strategic ambitions.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cu-gold mt-1">✔</span>
                                    <span>Develop and oversee the implementation of the Institution’s research strategy, providing dynamic intellectual leadership and management for a diverse Institution with an international outlook.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cu-gold mt-1">✔</span>
                                    <span>Lead continuous improvement in the quality and impact of the Institution’s research outputs and build effective relationships with the Institution’s colleagues and peer organizations across the globe.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cu-gold mt-1">✔</span>
                                    <span>Ability to think broadly and strategically, challenge convention, push boundaries, and work innovatively to enhance the international reputation of the Institution.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="mt-12 bg-blue-50/50 p-6 rounded-xl border border-blue-50">
                        <h3 className="text-xl font-bold text-cu-blue mb-4">Professional Achievements & Statistics</h3>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                He has proven experience managing change and navigating complex challenges in research and a strong track record in strategic planning and implementing research programs. He also has excellent communication and interpersonal skills.
                            </p>
                            <p>
                                He developed robotic welding and cutting technology in the USA for The ESAB Group Inc, USA, and received US$ 30,000. A Non-disclosure agreement is signed for this project.
                                Since 1994, he visited the USA 16 times for his postdoctoral research at various American industries, organizations, and universities and research paper presentations and publications.
                            </p>
                            <p>
                                His recent employment was with AJEENKYA D Y PATIL UNIVERSITY, THE INNOVATION UNIVERSITY, Pune, Maharashtra, India, as the Dean of Research for eight schools, including Architecture, Design, Engineering, Film and media, Hotel Management, Law, Liberal Arts, and Management.
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                                    <div className="text-3xl font-bold text-cu-gold mb-1">50</div>
                                    <div className="text-xs text-gray-500 font-bold uppercase">Papers Published</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                                    <div className="text-3xl font-bold text-cu-gold mb-1">26</div>
                                    <div className="text-xs text-gray-500 font-bold uppercase">Patents (India)</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                                    <div className="text-3xl font-bold text-cu-gold mb-1">02</div>
                                    <div className="text-xs text-gray-500 font-bold uppercase">Patents (UK)</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                                    <div className="text-3xl font-bold text-cu-gold mb-1">08</div>
                                    <div className="text-xs text-gray-500 font-bold uppercase">Books Published</div>
                                </div>
                            </div>

                            <ul className="mt-6 grid md:grid-cols-2 gap-3 list-disc list-inside text-sm font-medium text-gray-600">
                                <li>4 Book Chapters Published</li>
                                <li>Edited 2 Books</li>
                                <li>Conducted Several FDPs</li>
                                <li>8 Conference Papers</li>
                                <li>1 Copyright Obtained</li>
                                <li>46.6 Lacs Grant Approved (3 Projects)</li>
                                <li>8.52 Crores Grant Awaiting Approval</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PrincipalsMessage;
