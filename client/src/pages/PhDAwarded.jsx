import React from 'react';
import { motion } from 'framer-motion';

const PhDAwarded = () => {
    const phdStats = [
        {
            dept: "Computer Science and Engineering",
            established: "2006",
            registered: 27,
            pursuing: 20,
            awarded: 7
        },
        {
            dept: "Mechanical Engineering",
            established: "2011",
            registered: 27,
            pursuing: 12,
            awarded: 15
        },
        {
            dept: "Electronics and Communication Engineering",
            established: "2014",
            registered: 7,
            pursuing: 7,
            awarded: 0
        },
        {
            dept: "Civil Engineering",
            established: "2014",
            registered: 10,
            pursuing: 9,
            awarded: 1
        },
        {
            dept: "Electrical & Electronics Engineering",
            established: "2018",
            registered: 2,
            pursuing: 2,
            awarded: 0
        },
        {
            dept: "Mathematics",
            established: "2011",
            registered: 0,
            pursuing: 0,
            awarded: 0
        },
        {
            dept: "Engineering Physics",
            established: "2013",
            registered: 10,
            pursuing: 5,
            awarded: 5
        },
        {
            dept: "MBA",
            established: "2016",
            registered: 11,
            pursuing: 11,
            awarded: 0
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
                        Ph.D. Awarded & Enrolled
                    </motion.h1>
                    <div className="w-20 h-1 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 py-12 max-w-6xl">

                {/* Statistics Summary Section */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-cu-blue shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2-2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Research Statistics Summary</h2>
                            <p className="text-gray-500 text-sm">Consolidated report of Ph.D. scholars across departments</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 text-gray-700 text-sm uppercase tracking-wider">
                                        <th className="px-6 py-5 font-bold border-b border-gray-200 text-center">Sl. No</th>
                                        <th className="px-6 py-5 font-bold border-b border-gray-200">Department Name</th>
                                        <th className="px-6 py-5 font-bold border-b border-gray-200 text-center">Est. Year</th>
                                        <th className="px-6 py-5 font-bold border-b border-gray-200 text-center bg-blue-50/30">Registered</th>
                                        <th className="px-6 py-5 font-bold border-b border-gray-200 text-center bg-green-50/30">Pursuing</th>
                                        <th className="px-6 py-5 font-bold border-b border-gray-200 text-center bg-cu-gold/5">Awarded</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {phdStats.map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-50/80 transition-colors">
                                            <td className="px-6 py-4 text-gray-500 font-medium text-center">{index + 1}</td>
                                            <td className="px-6 py-4">
                                                <div className="font-bold text-gray-800">{item.dept}</div>
                                                <div className="text-xs text-gray-400 md:hidden">Est. {item.established}</div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600 text-center hidden md:table-cell font-medium">{item.established}</td>
                                            <td className="px-6 py-4 text-center font-bold text-blue-600 bg-blue-50/10">{item.registered}</td>
                                            <td className="px-6 py-4 text-center font-bold text-green-600 bg-green-50/10">{item.pursuing}</td>
                                            <td className="px-6 py-4 text-center font-bold text-cu-gold bg-cu-gold/5">{item.awarded}</td>
                                        </tr>
                                    ))}
                                    <tr className="bg-gray-900 text-white font-bold">
                                        <td colSpan={3} className="px-6 py-5 text-right uppercase tracking-widest text-xs">Total Research Impact</td>
                                        <td className="px-6 py-5 text-center text-lg">{phdStats.reduce((acc, curr) => acc + curr.registered, 0)}</td>
                                        <td className="px-6 py-5 text-center text-lg">{phdStats.reduce((acc, curr) => acc + curr.pursuing, 0)}</td>
                                        <td className="px-6 py-5 text-center text-lg text-cu-gold">{phdStats.reduce((acc, curr) => acc + curr.awarded, 0)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-lg shadow-blue-200 relative overflow-hidden group">
                        <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Researcher Support</h3>
                        <p className="text-blue-100 text-sm leading-relaxed">RYMEC provides state-of-the-art laboratory facilities and digital library access to all enrolled Ph.D. scholars.</p>
                    </div>

                    <div className="bg-cu-blue rounded-2xl p-8 text-white shadow-lg shadow-gray-200 relative overflow-hidden group">
                        <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
                        <p className="text-blue-100 text-sm leading-relaxed">Our research centres are staffed with experienced supervisors recognized for their contributions to diverse engineering fields.</p>
                    </div>

                    <div className="bg-cu-gold rounded-2xl p-8 text-white shadow-lg shadow-cu-gold/20 relative overflow-hidden group">
                        <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Academic Excellence</h3>
                        <p className="text-cu-gold/20 text-blue-50 text-sm leading-relaxed">With over 25 Ph.D.s awarded and many more in progress, RYMEC is a growing hub for doctoral research in the region.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PhDAwarded;
