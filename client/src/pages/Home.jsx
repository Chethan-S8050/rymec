import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import GlassCard from '../components/GlassCard';
import { motion } from 'framer-motion';
import { BookOpen, Users, Trophy, Lightbulb, Globe, Code, ShieldCheck, FileText, ClipboardList, Search, Award, Layers, Sparkles, MessageSquare } from 'lucide-react';

// Import Program Images
import cseImg from '../assets/rymec/CSE-min-370x250.jpg';
import eceImg from '../assets/rymec/ECE-min-370x250.jpg';
import mechImg from '../assets/rymec/MECH-min-370x250.jpg';
import civilImg from '../assets/rymec/CIVIL-min-370x250.jpg';

// Import Campus Life Images
import innovationImg from '../assets/rymec/slider-img-2.jpg';
import sportsImg from '../assets/rymec/slider-img-4.jpg';
import libraryImg from '../assets/rymec/slider-img-1.jpg';

// Import Accreditation Logos
import naacLogo from '../assets/rymec/NAAC-A-Logo.jpg';
import nbaLogo from '../assets/rymec/NBA-Banner.jpg';
import nirfLogo from '../assets/rymec/NIRF-logo.png';
import ugcLogo from '../assets/rymec/UGC-logo.png';
import aicteLogo from '../assets/rymec/AICTE-logo.png';

const SectionTitle = ({ children }) => (
    <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
    >
        {children}
    </motion.h2>
);

const Home = () => {
    const stats = [
        { label: "Years of Excellence", value: "40+" },
        { label: "Students Placed", value: "15k+" },
        { label: "Faculty Members", value: "200+" },
        { label: "Research Papers", value: "1000+" }
    ];

    const programs = [
        { title: "Computer Science", icon: Code, desc: "AI, ML, and Full Stack Development", img: cseImg },
        { title: "Electronics & Comm", icon: Lightbulb, desc: "VLSI, Embedded Systems, and IoT", img: eceImg },
        { title: "Mechanical Engg", icon: Users, desc: "Robotics, Automation, and Design", img: mechImg },
        { title: "Civil Engineering", icon: Globe, desc: "Sustainable Infra & Smart Cities", img: civilImg },
    ];

    const iqacItems = [
        { title: "About IQAC", icon: ShieldCheck, href: "/iqac" },
        { title: "IQAC Committee", icon: Users, href: "/iqac/committee" },
        { title: "IQAC MOM’s", icon: ClipboardList, href: "/iqac/moms" },
        { title: "AQAR Reports", icon: FileText, href: "/iqac/aqar-reports" },
        { title: "Audit Report", icon: Search, href: "/iqac/audit-report" },
        { title: "Accreditation", icon: Award, href: "/iqac/accreditation" },
        { title: "IQAC Others", icon: Layers, href: "/iqac/others" },
        { title: "Best Practices", icon: Sparkles, href: "/iqac/best-practices" },
        { title: "IQAC Feedback", icon: MessageSquare, href: "/iqac/feedback" },
    ];

    return (
        <div className="w-full bg-gray-50">
            <Hero />

            {/* Accreditations & Recognitions Section */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-cu-gold font-bold tracking-widest uppercase text-sm">Recognitions</span>
                        <h2 className="text-3xl font-bold text-cu-blue mt-2">Accreditations & Approvals</h2>
                        <div className="w-16 h-1 bg-cu-blue mx-auto mt-4"></div>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 hover:opacity-100 transition-opacity duration-500">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="h-24 w-auto flex items-center justify-center transition-all duration-500 scale-90 group-hover:scale-105">
                                <img src={naacLogo} alt="NAAC" className="h-full w-auto object-contain" />
                            </div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">NAAC A+ Grade</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="h-20 w-auto flex items-center justify-center transition-all duration-500 scale-90 group-hover:scale-105">
                                <img src={nbaLogo} alt="NBA" className="h-full w-auto object-contain" />
                            </div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">NBA Accredited</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="h-20 w-auto flex items-center justify-center transition-all duration-500 scale-90 group-hover:scale-105">
                                <img src={nirfLogo} alt="NIRF" className="h-full w-auto object-contain" />
                            </div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">NIRF Ranked</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="h-20 w-auto flex items-center justify-center transition-all duration-500 scale-90 group-hover:scale-105">
                                <img src={aicteLogo} alt="AICTE" className="h-full w-auto object-contain" />
                            </div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">AICTE Approved</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="h-20 w-auto flex items-center justify-center transition-all duration-500 scale-90 group-hover:scale-105">
                                <img src={ugcLogo} alt="UGC" className="h-full w-auto object-contain" />
                            </div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">UGC Recognized</span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section id="about" className="py-20 relative z-10 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="w-16 h-1 bg-cu-gold mb-4"></div>
                            <h2 className="text-3xl md:text-4xl font-bold text-cu-blue">
                                Vision & Mission
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed text-justify">
                                To produce professionally excellent, knowledgeable, globally competitive, socially responsible engineers and entrepreneurs.
                            </p>
                            <div className="grid gap-4">
                                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-cu-blue hover:bg-white hover:shadow-md transition-all">
                                    <div className="bg-cu-blue/10 p-2 rounded-full text-cu-blue"><Trophy size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-cu-blue">Excellence</h4>
                                        <p className="text-sm text-gray-600">Imparting quality education through state-of-the-art infrastructure.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-cu-gold hover:bg-white hover:shadow-md transition-all">
                                    <div className="bg-cu-gold/10 p-2 rounded-full text-cu-gold"><Users size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-cu-blue">Interaction</h4>
                                        <p className="text-sm text-gray-600">Enhancing industry-institute interaction.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full relative rounded-2xl overflow-hidden shadow-2xl skew-y-1 transform hover:skew-y-0 transition-all duration-500">
                            <img src={libraryImg} alt="Campus" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-cu-blue/20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* IQAC Section */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-cu-gold font-bold tracking-widest uppercase text-sm">Quality Assurance</span>
                        <h2 className="text-4xl font-bold text-cu-blue mt-2">Internal Quality Assurance Cell (IQAC)</h2>
                        <div className="w-20 h-1 bg-cu-blue mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {iqacItems.map((item, idx) => (
                            <Link
                                key={idx}
                                to={item.href}
                                className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-cu-blue/20 transition-all duration-300 flex items-center gap-6"
                            >
                                <div className="p-4 bg-gray-50 rounded-xl group-hover:bg-cu-blue group-hover:text-white transition-all duration-300">
                                    <item.icon size={28} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-cu-blue transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">Explore details →</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section - Christ Style (Solid Blue Bar) */}
            <section className="py-16 bg-cu-blue relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-4"
                            >
                                <h3 className="text-4xl md:text-5xl font-bold text-cu-gold mb-2 font-display">{stat.value}</h3>
                                <p className="text-white/80 uppercase tracking-widest text-xs md:text-sm font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section id="programs" className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-cu-gold font-bold tracking-widest uppercase text-sm">Academics</span>
                        <h2 className="text-4xl font-bold text-cu-blue mt-2">Our Programs</h2>
                        <div className="w-20 h-1 bg-cu-blue mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {programs.map((prog, idx) => (
                            <div key={idx} className="group bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="h-48 w-full overflow-hidden relative">
                                    <div className="absolute inset-0 bg-cu-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                                        <button className="px-6 py-2 bg-white text-cu-blue font-bold rounded-full transform scale-75 group-hover:scale-100 transition-all">Explore</button>
                                    </div>
                                    <img src={prog.img} alt={prog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-6 relative">
                                    <div className="absolute -top-8 right-6 bg-cu-gold p-3 rounded-lg shadow-lg text-white group-hover:bg-cu-blue transition-colors">
                                        <prog.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-cu-blue mb-2 group-hover:text-cu-gold transition-colors">{prog.title}</h3>
                                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{prog.desc}</p>
                                    <a href="#" className="text-sm font-bold text-cu-blue flex items-center gap-1 group/link">
                                        View Details <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* News & Events Section - Christ Style Cards */}
            <section id="news" className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-cu-gold font-bold tracking-widest uppercase text-sm">Updates</span>
                            <h2 className="text-4xl font-bold text-cu-blue mt-2">News & Events</h2>
                            <div className="w-20 h-1 bg-cu-blue mt-4"></div>
                        </div>
                        <button className="hidden md:block px-6 py-2 border-2 border-cu-blue text-cu-blue font-bold rounded-full hover:bg-cu-blue hover:text-white transition-all">
                            View All Archives
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Event 1 */}
                        <div className="bg-white rounded-xl shadow-md border-b-4 border-cu-gold overflow-hidden group hover:shadow-xl transition-all">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex flex-col text-center bg-gray-100 p-2 rounded-lg min-w-[60px]">
                                        <span className="text-xl font-bold text-cu-blue">15</span>
                                        <span className="text-xs font-semibold text-gray-500 uppercase">Mar</span>
                                    </div>
                                    <span className="bg-cu-blue/10 text-cu-blue text-xs font-bold px-3 py-1 rounded-full">Event</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-cu-blue transition-colors leading-tight">
                                    Annual Tech Symposium 2026: Innovations in Future Tech
                                </h3>
                                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                    Join us for a 3-day innovative conclave featuring industry leaders, hackathons, and project exhibitions.
                                </p>
                                <a href="#" className="inline-block text-sm font-bold text-cu-gold hover:text-cu-blue transition-colors">Read More</a>
                            </div>
                        </div>

                        {/* News 1 */}
                        <div className="bg-white rounded-xl shadow-md border-b-4 border-cu-blue overflow-hidden group hover:shadow-xl transition-all">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex flex-col text-center bg-gray-100 p-2 rounded-lg min-w-[60px]">
                                        <span className="text-xl font-bold text-cu-blue">10</span>
                                        <span className="text-xs font-semibold text-gray-500 uppercase">Jan</span>
                                    </div>
                                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">News</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-cu-blue transition-colors leading-tight">
                                    RYMEC Secures NBA Accreditation for all Departments
                                </h3>
                                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                    We are proud to announce that all our major departments have been accredited by NBA for 3 years, a testament to our quality.
                                </p>
                                <a href="#" className="inline-block text-sm font-bold text-cu-gold hover:text-cu-blue transition-colors">Read More</a>
                            </div>
                        </div>

                        {/* Event 2 */}
                        <div className="bg-white rounded-xl shadow-md border-b-4 border-cu-gold overflow-hidden group hover:shadow-xl transition-all">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex flex-col text-center bg-gray-100 p-2 rounded-lg min-w-[60px]">
                                        <span className="text-xl font-bold text-cu-blue">05</span>
                                        <span className="text-xs font-semibold text-gray-500 uppercase">Feb</span>
                                    </div>
                                    <span className="bg-cu-blue/10 text-cu-blue text-xs font-bold px-3 py-1 rounded-full">Workshop</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-cu-blue transition-colors leading-tight">
                                    AI & Robotics Workshop for Final Year Students
                                </h3>
                                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                    Hands-on session on building autonomous drones and AI models. Registration open now.
                                </p>
                                <a href="#" className="inline-block text-sm font-bold text-cu-gold hover:text-cu-blue transition-colors">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campus Life - Photo Grid */}
            <section className="py-0 relative">
                <div className="grid grid-cols-1 md:grid-cols-4 h-96">
                    <div className="relative group overflow-hidden md:col-span-2">
                        <img src={innovationImg} alt="Innovation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-cu-blue/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-8">
                            <h3 className="text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Innovation Labs</h3>
                            <p className="text-white/80 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Where ideas come to life through technology and research.</p>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden">
                        <img src={sportsImg} alt="Sports" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-cu-gold/90 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                            <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Sports</h3>
                            <p className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Holistic development through physical activities.</p>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden">
                        <img src={libraryImg} alt="Library" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-cu-black/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                            <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Library</h3>
                            <p className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">A massive collection of knowledge resources.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
