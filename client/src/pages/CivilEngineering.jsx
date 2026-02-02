import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    Target,
    BookOpen,
    MapPin,
    Award,
    FileText,
    FlaskConical,
    Briefcase,
    Newspaper,
    MessageSquare,
    Image as ImageIcon,
    Download,
    ChevronRight,
    Search,
    List,
    Layers,
    PieChart,
    Cpu,
    CheckCircle2,
    Trophy,
    ExternalLink
} from 'lucide-react';

const CivilEngineering = () => {
    const [activeTab, setActiveTab] = useState('about');

    const images = [
        "https://rymec.edu.in/wp-content/uploads/2024/06/IMG-20210814-WA0045.jpg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/IMG-20210814-WA0038.jpg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/1628954896541-scaled.jpg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/1628954896537-scaled.jpg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/DSC01106.jpg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/DSC01106-1.jpg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/1.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/2.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/3.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/4.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/5.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/7.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/8.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/6.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/9.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/10.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/11.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/12.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/13.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/15.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/16.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/14.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/17.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/18.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/19.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/20.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/21.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/22.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/23.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/IMG_20210401_172240-scaled.jpg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/IMG_20210401_172250-scaled.jpg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/IMG_20210401_172416-scaled.jpg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/IMG_20210401_180022-scaled.jpg",
        "https://rymec.edu.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-03-at-1.59.11-PM-1.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-03-at-1.59.11-PM.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-03-at-1.59.12-PM.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-03-at-1.59.10-PM-1.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-03-at-1.59.09-PM.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-03-at-1.57.13-PM.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-03-at-1.59.09-PM-1.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-03-at-1.59.10-PM.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-03-at-1.57.11-PM.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-03-at-1.57.12-PM.jpeg",
        "https://rymec.edu.in/wp-content/uploads/2023/06/IMG_6857-scaled.jpg",
        "https://rymec.edu.in/wp-content/uploads/2023/06/IMG_6858-scaled.jpg",
        "https://rymec.edu.in/wp-content/uploads/2023/06/IMG_6861-scaled.jpg",
        "https://rymec.edu.in/wp-content/uploads/2023/06/IMG_6862-scaled.jpg",
        "https://rymec.edu.in/wp-content/uploads/2023/06/IMG_8210-scaled.jpg",
        "https://rymec.edu.in/wp-content/uploads/2023/06/IMG_8211-scaled.jpg",
        "https://rymec.edu.in/wp-content/uploads/2023/06/IMG_8212-scaled.jpg",
        "https://rymec.edu.in/wp-content/uploads/2023/06/IMG_8214-scaled.jpg",
        "https://rymec.edu.in/wp-content/uploads/2023/06/IMG_8533-scaled.jpg",
        "https://rymec.edu.in/wp-content/uploads/2023/06/IMG_8534-scaled.jpg"
    ];

    const faculty = [
        {
            name: "Dr. M. S. Shobha",
            role: "HOD & Associate Professor",
            img: "https://rymec.edu.in/wp-content/uploads/2025/12/HOD-Civil.jpg",
            specialization: "Structural Engineering",
            profile: "https://rymec.edu.in/faculty/dr-m-s-shobha-2/"
        },
        {
            name: "Mr. Basavaprabhu M. S",
            role: "Assistant Professor",
            img: "https://rymec.edu.in/wp-content/uploads/2023/06/5_basavaprabhu.png",
            profile: "https://rymec.edu.in/faculty/mr-basavaprabhu-m-s/"
        },
        {
            name: "Mr. Pavan Kumar.M",
            role: "Assistant Professor",
            img: "https://rymec.edu.in/wp-content/uploads/2023/06/6_pavankumar.png",
            profile: "https://rymec.edu.in/faculty/mr-pavan-kumar-m/"
        },
        {
            name: "Mr. Basavalingappa",
            role: "Assistant Professor",
            img: "https://rymec.edu.in/wp-content/uploads/2023/06/8_basavalingappa.png",
            profile: "https://rymec.edu.in/faculty/mr-basavalingappa/"
        },
        {
            name: "Mr. Veereshaiah H M",
            role: "Assistant Professor",
            img: "https://rymec.edu.in/wp-content/uploads/2023/06/7_veeresh.png",
            profile: "https://rymec.edu.in/faculty/mr-veereshaiah-h-m/"
        },
        {
            name: "Mr. Ganesh H",
            role: "Assistant Professor",
            img: "https://rymec.edu.in/wp-content/uploads/2023/06/10_ganesh-h.png",
            profile: "https://rymec.edu.in/faculty/mr-ganesh-h/"
        },
        {
            name: "Mr. Mahesh",
            role: "Assistant Professor",
            img: "https://rymec.edu.in/wp-content/uploads/2023/06/9_mahesh.png",
            profile: "https://rymec.edu.in/faculty/mr-mahesh/"
        },
        {
            name: "Mr. Manohar P",
            role: "Assistant Professor",
            img: "https://rymec.edu.in/wp-content/uploads/2023/06/11_manohar-p.png",
            profile: "https://rymec.edu.in/faculty/mr-manohar-p/"
        }
    ];

    const menuItems = [
        { id: 'about', label: 'About Course', icon: BookOpen },
        { id: 'programmes', label: 'Programmes', icon: Layers },
        { id: 'faculty', label: 'Faculty Members', icon: Users },
        { id: 'laboratory', label: 'Laboratories', icon: FlaskConical },
        { id: 'academics', label: 'Academics', icon: BookOpen },
        { id: 'syllabus', label: 'Syllabus/Scheme', icon: FileText },
        { id: 'placement', label: 'Placement/Internship', icon: Briefcase },
        { id: 'randd', label: 'Research & Consultancy', icon: Search },
        { id: 'publications', label: 'Publications & Patents', icon: FileText },
        { id: 'activities', label: 'Student Activities', icon: Target },
        { id: 'achievements', label: 'Achievements & Awards', icon: Award },
        { id: 'newsletter', label: 'Newsletter', icon: Newspaper },
        { id: 'commitee', label: 'Commitee / Cell', icon: List },
        { id: 'gallery', label: 'Gallery', icon: ImageIcon }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                        {/* HOD Message */}
                        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform group-hover:scale-[1.7]">
                                <MessageSquare className="w-32 h-32 text-cu-blue" />
                            </div>
                            <div className="w-64 h-64 flex-shrink-0 rounded-[2rem] overflow-hidden border-4 border-cu-blue/10 shadow-2xl relative z-10">
                                <img src="https://rymec.edu.in/wp-content/uploads/2025/12/HOD-Civil.jpg" alt="Dr. M.S. Shobha" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="flex-1 relative z-10 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-cu-blue text-xs font-bold uppercase tracking-widest mb-6 italic">
                                    <MessageSquare className="w-3 h-3" />
                                    Head of Department
                                </div>
                                <h3 className="text-3xl font-bold text-cu-blue mb-4 font-display">Message from the <span className="text-cu-gold uppercase">HOD</span></h3>
                                <p className="text-gray-600 leading-relaxed italic text-lg mb-6">
                                    "The Department of Civil Engineering has been imparting quality education to meet the technological advancement and industrial requirements. Our well-equipped laboratories where students are trained to be proficient in various fields of civil engineering."
                                </p>
                                <div className="space-y-1">
                                    <h4 className="text-xl font-bold text-gray-900 italic">Dr. M. S. Shobha</h4>
                                    <p className="text-cu-gold font-bold text-sm uppercase tracking-widest italic">HOD & Associate Professor</p>
                                </div>
                            </div>
                        </div>

                        {/* Vision & Mission */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-[#121c3d] text-white rounded-[3rem] p-10 relative overflow-hidden group shadow-2xl">
                                <div className="absolute top-0 right-0 p-8 opacity-5 scale-150 rotate-12 group-hover:scale-[1.7] transition-transform">
                                    <Target className="w-32 h-32" />
                                </div>
                                <h3 className="text-3xl font-bold mb-6 italic relative z-10">Vision</h3>
                                <p className="text-blue-100 italic leading-relaxed relative z-10 text-lg">
                                    "To produce technically, professionally excellent, knowledgeable, socially responsible and globally Competitive Civil Engineers, committed for the sustainable development of the society."
                                </p>
                            </div>
                            <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl shadow-gray-200/50 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 scale-150 rotate-12 group-hover:scale-[1.7] transition-transform">
                                    <CheckCircle2 className="w-32 h-32 text-cu-gold" />
                                </div>
                                <h3 className="text-3xl font-bold text-cu-blue mb-6 italic relative z-10">Mission</h3>
                                <ul className="space-y-4 relative z-10">
                                    {[
                                        "To provide quality education, globally competitive for a successful career in civil engineering.",
                                        "To develop the student to pursue higher education with the state of mind of continuous upgradation",
                                        "To provide service to society through consultancy, construction protection and preservation of environment and research in civil engineering field.",
                                        "To produce exemplary professional civil engineers with entrepreneurial skill."
                                    ].map((m, i) => (
                                        <li key={i} className="flex gap-4 items-start text-gray-600 font-medium italic">
                                            <div className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 text-cu-gold border border-amber-100">
                                                <span className="text-[10px] font-bold">M{i + 1}</span>
                                            </div>
                                            <p className="text-sm leading-relaxed">{m}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* PEOs & PSOs */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl shadow-gray-200/50">
                                <h3 className="text-2xl font-bold text-cu-blue mb-8 font-display italic">Program Educational Objectives</h3>
                                <div className="space-y-6">
                                    {[
                                        { id: '1', text: "Graduate would develop successful career in Civil engineering to attend the various issues with high moral and professional standards" },
                                        { id: '2', text: "Graduate would be able to work and meet the needs of sustainable development." },
                                        { id: '3', text: "Graduate would develop the ability to pursue higher education with continuous engage in lifelong learning." }
                                    ].map((peo, i) => (
                                        <div key={i} className="flex gap-5 group/peo">
                                            <div className="text-2xl font-black text-cu-blue/10 group-hover/peo:text-cu-gold transition-colors duration-300 italic">0{peo.id}</div>
                                            <p className="text-sm text-gray-600 font-medium italic leading-relaxed pt-1">{peo.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl shadow-gray-200/50">
                                <h3 className="text-2xl font-bold text-cu-blue mb-8 font-display italic">Program Specific Outcomes</h3>
                                <div className="space-y-6">
                                    {[
                                        "Ability to plan, estimate and supervise construction activities of the Civil Engineering structures.",
                                        "Ability to identify the soils of different nature through the geotechnical investigation and provide suitable foundations to the structures.",
                                        "Ability to plan, analyze, design and to solve Environmental Engineering related problems."
                                    ].map((pso, i) => (
                                        <div key={i} className="flex gap-4 items-start group/pso">
                                            <div className="w-2 h-2 rounded-full bg-cu-gold mt-2 flex-shrink-0 group-hover/pso:scale-150 transition-transform"></div>
                                            <p className="text-sm text-gray-600 font-medium italic leading-relaxed">{pso}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* POs */}
                        <div className="bg-[#121c3d] text-white rounded-[3rem] p-10 shadow-2xl">
                            <h3 className="text-2xl font-bold mb-8 italic">Program Outcomes (POs)</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { id: '1', title: 'Engineering knowledge', text: 'Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.' },
                                    { id: '2', title: 'Problem analysis', text: 'Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.' },
                                    { id: '3', title: 'Design/development of solutions', text: 'Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.' },
                                    { id: '4', title: 'Conduct investigations of complex problems', text: 'Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.' },
                                    { id: '5', title: 'Modern tool usage', text: 'Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.' },
                                    { id: '6', title: 'The engineer and society', text: 'Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.' },
                                    { id: '7', title: 'Environment and sustainability', text: 'Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.' },
                                    { id: '8', title: 'Ethics', text: 'Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.' },
                                    { id: '9', title: 'Individual and team work', text: 'Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.' },
                                    { id: '10', title: 'Communication', text: 'Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.' },
                                    { id: '11', title: 'Project management and finance', text: 'Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.' },
                                    { id: '12', title: 'Life-long learning', text: 'Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change' }
                                ].map((po, i) => (
                                    <div key={i} className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="text-cu-gold font-black text-xl mb-2 italic">PO{po.id}</div>
                                        <h5 className="font-bold text-sm mb-2 italic text-white/90">{po.title}</h5>
                                        <p className="text-xs text-blue-100/70 italic leading-relaxed">{po.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );
            case 'programmes':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-10 w-2 bg-cu-blue rounded-full"></div>
                            <h2 className="text-3xl font-bold text-cu-blue font-display tracking-tight uppercase italic">Programmes Offered</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    type: "Under Graduate",
                                    name: "B.E. Civil Engineering",
                                    duration: "4 Years",
                                    intake: "120",
                                    desc: "Accredited by NBA Tier-II (2021-2024). Grooming future engineers with core principles and modern technology.",
                                    icon: BookOpen
                                },
                                {
                                    type: "Post Graduate",
                                    name: "M.Tech Structural Engineering",
                                    duration: "2 Years",
                                    intake: "18",
                                    desc: "Advanced specialization in structural analysis, design, and resilient infrastructure. Started in 2013.",
                                    icon: Layers
                                },
                                {
                                    type: "Research",
                                    name: "Ph.D Research Centre",
                                    duration: "3-5 Years",
                                    intake: "VTU Nominated",
                                    desc: "Recognized research center since 2014, currently guiding 10+ doctoral scholars.",
                                    icon: Search
                                }
                            ].map((prog, i) => (
                                <div key={i} className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100 group hover:border-cu-blue transition-all flex flex-col justify-between">
                                    <div>
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-cu-blue mb-6 group-hover:bg-cu-blue group-hover:text-white transition-all">
                                            <prog.icon className="w-6 h-6" />
                                        </div>
                                        <p className="text-xs font-bold text-cu-blue uppercase tracking-widest mb-2 italic">{prog.type}</p>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 italic leading-tight">{prog.name}</h3>
                                        <p className="text-gray-500 text-sm italic mb-6 leading-relaxed">{prog.desc}</p>
                                    </div>
                                    <div className="pt-6 border-t border-gray-50 flex justify-between items-center mt-auto">
                                        <div>
                                            <p className="text-[10px] text-gray-400 uppercase font-bold italic">Intake</p>
                                            <p className="font-bold text-cu-blue italic">{prog.intake}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] text-gray-400 uppercase font-bold italic">Duration</p>
                                            <p className="font-bold text-cu-gold italic">{prog.duration}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#121c3d] rounded-[3rem] p-10 text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:scale-[2] transition-transform">
                                <Award className="w-48 h-48" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 italic relative z-10">Department Highlights</h3>
                            <div className="grid md:grid-cols-2 gap-6 relative z-10">
                                {[
                                    "NBA Accredited (Tier-II) since 2021",
                                    "State-of-the-art Research Center recognized by VTU",
                                    "Highly qualified faculty with Ph.D and industry experience",
                                    "Significant consultancy revenue generation (₹11.98 Lakhs+)",
                                    "Strong industry interaction and field-oriented learning",
                                    "Active student forum 'AVIRATHA' for overall development"
                                ].map((strength, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                                        <CheckCircle2 className="w-5 h-5 text-cu-gold flex-shrink-0" />
                                        <span className="text-sm italic font-medium text-white/90">{strength}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );
            case 'faculty':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-10 w-2 bg-cu-blue rounded-full"></div>
                            <h2 className="text-3xl font-bold text-cu-blue font-display tracking-tight uppercase italic">Our Faculty</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {faculty.map((f, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-8 rounded-[3rem] shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl transition-all text-center flex flex-col items-center gap-6 group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-6 opacity-5 scale-150 rotate-12 transition-transform group-hover:scale-[2] group-hover:text-cu-blue">
                                        <Users className="w-20 h-20" />
                                    </div>
                                    <div className="w-44 h-44 rounded-[2rem] overflow-hidden border-4 border-gray-50 shadow-inner group-hover:border-cu-blue/20 transition-all relative z-10">
                                        <img src={f.img} alt={f.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            onError={(e) => { e.target.src = 'https://via.placeholder.com/300?text=RYMEC'; }} />
                                    </div>
                                    <div className="relative z-10">
                                        <h4 className="font-bold text-gray-900 text-xl italic mb-1">{f.name}</h4>
                                        <p className="text-sm text-cu-gold font-bold uppercase tracking-[0.1em] italic">{f.role}</p>
                                        {f.specialization && (
                                            <p className="text-xs text-gray-500 font-medium mt-3 italic bg-gray-50 px-3 py-1 rounded-full border border-gray-100">{f.specialization}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                );
            case 'laboratory':
                const labManuals = [
                    { name: "Computer Aided Design Lab Manual", link: "https://drive.google.com/file/d/1K_cf57ikK9HFhbR8QTE3PPtvBkxRlc7L/view" },
                    { name: "Basic Material Testing Lab Manual", link: "https://drive.google.com/file/d/1JRh9LNIFY7eXE6YL6LceFF2ViWMku4K1/view" },
                    { name: "Concrete & Highway Material Testing Lab Manual", link: "https://drive.google.com/file/d/1E7rfNYzdQrLcrPu2oZPcMf_eddHgiSiq/view" },
                    { name: "Environmental Engineering Lab Manual", link: "https://drive.google.com/file/d/14DxhNTegRtYYgphGi_wlVwfmE9korSFT/view" },
                    { name: "Fluid Mechanics Lab Manual", link: "https://drive.google.com/file/d/1JRh9LNIFY7eXE6YL6LceFF2ViWMku4K1/view" },
                    { name: "Survey Lab Manual", link: "https://drive.google.com/file/d/1JRh9LNIFY7eXE6YL6LceFF2ViWMku4K1/view" },
                    { name: "Geotechnical Engineering Lab Manual", link: "https://drive.google.com/file/d/1JRh9LNIFY7eXE6YL6LceFF2ViWMku4K1/view" },
                    { name: "Engineering Geology Lab Manual", link: "https://drive.google.com/file/d/1JRh9LNIFY7eXE6YL6LceFF2ViWMku4K1/view" },
                    { name: "PG Lab Manual-1", link: "https://drive.google.com/file/d/1sTAXApuSjtRiGRria8sMjXNW6XPgdaPr/view" },
                    { name: "PG Lab Manual-2", link: "https://drive.google.com/file/d/1sTAXApuSjtRiGRria8sMjXNW6XPgdaPr/view" }
                ];

                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-10 w-2 bg-cu-gold rounded-full"></div>
                            <h2 className="text-3xl font-bold text-cu-blue font-display tracking-tight uppercase italic">Infrastructure & Labs</h2>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-xl shadow-gray-200/50 border border-gray-100">
                            <h3 className="text-2xl font-bold text-cu-blue mb-8 italic">Faculty Laboratories</h3>
                            <div className="grid md:grid-cols-2 gap-4 mb-12">
                                {[
                                    { name: "Building Materials Testing (BMT) Lab", icon: Layers },
                                    { name: "Geotechnical Engineering Lab", icon: MapPin },
                                    { name: "Concrete & Highway Engineering Lab", icon: FlaskConical },
                                    { name: "Fluid Mechanics Lab", icon: FlaskConical },
                                    { name: "Computer Aided Design (CAD) Lab", icon: Cpu },
                                    { name: "Environmental Engineering Lab", icon: FlaskConical },
                                    { name: "Survey Lab", icon: MapPin },
                                    { name: "Engineering Geology Lab", icon: Layers },
                                    { name: "PG Lab", icon: FlaskConical }
                                ].map((lab, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-transparent hover:border-blue-100 transition-all">
                                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-cu-blue shadow-sm">
                                            <lab.icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex items-center">
                                            <h5 className="font-bold text-gray-700 text-sm italic">{lab.name}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-2xl font-bold text-cu-blue mb-8 italic">Official Lab Manuals</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {labManuals.map((manual, i) => (
                                    <a
                                        key={i}
                                        href={manual.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl group hover:bg-cu-blue transition-all border border-transparent hover:border-blue-100 shadow-sm"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-cu-blue group-hover:scale-110 transition-transform">
                                                <Download className="w-5 h-5" />
                                            </div>
                                            <span className="font-bold text-gray-700 group-hover:text-white italic text-sm transition-colors">{manual.name}</span>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );

            case 'academics':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-10 w-2 bg-cu-blue rounded-full"></div>
                            <h2 className="text-3xl font-bold text-cu-blue font-display tracking-tight uppercase italic">Academics & Learning Resources</h2>
                        </div>
                        <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-gray-100 group hover:border-cu-blue/30 transition-all">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-cu-blue">
                                    <BookOpen className="w-8 h-8" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 italic">Learning Resources MIB</h3>
                                    <p className="text-gray-600 text-sm italic mb-4">Comprehensive academic resources and modular information booklet for Civil Engineering students.</p>
                                    <a
                                        href="https://rymec.edu.in/wp-content/uploads/2024/06/Learning-Resources-MIB.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-cu-blue text-white rounded-xl font-bold text-sm hover:bg-cu-gold transition-colors shadow-lg shadow-cu-blue/20"
                                    >
                                        <Download className="w-4 h-4" />
                                        Download PDF
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'syllabus':
                const documents = [
                    { name: "Scheme of Teaching and Examination 2022", link: "https://rymec.edu.in/wp-content/uploads/2024/06/Scheme-of-Teaching-and-examination-Details-2022.pdf" },
                    { name: "Scheme of Teaching and Examination 2021", link: "https://rymec.edu.in/wp-content/uploads/2024/06/2021-scheme.pdf" },
                    { name: "Scheme of Teaching and Examination 2018", link: "https://rymec.edu.in/wp-content/uploads/2024/06/2018-scheme.pdf" },
                    { name: "Civil Engineering Syllabus 2022 Scheme", link: "https://rymec.edu.in/wp-content/uploads/2024/06/civil_syllabus_2022.pdf" },
                    { name: "PG Structural Engineering Syllabus", link: "https://rymec.edu.in/wp-content/uploads/2024/06/PG-Structural-Engineering-Syllabus.pdf" }
                ];
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-10 w-2 bg-cu-gold rounded-full"></div>
                            <h2 className="text-3xl font-bold text-cu-blue font-display tracking-tight uppercase italic">Syllabus & Schemes</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {documents.map((doc, i) => (
                                <a key={i} href={doc.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 bg-white rounded-[2rem] shadow-lg shadow-gray-100/50 border border-gray-100 group hover:bg-cu-blue transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-cu-blue group-hover:bg-white/20 group-hover:text-white transition-colors">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-gray-700 group-hover:text-white italic transition-colors">{doc.name}</span>
                                    </div>
                                    <Download className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                );
            case 'placement':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-10 w-2 bg-cu-blue rounded-full"></div>
                            <h2 className="text-3xl font-bold text-cu-blue font-display tracking-tight uppercase italic">Placement & Internships</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { label: "Placement Percentage", value: "24.67%", sub: "Batch 2023-24", color: "bg-blue-500" },
                                { label: "Highest Package", value: "₹4.5+ LPA", sub: "Core & IT Sector", color: "bg-cu-blue" },
                                { label: "Total Students Placed", value: "125+", sub: "Dept. Record", color: "bg-cu-gold" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 text-center relative overflow-hidden group">
                                    <div className={`absolute top-0 left-0 w-full h-1 ${stat.color}`}></div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 italic">{stat.label}</p>
                                    <h3 className="text-3xl font-bold text-cu-blue italic mb-1">{stat.value}</h3>
                                    <p className="text-xs text-gray-400 italic font-medium">{stat.sub}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl">
                            <h3 className="text-2xl font-bold text-cu-blue mb-8 italic">Placement Resources</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { name: "Number of Students Placed", link: "https://rymec.edu.in/civil-engineering/civil-engineering-placement/" },
                                    { name: "Students Admitted to Higher Studies", link: "https://rymec.edu.in/civil-engineering/civil-engineering-placement/" }
                                ].map((doc, i) => (
                                    <a key={i} href={doc.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl group hover:bg-cu-blue transition-all border border-transparent shadow-sm">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-cu-blue group-hover:scale-110 transition-transform">
                                                <ExternalLink className="w-6 h-6" />
                                            </div>
                                            <span className="font-bold text-gray-700 group-hover:text-white italic transition-colors">{doc.name}</span>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-10 w-2 bg-cu-blue rounded-full"></div>
                            <h2 className="text-3xl font-bold text-cu-blue font-display tracking-tight uppercase italic">Internship & Placement</h2>
                        </div>
                        <div className="bg-white rounded-[3.5rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-blue-50/50 text-cu-blue">
                                            <th className="px-8 py-6 text-sm font-bold uppercase tracking-widest italic rounded-tl-[2rem]">Academic Year</th>
                                            <th className="px-8 py-6 text-sm font-bold uppercase tracking-widest italic">Total Students</th>
                                            <th className="px-8 py-6 text-sm font-bold uppercase tracking-widest italic rounded-tr-[2rem]">Students Placed</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700 divide-y divide-gray-100">
                                        {[
                                            { year: "2019-20", students: "115", placed: "58" },
                                            { year: "2018-19", students: "101", placed: "44" },
                                            { year: "2017-18", students: "113", placed: "51" }
                                        ].map((stat, i) => (
                                            <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                                                <td className="px-8 py-6 font-bold italic group-hover:text-cu-blue transition-colors">{stat.year}</td>
                                                <td className="px-8 py-6 font-medium italic">{stat.students}</td>
                                                <td className="px-8 py-6 font-bold text-cu-gold italic">{stat.placed}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </motion.div >
                );
            case 'randd':
                const researchDocs = [
                    { name: "Publication Details", link: "https://rymec.edu.in/wp-content/uploads/2024/06/Publication-details.pdf" },
                    { name: "Patents Details", link: "https://rymec.edu.in/wp-content/uploads/2024/06/Patents-Details.pdf" },
                    { name: "Research Grants Details", link: "https://rymec.edu.in/wp-content/uploads/2024/06/Research-Grants-Details.pdf" },
                    { name: "NIRF Ranking 2022-23", link: "https://rymec.edu.in/wp-content/uploads/2023/03/NIRF-Ranking-2022-23.pdf" }
                ];
                const conferences = [
                    { name: "Building Information Modelling (BIM) FDP", link: "https://drive.google.com/file/d/18X0rxr7NQ057tf6RDjbehqvxhud0bVNV/view" },
                    { name: "Analysis and Design of RC Structures (CYPE & ETABS)", link: "https://www.rymec.in/index.php/fdp-conferences-techfest-civil/707" },
                    { name: "Latest Application of White Cement Technical Talk", link: "https://drive.google.com/file/d/1ssng9tTWyW9CNJDxbyMeqvHD2SzTnuK2/view" }
                ];

                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-10 w-2 bg-cu-gold rounded-full"></div>
                            <h2 className="text-3xl font-bold text-cu-blue font-display tracking-tight uppercase italic">Research & Consultancy</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 relative overflow-hidden group hover:border-cu-blue/30 transition-all">
                                <div className="absolute top-0 right-0 p-8 opacity-5 scale-150 rotate-12 transition-transform group-hover:scale-[2]">
                                    <Briefcase className="w-24 h-24 text-cu-blue" />
                                </div>
                                <h3 className="text-2xl font-bold text-cu-blue mb-6 italic">Consultancy Activities</h3>
                                <p className="text-gray-600 font-medium italic leading-relaxed mb-8">
                                    Total No. of Consultancy projects handled in the last three years: <span className="text-cu-blue font-black underline decoration-cu-gold/30">500</span>
                                </p>
                                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 group-hover:bg-cu-blue group-hover:text-white transition-all">
                                    <p className="text-[10px] font-bold text-cu-blue group-hover:text-white/80 uppercase tracking-widest mb-1 italic">Generated Revenue (Last 3 Years)</p>
                                    <p className="text-3xl font-black text-cu-gold italic font-display group-hover:text-white transition-all">Rs 11.98 Lakhs</p>
                                </div>
                            </div>

                            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 relative overflow-hidden group hover:border-cu-gold/30 transition-all">
                                <div className="absolute top-0 right-0 p-8 opacity-5 scale-150 rotate-12 transition-transform group-hover:scale-[2]">
                                    <Award className="w-24 h-24 text-cu-gold" />
                                </div>
                                <h3 className="text-2xl font-bold text-cu-blue mb-6 italic">Research Center</h3>
                                <p className="text-gray-600 text-sm italic mb-6">Established in 2014, our VTU recognized center currently hosts over 10 research scholars pursuing advanced Ph.D work.</p>
                                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-2xl border border-amber-100 shadow-sm transition-all group-hover:bg-cu-gold group-hover:text-white">
                                    <CheckCircle2 className="w-6 h-6 text-cu-gold group-hover:text-white" />
                                    <div>
                                        <p className="text-xs font-bold text-cu-gold group-hover:text-white/80 uppercase italic">Affiliation</p>
                                        <p className="font-bold text-gray-700 group-hover:text-white italic text-sm">Recognized by VTU since 2014</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#121c3d] p-8 md:p-12 rounded-[3.5rem] text-white overflow-hidden relative group shadow-2xl">
                            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform group-hover:scale-[2]">
                                <Users className="w-48 h-48" />
                            </div>
                            <h3 className="text-2xl font-bold mb-8 italic relative z-10">Research Scholars (Ph.D)</h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                                {[
                                    { name: "Adana Gouda", status: "Awarded", guide: "Dr. H.M. Mallikarjuna" },
                                    { name: "Md. Khalid", status: "Awarded", guide: "Dr. M.S. Shobha" },
                                    { name: "Mahesh Sajjan", status: "Comprehensive Viva Completed", guide: "Dr. M.S. Shobha" },
                                    { name: "Basavalingappa", status: "Open Seminar 2 Completed", guide: "Dr. M.S. Shobha" },
                                    { name: "Pavan Kumar M", status: "Comprehensive Viva Completed", guide: "Dr. B. Gangadharaiah" },
                                    { name: "Goutam K", status: "Registered", guide: "Dr. M.S. Shobha" }
                                ].map((scholar, i) => (
                                    <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/20 transition-all group/scholar">
                                        <h5 className="font-bold text-lg mb-2 italic group-hover/scholar:text-cu-gold transition-colors">{scholar.name}</h5>
                                        <div className="space-y-1">
                                            <p className="text-white/60 text-xs italic">Guide: {scholar.guide}</p>
                                            <div className="inline-block mt-2 px-3 py-1 bg-cu-gold/10 rounded-full">
                                                <p className="text-cu-gold text-[10px] font-bold uppercase tracking-wider">{scholar.status}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-gray-100">
                            <div className="flex items-center gap-3 mb-8">
                                <FlaskConical className="w-6 h-6 text-cu-blue" />
                                <h3 className="text-2xl font-bold text-cu-blue italic">FDP & Technical Talk Reports</h3>
                            </div>
                            <div className="grid md:grid-cols-3 gap-4">
                                {conferences.map((conf, i) => (
                                    <a key={i} href={conf.link} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4 p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-cu-gold hover:bg-white transition-all group group-hover:shadow-lg">
                                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-cu-gold group-hover:bg-cu-gold group-hover:text-white transition-all shadow-sm">
                                            <Award className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-gray-700 text-sm italic group-hover:text-cu-blue leading-tight">{conf.name}</span>
                                        <div className="flex items-center gap-2 text-cu-gold text-xs font-bold uppercase">
                                            <span>View Report</span>
                                            <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );
            case 'publications':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-10 w-2 bg-cu-blue rounded-full"></div>
                            <h2 className="text-3xl font-bold text-cu-blue font-display tracking-tight uppercase italic">Publications & Patents</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: "Research Publication Details", link: "https://rymec.edu.in/wp-content/uploads/2024/06/Publication-details.pdf", desc: "List of research papers published by faculty in international journals." },
                                { title: "Patents Filed", link: "https://rymec.edu.in/wp-content/uploads/2024/06/Patents-Details.pdf", desc: "Details of patents filed and published by the department faculty." },
                                { title: "Research Grants", link: "https://rymec.edu.in/wp-content/uploads/2024/06/Research-Grants-Details.pdf", desc: "Funding and grants received for various research projects." }
                            ].map((doc, i) => (
                                <a key={i} href={doc.link} target="_blank" rel="noopener noreferrer" className="p-8 bg-white rounded-[2.5rem] shadow-xl border border-gray-100 group hover:border-cu-blue/30 transition-all flex flex-col justify-between">
                                    <div>
                                        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-cu-blue mb-6 group-hover:scale-110 transition-transform">
                                            <FileText className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 italic">{doc.title}</h3>
                                        <p className="text-gray-500 text-sm italic mb-6">{doc.desc}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-cu-blue uppercase tracking-widest italic group-hover:text-cu-gold transition-colors">Download Document</span>
                                        <Download className="w-5 h-5 text-gray-300 group-hover:text-cu-gold group-hover:translate-y-1 transition-all" />
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-cu-blue mb-8 italic">Faculty Journal Links</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                                {[
                                    { name: "IRJET", url: "https://www.irjet.net/" },
                                    { name: "ScienceDirect", url: "https://www.sciencedirect.com/" },
                                    { name: "IJETT", url: "https://ijettjournal.org/" },
                                    { name: "IOP Science", url: "https://iopscience.iop.org/" },
                                    { name: "TOJQI", url: "https://www.tojqi.net/" },
                                    { name: "HRPUB", url: "https://www.hrpub.org/" },
                                    { name: "IJCER", url: "http://www.ijceronline.com/" },
                                    { name: "JETIR", url: "https://www.jetir.org/" },
                                    { name: "IJRAR", url: "https://www.ijrar.org/" },
                                    { name: "IJREAM", url: "http://ijream.org/" }
                                ].map((journal, i) => (
                                    <a key={i} href={journal.url} target="_blank" rel="noopener noreferrer" className="px-4 py-3 bg-gray-50 rounded-xl border border-transparent hover:border-cu-gold hover:text-cu-gold transition-all text-center">
                                        <span className="text-[10px] font-bold uppercase tracking-wider italic">{journal.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div >
                );
            case 'activities':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-10 w-2 bg-cu-gold rounded-full"></div>
                            <h2 className="text-3xl font-bold text-cu-blue font-display tracking-tight uppercase italic">Student Activities & Reports</h2>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-cu-blue mb-8 italic">AICTE Activity Points (2023-24)</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                                {[
                                    { name: "Student Details 2023-24", link: "https://rymec.edu.in/wp-content/uploads/2024/06/AICTE-Activity-Points-Program-Student-Details-2023-24.pdf" },
                                    { name: "Team Details 2023-24", link: "https://rymec.edu.in/wp-content/uploads/2024/06/AICTE-Activity-Points-Program-Team-Details-2023-24.pdf" },
                                    { name: "AICTE Report 2023-24", link: "https://rymec.edu.in/wp-content/uploads/2024/06/AICTE-Report-2023-24.pdf" }
                                ].map((item, i) => (
                                    <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="p-5 bg-gray-50 rounded-2xl border border-transparent hover:border-cu-blue group transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-cu-blue shadow-sm group-hover:bg-cu-blue group-hover:text-white transition-all">
                                                <Target className="w-5 h-5" />
                                            </div>
                                            <span className="font-bold text-gray-700 text-sm group-hover:text-cu-blue italic transition-colors">{item.name}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <h3 className="text-2xl font-bold text-cu-blue mb-8 italic">Field Visits & Social Awareness</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { name: "CEPM Technical Visit Report", link: "https://rymec.edu.in/wp-content/uploads/2026/01/CEPM-Technical-visit-report.pdf" },
                                    { name: "Site Visit to TVM College Report", link: "https://rymec.edu.in/wp-content/uploads/2026/01/REPORT-for-site-visit-to-TVM-College.pdf" },
                                    { name: "AICTE Idea Lab Construction Report", link: "https://rymec.edu.in/wp-content/uploads/2026/01/Site-Visit-Report-On-Construction-of-AICTE-Idea-laboratory.pdf" },
                                    { name: "Pavers & PVC Pipes Industry Report", link: "https://rymec.edu.in/wp-content/uploads/2024/06/Field-Visit-Report-On-Manufacturing-Of-Pavers-And-Pvc-Pipes.pdf" },
                                    { name: "Halleys Blue Steel Site Visit", link: "https://rymec.edu.in/wp-content/uploads/2024/06/Field-Visit-Report-On-Halleys-Blue-Steel-Pvt.-Ltd-Ballari.pdf" },
                                    { name: "Heritage Walk Report", link: "https://rymec.edu.in/wp-content/uploads/2023/06/Heritage-walk-report.pdf" }
                                ].map((visit, i) => (
                                    <a key={i} href={visit.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-cu-gold group transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-cu-gold group-hover:bg-cu-gold group-hover:text-white transition-all shadow-sm">
                                                <MapPin className="w-6 h-6" />
                                            </div>
                                            <span className="font-bold text-gray-700 text-xs italic group-hover:text-cu-blue transition-colors max-w-[200px]">{visit.name}</span>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-cu-gold group-hover:translate-x-1 transition-all" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );
            case 'achievements':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-10 w-2 bg-cu-gold rounded-full"></div>
                            <h2 className="text-3xl font-bold text-cu-blue font-display tracking-tight uppercase italic">Achievements & Awards</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 scale-150 rotate-12 transition-transform group-hover:scale-[2]">
                                    <Award className="w-24 h-24 text-cu-gold" />
                                </div>
                                <h3 className="text-2xl font-bold text-cu-blue mb-6 italic">Department Achievements</h3>
                                <div className="space-y-4">
                                    {[
                                        "NBA Accredited (Tier-II) since 2021",
                                        "VTU Recognized Research Center since 2014",
                                        "Consultancy revenue generation of ₹11.98 Lakhs+ in the last 3 years",
                                        "Active student forum 'AVIRATHA' for holistic development"
                                    ].map((ach, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-cu-gold mt-1 flex-shrink-0" />
                                            <p className="text-gray-600 font-medium italic text-sm">{ach}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-[#121c3d] p-10 rounded-[3rem] text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 scale-150 rotate-12 transition-transform group-hover:scale-[2]">
                                    <Users className="w-24 h-24" />
                                </div>
                                <h3 className="text-2xl font-bold mb-6 italic">Faculty Achievements</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-lg font-bold text-cu-gold mb-2 italic">Ph.D Awarded</h4>
                                        <ul className="space-y-3">
                                            {[
                                                { name: "Dr. Adana Gouda", guide: "Dr. H.M. Mallikarjuna" },
                                                { name: "Dr. Md. Khalid", guide: "Dr. M. S. Shobha" }
                                            ].map((phd, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-cu-gold"></div>
                                                    <p className="text-sm italic">{phd.name} <span className="text-blue-200/60 font-medium italic ml-1">(under {phd.guide})</span></p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                        <p className="text-xs text-blue-100/70 italic leading-relaxed">
                                            Our faculty members are actively involved in research, consultancy, and organizing national level technical events.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform group-hover:scale-[1.7]">
                                <Trophy className="w-32 h-32 text-cu-blue" />
                            </div>
                            <div className="flex-1 relative z-10">
                                <h3 className="text-2xl font-bold text-cu-blue mb-4 italic">Student Achievements</h3>
                                <p className="text-gray-600 leading-relaxed italic text-sm mb-6">
                                    Students of Civil Engineering have consistently excelled in various technical and cultural events at university and state levels. The 'AVIRATHA' student forum provides a platform for showcasing their talents and organizational skills.
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        { label: "Research Scholars", value: "10+" },
                                        { label: "Forum Activities", value: "20+" },
                                        { label: "Technical Talks", value: "15+" },
                                        { label: "Field Visits", value: "30+" }
                                    ].map((stat, i) => (
                                        <div key={i} className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                            <p className="text-2xl font-bold text-cu-gold italic">{stat.value}</p>
                                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest italic">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'commitee':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-10 w-2 bg-cu-blue rounded-full"></div>
                            <h2 className="text-3xl font-bold text-cu-blue font-display tracking-tight uppercase italic">Department Committees & Cells</h2>
                        </div>
                        <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100">
                            <p className="text-gray-500 italic mb-10 text-center max-w-2xl mx-auto font-medium">The department has various administrative and academic bodies to maintain standards, prepare for accreditation, and oversee continuous improvement.</p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { name: "Self Assessment Committee (SAR)", link: "https://drive.google.com/file/d/1Sy1kLhyTtJo4s6gXhsKk24A0Fkl3r38h/view", icon: ShieldCheck },
                                    { name: "Course Coordinator (CC)", link: "https://drive.google.com/file/d/1YZw2gfqDnaF4vggxI4f_Adrmkh4M5dt-/view", icon: Users },
                                    { name: "NBA Desk", link: "https://drive.google.com/file/d/1YZw2gfqDnaF4vggxI4f_Adrmkh4M5dt-/view", icon: Award },
                                    { name: "Programme Coordinator (PC)", link: "https://drive.google.com/file/d/1YZw2gfqDnaF4vggxI4f_Adrmkh4M5dt-/view", icon: List },
                                    { name: "Prog. Assessment Comm. (PAC)", link: "https://drive.google.com/file/d/1YZw2gfqDnaF4vggxI4f_Adrmkh4M5dt-/view", icon: CheckCircle2 },
                                    { name: "Dept. Advisory Comm. (DAC)", link: "https://drive.google.com/file/d/1YZw2gfqDnaF4vggxI4f_Adrmkh4M5dt-/view", icon: MessageSquare }
                                ].map((comm, i) => (
                                    <a key={i} href={comm.link} target="_blank" rel="noopener noreferrer" className="p-8 bg-gray-50 rounded-[2.5rem] border border-transparent hover:border-cu-blue group transition-all flex flex-col items-center text-center gap-4 hover:bg-white hover:shadow-xl">
                                        <div className="w-16 h-16 rounded-[1.5rem] bg-white flex items-center justify-center text-cu-blue shadow-inner group-hover:bg-cu-blue group-hover:text-white transition-all">
                                            <comm.icon className="w-8 h-8 font-bold" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 group-hover:text-cu-blue italic text-sm transition-colors">{comm.name}</h4>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );
            case 'newsletter':
                const newsletters = [
                    { year: "2023-2024", name: "CED Final Newsletter", link: "https://rymec.edu.in/wp-content/uploads/2024/06/CED-Final-Newsletter-2023-24.pdf" },
                    { year: "2022-2023", name: "CED Final Newsletter", link: "https://rymec.edu.in/wp-content/uploads/2024/06/CED-Final-Newsletter-2022-23.pdf" },
                    { year: "2021-2022", name: "CED Final Newsletter", link: "https://rymec.edu.in/wp-content/uploads/2024/06/CED-Final-Newsletter-2021-22.pdf" },
                    { year: "2020-2021", name: "CED Final Newsletter", link: "https://rymec.edu.in/wp-content/uploads/2024/06/CED-Final-Newsletter-2020-21.pdf" },
                    { year: "2019-2020", name: "CED Final Newsletter", link: "https://rymec.edu.in/wp-content/uploads/2024/06/CED-Final-Newsletter-2019-20.pdf" }
                ];
                const reports = [
                    { name: "Report On KPCEA Awareness Programme", link: "https://rymec.edu.in/wp-content/uploads/2026/01/KCPCE-AWARENESS-PROGRAMME-Ballari_REPORT-for-technical-talk.pdf" },
                    { name: "Report on Site Visit", link: "https://rymec.edu.in/wp-content/uploads/2024/06/REPORT-ON-SITE-VISIT-min.pdf" },
                    { name: "Report on Technical Talk by Er. Syed Fazal Rehman", link: "https://rymec.edu.in/wp-content/uploads/2024/06/REPORT-ON-TECHNICAL-TALK-BY-Er.-SYED-FAZAL-REHMAN-min.pdf" }
                ];

                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-10 w-2 bg-cu-gold rounded-full"></div>
                            <h2 className="text-3xl font-bold text-cu-blue font-display tracking-tight uppercase italic">Departmental News & Reports</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-gray-50">
                                <h3 className="text-2xl font-bold text-cu-blue mb-6 italic flex items-center gap-3">
                                    <Newspaper className="w-6 h-6" /> Newsletters
                                </h3>
                                <div className="space-y-3">
                                    {newsletters.map((news, i) => (
                                        <a key={i} href={news.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-cu-blue group transition-all translate-x-0 hover:translate-x-2">
                                            <span className="font-bold text-gray-700 group-hover:text-white italic text-sm italic">{news.year} - {news.name}</span>
                                            <Download className="w-4 h-4 text-cu-blue group-hover:text-white" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-gray-50">
                                <h3 className="text-2xl font-bold text-cu-blue mb-6 italic flex items-center gap-3">
                                    <FileText className="w-6 h-6" /> Activity Reports
                                </h3>
                                <div className="space-y-3">
                                    {reports.map((report, i) => (
                                        <a key={i} href={report.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-cu-blue group transition-all translate-x-0 hover:translate-x-2">
                                            <span className="font-bold text-gray-700 group-hover:text-white italic text-xs italic">{report.name}</span>
                                            <Download className="w-4 h-4 text-cu-blue group-hover:text-white" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'gallery':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-10 w-2 bg-cu-gold rounded-full"></div>
                            <h2 className="text-3xl font-bold text-cu-blue font-display tracking-tight uppercase italic">Department Gallery</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {images.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.02 }}
                                    className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-video relative group border border-gray-100"
                                >
                                    <img src={img} alt={`RYMEC Civil Dept ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-cu-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                        <p className="text-white text-sm font-bold uppercase tracking-widest italic flex items-center gap-2">
                                            <ImageIcon className="w-4 h-4 text-cu-gold" />
                                            View Image
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                );
            default:
                return (
                    <div className="flex flex-col items-center justify-center py-24 bg-white rounded-[3.5rem] border border-gray-100 border-dashed">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mb-6">
                            <Layers className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-400 italic">Content Under Update</h3>
                        <p className="text-gray-400 mt-2 font-medium italic">We are populating this section with latest official data.</p>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen pt-20 pb-16 bg-gray-50/50">
            {/* Premium Hero Header */}
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
                            <BookOpen className="w-5 h-5 flex-shrink-0" />
                            <span className="text-sm font-bold tracking-widest uppercase italic">Academic Excellence since 1980</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-7xl font-bold font-display mb-8"
                        >
                            Civil <span className="text-cu-gold uppercase">Engineering</span>
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-24 h-1.5 bg-cu-gold mx-auto rounded-full mb-8 shadow-xl shadow-cu-gold/20"
                        ></motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xl text-blue-100/90 leading-relaxed font-light max-w-2xl mx-auto italic"
                        >
                            "Building the future by preserving the planet and advancing infrastructure with innovation and integrity."
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Main Application Interface */}
            <div className="container mx-auto px-4 -mt-12 relative z-20 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Enhanced Glassmorphism Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-white/60 p-4 lg:sticky lg:top-24 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
                            <div className="space-y-2">
                                {menuItems.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full text-left px-6 py-4 rounded-2xl transition-all duration-300 flex items-center gap-4 group/btn relative overflow-hidden ${activeTab === tab.id
                                            ? 'bg-cu-blue text-white shadow-xl shadow-cu-blue/20'
                                            : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${activeTab === tab.id
                                            ? 'bg-white/20'
                                            : 'bg-gray-50 group-hover/btn:bg-blue-100 text-gray-400 group-hover/btn:text-cu-blue shadow-inner'
                                            }`}>
                                            <tab.icon className="w-4 h-4" />
                                        </div>
                                        <span className="font-bold text-xs uppercase tracking-widest italic">{tab.label}</span>
                                        {activeTab === tab.id && (
                                            <motion.div layoutId="activeInd" className="absolute right-4">
                                                <ChevronRight className="w-4 h-4" />
                                            </motion.div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content Viewer Grid */}
                    <div className="lg:w-3/4">
                        <div className="min-h-[600px]">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e2e8f0;
                    border-radius: 20px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #cbd5e1;
                }
            `}</style>
        </div>
    );
};

export default CivilEngineering;
