import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Library = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const tabs = ['Overview', 'Committee', 'Staff', 'Statistics', 'Working Hours', 'Rules', 'Services', 'Collections'];

    const committeeMembers = [
        { sl: "01", name: "Dr. T. Hanumantha Reddy", designation: "Principal", position: "Chairman", contact: "9448043949" },
        { sl: "02", name: "Dr. Savita Sonoli", designation: "Vice-Principal -HOD-ECE", position: "Member", contact: "9343553487" },
        { sl: "03", name: "Dr. H. Girisha", designation: "Dean(Aca) & HOD-CSE", position: "Member", contact: "9449135047" },
        { sl: "04", name: "Dr. B. Sreepathi", designation: "Dear (Exam) & HOD-ISE", position: "Member", contact: "9448173113" },
        { sl: "05", name: "Dr. H M Malliarjuna", designation: "HOD-Civil", position: "Member", contact: "9448356741" },
        { sl: "06", name: "Dr. Kori Nagaraj", designation: "HOD-ME & IP", position: "Member", contact: "9448576434" },
        { sl: "07", name: "Dr. S. Kotresh", designation: "HOD-EEE", position: "Member", contact: "9986214375" },
        { sl: "08", name: "Dr. D Saimadhavi", designation: "HOD-AI&ML", position: "Member", contact: "7795082439" },
        { sl: "09", name: "Dr. A Thimmana Gouda", designation: "Coordinator-MBA", position: "Member", contact: "9448130466" },
        { sl: "10", name: "Dr. Sumangala B", designation: "HOD-Mathematics", position: "Member", contact: "9481435999" },
        { sl: "11", name: "Dr. N M Kottureswara", designation: "HOD-Chemistry", position: "Member", contact: "9448717986" },
        { sl: "12", name: "Dr. N M Nagabhushan", designation: "HOD-Physics", position: "Member", contact: "9483616360" },
        { sl: "13", name: "Sri Vishwanatha Reddy M", designation: "Librarian", position: "Member Secretary", contact: "9448341370" }
    ];

    const staffMembers = [
        { sl: 1, name: "Vishwanatha Reddy M.", designation: "Librarian", qualification: "B.Com., M.L.I.Sc.,PGDCA" },
        { sl: 2, name: "Sheela H.", designation: "Assistant Librarian", qualification: "B.A., M.L.I.Sc.," },
        { sl: 3, name: "Sharada R.", designation: "Library Asst", qualification: "B.A., B.L.I.Sc.," },
        { sl: 4, name: "K Kotilingappa", designation: "Superintendent", qualification: "B.Com.," },
        { sl: 5, name: "R. M. Prashanthayya", designation: "F.D.A.", qualification: "P.U.C." },
        { sl: 6, name: "S. Viswapala", designation: "F.D.A.", qualification: "S.S.L.C." },
        { sl: 7, name: "E. K. Chandrasekharappa", designation: "F.D.A.", qualification: "S.S.L.C." },
        { sl: 8, name: "H. M. Basavaraj", designation: "S.D.A.", qualification: "P.U.C." },
        { sl: 9, name: "A. Manjula", designation: "Supporting Staff", qualification: "S.S.L.C." },
        { sl: 10, name: "Basappa Mallappa Madivalar", designation: "Supporting Staff", qualification: "S.S.L.C." }
    ];

    const deptStats = [
        { sl: "01", particular: "Civil Engg.", titles: "2059", volumes: "18115", cost: "37,02,945" },
        { sl: "02", particular: "Mechanical Engg.", titles: "2379", volumes: "23775", cost: "46,14,715" },
        { sl: "03", particular: "Electrical and Electronics Engg.", titles: "1901", volumes: "19583", cost: "45,03,593" },
        { sl: "04", particular: "Electronics and Comm. Engg.", titles: "1888", volumes: "23204", cost: "63,81,385" },
        { sl: "05", particular: "Computer Science and Engg.", titles: "2096", volumes: "33035", cost: "99,69,909" },
        { sl: "06", particular: "Industrial and Production Engg.", titles: "513", volumes: "4552", cost: "11,77,058" },
        { sl: "07", particular: "Instrumentation Technology", titles: "400", volumes: "3442", cost: "9,14,846" },
        { sl: "08", particular: "Information Science and Engg.", titles: "543", volumes: "8223", cost: "27,12,660" },
        { sl: "09", particular: "CSE(AIML)", titles: "81", volumes: "782", cost: "3,91,1687" },
        { sl: "10", particular: "CSE(DS)", titles: "53", volumes: "373", cost: "2,38,768" },
        { sl: "11", particular: "Master of Computer Applications", titles: "612", volumes: "6163", cost: "17,42,093" },
        { sl: "12", particular: "Master of Business Administration", titles: "1408", volumes: "11896", cost: "36,97,905" },
        { sl: "13", particular: "Master of Technology(CSE)", titles: "149", volumes: "1162", cost: "4,78,825" },
        { sl: "14", particular: "Master of Technology(PM)", titles: "51", volumes: "322", cost: "1,12,699" },
        { sl: "15", particular: "Master of Technology(TPE)", titles: "83", volumes: "527", cost: "2,48,499" },
        { sl: "16", particular: "Master of Technology(DCN)", titles: "120", volumes: "653", cost: "3,16,772" },
        { sl: "17", particular: "Master of Technology(SE)", titles: "205", volumes: "750", cost: "4,41,781" },
        { sl: "18", particular: "Physics", titles: "151", volumes: "1815", cost: "2,70,189" },
        { sl: "19", particular: "Chemistry", titles: "136", volumes: "1922", cost: "2,49,364" },
        { sl: "20", particular: "Mathematics", titles: "355", volumes: "12701", cost: "2,34,2643" },
        { sl: "21", particular: "General", titles: "679", volumes: "3434", cost: "3,62,138" }
    ];

    const yearlyStats = [
        { year: "2023-24", titles: "179", volumes: "1848", cost: "10,66,165" },
        { year: "2022-23", titles: "187", volumes: "1916", cost: "10,05,744" },
        { year: "2021-22", titles: "361", volumes: "2774", cost: "13,46,922" },
        { year: "2020-21", titles: "503", volumes: "3849", cost: "14,46,427" },
        { year: "2019-20", titles: "497", volumes: "4769", cost: "16,71,337" }
    ];

    const eBookStats = [
        { provider: "Springer", count: 12848, link: "https://link.springer.com", logo: "sping.png" },
        { provider: "CRC Books", count: 259, link: "https://www.taylorfrancis.com", logo: "e-2.png" },
        { provider: "Elsevier Science Direct", count: 436, link: "https://www.sciencedirect.com", logo: "e-3.png" },
        { provider: "Taylor & Francis", count: 4950, link: "https://www.taylorfrancis.com", logo: "e-4.png" },
        { provider: "NewAge International", count: 670, link: "https://digital.elib4u.com/", logo: "e-5.png" },
        { provider: "PACKT e-BOOKS", count: 7302, link: "https://digital.elib4u.com/", logo: "e-6.png" },
        { provider: "EBSCO Engineering Suit", count: 24015, link: "https://search.ebscohost.com", logo: "e-11.png" },
    ];

    const eJournalStats = [
        { provider: "IEEE Xplore", count: "2000+", link: "https://ieeexplore.ieee.org", logo: "IEEE-Xplore.png" },
        { provider: "Elsevier Science Direct", count: 405, link: "https://www.sciencedirect.com", logo: "Elsevier-Science.png" },
        { provider: "Springer Nature", count: 710, link: "https://link.springer.com", logo: "3.png" },
        { provider: "Taylor & Francis", count: 260, link: "https://www.tandfonline.com/", logo: "4.png" },
        { provider: "EBSCO Engineering Suite", count: 6100, link: "https://search.ebscohost.com", logo: "7.png" },
    ];

    const printJournalStats = [
        { sl: "01", dept: "Civil Engineering", count: 14, price: "42,000" },
        { sl: "02", dept: "Mechanical Engineering", count: 14, price: "33,000" },
        { sl: "03", dept: "Electrical & Electronics", count: 12, price: "36,000" },
        { sl: "04", dept: "Electronics & Communication", count: 12, price: "36,000" },
        { sl: "05", dept: "Computer Science & Engineering", count: 20, price: "60,000" },
        { sl: "06", dept: "Information Science & Engineering", count: 6, price: "18,000" },
        { sl: "07", dept: "M.Tech Specializations", count: 22, price: "66,000" },
        { sl: "08", dept: "AI & ML / Data Science", count: 12, price: "36,000" },
        { sl: "09", dept: "MBA", count: 12, price: "12,000" },
        { sl: "10", dept: "MCA", count: 12, price: "36,000" },
    ];

    return (
        <div className="min-h-screen pt-20 pb-10 bg-gray-50 relative overflow-hidden">
            {/* Header */}
            <div className="bg-cu-blue text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-4 inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        Facilities
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold font-display mb-6 tracking-tight uppercase"
                    >
                        Library & Knowledge Center
                    </motion.h1>
                    <div className="w-24 h-1.5 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Breadcrumb Area */}
            <div className="bg-white border-b border-gray-100 py-4">
                <div className="container mx-auto px-4 md:px-8">
                    <nav className="flex text-sm font-medium text-gray-500">
                        <a href="/" className="hover:text-cu-blue transition-colors">Home</a>
                        <span className="mx-2">/</span>
                        <span className="text-cu-blue">About Library</span>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 md:px-8 py-12">
                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === tab
                                ? 'bg-cu-blue text-white shadow-lg shadow-blue-200'
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12"
                    >
                        {activeTab === 'Overview' && (
                            <div className="space-y-12">
                                <section>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-6 drop-shadow-sm">About RYMEC Library</h2>
                                    <div className="grid md:grid-cols-2 gap-8 items-center">
                                        <div className="space-y-4">
                                            <p className="text-gray-600 leading-relaxed italic border-l-4 border-cu-gold pl-4">
                                                "Expanding Minds, Enlightening Futures through a rich ocean of information."
                                            </p>
                                            <p className="text-gray-600 leading-relaxed">
                                                RYMEC Library has a rich collection of Books and Journals in the disciplines of Engineering, Technology, and Management. The library holds more than <strong>1.77 lakhs volumes</strong> and <strong>15,000+ titles</strong> of books, and this intellectual property is updated regularly.
                                            </p>
                                            <p className="text-gray-600 leading-relaxed">
                                                The library is also enriched with more than <strong>12,499 International e-journals</strong> from IEEE, Science Direct, Springer Nature, and more. It offers access to <strong>51,141 subscribed/perpetual e-books</strong> and 10,000+ open access full-text e-books.
                                            </p>
                                        </div>
                                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                                            <img src="https://rymec.edu.in/wp-content/uploads/2023/03/lib2.jpg" alt="Library" className="w-full h-auto transform hover:scale-105 transition-transform duration-700" />
                                        </div>
                                    </div>
                                </section>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                        <h3 className="text-2xl font-bold text-cu-blue mb-4 flex items-center gap-2 font-display">
                                            <i className="fas fa-eye text-cu-gold"></i> VISION
                                        </h3>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            Support the parent organization to improve its academic excellence, preserve information across all formats, and ensure effective storage and delivery systems to serve future users and develop the college community as self-learners and lifelong learners.
                                        </p>
                                    </section>
                                    <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <h3 className="text-2xl font-bold text-cu-blue mb-4 flex items-center gap-2 font-display">
                                            <i className="fas fa-bullseye text-cu-gold"></i> MISSION
                                        </h3>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            Provide comprehensive resources and services in support of the research, teaching, and learning needs of the College community. Build global standard information collection; create hospitable physical and virtual environments for study, teaching and research.
                                        </p>
                                    </section>
                                </div>

                                <section>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-cu-gold pb-2 inline-block font-display">Library Goals & Objectives</h3>
                                    <ul className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            "Improve effectiveness of library services.",
                                            "Optimize usage of allocated budget.",
                                            "Improve efficiency of housekeeping operations.",
                                            "Develop a library-wide work culture.",
                                            "Improve internal process speed and accuracy.",
                                            "Safeguard interests of stakeholders.",
                                            "Promote sustain expertise and innovation.",
                                            "Review and redesign value-added services."
                                        ].map((goal, idx) => (
                                            <li key={idx} className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:bg-cu-blue group transition-all duration-300">
                                                <div className="w-6 h-6 bg-cu-gold rounded-full flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-cu-blue text-xs font-bold">
                                                    {idx + 1}
                                                </div>
                                                <span className="text-gray-600 group-hover:text-white transition-colors text-sm">{goal}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <div className="p-6 bg-cu-blue rounded-2xl text-white text-center shadow-lg relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                                    <p className="font-bold mb-2 uppercase tracking-widest text-xs">Automation</p>
                                    <p className="text-lg font-medium italic">
                                        "Fully automated using KOHA Open Source Software, accessible on-campus and through the RYMEC OPAC Mobile App."
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Committee' && (
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6 drop-shadow-sm">Library Advisory Committee</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    The Library Advisory Committee is a recommendation-making committee for approval and purchase of books and other related resources.
                                </p>
                                <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm bg-white">
                                    <table className="w-full text-left border-collapse min-w-[700px]">
                                        <thead>
                                            <tr className="bg-cu-blue text-white uppercase text-xs tracking-widest">
                                                <th className="px-6 py-4">Sl. No.</th>
                                                <th className="px-6 py-4">Name</th>
                                                <th className="px-6 py-4">Designation</th>
                                                <th className="px-6 py-4">Position</th>
                                                <th className="px-6 py-4">Contact</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-600">
                                            {committeeMembers.map((member) => (
                                                <tr key={member.sl} className="hover:bg-gray-50/50 transition-colors border-b last:border-0">
                                                    <td className="px-6 py-4 font-bold text-cu-blue">{member.sl}</td>
                                                    <td className="px-6 py-4 font-semibold text-gray-800">{member.name}</td>
                                                    <td className="px-6 py-4 text-sm">{member.designation}</td>
                                                    <td className="px-6 py-4">
                                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest ${member.position === 'Chairman' ? 'bg-cu-gold/20 text-cu-gold' :
                                                            member.position === 'Member Secretary' ? 'bg-blue-600/10 text-blue-600' : 'bg-gray-100 text-gray-500'
                                                            }`}>
                                                            {member.position.toUpperCase()}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-mono">{member.contact}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Staff' && (
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6 drop-shadow-sm">Library Staff Information</h2>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {staffMembers.map((staff) => (
                                        <motion.div
                                            key={staff.sl}
                                            whileHover={{ y: -5 }}
                                            className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-cu-blue transition-all group"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-cu-blue/10 rounded-xl flex items-center justify-center text-cu-blue shrink-0 group-hover:bg-cu-blue group-hover:text-white transition-colors duration-300">
                                                    <i className="fas fa-user-tie text-xl"></i>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-800 text-lg mb-1 leading-tight">{staff.name}</h4>
                                                    <p className="text-xs text-cu-gold font-bold uppercase tracking-widest mb-2">{staff.designation}</p>
                                                    <div className="flex items-center gap-2 text-gray-500 text-xs mt-3 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 w-fit">
                                                        <i className="fas fa-graduation-cap text-cu-blue"></i>
                                                        <span className="font-medium">{staff.qualification}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'Statistics' && (
                            <div className="space-y-12">
                                <section>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-6 drop-shadow-sm flex items-center gap-3">
                                        <i className="fas fa-chart-line text-cu-blue"></i> Department-Wise Collection
                                    </h2>
                                    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm bg-white">
                                        <table className="w-full text-left border-collapse min-w-[800px]">
                                            <thead>
                                                <tr className="bg-gray-50 text-cu-blue uppercase text-[10px] tracking-[0.2em] font-bold">
                                                    <th className="px-6 py-4 border-b">Sl.</th>
                                                    <th className="px-6 py-4 border-b">Department / Particulars</th>
                                                    <th className="px-6 py-4 border-b">Titles</th>
                                                    <th className="px-6 py-4 border-b">Volumes</th>
                                                    <th className="px-6 py-4 border-b">Total Cost (₹)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-gray-600 text-sm">
                                                {deptStats.map((stat) => (
                                                    <tr key={stat.sl} className="hover:bg-gray-50/50 transition-colors border-b last:border-0">
                                                        <td className="px-6 py-4">{stat.sl}</td>
                                                        <td className="px-6 py-4 font-bold text-gray-800">{stat.particular}</td>
                                                        <td className="px-6 py-4 font-medium">{stat.titles}</td>
                                                        <td className="px-6 py-4 font-medium">{stat.volumes}</td>
                                                        <td className="px-6 py-4 font-mono text-gray-500">{stat.cost}</td>
                                                    </tr>
                                                ))}
                                                <tr className="bg-cu-blue text-white font-bold">
                                                    <td colSpan="2" className="px-6 py-4 rounded-bl-2xl">GRAND TOTAL</td>
                                                    <td className="px-6 py-4 font-display text-lg">15,002</td>
                                                    <td className="px-6 py-4 font-display text-lg">1,76,429</td>
                                                    <td className="px-6 py-4 rounded-br-2xl text-lg font-mono">₹ 4,48,69,955</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-6 drop-shadow-sm flex items-center gap-3">
                                        <i className="fas fa-plus-circle text-cu-blue"></i> Books Added (Last 5 Years)
                                    </h2>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                        {yearlyStats.map((year) => (
                                            <div key={year.year} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all border-b-4 border-b-cu-gold text-center group">
                                                <h4 className="font-bold text-cu-blue text-lg mb-4">{year.year}</h4>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between items-center bg-gray-50 px-3 py-1 rounded">
                                                        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Titles</span>
                                                        <span className="font-bold text-gray-700">{year.titles}</span>
                                                    </div>
                                                    <div className="flex justify-between items-center bg-gray-50 px-3 py-1 rounded">
                                                        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Volumes</span>
                                                        <span className="font-bold text-gray-700">{year.volumes}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <div className="grid md:grid-cols-2 gap-8 mt-12">
                                    <section>
                                        <h2 className="text-3xl font-bold text-gray-800 mb-6 drop-shadow-sm flex items-center gap-3">
                                            <i className="fas fa-book-reader text-cu-blue"></i> E-Books Collection
                                        </h2>
                                        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm bg-white">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="bg-gray-50 text-cu-blue uppercase text-[10px] tracking-[0.2em] font-bold">
                                                        <th className="px-6 py-4 border-b">Provider</th>
                                                        <th className="px-6 py-4 border-b">E-Books</th>
                                                        <th className="px-6 py-4 border-b">Access</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-gray-600 text-sm">
                                                    {eBookStats.map((stat, idx) => (
                                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors border-b last:border-0">
                                                            <td className="px-6 py-4 flex items-center gap-3">
                                                                <img src={`https://rymec.edu.in/wp-content/uploads/2025/12/${stat.logo}`} alt="" className="w-8 h-8 object-contain" />
                                                                <span className="font-bold text-gray-800">{stat.provider}</span>
                                                            </td>
                                                            <td className="px-6 py-4 font-medium">{stat.count}</td>
                                                            <td className="px-6 py-4">
                                                                <a href={stat.link} target="_blank" rel="noopener noreferrer" className="text-cu-blue hover:text-cu-gold transition-colors">
                                                                    <i className="fas fa-external-link-alt"></i>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    <tr className="bg-cu-blue text-white font-bold">
                                                        <td className="px-6 py-4 rounded-bl-2xl uppercase tracking-widest text-xs">Total E-Books</td>
                                                        <td colSpan="2" className="px-6 py-4 text-lg font-display tracking-wider">51,141</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    <section>
                                        <h2 className="text-3xl font-bold text-gray-800 mb-6 drop-shadow-sm flex items-center gap-3">
                                            <i className="fas fa-journal-whills text-cu-blue"></i> E-Journals Collection
                                        </h2>
                                        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm bg-white">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="bg-gray-50 text-cu-blue uppercase text-[10px] tracking-[0.2em] font-bold">
                                                        <th className="px-6 py-4 border-b">Provider</th>
                                                        <th className="px-6 py-4 border-b">Count</th>
                                                        <th className="px-6 py-4 border-b">Access</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-gray-600 text-sm">
                                                    {eJournalStats.map((stat, idx) => (
                                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors border-b last:border-0">
                                                            <td className="px-6 py-4 flex items-center gap-3">
                                                                <img src={`https://rymec.edu.in/wp-content/uploads/2025/12/${stat.logo}`} alt="" className="w-8 h-8 object-contain" />
                                                                <span className="font-bold text-gray-800">{stat.provider}</span>
                                                            </td>
                                                            <td className="px-6 py-4 font-medium">{stat.count}</td>
                                                            <td className="px-6 py-4">
                                                                <a href={stat.link} target="_blank" rel="noopener noreferrer" className="text-cu-blue hover:text-cu-gold transition-colors">
                                                                    <i className="fas fa-external-link-alt"></i>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    <tr className="bg-cu-blue text-white font-bold">
                                                        <td className="px-6 py-4 rounded-bl-2xl uppercase tracking-widest text-xs">Total E-Journals</td>
                                                        <td colSpan="2" className="px-6 py-4 text-lg font-display tracking-wider">12,499</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>
                                </div>

                                <section className="mt-12">
                                    <h2 className="text-3xl font-bold text-gray-800 mb-6 drop-shadow-sm flex items-center gap-3">
                                        <i className="fas fa-print text-cu-blue"></i> Print Journals (2025 Subscriptions)
                                    </h2>
                                    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm bg-white">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-gray-50 text-cu-blue uppercase text-[10px] tracking-[0.2em] font-bold">
                                                    <th className="px-6 py-4 border-b">Sl.</th>
                                                    <th className="px-6 py-4 border-b">Department</th>
                                                    <th className="px-6 py-4 border-b">Journal Count</th>
                                                    <th className="px-6 py-4 border-b">Est. Cost (₹)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-gray-600 text-sm">
                                                {printJournalStats.map((stat) => (
                                                    <tr key={stat.sl} className="hover:bg-gray-50/50 transition-colors border-b last:border-0">
                                                        <td className="px-6 py-4">{stat.sl}</td>
                                                        <td className="px-6 py-4 font-bold text-gray-800">{stat.dept}</td>
                                                        <td className="px-6 py-4 font-medium">{stat.count}</td>
                                                        <td className="px-6 py-4 font-mono text-gray-500">{stat.price}</td>
                                                    </tr>
                                                ))}
                                                <tr className="bg-gray-800 text-white font-bold">
                                                    <td colSpan="2" className="px-6 py-4 rounded-bl-2xl">GRAND TOTAL</td>
                                                    <td className="px-6 py-4 text-lg font-display">140+</td>
                                                    <td className="px-6 py-4 text-lg font-mono">₹ ~4,00,000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                <div className="grid md:grid-cols-3 gap-6 mt-12">
                                    <div className="p-8 bg-gradient-to-br from-cu-blue to-blue-900 rounded-2xl text-white shadow-xl relative overflow-hidden group">
                                        <div className="relative z-10">
                                            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                                <i className="fas fa-wifi"></i> Remote Access
                                            </h4>
                                            <p className="text-sm text-blue-100 leading-relaxed mb-6">
                                                MAPMyAccess allows 24/7 remote access to digital resources owned by the library.
                                            </p>
                                            <a href="https://access.vtuconsortium.com/rymec" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-white text-cu-blue rounded-full font-bold text-xs hover:bg-cu-gold hover:text-white transition-all">
                                                ACCESS PORTAL
                                            </a>
                                        </div>
                                        <i className="fas fa-network-wired absolute -bottom-4 -right-4 text-8xl text-white/5 group-hover:scale-110 transition-transform duration-700"></i>
                                    </div>

                                    <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg relative overflow-hidden group hover:border-cu-blue transition-colors">
                                        <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                            <i className="fas fa-graduation-cap text-cu-blue"></i> E-Courses
                                        </h4>
                                        <ul className="space-y-3 mb-6">
                                            <li className="flex justify-between text-sm">
                                                <span className="text-gray-600">IEEE Blended Learning</span>
                                                <span className="font-bold text-cu-blue">70 Courses</span>
                                            </li>
                                            <li className="flex justify-between text-sm">
                                                <span className="text-gray-600">PAT Technology</span>
                                                <span className="font-bold text-cu-blue">14 Courses</span>
                                            </li>
                                        </ul>
                                        <a href="http://blendedlearning.ieee.org" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-cu-blue hover:text-cu-gold flex items-center gap-2">
                                            LEARN MORE <i className="fas fa-arrow-right"></i>
                                        </a>
                                    </div>

                                    <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg relative overflow-hidden group hover:border-cu-blue transition-colors">
                                        <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                            <i className="fas fa-newspaper text-cu-blue"></i> Magazines
                                        </h4>
                                        <div className="flex items-center gap-4 mb-6">
                                            <img src="https://rymec.edu.in/wp-content/uploads/2025/12/Magzter.png" alt="Magzter" className="w-12 h-12 object-contain" />
                                            <div>
                                                <p className="text-sm font-bold text-gray-800">Magzter Portal</p>
                                                <p className="text-xs text-gray-500">3170+ Magazines & 1260 News Papers</p>
                                            </div>
                                        </div>
                                        <a href="https://library.magzter.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-cu-blue hover:text-cu-gold flex items-center gap-2">
                                            BROWSE NOW <i className="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Working Hours' && (
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6 drop-shadow-sm flex items-center gap-3">
                                    <i className="fas fa-clock text-cu-blue"></i> Library Working Hours
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm bg-white">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-cu-blue text-white uppercase text-xs tracking-widest">
                                                    <th className="px-6 py-4">Section</th>
                                                    <th className="px-6 py-4">Day</th>
                                                    <th className="px-6 py-4">Timings</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-gray-600">
                                                <tr className="border-b">
                                                    <td rowSpan="3" className="px-6 py-4 font-bold bg-gray-50/50">Reference</td>
                                                    <td className="px-6 py-4">Monday-Friday</td>
                                                    <td className="px-6 py-4 font-mono">08.00 am to 08.00 pm</td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td className="px-6 py-4">Saturday</td>
                                                    <td className="px-6 py-4 font-mono">08.00 am to 05.00 pm</td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td className="px-6 py-4">Holidays</td>
                                                    <td className="px-6 py-4 text-red-500 font-bold uppercase tracking-widest text-xs">Closed</td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td rowSpan="3" className="px-6 py-4 font-bold bg-gray-50/50">Lending</td>
                                                    <td className="px-6 py-4">Monday-Friday</td>
                                                    <td className="px-6 py-4 font-mono">10.00 am to 05.30 pm</td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td className="px-6 py-4">Saturday</td>
                                                    <td className="px-6 py-4 font-mono">10.00 am to 02.30 pm</td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td className="px-6 py-4">Holidays</td>
                                                    <td className="px-6 py-4 text-red-500 font-bold uppercase tracking-widest text-xs">Closed</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100 relative overflow-hidden">
                                        <i className="fas fa-calendar-alt absolute -top-4 -right-4 text-8xl text-amber-200/50"></i>
                                        <h3 className="text-2xl font-bold text-amber-800 mb-6 flex items-center gap-2">
                                            <i className="fas fa-info-circle"></i> Holidays - 2026
                                        </h3>
                                        <div className="space-y-4">
                                            {[
                                                { date: "15.01.2026", day: "Thursday", occasion: "Sankranthi" },
                                                { date: "26.01.2026", day: "Monday", occasion: "Republic Day" }
                                            ].map((holiday, idx) => (
                                                <div key={idx} className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
                                                    <div>
                                                        <p className="font-bold text-gray-800">{holiday.occasion}</p>
                                                        <p className="text-xs text-gray-500">{holiday.day}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full font-mono text-xs font-bold">
                                                            {holiday.date}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                            <p className="text-xs text-amber-700 italic mt-4">* All Sundays and General Holidays as notified by the University/Government.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Rules' && (
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6 drop-shadow-sm flex items-center gap-3">
                                    <i className="fas fa-gavel text-cu-blue"></i> Rules & Regulations
                                </h2>
                                <div className="grid lg:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        {[
                                            { title: "Membership", content: "Membership application form is issued on request from the Library by producing their Identity card. If the application form is satisfactorily completed, you will be enrolled as a member on the spot." },
                                            { title: "Lending of Books", content: "Students are privileged for three books. Sub-lending is misuse of the privilege and may lead to withdrawal of membership. Books can be recalled by the Librarian at any time." },
                                            { title: "Duration of Loan", content: "Books are borrowed for 10 days. Borrowers must check the condition of the book before issuance, otherwise they will be held responsible for damage." },
                                            { title: "Overdue Charges", content: "A fine of Re.1.00 per volume per day will be charged for late return. Book bank books must be returned within one week after theory exams." }
                                        ].map((rule, idx) => (
                                            <div key={idx} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-cu-blue hover:bg-white transition-all shadow-sm hover:shadow-md">
                                                <h4 className="font-bold text-cu-blue mb-2 flex items-center gap-2">
                                                    <span className="w-6 h-6 bg-cu-blue text-white rounded-full flex items-center justify-center text-[10px]">{idx + 1}</span>
                                                    {rule.title}
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed">{rule.content}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="space-y-6">
                                        <div className="p-8 bg-cu-blue rounded-3xl text-white shadow-xl">
                                            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                                                <i className="fas fa-heart"></i> Library Ethics
                                            </h4>
                                            <ul className="space-y-4">
                                                {[
                                                    "Maintain strict silence and calm atmosphere.",
                                                    "Be courteous to Library staff.",
                                                    "Keep the Library neat and clean.",
                                                    "No smoking, chewing pan, or sleeping.",
                                                    "Use of mobile phones is strictly prohibited."
                                                ].map((ethics, idx) => (
                                                    <li key={idx} className="flex gap-3 text-sm items-start">
                                                        <i className="fas fa-check-circle text-cu-gold mt-1"></i>
                                                        <span className="text-blue-50">{ethics}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="p-8 border-2 border-dashed border-gray-200 rounded-3xl">
                                            <h4 className="font-bold text-gray-800 mb-4 uppercase tracking-[0.2em] text-xs">Note:</h4>
                                            <p className="text-xs text-gray-500 leading-relaxed italic">
                                                Reference books like encyclopedias, Handbooks, Dictionaries, Atlases, Maps, and rare books shall be issued within the four walls of the library during working hours only.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Services' && (
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6 drop-shadow-sm flex items-center gap-3">
                                    <i className="fas fa-concierge-bell text-cu-blue"></i> Library Services
                                </h2>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[
                                        { title: "E-Services", icon: "laptop", desc: "100 MBps leased line internet connection for accessing E-Journals & E-books." },
                                        { title: "Question Bank", icon: "file-alt", desc: "Hard & Soft copies of VTU old question papers available for reference." },
                                        { title: "Reprographic", icon: "copy", desc: "Photocopy services available under special arrangement." },
                                        { title: "Lending Service", icon: "exchange-alt", desc: "Borrowing resources for specific durations based on user group." },
                                        { title: "Inter Library Loan", icon: "handshake", desc: "DELNET member for resource sharing with major institutions in India." },
                                        { title: "Web-OPAC", icon: "search", desc: "Online catalogue facility available through intranet and Off-Campus internet." },
                                        { title: "Book Bank", icon: "book", desc: "Self-Financing Book Bank for semester-long borrowing of text sets." }
                                    ].map((service, idx) => (
                                        <div key={idx} className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl group hover:border-cu-blue transition-all">
                                            <div className="w-14 h-14 bg-cu-blue/5 rounded-2xl flex items-center justify-center text-cu-blue mb-4 transition-colors group-hover:bg-cu-blue group-hover:text-white">
                                                <i className={`fas fa-${service.icon} text-2xl`}></i>
                                            </div>
                                            <h4 className="font-bold text-gray-800 mb-2 truncate">{service.title}</h4>
                                            <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">{service.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'Collections' && (
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6 drop-shadow-sm flex items-center gap-3">
                                    <i className="fas fa-layer-group text-cu-blue"></i> Library Collection Policy
                                </h2>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                        <h4 className="font-bold text-cu-blue mb-3">General Collection</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">Textbooks found on open shelves and Reserved, available for outside borrowing based on user category.</p>
                                    </div>
                                    <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
                                        <h4 className="font-bold text-amber-800 mb-3">Special Collections</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">Includes periodicals, Dissertations, Thesis, magazines, and newspapers for in-library use only.</p>
                                    </div>
                                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                        <h4 className="font-bold text-gray-800 mb-3">Reference Collections</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">Encyclopaedias, Handbooks, Dictionaries, and Yearbooks for quick reference within the library.</p>
                                    </div>
                                </div>
                                <section className="mt-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                        <i className="fas fa-id-card text-cu-blue"></i> Borrowing Privileges
                                    </h3>
                                    <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-sm">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-cu-blue text-white text-xs uppercase tracking-widest">
                                                    <th className="px-6 py-4">Category</th>
                                                    <th className="px-6 py-4">Max Books</th>
                                                    <th className="px-6 py-4">Loan Period</th>
                                                    <th className="px-6 py-4">Fine Rate</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-gray-600 text-sm">
                                                <tr className="border-b">
                                                    <td className="px-6 py-4 font-bold">Professors</td>
                                                    <td className="px-6 py-4">10</td>
                                                    <td className="px-6 py-4">One Year</td>
                                                    <td className="px-6 py-4">Re. 1 / Day</td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td className="px-6 py-4 font-bold">Assoc. Professors</td>
                                                    <td className="px-6 py-4">10</td>
                                                    <td className="px-6 py-4">One Year</td>
                                                    <td className="px-6 py-4">Re. 1 / Day</td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td className="px-6 py-4 font-bold">Asst. Professors</td>
                                                    <td className="px-6 py-4">10</td>
                                                    <td className="px-6 py-4">One Year</td>
                                                    <td className="px-6 py-4">Re. 1 / Day</td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td className="px-6 py-4 font-bold">Students</td>
                                                    <td className="px-6 py-4 font-mono">03 + 1 Set (BB)</td>
                                                    <td className="px-6 py-4">10 Days / 1 Sem</td>
                                                    <td className="px-6 py-4 font-bold text-red-500">Re. 1 / Day</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>
                            </div>
                        )}

                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Library;
