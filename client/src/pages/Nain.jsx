import React from 'react';
import { motion } from 'framer-motion';

const Nain = () => {
    const objectives = [
        "To encourage students, research scholars and alumni to share their innovative ideas to solve the chosen local problems and to validate, refine and nurture the ideas to POC.",
        "To provides an ecosystem to convert the ideas into Proof of Concept and upgrade them to a commercial start-up.",
        "To hand-held and encourage project teams towards setting up a Start-up after successful incubation."
    ];

    const committee = [
        { name: "Dr. S B Shivakumar", role: "College Coordinator", phone: "9886354089" },
        { name: "Dr. S Srishaila J M", role: "College Coordinator", phone: "9481181593" },
        { name: "Vinaya Kumar K S", role: "District Innovation Associate", phone: "8892891486" }
    ];

    const contacts = [
        { name: "K S Vinaya Kumar", role: "DIA", phone: "8892891486" },
        { name: "Dr. S Kotresh", role: "College Coordinator", phone: "9986275325" }
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
                        NEW AGE INNOVATION NETWORK (NAIN)
                    </motion.h1>
                    <div className="w-24 h-1 bg-cu-gold mx-auto rounded-full"></div>
                    <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto italic">
                        K-tech District Innovation Hub (DIH)
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 md:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content Column */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* About Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
                        >
                            <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-cu-gold pl-4 mb-6">About NAIN</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Department of IT BT, Government of Karnataka has started the <strong>“New Age Innovation Network”</strong> Center at RYMEC in 2019 to build a startup & business ecosystem in and around Ballari. Innovative Project proposals are invited from RYMEC students, Alumni, and Research Scholars.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                                <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                                    <h3 className="text-xl font-bold text-cu-blue mb-3">Vision</h3>
                                    <p className="text-gray-600">Empowering and transforming students Ideas and Concepts to become Start-ups and scale up to commercial business enterprises.</p>
                                </div>
                                <div className="bg-amber-50/50 p-6 rounded-xl border border-amber-100">
                                    <h3 className="text-xl font-bold text-cu-blue mb-3">Mission</h3>
                                    <p className="text-gray-600">To ignite Innovative Ideas of the students, alumni and local talents by providing start-up ecosystem of mentor-ship, infrastructure and funding to transform innovative concepts into commercial prototypes.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Objectives */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
                        >
                            <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-cu-gold pl-4 mb-6">Objectives</h2>
                            <ul className="space-y-4">
                                {objectives.map((obj, index) => (
                                    <li key={index} className="flex items-start gap-4 text-gray-600 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                        <div className="w-8 h-8 rounded-lg bg-cu-blue text-white flex items-center justify-center flex-shrink-0 font-bold">
                                            {index + 1}
                                        </div>
                                        <span>{obj}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Downloads Section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-cu-blue p-10 rounded-3xl text-white shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                            <h2 className="text-3xl font-bold mb-8 relative z-10">Important Resources</h2>
                            <div className="flex flex-wrap gap-6 relative z-10">
                                <a
                                    href="https://rymec.edu.in/wp-content/uploads/2023/02/Application-Form.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-cu-gold text-cu-blue rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-3"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                    NAIN Application Form
                                </a>
                                <div className="text-xl font-medium self-center">
                                    Sanctioned Projects:
                                    <a
                                        href="https://rymec.edu.in/wp-content/uploads/2023/02/Sanctioned-Projects-Batch-1.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-3 text-cu-gold hover:underline decoration-2 underline-offset-4"
                                    >
                                        Batch-1 (PDF)
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Organizing Committee */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
                        >
                            <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-cu-gold pl-4 mb-8">Organizing Committee</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {committee.map((member, idx) => (
                                    <div key={idx} className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:shadow-md transition-all">
                                        <h4 className="font-bold text-xl text-gray-800 mb-1">{member.name}</h4>
                                        <p className="text-cu-blue font-medium text-sm mb-4 uppercase tracking-wider">{member.role}</p>
                                        <a href={`tel:${member.phone}`} className="text-gray-600 flex items-center gap-2 hover:text-cu-blue font-semibold">
                                            <svg className="w-5 h-5 text-cu-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 004.87 4.87l.774-1.548a1 1 0 011.06-.539l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                                            {member.phone}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Video Widget */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h4 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">Promotional Video</h4>
                            <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-100">
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

                        {/* Contact Widget */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h4 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">Contact Details</h4>
                            <div className="space-y-6">
                                {contacts.map((contact, idx) => (
                                    <div key={idx} className="group">
                                        <p className="font-bold text-gray-800 group-hover:text-cu-blue transition-colors">{contact.name}</p>
                                        <p className="text-gray-500 text-sm mb-2">{contact.role}</p>
                                        <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-2 text-cu-blue font-semibold hover:text-cu-gold">
                                            {contact.phone}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Facilities Widget */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h4 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">Facilities</h4>
                            <ul className="space-y-3">
                                {[
                                    { name: "RIIC", href: "/riic" },
                                    { name: "NAIN", href: "/nain", active: true },
                                    { name: "EDC", href: "/edc" },
                                    { name: "ICT", href: "/ict" },
                                    { name: "NSS/NCC", href: "/activities" }
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={item.href}
                                            className={`block p-3 rounded-lg font-medium transition-all ${item.active
                                                    ? "bg-cu-blue text-white shadow-md"
                                                    : "text-gray-600 hover:bg-gray-50"
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

export default Nain;
