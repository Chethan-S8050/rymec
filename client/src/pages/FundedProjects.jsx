import React from 'react';
import { motion } from 'framer-motion';

const FundedProjects = () => {
    const projects = [
        {
            year: "2022-23",
            items: [
                { sl: 1, title: "Smart Craddle Using IOT", pi: "Dr. Girija Vani", dept: "ECE", amount: "5,000", duration: "1 Year", agency: "KSCST", type: "Government" }
            ]
        },
        {
            year: "2021-22",
            items: [
                { sl: 2, title: "Hardware Implementation of Network Intrusion Detection system using Artificial Intelligence", pi: "Dr. Phanindra Reddy", dept: "ECE", amount: "2 Lakhs", duration: "2 Years", agency: "KSCST", type: "Government" },
                { sl: 3, title: "A Novell Approach to improve retrieval system in CBIR for secured crime prevention and Defence Application", pi: "Dr. Savita Sonoli", dept: "ECE", amount: "8 Lakhs", duration: "2 Years", agency: "VTU", type: "Government" }
            ]
        },
        {
            year: "2020-21",
            items: [
                { sl: 4, title: "Establishment Of VLSI Lab Design Using Current Technology", pi: "Dr. Savita Sonoli", dept: "ECE", amount: "10 Lakhs", duration: "Ongoing", agency: "VGST", type: "Government" },
                { sl: 5, title: "Wireless Head Motion Controlled Smart Wheel Chair for Disabled Person", pi: "Dr. Savita Sonoli", dept: "ECE", amount: "3 Lakhs", duration: "Ongoing", agency: "NAIN", type: "Government" },
                { sl: 6, title: "Voice & Gesture controlled smart vehicle for physically challenged integrated with Home Automation", pi: "Dr. Prabhavathi", dept: "ECE", amount: "6,000", duration: "1 Year", agency: "KSCST", type: "Government" },
                { sl: 7, title: "TOI stereopticon for Rural E-learning Education system", pi: "Mr. Prashanth Keni", dept: "ECE", amount: "8,000", duration: "1 Year", agency: "KSCST", type: "Government" },
                { sl: 8, title: "Automatic EyeBall Controlled Assistive system for the differently Abled", pi: "Mrs. Suvarna Patil", dept: "ECE", amount: "6,000", duration: "1 Year", agency: "KSCST", type: "Government" },
                { sl: 9, title: "Design & Fabrication of Low Cost MEMS based listening device for hearing Impaired", pi: "Dr. Savita Sonoli", dept: "ECE", amount: "5,000", duration: "Ongoing", agency: "Government", type: "Government" },
                { sl: 10, title: "Microcontroller based Child Rescue system from open Bore Well using Robot", pi: "Dr. Prabhavathi", dept: "ECE", amount: "5,000", duration: "1 Year", agency: "VTU-INNOVATIVE PROJECTS", type: "Government" },
                { sl: 11, title: "Wireless Head motion controlled smart wheelchair for disabled person", pi: "Dr. Savita Sonoli", dept: "ECE", amount: "5,000", duration: "1 Year", agency: "VTU-AVISHKAR", type: "Government" },
                { sl: 12, title: "Design & Fabrication of Low Cost MEMS based listening device for hearing Impaired", pi: "Dr. Savita Sonoli", dept: "ECE", amount: "2,500", duration: "1 Year", agency: "KSTA", type: "Government" },
                { sl: 13, title: "Establishment Of VLSI Lab Design Using Current Technology", pi: "Dr. Savita Sonoli", dept: "ECE", amount: "2,00,000", duration: "1 Year", agency: "VGST", type: "Government" },
                { sl: 14, title: "Wireless Head Motion Controlled Smart Wheel Chair for Disabled Person", pi: "Dr. Savita Sonoli", dept: "ECE", amount: "3,00,000", duration: "1 Year", agency: "NAIN", type: "Government" },
                { sl: 15, title: "Wireless Head motion controlled smart wheelchair for disabled person", pi: "Dr. Savita Sonoli", dept: "ECE", amount: "5,000", duration: "1 Year", agency: "KSCST", type: "Government" },
                { sl: 16, title: "Establishment Of VLSI Lab Design Using Current Technology", pi: "Dr. Savita Sonoli", dept: "ECE", amount: "2,00,000", duration: "Ongoing (Phase 1 Completed)", agency: "KSTA", type: "Government" },
                { sl: 17, title: "Wireless Head Motion Controlled Smart Wheel Chair for Disabled Person", pi: "Dr. Savita Sonoli", dept: "ECE", amount: "3,00,000", duration: "Ongoing", agency: "KSTA", type: "Government" },
                { sl: 33, title: "Smart Electric cart for street vendors", pi: "Mr. Linganagouda R", dept: "ME", amount: "5,500", duration: "6 Months", agency: "KSCST", type: "Government" },
                { sl: 34, title: "Automated waste segregator", pi: "Mr. A. Sharanabasappa", dept: "ME", amount: "5,000", duration: "6 Months", agency: "KSCST", type: "Government" },
                { sl: 35, title: "IoT based Automatic Tank Cleaner for Drinking Water", pi: "Dr. UM Netravathi", dept: "ECE", amount: "1,00,000", duration: "1 Year", agency: "Unnat Bharat Abhiyan (UBA)", type: "Government" }
            ]
        },
        {
            year: "2019-20",
            items: [
                { sl: 18, title: "Establishment Of VLSI Lab Design Using Current Technology", pi: "Dr. Savita Sonoli", dept: "ECE", amount: "2,00,000", duration: "Ongoing", agency: "KSTA", type: "Government" },
                { sl: 19, title: "Wireless Head Motion Controlled Smart Wheel Chair for Disabled Person", pi: "Dr. Savita Sonoli", dept: "ECE", amount: "3,00,000", duration: "Ongoing", agency: "KSTA", type: "Government" },
                { sl: 29, title: "Combinational Rover", pi: "Lakshmana Naik T K", dept: "ME", amount: "1,00,000", duration: "1 Year", agency: "NAIN", type: "Government" },
                { sl: 30, title: "Automated Bio fertilizer generating unit", pi: "Mr. Hanumanth Reddy", dept: "ME", amount: "5,000", duration: "6 Months", agency: "KSCST", type: "Government" },
                { sl: 31, title: "Bio fertilizers from waste segregation", pi: "Mr. Hanumanth Reddy", dept: "ME", amount: "3,00,000", duration: "1 Year", agency: "KITS, GOK", type: "Government" },
                { sl: 32, title: "3 phase distribution board with display", pi: "Dr. S. Kotresh", dept: "ME", amount: "26,500", duration: "1 Year", agency: "KITS, GOK", type: "Government" }
            ]
        },
        {
            year: "2018-19",
            items: [
                { sl: 20, title: "Establishment Of VLSI Lab Design Using Current Technology", pi: "Dr. Savita Sonoli", dept: "ECE", amount: "2,00,000", duration: "Ongoing", agency: "KSTA", type: "Government" },
                { sl: 21, title: "Wireless Head Motion Controlled Smart Wheel Chair for Disabled Person", pi: "Dr. Savita Sonoli", dept: "ECE", amount: "3,00,000", duration: "Ongoing", agency: "KSTA", type: "Government" },
                { sl: 22, title: "Dynamic Traffic Light Controller System for Ambulance based on IOT", pi: "Dr. Prabhavathi S.", dept: "ECE", amount: "7,000", duration: "Completed", agency: "KSCST", type: "Government" },
                { sl: 23, title: "LPG Gas Leakage Detection & Automatic Gas booking using Arduino uno", pi: "Mr. Nagaraj Gowda", dept: "ECE", amount: "7,000", duration: "Completed", agency: "KSCST", type: "Government" }
            ]
        },
        {
            year: "2017-18",
            items: [
                { sl: 24, title: "Establishment Of VLSI Lab Design Using Current Technology", pi: "Dr. Savita Sonoli", dept: "ECE", amount: "2,00,000", duration: "Sanctioned", agency: "VGST", type: "Government" },
                { sl: 25, title: "Antitheft system for Vehicle using Finger Print Sensor", pi: "Mrs. Suvarna Patil", dept: "ECE", amount: "5,000", duration: "Completed", agency: "KSCST", type: "Government" },
                { sl: 26, title: "Science, Engineering & Society", pi: "Dr. Savita Sonoli", dept: "ECE", amount: "5,000", duration: "Completed", agency: "KSCST", type: "Government" }
            ]
        },
        {
            year: "Historical Projects",
            items: [
                { sl: 42, title: "Effect of Single and Mixed Transition Metal Ion on Electrical Conductivity of Borate Glasses", pi: "Dr. N. Nagaraja", dept: "Physics", year: "2016", amount: "2 Lakh", duration: "18 Months", agency: "UDC-New Delhi", type: "Government" },
                { sl: 28, title: "Investigation of biofuels and low cetane fuels in ci engine and reduction of exhaust emission", pi: "Dr. Hiregoudar Yerrenna Goudaru", dept: "ME", year: "2012-13", amount: "12.4 Lakhs", duration: "3 Year", agency: "AICTE", type: "Government" },
                { sl: 27, title: "Reduction of aldehydes from the exhaust gases of alcohol fuelled diesel engine", pi: "Dr. Hiregoudar Yerrenna Goudaru", dept: "ME", year: "2009-10", amount: "6,00,000", duration: "3 Year", agency: "VTU", type: "Government" }
            ]
        }
    ];

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
                        Funded & Sponsored Projects
                    </motion.h1>
                    <div className="w-20 h-1 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 py-12 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        RYMEC actively engages in research projects funded by prestigious government and non-government agencies, fostering innovation and technological advancement.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {projects.map((yearGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                        >
                            <div className="bg-blue-50 px-6 py-4 border-b border-blue-100 flex items-center justify-between">
                                <h2 className="text-xl font-bold text-cu-blue">{yearGroup.year}</h2>
                                <span className="bg-white text-cu-blue px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                    {yearGroup.items.length} Projects
                                </span>
                            </div>
                            <div className="p-6">
                                <div className="grid gap-6">
                                    {yearGroup.items.map((project, pIndex) => (
                                        <div key={pIndex} className="bg-gray-50/50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all">
                                            <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                                                <div className="flex-grow">
                                                    <div className="flex items-start gap-3">
                                                        <span className="bg-cu-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                                            {project.sl}
                                                        </span>
                                                        <h3 className="font-bold text-gray-800 text-lg leading-tight">
                                                            {project.title}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-0 flex flex-wrap gap-2 items-center">
                                                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-cu-gold/10 text-cu-gold border border-cu-gold/20">
                                                        {project.agency}
                                                    </span>
                                                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                                                        {project.type}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200/60 text-sm">
                                                <div>
                                                    <p className="text-gray-400 mb-1">Principal Investigator</p>
                                                    <p className="font-semibold text-gray-700">{project.pi}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-400 mb-1">Department</p>
                                                    <p className="font-semibold text-gray-700">{project.dept}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-400 mb-1">Amount Sanctioned</p>
                                                    <p className="font-semibold text-gray-800">₹ {project.amount}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-400 mb-1">Duration / Status</p>
                                                    <p className="font-semibold text-gray-700">{project.duration}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FundedProjects;
