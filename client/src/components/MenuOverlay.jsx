import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import Logo
import logo from '../assets/rymec/vvs-logo.jpg';

const MenuOverlay = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('main');
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const tabs = [
        { id: 'main', label: 'Main Navigation' },
        { id: 'tools', label: 'Tools & Resources' },
    ];

    const menuItems = {
        main: [
            {
                title: 'About Us',
                links: [
                    { name: 'About RYMEC', href: '/about-rymec' },
                    { name: 'About V.V. Sangha', href: '/about-vv-sangha' },
                    { name: 'Principal\'s Message', href: '/principals-message' },
                    { name: 'Governing Body', href: '/governing-body' },
                    { name: 'Administration', href: '/administration' },
                    { name: 'Staff Details', href: '/staff-details' },
                    { name: 'Statutory', href: '/statutory' },
                    { name: 'Executive Council', href: '/executive-council' },
                    { name: 'Institute Industry Interaction Cell(IIIC)', href: '/iiic' },
                    { name: 'Internal Quality Assurance Cell (IQAC)', href: '/iqac' },
                    { name: 'Annual Reports(Finance)', href: '/annual-reports' },
                    { name: 'Life at RYMEC', href: '/life-at-rymec' },
                ]
            },
            {
                title: 'IQAC',
                links: [
                    { name: 'About IQAC', href: '/iqac' },
                    { name: 'IQAC Committee', href: '/iqac/committee' },
                    { name: 'IQAC MOM’s', href: '/iqac/moms' },
                    { name: 'IQAC AQAR Reports', href: '/iqac/aqar-reports' },
                    { name: 'IQAC Audit Report', href: '/iqac/audit-report' },
                    { name: 'IQAC Accrediation', href: '/iqac/accreditation' },
                    { name: 'IQAC Others', href: '/iqac/others' },
                    { name: 'IQAC Best Practices', href: '/iqac/best-practices' },
                    { name: 'IQAC Feedback', href: '/iqac/feedback' },
                ]
            },
            {
                title: 'Programs',
                links: [
                    {
                        name: 'Undergraduate',
                        subItems: [
                            { name: 'Civil Engineering', href: '/department/civil-engineering' },
                            { name: 'Mechanical Engineering', href: '/department/mechanical-engineering' },
                            { name: 'Electrical & Electronics Engineering', href: '/department/electrical-electronics-engineering' },
                            { name: 'Electronics & Communication Engineering', href: '/department/electronics-communication-engineering' },
                            { name: 'Computer Science & Engineering', href: '/department/computer-science-engineering' },
                            { name: 'Computer Science & Engineering (Cyber Security)', href: '/department/computer-science-engineering-cyber-security' },
                            { name: 'CSE – Artificial Intelligence and Machine Learning', href: '/department/cse-artificial-intelligence-and-machine-learning' },
                            { name: 'Information Science & Engineering', href: '/department/information-science-engineering' },
                            { name: 'CSE – Data Science', href: '/department/cse-data-science' },
                        ]
                    },
                    {
                        name: 'Postgraduate',
                        subItems: [
                            { name: 'Master of Business Administration (MBA)', href: '/department/master-of-business-administration' },
                            { name: 'M.Tech in Computer Science', href: '/department/m-tech-in-computer-science' },
                            { name: 'M.Tech in Production Management', href: '/department/m-tech-in-production-management' },
                            { name: 'M. Tech in VLSI Design & Embedded Systems', href: '/department/m-tech-in-vlsi-design-embedded-systems' },
                            { name: 'M.Tech in Structural Engineering', href: '/department/m-tech-in-structural-engineering' },
                            { name: 'Master of Computer Applications', href: '/department/master-of-computer-applications' },
                        ]
                    },
                    {
                        name: 'Basic Science',
                        subItems: [
                            { name: 'Mathematics Department', href: '/department/mathematics-department' },
                            { name: 'Physics Department', href: '/department/physics-department' },
                            { name: 'Chemistry Department', href: '/department/chemistry-department' },
                        ]
                    },
                ]
            },
            {
                title: 'Academics',
                links: [
                    { name: 'Academic Calendar', href: '/academic-calendar' },
                    { name: 'Circulars & Notifications', href: '/circulars-notifications' },
                    { name: 'Regulations', href: '/regulations' },
                    { name: 'AICTE feedback', href: '/aicte-feedback' },
                    { name: 'Institutional Committee', href: '/institutional-committee' },
                ]
            },
            {
                title: 'Admissions',
                links: [
                    { name: 'Notifications', href: '/notifications' },
                    { name: 'Fee Structure', href: '/fee-structure' },
                    { name: 'Guidelines', href: '/guidelines' },
                    { name: 'Admission Enquiry', href: '/admission-enquiry' },
                ]
            },
            {
                title: 'Research',
                links: [
                    { name: 'About R&D', href: '/about-rd' },
                    { name: 'Research Centres', href: '/research-centres' },
                    { name: 'Funded and Sponsored Projects', href: '/funded-and-sponsored-projects' },
                    { name: 'Research Incentives', href: '/research-incentives' },
                    { name: 'Ph.D Awarded and Enrolled', href: '/phd-awarded' },
                    { name: 'Patents', href: '/patents' },
                    { name: 'Industrial Collaboration & MOUs', href: '/industrial-collaboration-mous' },
                    { name: 'RIIC', href: '/riic' },
                ]
            },
            {
                title: 'Innovation & Incubation',
                links: [
                    { name: 'RIIC', href: '/riic' },
                    { name: 'NAIN', href: '/nain' },
                    { name: 'Entrepreneurship Development Cell', href: '/entrepreneurship-development-cell' },
                    { name: 'Information & Communication Technology (ICT)', href: '/ict' },
                    { name: 'Dean Innovation', href: '/dean-innovation' },
                    { name: 'About CIIE', href: '/about-ciie' },
                    { name: 'CIIE Incubates', href: '/ciie-incubates' },
                    { name: 'CIIE Team', href: '/ciie-team' },
                    { name: 'CIIE Advisors', href: '/ciie-advisors' },
                    { name: 'CIIE Mentors', href: '/ciie-mentors' },
                    { name: 'CIIE Developers Wing Blogs', href: '/ciie-blogs' },
                    { name: 'Faculty Coordinators', href: '/innovation-faculty' },
                    { name: 'Student Coordinators', href: '/innovation-students' },
                    { name: 'Activities', href: '/activities' },
                    { name: 'Other Information', href: '/other-information' },
                    { name: 'Contact Us', href: '/innovation-contact' },
                ]
            },
            {
                title: 'COE',
                links: [
                    { name: 'TRD Centre', href: '/trd-centre' },
                    { name: 'AMC Centre', href: '/amc-centre' },
                    { name: 'MoU/Collaboration', href: '/mou-collaboration' },
                ]
            },
            {
                title: 'Library',
                links: [
                    { name: 'Library', href: '/library' },
                ]
            },
            {
                title: 'News & Events',
                links: [
                    { name: 'News & Events', href: '/news-events' },
                ]
            },
            {
                title: 'Placements',
                links: [
                    { name: 'About Placements', href: '/about-placements' },
                    { name: 'Placement Training', href: '/placement-training' },
                    { name: 'Placement Achievements', href: '/placement-achievements' },
                    { name: 'Staff', href: '/placement-staff' },
                    { name: 'Placement Statistics', href: '/placement-statistics' },
                    { name: 'Placement Activities', href: '/placement-activities' },
                    { name: 'Recruiting Companies', href: '/recruiting-companies' },
                ]
            },
            {
                title: 'Facilities',
                links: [
                    { name: 'ICT', href: '/ict' },
                    { name: 'Auditorium', href: '/auditorium' },
                    { name: 'Sports', href: '/sports' },
                    { name: 'Medical Centre', href: '/medical-centre' },
                    { name: 'Hostel', href: '/hostel' },
                    { name: 'Transport', href: '/transport' },
                    { name: 'Bank', href: '/bank' },
                    { name: 'Differently-abled', href: '/differently-abled' },
                ]
            },
            {
                title: 'Documents',
                links: [
                    { name: 'NAAC', href: '/naac' },
                    { name: 'NBA', href: '/nba' },
                    { name: 'NIRF', href: '/nirf' },
                    { name: 'ARIIA', href: '/ariia' },
                    { name: 'AICTE', href: '/aicte' },
                    { name: 'VTU', href: '/vtu' },
                    { name: 'Grievance Redressal', href: '/grievance-redressal' },
                    { name: 'Newsletter', href: '/newsletter' },
                    { name: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
                ]
            },
            {
                title: 'Activities',
                links: [
                    { name: 'NSS/ NCC/ IRCS', href: '/nss-ncc-ircs' },
                    { name: 'Student Verification Details', href: '/student-verification-details' },
                ]
            },
            {
                title: 'Contact Us',
                links: [
                    { name: 'Contact Us', href: '/contact-us' },
                ]
            }
        ],
        tools: [
            {
                title: 'Student Services',
                links: [
                    { name: 'Student Login', href: '/student-login' },
                    { name: 'Results', href: '/results' },
                ]
            },
            {
                title: 'Staff Services',
                links: [
                    { name: 'Staff Login', href: '/staff-login' },
                    { name: 'Leave Management', href: '/leave-mgmt' },
                ]
            }
        ]
    };

    const events = [
        { date: 'Jan 28', year: '2026', title: 'Tech Symposium 2026', location: 'Main Auditorium' },
        { date: 'Feb 10', year: '2026', title: 'Annual Sports Meet', location: 'College Ground' },
        { date: 'Feb 15', year: '2026', title: 'Start-up Incubation Workshop', location: 'Seminar Hall' },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black z-40"
                    />

                    {/* Slide-in Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.4 }}
                        className="fixed top-0 right-0 w-full md:w-[85vw] lg:w-[75vw] xl:w-[65vw] h-full bg-white z-50 shadow-2xl overflow-y-auto"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-50"
                        >
                            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="flex flex-col lg:flex-row min-h-full">

                            {/* LEFT COLUMN: EVENTS */}
                            <div className="w-full lg:w-7/12 bg-gray-50 p-8 lg:p-12 border-r border-gray-200">
                                <div className="flex items-center gap-4 mb-10">
                                    <img src={logo} alt="RYMEC Logo" className="h-16 mix-blend-multiply" />
                                    <h2 className="text-3xl font-display font-bold text-cu-blue">Campus Events</h2>
                                </div>

                                <div className="space-y-6">
                                    {events.map((event, idx) => (
                                        <div key={idx} className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-6">
                                            <div className="flex-shrink-0 text-center w-20 p-2 bg-blue-50 rounded-lg group-hover:bg-cu-blue group-hover:text-white transition-colors">
                                                <div className="text-sm font-bold uppercase">{event.date.split(' ')[0]}</div>
                                                <div className="text-2xl font-bold">{event.date.split(' ')[1]}</div>
                                                <div className="text-xs opacity-80">{event.year}</div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-cu-blue transition-colors">{event.title}</h3>
                                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                    {event.location}
                                                </div>
                                                <a href="#" className="inline-flex items-center text-sm font-semibold text-cu-blue hover:text-cu-gold transition-colors">
                                                    Read more <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10">
                                    <a href="/events" className="text-cu-blue font-semibold hover:underline flex items-center gap-2">
                                        View all events <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </a>
                                </div>
                            </div>

                            {/* RIGHT COLUMN: NAVIGATION */}
                            <div className="w-full lg:w-5/12 bg-white flex flex-col">

                                {/* Tab Switcher */}
                                <div className="flex border-b border-gray-200">
                                    {tabs.map(tab => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`flex-1 py-6 text-center font-bold text-sm tracking-wide transition-colors relative
                                        ${activeTab === tab.id ? 'text-cu-blue bg-blue-50/50' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'}
                                    `}
                                        >
                                            {tab.label}
                                            {activeTab === tab.id && (
                                                <motion.div layoutId="activeTabIndicator" className="absolute bottom-0 left-0 w-full h-1 bg-cu-blue" />
                                            )}
                                        </button>
                                    ))}
                                </div>

                                {/* Menu Items */}
                                <div className="flex-1 overflow-y-auto p-8">
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">
                                        {activeTab === 'main' ? 'Explore RYMEC' : 'Quick Actions'}
                                    </h3>

                                    <div className="space-y-2">
                                        {menuItems[activeTab].map((section, idx) => (
                                            <div key={idx} className="border-b border-gray-100 last:border-0 pb-2">
                                                <button
                                                    onClick={() => toggleAccordion(idx)}
                                                    className="w-full flex items-center justify-between py-3 text-left group"
                                                >
                                                    <span className={`text-lg font-bold transition-colors ${openAccordion === idx ? 'text-cu-blue' : 'text-gray-700 group-hover:text-cu-blue'}`}>
                                                        {section.title}
                                                    </span>
                                                    <span className={`transition-transform duration-300 ${openAccordion === idx ? 'rotate-180 text-cu-blue' : 'text-gray-400'}`}>
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                    </span>
                                                </button>

                                                <AnimatePresence>
                                                    {openAccordion === idx && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <ul className="pl-4 pb-4 space-y-2">
                                                                {section.links.map((link, linkIdx) => (
                                                                    <li key={linkIdx}>
                                                                        {link.subItems ? (
                                                                            <div className="py-1">
                                                                                <span className="block text-sm font-bold text-gray-800 mb-2">{link.name}</span>
                                                                                <ul className="pl-3 border-l-2 border-gray-100 space-y-2">
                                                                                    {link.subItems.map((subLink, subIdx) => (
                                                                                        <li key={subIdx}>
                                                                                            <Link
                                                                                                to={subLink.href}
                                                                                                className="block text-gray-600 hover:text-cu-gold text-sm"
                                                                                                onClick={onClose}
                                                                                            >
                                                                                                {subLink.name}
                                                                                            </Link>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        ) : (
                                                                            <Link
                                                                                to={link.href}
                                                                                className="block py-1 text-gray-600 hover:text-cu-gold transition-colors text-sm"
                                                                                onClick={onClose}
                                                                            >
                                                                                {link.name}
                                                                            </Link>
                                                                        )}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Action Buttons */}
                                <div className="p-8 border-t border-gray-200 grid grid-cols-2 gap-4 bg-gray-50">
                                    <Link to="/admission-enquiry" className="flex items-center justify-center gap-2 py-3 px-4 bg-cu-blue text-white rounded-lg font-bold hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20">
                                        <span>Admission</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </Link>
                                    <Link to="/examination" className="flex items-center justify-center gap-2 py-3 px-4 bg-white border-2 border-cu-blue text-cu-blue rounded-lg font-bold hover:bg-blue-50 transition-colors">
                                        <span>Examination</span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MenuOverlay;
