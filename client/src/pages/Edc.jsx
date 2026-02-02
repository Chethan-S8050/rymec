import React from 'react';
import { motion } from 'framer-motion';

const Edc = () => {
    const facilities = [
        { name: "RIIC", href: "/riic" },
        { name: "NAIN", href: "/nain" },
        { name: "Entrepreneurship Development Cell", href: "/entrepreneurship-development-cell", active: true },
        { name: "Information & Communication Technology (ICT)", href: "/ict" },
        { name: "Satellite Live Lectures", href: "/satellite-live-lectures" },
        { name: "NSS/ NCC/ IRCS", href: "/activities" }
    ];

    return (
        <div className="min-h-screen pt-20 pb-10 bg-gray-50 relative overflow-hidden">
            {/* Decorative Shapes (shapeshapeshape) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-24 -left-24 w-96 h-96 bg-cu-blue/5 rounded-[40%] blur-3xl"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 -right-24 w-80 h-80 bg-cu-gold/5 rounded-[30%] blur-3xl"
                />
            </div>

            {/* Header */}
            <div className="bg-cu-blue text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                {/* Internal shapes in header */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-cu-gold/20 rounded-full -ml-12 -mb-12 blur-xl"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-4 inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        Innovation & Incubation
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold font-display mb-6 tracking-tight"
                    >
                        ENTREPRENEURSHIP DEVELOPMENT CELL
                    </motion.h1>
                    <div className="w-24 h-1.5 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Breadcrumb Area (Simulated Shape Area) */}
            <div className="bg-white border-b border-gray-100 py-4">
                <div className="container mx-auto px-4 md:px-8">
                    <nav className="flex text-sm font-medium text-gray-500">
                        <a href="/" className="hover:text-cu-blue transition-colors">Home</a>
                        <span className="mx-2">/</span>
                        <span className="text-cu-blue">Entrepreneurship Development Cell</span>
                    </nav>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 md:px-8 py-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content Column */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-10 md:p-12 leading-relaxed text-gray-700 space-y-8"
                        >
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Focus on Entrepreneurial Excellence</h2>
                                <div className="w-16 h-1 bg-cu-gold"></div>
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                                <p className="font-medium text-gray-800 text-xl leading-snug">
                                    Entrepreneurship Development Cell, the abbreviation of which is <strong>EDC</strong>, has been established by R Y M Engineering College. Ever since its inception, the cell has embarked on its flagship programme of continuous innovative thinking in order to enhance the country’s economy.
                                </p>

                                <p>
                                    At the same time, the cell also concentrates on the rural fronts so as to develop the potential of the rural youth and revamp their traditional mindset. Battling against odds appears to have become something of a habit for the unemployed youth. The EDC tries to extricate these youngsters from their wrangle with employment opportunities by crowning them as young and dynamic entrepreneurs. These dynamic youngsters evolve from the corporate shadows and reach an enviable position.
                                </p>

                                <p>
                                    From the position of job seekers, they get ordained as job givers. They expand the availability of jobs, thereby minimizing the nation’s anxiety over the rapidly increasing unemployment rate.
                                </p>

                                <p className="bg-blue-50/50 p-6 rounded-2xl border-l-4 border-cu-blue italic">
                                    The EDC redefines the role of the youth to make them more independent. The youngsters are thus shaken out of their complacent mood regarding their employment opportunities. Such entrepreneurs become icons of success with the help of the prospective tool called innovation. They also cater to the ever growing employment needs of the society. Leaving no stone unturned in their innovative and constructive pathway, they prove to be the heartbeat of a nation’s progress and prosperity. Thus, the EDC empowers the youth with entrepreneurial skills.
                                </p>
                            </div>

                            {/* Impact Summary */}
                            <div className="pt-8 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-cu-gold/10 text-cu-gold flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Nation Prosperity</h4>
                                        <p className="text-sm text-gray-500">Contributing to the heart beat of progress through innovation.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-cu-blue/10 text-cu-blue flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Job Givers</h4>
                                        <p className="text-sm text-gray-500">Transforming youth into independent employers.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Video Widget */}
                        <div className="bg-white rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100 p-8">
                            <h4 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">Promotional Video</h4>
                            <div className="aspect-video rounded-2xl overflow-hidden shadow-inner bg-gray-100 border border-gray-100">
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

                        {/* Facilities Widget */}
                        <div className="bg-white rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100 p-8">
                            <h4 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4 tracking-tight">Related Facilities</h4>
                            <ul className="space-y-3">
                                {facilities.map((item, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={item.href}
                                            className={`block p-4 rounded-xl font-semibold transition-all duration-300 ${item.active
                                                    ? "bg-cu-blue text-white shadow-lg shadow-blue-900/20 translate-x-2"
                                                    : "text-gray-600 hover:bg-gray-50 hover:text-cu-blue hover:translate-x-1"
                                                }`}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Contact */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-br from-cu-blue to-blue-900 rounded-3xl p-8 text-white relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-xl"></div>
                            <h4 className="text-xl font-bold mb-4 relative z-10">Get in Touch</h4>
                            <p className="text-sm text-blue-100/80 mb-6 relative z-10 font-medium">Have an innovative startup idea? Let's transform it into reality together.</p>
                            <a
                                href="/contact-us"
                                className="block text-center py-4 bg-cu-gold text-cu-blue rounded-xl font-bold hover:shadow-xl hover:bg-white transition-all relative z-10"
                            >
                                Contact EDC Center
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edc;
