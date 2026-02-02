import React from 'react';
import { motion } from 'framer-motion';
import {
    Phone,
    Mail,
    MapPin,
    MessageSquare,
    Send,
    User,
    Building,
    Link as LinkIcon,
    ChevronRight,
    Map as MapIcon,
    Headphones,
    Facebook,
    Twitter,
    Youtube
} from 'lucide-react';

const ContactUs = () => {
    const adminContacts = [
        {
            name: "Dr. Rajasekaran Shanmugam",
            designation: "Principal",
            phone: "+91-9448043949",
            email: "principal@rymec.in",
            icon: Headphones
        },
        {
            name: "Dr. Savita Sonoli",
            designation: "Vice Principal & Head, ECE",
            phone: "+91-9343553487",
            email: "savitachitriki@gmail.com",
            icon: User
        },
        {
            name: "Dr. H Girisha",
            designation: "Dean (Academics) & Head, CSE",
            phone: "+91-9449135047",
            email: "hosalligiri@gmail.com",
            icon: User
        }
    ];

    const departmentContacts = [
        {
            dept: "Mechanical Engineering",
            head: "Dr. Kori Nagaraj",
            phone: "+91-9448576434",
            email: "hodmechrymec@gmail.com"
        },
        {
            dept: "Civil Engineering",
            head: "Dr. H M Mallikarjuna",
            phone: "N/A",
            email: "malli3765@gmail.com"
        },
        {
            dept: "Electrical & Electronics",
            head: "Dr. S. Kotresh",
            phone: "+91-9986275325",
            email: "kotreshshanbhog@gmail.com"
        },
        {
            dept: "Information Science",
            head: "Dr. B Sreepathi",
            phone: "+91-9448173113",
            email: "sreepathib@gmail.com"
        },
        {
            dept: "Mathematics (1st Year)",
            head: "Dr. Jeevaragi Phakirappa",
            phone: "+91-9449790305",
            email: "rymecjp@gmail.com"
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
                            <MessageSquare className="w-5 h-5 flex-shrink-0" />
                            <span className="text-sm font-bold tracking-widest uppercase italic">Get in Touch</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-7xl font-bold font-display mb-8"
                        >
                            Contact <span className="text-cu-gold uppercase">Us</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xl text-blue-100/90 leading-relaxed font-light max-w-2xl mx-auto italic"
                        >
                            "We're Always Eager to Hear From You! Reach out to our administration or specific departments for any assistance."
                        </motion.p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-16 relative z-20 max-w-7xl">
                {/* Main Contact Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {[
                        { icon: Phone, title: "Phone Support", value: "08392-244809", sub: "Fax: 08392-242148", color: "blue" },
                        { icon: Mail, title: "Email Address", value: "principal@rymec.in", sub: "For general inquiries", color: "gold" },
                        { icon: MapPin, title: "Our Location", value: "Cantonment, Ballari", sub: "Karnataka 583104", color: "rose" }
                    ].map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 group hover:border-cu-blue/30 transition-all duration-500"
                        >
                            <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-transform group-hover:scale-110 duration-500 ${card.color === 'blue' ? 'bg-blue-50 text-cu-blue' :
                                    card.color === 'gold' ? 'bg-amber-50 text-cu-gold' : 'bg-rose-50 text-rose-500'
                                }`}>
                                <card.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
                            <p className="text-lg font-bold text-cu-blue mb-1">{card.value}</p>
                            <p className="text-gray-500 text-sm font-medium">{card.sub}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Administration Contacts */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-10 w-2 bg-cu-gold rounded-full"></div>
                                <h2 className="text-3xl font-bold text-cu-blue font-display tracking-tight">College Administration</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {adminContacts.map((contact, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5 }}
                                        className="bg-white rounded-[2.5rem] p-8 shadow-lg shadow-gray-100 border border-gray-100 relative overflow-hidden group"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -mr-16 -mt-16 group-hover:bg-cu-blue/5 transition-colors"></div>
                                        <div className="relative z-10">
                                            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-cu-blue mb-6 group-hover:bg-cu-blue group-hover:text-white transition-all">
                                                <contact.icon className="w-7 h-7" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">{contact.name}</h3>
                                            <p className="text-cu-gold font-bold text-sm uppercase tracking-wider mb-6">{contact.designation}</p>
                                            <div className="space-y-3">
                                                <a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-gray-600 hover:text-cu-blue transition-colors text-sm font-medium">
                                                    <Phone className="w-4 h-4" /> {contact.phone}
                                                </a>
                                                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-gray-600 hover:text-cu-blue transition-colors text-sm font-medium">
                                                    <Mail className="w-4 h-4" /> {contact.email}
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-10 w-2 bg-cu-blue rounded-full"></div>
                                <h2 className="text-3xl font-bold text-cu-blue font-display tracking-tight">Departmental Heads</h2>
                            </div>
                            <div className="bg-white rounded-[3rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-gray-50">
                                                <th className="px-8 py-6 text-sm font-bold text-cu-blue uppercase tracking-widest">Department</th>
                                                <th className="px-8 py-6 text-sm font-bold text-cu-blue uppercase tracking-widest">Head of Department</th>
                                                <th className="px-8 py-6 text-sm font-bold text-cu-blue uppercase tracking-widest">Contact Details</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {departmentContacts.map((contact, idx) => (
                                                <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                                                    <td className="px-8 py-6">
                                                        <span className="font-bold text-gray-800">{contact.dept}</span>
                                                    </td>
                                                    <td className="px-8 py-6">
                                                        <span className="text-gray-600 font-medium">{contact.head}</span>
                                                    </td>
                                                    <td className="px-8 py-6">
                                                        <div className="flex flex-col gap-1">
                                                            <a href={`tel:${contact.phone}`} className="text-sm font-bold text-cu-blue hover:text-cu-gold transition-colors">{contact.phone}</a>
                                                            <a href={`mailto:${contact.email}`} className="text-xs text-gray-500 hover:text-cu-blue font-medium">{contact.email}</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-3xl font-bold text-cu-blue font-display">Find Us on Map</h3>
                                <MapIcon className="w-10 h-10 text-cu-gold/20" />
                            </div>
                            <div className="rounded-3xl overflow-hidden shadow-inner bg-gray-100 aspect-video lg:aspect-auto lg:h-[450px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30809.511895824628!2d76.8920550398246!3d15.147962349844617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb713db00000001%3A0xc51f04b704fb40db!2sRao%20Bahadur%20Y%20Mahabaleswarappa%20Engineering%20College!5e0!3m2!1sen!2sin!4v1669860769592!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="RYMEC Location"
                                ></iframe>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar / Form */}
                    <div className="space-y-8">
                        <div className="bg-[#121c3d] text-white rounded-[3.5rem] p-10 relative overflow-hidden group shadow-2xl sticky top-24">
                            <div className="absolute top-0 right-0 p-8 opacity-5 scale-150 rotate-12">
                                <Send className="w-32 h-32" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-cu-gold">
                                        <MessageSquare className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold italic">Enquiry Form</h3>
                                </div>

                                <p className="text-blue-200/70 text-sm mb-10 leading-relaxed font-medium">
                                    "Have a question or need counseling for admissions? Fill out the form and our team will get back to you shortly."
                                </p>

                                <form className="space-y-6">
                                    <div className="space-y-4">
                                        {[
                                            { label: "Your Full Name", icon: User, type: "text", placeholder: "e.g. Rahul Kumar" },
                                            { label: "Email Address", icon: Mail, type: "email", placeholder: "e.g. rahul@example.com" },
                                            { label: "Phone Number", icon: Phone, type: "tel", placeholder: "e.g. +91 98765 43210" }
                                        ].map((field, idx) => (
                                            <div key={idx} className="group/field">
                                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200/40 block mb-2 px-1">
                                                    {field.label}
                                                </label>
                                                <div className="relative">
                                                    <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-200/30 group-focus-within/field:text-cu-gold transition-colors" />
                                                    <input
                                                        type={field.type}
                                                        placeholder={field.placeholder}
                                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-cu-gold/20 focus:border-cu-gold/40 transition-all placeholder:text-blue-200/20"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        <div className="group/field">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200/40 block mb-2 px-1">
                                                Your Message
                                            </label>
                                            <textarea
                                                rows="4"
                                                placeholder="Enter your message here..."
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-cu-gold/20 focus:border-cu-gold/40 transition-all placeholder:text-blue-200/20 resize-none"
                                            ></textarea>
                                        </div>
                                    </div>

                                    <button className="w-full bg-cu-gold hover:bg-amber-400 text-cu-blue font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-cu-gold/10 group/btn">
                                        Send Message
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </form>

                                <div className="mt-12 pt-12 border-t border-white/10">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200/40 block mb-6 px-1">
                                        Follow Our Updates
                                    </span>
                                    <div className="flex gap-4">
                                        {[
                                            { icon: Facebook, label: "Facebook", link: "https://www.facebook.com/RYMEC1980/" },
                                            { icon: Twitter, label: "Twitter", link: "https://twitter.com/rymec_ballari" },
                                            { icon: Youtube, label: "Youtube", link: "https://www.youtube.com/channel/UC-cJAVmR8yqtFbLSZGyiPDw/videos" }
                                        ].map((social, idx) => (
                                            <a
                                                key={idx}
                                                href={social.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cu-gold hover:text-cu-blue transition-all"
                                                title={social.label}
                                            >
                                                <social.icon className="w-5 h-5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
