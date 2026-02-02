import React from 'react';
import { motion } from 'framer-motion';
import rdImg1 from '../assets/images/research/rd_image1.png';
import rdImg2 from '../assets/images/research/rd_image2.jpg';

const AboutRD = () => {
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
                        About R&D
                    </motion.h1>
                    <div className="w-20 h-1 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 py-12 max-w-4xl">
                <div className="space-y-8">

                    {/* Intro */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-cu-gold pl-4">
                            Research & Development Cell Activities
                        </h2>
                        <div className="prose text-gray-600 leading-relaxed text-justify">
                            <p className="mb-4">
                                Research & Development Cell (R&D Cell) is an eminent wing of academics to churn out the various technological solutions for the betterment of quality of life. It encourages and facilitates the environment to undertake sponsored and consultancy projects by its research team.
                            </p>
                            <p className="mb-4">
                                R&D Cell intends to have collaborative research programmes in association with top research institutes in India and abroad. An interdisciplinary approach is also encouraged to involve different research and consultancy activities for the Industries, throughout the academic year. Research activities by various departments and centres of excellence of the Institution will be enthused by the R&D Cell periodically.
                            </p>
                        </div>
                        <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-center">
                            <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 max-w-sm">
                                <img src={rdImg1} alt="R&D Activity 1" className="w-full h-auto" />
                            </div>
                            <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 max-w-sm">
                                <img src={rdImg2} alt="R&D Activity 2" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>

                    {/* Functionalities */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-cu-gold pl-4">
                            Functionalities of Research & Development Cell
                        </h2>
                        <ul className="list-disc pl-5 space-y-3 text-gray-600 leading-relaxed">
                            <li>To identify the potential areas of research in various disciplines of engineering and form the faculty into various clusters based on their specialization.</li>
                            <li>To prepare and submit research proposals for funding agencies like AICTE, UGC, DST, NAIN, etc.</li>
                            <li>To encourage faculty members to carryout multi-disciplinary/collaborative research activities within the institute and as well as with other external organizations.</li>
                            <li>Encourages the faculty members to attend / publish papers in various National / International conferences of their specialized areas.</li>
                            <li>To coordinate the research activities among the various departments of the institute.</li>
                            <li>Encourages the faculty members to attend various research oriented Faculty development programmes.</li>
                            <li>Encourage and motivate the staff to apply for Ph.D. at various Universities.</li>
                            <li>To encourage all the researchers/scholars to publish their research work in International Peer Reviewed & Refereed Journals indexed in Web of Science and Scopus lists.</li>
                            <li>To plan for resource mobilization through industry interaction, consultancy and Extramural Research (EMR) funding scheme.</li>
                            <li>Scrutinize the Students / Faculties project proposals and recommend the suitable projects to various funding agencies for financial support.</li>
                        </ul>
                    </div>

                    {/* Leadership Team */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Dean Profile */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center">
                            <div className="w-40 h-40 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden mb-6 border-2 border-cu-gold/20">
                                <img src={rdImg1} alt="Dr. H. Yerrannagoudaru" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. H. Yerrannagoudaru</h3>
                                <p className="text-cu-blue font-medium mb-4">Dean – R&D Cell</p>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <p>Professor & PG Coordinator</p>
                                    <p>Mechanical Engineering</p>
                                    <p className="flex items-center justify-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        9844575796
                                    </p>
                                    <p className="flex items-center justify-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <a href="mailto:hiregoudar.yng@gmail.com" className="hover:text-cu-blue transition-colors">hiregoudar.yng@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Convener Profile */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center">
                            <div className="w-40 h-40 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden mb-6 border-2 border-cu-gold/20">
                                <img src={rdImg2} alt="Dr. Pampapathi B M" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. Pampapathi B M</h3>
                                <p className="text-cu-blue font-medium mb-4">Convener – R&D Cell</p>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <p>Associate Professor</p>
                                    <p>Department of CSE</p>
                                    <p className="flex items-center justify-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        9844575796
                                    </p>
                                    <p className="flex items-center justify-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <a href="mailto:bm.pampapathi7@gmail.com" className="hover:text-cu-blue transition-colors">bm.pampapathi7@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutRD;
