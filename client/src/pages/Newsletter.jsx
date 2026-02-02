import React from 'react';
import { motion } from 'framer-motion';
import {
    Newspaper,
    Download,
    ExternalLink,
    Calendar,
    FileText,
    ChevronRight,
    Search,
    Bookmark,
    ArrowRightCircle,
    Bell
} from 'lucide-react';

const Newsletter = () => {
    const newsletters = [
        {
            year: "2021-22",
            title: "College Newsletter Volume VI",
            desc: "Highlights of academic excellence, research publications, and sports achievements during the post-pandemic recovery phase.",
            url: "https://rymec.edu.in/wp-content/uploads/2023/03/Newsletter-2021-2022.pdf",
            color: "bg-blue-600"
        },
        {
            year: "2020-21",
            title: "College Newsletter Volume V",
            desc: "Focusing on digital transformation, online learning innovations, and institutional resilience during global challenges.",
            url: "https://rymec.edu.in/wp-content/uploads/2023/02/Newletter-2020-2021.pdf",
            color: "bg-emerald-600"
        },
        {
            year: "2019-20",
            title: "College Newsletter Volume IV",
            desc: "Commemorating departmental milestones, industry collaborations, and community outreach programs.",
            url: "https://rymec.edu.in/wp-content/uploads/2023/02/Newletter-2019-2020.pdf",
            color: "bg-amber-600"
        },
        {
            year: "2018-19",
            title: "College Newsletter Volume III",
            desc: "Celebrating project exhibition winners, placement records, and faculty development initiatives.",
            url: "https://rymec.edu.in/wp-content/uploads/2023/02/Newletter-2018-2019.pdf",
            color: "bg-indigo-600"
        },
        {
            year: "2017-18",
            title: "College Newsletter Volume II",
            desc: "Detailed report on cultural fests, technical seminars, and infrastructure developments.",
            url: "https://rymec.edu.in/wp-content/uploads/2023/02/Newletter-2017-2018.pdf",
            color: "bg-rose-600"
        },
        {
            year: "2016-17",
            title: "College Newsletter Volume I",
            desc: "The inaugural volume capturing the vision and early successes of the renewed institutional reporting mechanism.",
            url: "https://rymec.edu.in/wp-content/uploads/2023/02/Newletter-2016-2017.pdf",
            color: "bg-slate-600"
        }
    ];

    return (
        <div className="min-h-screen pt-20 pb-12 bg-gray-50/50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#121c3d] to-[#1D316E] text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full -mr-72 -mt-72 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cu-gold rounded-full -ml-72 -mb-72 blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cu-gold mb-8 shadow-2xl"
                        >
                            <Newspaper className="w-5 h-5" />
                            <span className="text-sm font-bold tracking-widest uppercase">Institutional Archive</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-7xl font-bold font-display mb-8"
                        >
                            College <span className="text-cu-gold">Newsletters</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-blue-100/90 leading-relaxed font-light max-w-2xl mx-auto"
                        >
                            A comprehensive repository capturing our journey of excellence, innovation, and community milestones over the years.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 mt-16 max-w-7xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsletters.map((news, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative"
                        >
                            <div className="h-full bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col">
                                {/* Volume Header */}
                                <div className={`h-32 ${news.color} p-8 relative overflow-hidden shrink-0`}>
                                    <div className="absolute top-0 right-0 p-8 opacity-10 scale-150 rotate-12 group-hover:rotate-45 transition-transform duration-700">
                                        <Bookmark className="w-24 h-24 text-white" />
                                    </div>
                                    <div className="relative z-10 flex flex-col justify-between h-full">
                                        <span className="text-white/60 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                            <Calendar className="w-3.5 h-3.5" />
                                            A.Y. {news.year}
                                        </span>
                                        <h3 className="text-white text-xl font-bold">Volume {newsletters.length - idx}</h3>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <h4 className="text-gray-900 text-lg font-bold mb-3 group-hover:text-cu-blue transition-colors">
                                        {news.title}
                                    </h4>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                                        {news.desc}
                                    </p>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <a
                                            href={news.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-grow inline-flex items-center justify-center gap-2 bg-gray-50 text-cu-blue px-6 py-3.5 rounded-2xl font-bold hover:bg-cu-blue hover:text-white transition-all duration-300 border border-transparent hover:border-cu-blue group/btn"
                                        >
                                            Open PDF
                                            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </a>
                                        <a
                                            href={news.url}
                                            download
                                            className="p-3.5 bg-gray-100/50 text-gray-400 rounded-2xl hover:bg-cu-gold hover:text-white transition-all shadow-sm"
                                            title="Download Bulletin"
                                        >
                                            <Download className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Subscription/Info Card */}
                <div className="mt-20 bg-[#1D316E] rounded-[3rem] p-12 md:p-16 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-cu-gold rounded-full blur-3xl"></div>
                        <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-cu-gold mb-8">
                                <Bell className="w-8 h-8" />
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-6">Stay Connected</h2>
                            <p className="text-blue-100 leading-relaxed text-lg">
                                Our newsletter is published annually and captures the essence of life at RYMEC.
                                For the latest campus updates, events notifications, and departmental announcements, follow our official social media channels.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { title: "Latest News", link: "/news", icon: ArrowRightCircle },
                                { title: "Activities", link: "#", icon: ArrowRightCircle },
                                { title: "Photo Gallery", link: "#", icon: ArrowRightCircle },
                                { title: "Contact Us", link: "/contact-us", icon: ArrowRightCircle }
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.link}
                                    className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-between group"
                                >
                                    <span className="font-bold text-white tracking-wide">{item.title}</span>
                                    <item.icon className="w-5 h-5 text-cu-gold group-hover:translate-x-1 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
