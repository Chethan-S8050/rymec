import React from 'react';
import { motion } from 'framer-motion';

const IndustrialCollaboration = () => {
    const collaborations = [
        {
            category: "General & Skill Development",
            items: [
                {
                    partner: "MSME (Micro, Small & Medium Enterprises)",
                    description: "Collaboration for conferences, workshops, seminars, lectures, internships, FDPs, and research activities.",
                    date: "19/01/2019"
                },
                {
                    partner: "New Age Incubation Network (NAIN)",
                    description: "Developmental and research activities, technology symposiums, and faculty development programs.",
                    date: "19/01/2019"
                },
                {
                    partner: "Manya Education Pvt. Ltd., Bangalore",
                    description: "Special training to students to enhance skill sets and effectiveness for study abroad aspirants.",
                    date: "30/05/2019"
                }
            ]
        },
        {
            category: "Mechanical Engineering",
            items: [
                {
                    partner: "TATA Technologies Ltd., Pune",
                    description: "Establishing Centre for Invention, Innovation, Incubation & Training (CIIIT).",
                    date: "10/06/2019"
                },
                {
                    partner: "MEDINI, Bangalore",
                    description: "Imparting training on CAD products and advanced design tools.",
                    date: "30/05/2019"
                },
                {
                    partner: "PRIMETECH HVAC & Refrigeration",
                    description: "Training for staff and students in Refrigeration & Air Conditioning domain.",
                    date: "10/01/2018"
                },
                {
                    partner: "CADMAXX Solutions Pvt. Ltd., Bangalore",
                    description: "Knowledge sharing from Industry in CAD / CAE / CAM domains.",
                    date: "19/11/2015"
                }
            ]
        },
        {
            category: "Electronics & Communication Engineering",
            items: [
                {
                    partner: "Tech Trunk Ventures, Hyderabad",
                    description: "Advanced training, placement services, and career guidance.",
                    date: "24/07/2019"
                },
                {
                    partner: "Embiot Technologies(ET), Bengaluru",
                    description: "Industrial visits, internships, and placement opportunities.",
                    date: "30/05/2019"
                },
                {
                    partner: "IFERP, Chennai",
                    description: "Collaboration for Research and Publication activities.",
                    date: "07/01/2019"
                },
                {
                    partner: "EdGate Technologies, Bangalore",
                    description: "Texas Instruments Innovation Center establishment and training.",
                    date: "12/12/2013"
                }
            ]
        },
        {
            category: "Computer Science & Engineering",
            items: [
                {
                    partner: "Brain O Vision (Tech Fort), Hyderabad",
                    description: "Conferences, workshops, and technology development trainings.",
                    date: "07/02/2017"
                },
                {
                    partner: "Vision Software Solution, Ballari",
                    description: "Internship training, FDPs, and research activities.",
                    date: "28/10/2016"
                },
                {
                    partner: "Aliza Consultancy Services, Ballari",
                    description: "Professional development and internship training programs.",
                    date: "07/02/2017"
                }
            ]
        },
        {
            category: "Electrical & Electronics Engineering",
            items: [
                {
                    partner: "Future Connect",
                    description: "Paper publications and seminars on specific industry topics.",
                    date: "14/05/2020"
                },
                {
                    partner: "R Techno Solutions",
                    description: "Workshops on specific technology upgrades for students and faculty.",
                    date: "14/05/2020"
                }
            ]
        },
        {
            category: "MBA",
            items: [
                {
                    partner: "Future Info Solutions",
                    description: "Professional Tally training for management excellence.",
                    date: "06/12/2018"
                },
                {
                    partner: "MDIS, Singapore",
                    description: "International student study tours and global exposure.",
                    date: "06/07/2018"
                }
            ]
        }
    ];

    const otherPartners = [
        "District Industries Center, Ballari",
        "HalleysBlue Steels Pvt. Ltd.",
        "Shirdi Sai Steels Pvt. Ltd.",
        "CADD Centre, Ballari",
        "Costuco, Hyderabad",
        "BSNL Mysuru",
        "Pragna Microdesigns, Bengaluru"
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-cu-blue mb-4 font-display">
                        Industrial Collaboration & MOUs
                    </h1>
                    <div className="w-24 h-1 bg-cu-gold mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        RYMEC has established numerous MoUs with leading industries, government bodies, and academic institutions to bridge the gap between academia and industry, ensuring our students are future-ready.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collaborations.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-md border-t-4 border-cu-blue overflow-hidden"
                        >
                            <div className="p-6 bg-blue-50 border-b border-blue-100">
                                <h2 className="text-xl font-bold text-cu-blue">{section.category}</h2>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-6">
                                    {section.items.map((item, itemIdx) => (
                                        <li key={itemIdx} className="relative pl-6 border-l-2 border-gray-200 hover:border-cu-gold transition-colors pb-2">
                                            <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-gray-300"></div>
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-bold text-gray-800 leading-tight pr-2">{item.partner}</h3>
                                                {item.date && (
                                                    <span className="text-[10px] font-bold text-cu-blue bg-blue-50 px-2 py-0.5 rounded border border-blue-100 whitespace-nowrap">
                                                        {item.date}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-600 leading-relaxed italic">{item.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Other Partners Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Other Valued Partners</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {otherPartners.map((partner, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-medium border border-gray-200">
                                {partner}
                            </span>
                        ))}
                    </div>
                </motion.div>



            </div>
        </div>
    );
};

export default IndustrialCollaboration;
