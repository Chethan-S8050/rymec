import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bus, User, Phone, DollarSign, MapPin, Clock, Info, ShieldCheck, ChevronDown, ExternalLink } from 'lucide-react';

const Transport = () => {
    const [activeTab, setActiveTab] = useState('routes');

    const facilities = [
        { name: "ICT", href: "/ict" },
        { name: "Auditorium", href: "/auditorium" },
        { name: "Sports", href: "/sports" },
        { name: "Medical Centre", href: "/medical-centre" },
        { name: "Hostel", href: "/hostel" },
        { name: "Transport", href: "/transport", active: true },
        { name: "Bank", href: "/bank" }
    ];

    const coordinator = {
        name: "Kotresh Sardar",
        phones: ["94483 41488", "8310479330"],
        fee: "9000.00"
    };

    const busAccountDetails = [
        { sl: 1, no: "KA 34 – 1490", regDate: "10.10.1992", size: "Big Bus 60-70", remarks: "Scrap(sold out)" },
        { sl: 2, no: "KA 34 – 2185", regDate: "12.12.1995", size: "Big Bus 60-70", remarks: "Vivekananda School-Siruguppa(sold out)" },
        { sl: 3, no: "KA 34 – 5447", regDate: "12.04.2005", size: "Big Bus 60-70", remarks: "RYMEC-Bly" },
        { sl: 4, no: "KA 34 – 8360", regDate: "19.05.2007", size: "Big Bus 60-70?", remarks: "Vivekananda School-Siruguppa" },
        { sl: 5, no: "KA 34 – 9487", regDate: "03.01.2008", size: "Big Bus 60-70", remarks: "Vivekananda School-Siruguppa" },
        { sl: 6, no: "KA 34 – 9489", regDate: "03.01.2008", size: "Big Bus 60-70", remarks: "Kittur Rani Channamma School-Bly" },
        { sl: 7, no: "KA 34 – 9494", regDate: "04.01.2008", size: "Big Bus 60-70", remarks: "RYMEC-Bly" },
        { sl: 8, no: "KA 34 – 2602", regDate: "28.08.2009", size: "Big Bus 60-70", remarks: "RYMEC-Bly" },
        { sl: 9, no: "KA 34 – 2605", regDate: "28.08.2009", size: "Big Bus 60-70", remarks: "RYMEC-Bly" },
        { sl: 10, no: "KA 34 – 2742", regDate: "26.09.2009", size: "Big Bus 60-70", remarks: "Kittur Rani Channamma School-Bly" },
        { sl: 11, no: "KA 34 – 4907", regDate: "10.01.2010", size: "Minibus – 40-45", remarks: "Kittur Rani Channamma School-Bly" },
        { sl: 12, no: "KA 34 – 4910", regDate: "10.01.2010", size: "Minibus – 40-45", remarks: "RYMEC-Bly" },
        { sl: 13, no: "KA 34 – 8146", regDate: "21.07.2012", size: "Minibus – 40-45", remarks: "RYMEC-Bly" },
        { sl: 14, no: "KA 34 – 8147", regDate: "21.07.2012", size: "Minibus – 40-45", remarks: "Vivekananda School-Siruguppa" },
        { sl: 15, no: "KA 34 – 8407", regDate: "01.10.2012", size: "Big Bus 60-70", remarks: "RYMEC-Bly" },
        { sl: 16, no: "KA 34 – 9769", regDate: "09.07.2013", size: "Big Bus 60-70", remarks: "RYMEC-Bly" },
        { sl: 17, no: "KA 34 – 9949", regDate: "19.08.2013", size: "Minibus – 40-45", remarks: "Kittur Rani Channamma School-Bly" },
        { sl: 18, no: "KA 34 – 9950", regDate: "19.08.2013", size: "Minibus – 40-45", remarks: "RYMEC-Bly" },
        { sl: 19, no: "KA 34 – B 395", regDate: "12.12.2013", size: "Big Bus 60-70", remarks: "RYMEC-Bly" },
        { sl: 20, no: "KA 34 – B 396", regDate: "12.12.2013", size: "Big Bus 60-70", remarks: "RYMEC-Bly" },
        { sl: 21, no: "KA 34 – 1739", regDate: "07.11.2014", size: "Big Bus 60-70", remarks: "RYMEC-Bly" },
        { sl: 22, no: "KA 34 – 1740", regDate: "07.11.2014", size: "Big Bus 60-70", remarks: "Kittur Rani Channamma School-Bly" },
        { sl: 23, no: "KA 34 – 5731", regDate: "24.04.2017", size: "Big Bus", remarks: "Vivekananda School-Siruguppa" },
        { sl: 24, no: "KA 34 – 5871", regDate: "21.06.2017", size: "Big Bus", remarks: "Vivekananda School-Siruguppa" },
        { sl: 25, no: "KA 34 – 5732", regDate: "24.04.2017", size: "Minibus", remarks: "RYMEC-Bly" },
        { sl: 26, no: "KA 34 – 5728", regDate: "24.04.2017", size: "Minibus", remarks: "Arunodaya Kinder garten- H.B.Halli" }
    ];

    const busRoutes = [
        { sl: 1, no: "KA 34 – 9950", route: "Royal-Meenakshi-Kalamma Street-Brucepet Police Station-Benki Maremma Temple-APMC-New Bus Stand-Moti Circle", time: "8.15 AM", driver: "Sri.Busanna", contact: "9916331445" },
        { sl: 2, no: "KA 34 – 8407", route: "Taranath Hospital-BPSC-MG-Pavan Hotel-Raghava Kala Mandira-Royal-Moti Circle-OPD", time: "8.15 AM", driver: "Sri.Chandrasekhar", contact: "9880523717" },
        { sl: 3, no: "KA 34 – 5447", route: "Boys Hostel – Gandhinagar", time: "8.20 AM", driver: "Sri.Sharanaiah", contact: "8722899430" },
        { sl: 4, no: "KA 34 – 8146", route: "Kanekal Bus Stand-Millerpet-Raghavendra Talkies-Meenakshi Circle-Mothi Circle-1st Gate-2nd Gate.", time: "8.15 AM", driver: "Sri.KanthaRaja", contact: "9164760133" },
        { sl: 5, no: "KA 34 – 4910", route: "Kakarla Thota-Guggarahatti-Cowl Bazar-Belagal Cross-TB Sanitorium-Nandi School", time: "8.15 AM", driver: "Sri.V.Gowrish", contact: "9901018446" },
        { sl: 6, no: "KA 34 – 2602", route: "Sukruta Nursing home-Nehru colony-KEB-Madhuri Nursing Home-Suryanarayan Reddy Office-Gandhinagar Market-Durgamma Temple-Vasavi School", time: "8.15 AM", driver: "Sri.Vinay", contact: "9742939201" },
        { sl: 7, no: "KA 34 – 9494", route: "Ladies Hostel – Gandhinagar", time: "8.20 AM", driver: "Sri.Sharanappa", contact: "9972357821" },
        { sl: 8, no: "KA 34 – 2605", route: "Ladies Hostel – Gandhinagar", time: "8.20 AM", driver: "Sri.Nayak", contact: "9740780796" },
        { sl: 9, no: "KA 34 – B 396", route: "Fort Hostel – Sai Baba Temple", time: "8.20 AM", driver: "Sri.Manjunath", contact: "9986652209" },
        { sl: 10, no: "KA 34 – 9949", route: "Sukruta Nursing Home- Gandhinagar Market –Water Booster –Sangameswara Temple – KEB –Nalanda School – Durgamma Temple – SP Circle – Vasavi School", time: "8.15 AM", driver: "Sri.Veerabhadrappa", contact: "9591323088" },
        { sl: 11, no: "KA 34 – 9769", route: "Bramhaiah Temple-Visweswaraiah Nagar 3rd Cross-Bharath Hospital-Durgamma Temple-KMF-Church", time: "8.15 AM", driver: "Sri.Mallanagouda", contact: "9900779689" },
        { sl: 12, no: "KA 34 – 5732", route: "Ladies Hostel – Gandhinagar", time: "8.20 AM", driver: "Sri.Ramachandra", contact: "9449023388" },
        { sl: 13, no: "KA 34 – B 395", route: "SN Pet-Super Market-Raghavendra Swamy Temple – Patel Nagar- MG – Raghava Kalamandhira-Royal", time: "8.15 AM", driver: "Sri.Somasekhar", contact: "9743510152" },
        { sl: 14, no: "KA 34 – 1739", route: "Govindappa Kalyana Mantapa – Renuka Nagar 5th Cross – Canal – Basava Bhavana –Much More – Havambhavi – KMF-Indiranagar", time: "8.15 AM", driver: "Sri.Veeresh", contact: "7090511612" }
    ];

    const allotments = {
        vivekananda: [
            { sl: 1, no: "KA 34 – 8360", regDate: "19.05.2007", size: "Minibus" },
            { sl: 2, no: "KA 34 – 9487", regDate: "03.01.2008", size: "Big Bus" },
            { sl: 3, no: "KA 34 – 8147", regDate: "21.07.2012", size: "Minibus" },
            { sl: 4, no: "KA 34 – 5731", regDate: "24.04.2017", size: "Big Bus" },
            { sl: 5, no: "KA 34 – 5728", regDate: "21.06.2017", size: "Big Bus" }
        ],
        krc: [
            { sl: 1, no: "KA 34 – 9489", regDate: "03.01.2008", size: "Big Bus" },
            { sl: 2, no: "KA 34 – 2742", regDate: "26.09.2009", size: "Big Bus" },
            { sl: 3, no: "KA 34 – 4907", regDate: "10.01.2010", size: "Minibus" },
            { sl: 4, no: "KA 34 – 9949", regDate: "19.08.2013", size: "Minibus" },
            { sl: 5, no: "KA 34 – 1740", regDate: "07.11.2014", size: "Big Bus" }
        ],
        arunodaya: [
            { sl: 1, no: "KA 34 – 5728", regDate: "24.04.2017", size: "Minibus" }
        ],
        rymec: [
            { sl: 1, no: "KA 34 – 5447", regDate: "12.04.2005", size: "Big Bus" },
            { sl: 2, no: "KA 34 – 9494", regDate: "04.01.2008", size: "Big Bus" },
            { sl: 3, no: "KA 34 – 2602", regDate: "28.08.2009", size: "Big Bus" },
            { sl: 4, no: "KA 34 – 2605", regDate: "28.08.2009", size: "Big Bus" },
            { sl: 5, no: "KA 34 – 8146", regDate: "21.07.2012", size: "Mini Bus" },
            { sl: 6, no: "KA 34 – 8407", regDate: "01.10.2012", size: "Big Bus" },
            { sl: 7, no: "KA 34 – 9769", regDate: "09.07.2013", size: "Big Bus" },
            { sl: 8, no: "KA 34 – 4910", regDate: "10.01.2010", size: "Big Bus" },
            { sl: 9, no: "KA 34 – 9950", regDate: "19.08.2013", size: "Minibus" },
            { sl: 10, no: "KA 34 – B 395", regDate: "12.12.2013", size: "Big Bus" },
            { sl: 11, no: "KA 34 – B 396", regDate: "12.12.2013", size: "Big Bus" },
            { sl: 12, no: "KA 34 – 1739", regDate: "07.11.2014", size: "Big Bus" },
            { sl: 13, no: "KA 34 – 5732", regDate: "24.04.2017", size: "Minibus" },
            { sl: 14, no: "KA 34 – 9949", regDate: "19.08.2013", size: "Mini Bus (Shared b/w RYM & KRC)" }
        ]
    };

    const drivers = [
        { sl: 1, no: "KA 34 – 9950", name: "Sri.Busanna", contact: "9916331445" },
        { sl: 2, no: "KA 34 – 8407", name: "Sri.Chandrasekhar", contact: "9880523717" },
        { sl: 3, no: "KA 34 – 5447", name: "Sri.Sharanaiah", contact: "8722899430" },
        { sl: 4, no: "KA 34 – 8146", name: "Sri.KanthaRaja", contact: "9164760133" },
        { sl: 5, no: "KA 34 – 4910", name: "Sri.V.Gowrish", contact: "9901018446" },
        { sl: 6, no: "KA 34 – 2602", name: "Sri.Vinay", contact: "9742939201" },
        { sl: 7, no: "KA 34 – 9494", name: "Sri.Sharanappa", contact: "9972357821" },
        { sl: 8, no: "KA 34 – 2605", name: "Sri.Nayak", contact: "9740780796" },
        { sl: 9, no: "KA 34 – B396", name: "Sri.Manjunath", contact: "9986652209" },
        { sl: 10, no: "KA 34 – 9949", name: "Sri.Veerabhadrappa", contact: "9591323088" },
        { sl: 11, no: "KA 34 – 9769", name: "Sri.Mallanagouda", contact: "9900779689" },
        { sl: 12, no: "KA 34 – 5732", name: "Sri.Ramachandra", contact: "9449023388" },
        { sl: 13, no: "KA 34 – B395", name: "Sri.Somasekhar", contact: "9743510152" },
        { sl: 14, no: "KA 34 – 1739", name: "Sri.Veeresh", contact: "7090511612" },
        { sl: 15, no: "KA 34 – 9489", name: "Sri.Muneendra", contact: "9591181939" },
        { sl: 16, no: "KA 34 – 2742", name: "Sri.Eranna", contact: "8197683390" },
        { sl: 17, no: "KA 34 – 4907", name: "Sri.Suresh", contact: "9900948244" },
        { sl: 18, no: "KA 34 – 1740", name: "Sri. Siddesh", contact: "9686416992" },
        { sl: 19, no: "Spare", name: "Sri.Yerriswamy", contact: "9483418446" }
    ];

    return (
        <div className="min-h-screen pt-20 pb-10 bg-gray-50 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-24 -left-24 w-96 h-96 bg-cu-blue/5 rounded-[40%] blur-3xl"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 -right-24 w-80 h-80 bg-cu-gold/5 rounded-[30%] blur-3xl"
                />
            </div>

            {/* Hero Section */}
            <div className="bg-cu-blue text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4 inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        Campus Facilities
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-black font-display mb-6 tracking-tight uppercase"
                    >
                        Transport <span className="text-cu-gold">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto text-blue-100 text-lg md:text-xl font-medium leading-relaxed"
                    >
                        Extensive fleet of safe, reliable, and well-maintained buses serving students and staff across Ballari and surrounding areas.
                    </motion.p>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-100 py-4 hidden md:block">
                <div className="container mx-auto px-4 md:px-8">
                    <nav className="flex text-sm font-semibold text-gray-500 items-center space-x-2">
                        <a href="/" className="hover:text-cu-blue transition-colors flex items-center">
                            Home
                        </a>
                        <chevron-right className="w-4 h-4" />
                        <span className="text-cu-blue">Transport</span>
                    </nav>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 py-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Main Content Area */}
                    <div className="lg:col-span-3 space-y-10">

                        {/* Summary Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4"
                            >
                                <div className="w-16 h-16 bg-blue-50 text-cu-blue rounded-2xl flex items-center justify-center">
                                    <Bus className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Total Fleet</h3>
                                    <p className="text-3xl font-black text-gray-800">26 <span className="text-lg font-medium">Buses</span></p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4"
                            >
                                <div className="w-16 h-16 bg-gold-50 text-cu-gold rounded-2xl flex items-center justify-center">
                                    <DollarSign className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Annual Fee</h3>
                                    <p className="text-3xl font-black text-gray-800">₹{coordinator.fee}</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4"
                            >
                                <div className="w-16 h-16 bg-blue-50 text-cu-blue rounded-2xl flex items-center justify-center">
                                    <User className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Coordinator</h3>
                                    <p className="text-xl font-bold text-gray-800">{coordinator.name}</p>
                                    <div className="flex space-x-2 mt-1">
                                        {coordinator.phones.map(p => (
                                            <span key={p} className="text-xs font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-600 font-bold">{p}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Info Alert */}
                        <div className="bg-blue-600 rounded-2xl p-6 text-white flex items-start space-x-4 shadow-xl shadow-blue-900/10">
                            <Info className="w-6 h-6 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-lg mb-1">Important Notice</p>
                                <p className="text-blue-100 text-sm leading-relaxed font-medium">
                                    Bus Number, Route, and Driver details are subject to change based on requirements. Any changes will be promptly communicated to all concerned students and staff members.
                                </p>
                            </div>
                        </div>

                        {/* Navigation Tabs */}
                        <div className="flex overflow-x-auto space-x-2 p-1 bg-gray-100 rounded-2xl scrollbar-hide">
                            {[
                                { id: 'routes', label: 'Route Sheet', icon: <MapPin className="w-4 h-4" /> },
                                { id: 'drivers', label: 'Driver Details', icon: <User className="w-4 h-4" /> },
                                { id: 'allotments', label: 'Bus Allotments', icon: <ChevronDown className="w-4 h-4" /> },
                                { id: 'account', label: 'Registry Details', icon: <ShieldCheck className="w-4 h-4" /> }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activeTab === tab.id
                                            ? "bg-white text-cu-blue shadow-sm"
                                            : "text-gray-500 hover:text-gray-800"
                                        }`}
                                >
                                    {tab.icon}
                                    <span>{tab.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden"
                            >
                                {activeTab === 'routes' && (
                                    <div className="p-2">
                                        <div className="flex justify-between items-center px-8 py-6 border-b border-gray-50 mb-2">
                                            <h2 className="text-2xl font-bold text-gray-800">Comprehensive Route Sheet</h2>
                                            <span className="text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full uppercase tracking-widest">Active Routes</span>
                                        </div>
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left">
                                                <thead className="bg-gray-50 text-gray-600 uppercase text-[10px] font-black tracking-[0.15em]">
                                                    <tr>
                                                        <th className="px-8 py-4">Reg. No</th>
                                                        <th className="px-8 py-4">Timing</th>
                                                        <th className="px-8 py-4">Detailed Route Plan</th>
                                                        <th className="px-8 py-4">Assigned Driver</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-50">
                                                    {busRoutes.map((row, idx) => (
                                                        <tr key={idx} className="hover:bg-blue-50/40 transition-colors group">
                                                            <td className="px-8 py-5 font-bold text-cu-blue whitespace-nowrap group-hover:scale-105 transition-transform origin-left">{row.no}</td>
                                                            <td className="px-8 py-5 font-mono text-xs font-black text-gray-400 bg-gray-50/50">{row.time}</td>
                                                            <td className="px-8 py-5 text-sm text-gray-600 leading-relaxed max-w-sm">{row.route}</td>
                                                            <td className="px-8 py-5">
                                                                <div className="flex flex-col">
                                                                    <span className="font-bold text-gray-800 text-sm">{row.driver}</span>
                                                                    <div className="flex items-center text-cu-blue font-bold text-xs mt-1">
                                                                        <Phone className="w-3 h-3 mr-1" />
                                                                        {row.contact}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'drivers' && (
                                    <div className="p-2">
                                        <div className="flex justify-between items-center px-8 py-6 border-b border-gray-50 mb-2">
                                            <h2 className="text-2xl font-bold text-gray-800">Bus Drivers Directory</h2>
                                            <span className="text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full uppercase tracking-widest">Contact Info</span>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                                            {drivers.map((d, i) => (
                                                <div key={i} className="flex items-center p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-cu-blue transition-colors group">
                                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-cu-blue group-hover:bg-cu-blue group-hover:text-white transition-all shadow-sm">
                                                        <User className="w-6 h-6" />
                                                    </div>
                                                    <div className="ml-4 flex-grow">
                                                        <p className="font-black text-gray-800 uppercase tracking-tight text-sm">{d.name}</p>
                                                        <p className="text-xs font-bold text-gray-400">{d.no}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-sm font-mono font-black text-cu-blue">{d.contact}</p>
                                                        <p className="text-[10px] font-black text-gray-300 uppercase">Direct Line</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'allotments' && (
                                    <div className="p-8 space-y-12">
                                        <h2 className="text-3xl font-black text-gray-800 tracking-tight text-center">Sectional Allotments</h2>

                                        {[
                                            { title: "RYMEC - Ballari", data: allotments.rymec, color: "text-cu-blue" },
                                            { title: "Kittur Rani Chennamma School (KRC)", data: allotments.krc, color: "text-purple-600" },
                                            { title: "Vivekananda School – Siruguppa", data: allotments.vivekananda, color: "text-emerald-600" },
                                            { title: "Arunodaya School - H.B. Halli", data: allotments.arunodaya, color: "text-orange-600" }
                                        ].map((sec, idx) => (
                                            <div key={idx} className="space-y-4">
                                                <div className="flex items-center space-x-4">
                                                    <div className={`h-8 w-1.5 rounded-full ${sec.color.replace('text', 'bg')}`}></div>
                                                    <h3 className={`text-xl font-black uppercase tracking-wider ${sec.color}`}>{sec.title}</h3>
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                    {sec.data.map((bus, bi) => (
                                                        <div key={bi} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex justify-between items-center group hover:bg-white hover:shadow-md transition-all">
                                                            <div>
                                                                <p className="font-bold text-gray-800">{bus.no}</p>
                                                                <p className="text-[10px] text-gray-400 font-bold uppercase">{bus.size}</p>
                                                            </div>
                                                            <div className="text-right">
                                                                <p className="text-xs font-mono font-medium text-gray-400">{bus.regDate}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'account' && (
                                    <div className="p-2">
                                        <div className="flex justify-between items-center px-8 py-6 border-b border-gray-50 mb-2">
                                            <h2 className="text-2xl font-bold text-gray-800">Master Registry</h2>
                                            <span className="text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full uppercase tracking-widest">Historical Data</span>
                                        </div>
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left">
                                                <thead className="bg-gray-50 text-gray-600 uppercase text-[10px] font-black tracking-[0.15em]">
                                                    <tr>
                                                        <th className="px-8 py-4">SL.</th>
                                                        <th className="px-8 py-4">Bus No</th>
                                                        <th className="px-8 py-4">Reg. Date</th>
                                                        <th className="px-8 py-4">Category</th>
                                                        <th className="px-8 py-4">Allotment Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-50">
                                                    {busAccountDetails.map((row, idx) => (
                                                        <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                                                            <td className="px-8 py-4 text-xs font-black text-gray-300">{row.sl}</td>
                                                            <td className="px-8 py-4 font-bold text-gray-800">{row.no}</td>
                                                            <td className="px-8 py-4 text-xs font-mono">{row.regDate}</td>
                                                            <td className="px-8 py-4 text-xs font-bold text-gray-500">{row.size || 'N/A'}</td>
                                                            <td className="px-8 py-4">
                                                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${row.remarks.includes('sold') ? 'bg-red-50 text-red-500' : 'bg-emerald-50 text-emerald-600'
                                                                    }`}>
                                                                    {row.remarks}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        {/* Summary Footer */}
                        <div className="bg-gray-100 rounded-[2rem] p-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                            <div>
                                <h4 className="text-xl font-black text-gray-800 mb-2">Need Help with Navigation?</h4>
                                <p className="text-gray-500 text-sm font-medium">Our transport office is available from 8:00 AM to 6:00 PM for all student inquiries.</p>
                            </div>
                            <button className="bg-cu-blue text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-700 transition-all flex items-center space-x-2">
                                <Phone className="w-4 h-4" />
                                <span>Contact Transport Office</span>
                            </button>
                        </div>
                    </div>

                    {/* Sidebar Links */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sticky top-24">
                            <h4 className="text-xl font-black text-gray-800 mb-8 border-b pb-4 tracking-tighter uppercase flex items-center">
                                <Clock className="w-5 h-5 mr-3 text-cu-gold" />
                                Navigation
                            </h4>
                            <ul className="space-y-3">
                                {facilities.map((item, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={item.href}
                                            className={`group flex items-center justify-between p-4 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all duration-300 ${item.active
                                                    ? "bg-cu-blue text-white shadow-xl shadow-blue-400/20 translate-x-2"
                                                    : "text-gray-400 hover:bg-gray-50 hover:text-cu-blue hover:translate-x-1 border border-transparent hover:border-gray-200"
                                                }`}
                                        >
                                            <span>{item.name}</span>
                                            {item.active ? <ChevronDown className="w-4 h-4 rotate-[-90deg]" /> : <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 bg-cu-gold/5 p-6 rounded-3xl border border-cu-gold/10">
                                <p className="text-[10px] font-black uppercase text-cu-gold tracking-widest mb-2 text-center">Accreditation</p>
                                <div className="text-center font-black text-gray-800 text-xl tracking-tighter">
                                    NAAC A+ <span className="text-cu-gold text-xs block opacity-50 font-bold uppercase tracking-normal">Institution</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transport;
