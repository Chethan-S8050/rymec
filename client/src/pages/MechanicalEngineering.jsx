import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    GraduationCap,
    Users,
    Award,
    Trophy,
    CheckCircle2,
    BookOpen,
    Target,
    Zap,
    Download,
    FileText,
    ExternalLink,
    ChevronRight,
    Star
} from 'lucide-react';

const MechanicalEngineering = () => {
    const [activeTab, setActiveTab] = useState('about');

    const galleryImages = [
        "https://rymec.edu.in/wp-content/uploads/2024/06/phoca_thumb_m_9.jpg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/phoca_thumb_l_8.jpg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/phoca_thumb_m_7-1.jpg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/phoca_thumb_m_6.jpg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/phoca_thumb_m_5.jpg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/phoca_thumb_m_4.jpg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/phoca_thumb_m_3.jpg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/phoca_thumb_m_2.jpg",
        "https://rymec.edu.in/wp-content/uploads/2024/06/phoca_thumb_m_1.png"
    ];

    const faculty = [
        { name: "Dr. Kori Nagaraj (HOD)", img: "https://rymec.edu.in/wp-content/uploads/2023/02/1_KORI-NAGARAJ.jpg" },
        { name: "Dr. Hiregoudar Yerrennagoudaru", img: "https://rymec.edu.in/wp-content/uploads/2023/02/02_HYG-1.jpg" },
        { name: "Dr. K. Manjunatha", img: "https://rymec.edu.in/wp-content/uploads/2023/02/04_K-MANJUNATHA.jpg" },
        { name: "Dr. S. P. Jagadish", img: "https://rymec.edu.in/wp-content/uploads/2023/02/05_S-P-JAGADISH.jpg" },
        { name: "Dr. Veerabhadrappa Algur", img: "https://rymec.edu.in/wp-content/uploads/2023/02/06_VEERABHADRAPPA-ALGUR.jpg" },
        { name: "Dr. Kotresh Sardar", img: "https://rymec.edu.in/wp-content/uploads/2023/02/kotresh.jpg" },
        { name: "Mr. M. R. Indhudar", img: "https://rymec.edu.in/wp-content/uploads/2023/02/08_M-R-INDHUDAR.jpg" },
        { name: "Mr. Dhandin Ramesh", img: "https://rymec.edu.in/wp-content/uploads/2023/02/09_DHADIN-RAMESH.jpg" },
        { name: "Mr. A. M. Shivaprakash Swamy", img: "https://rymec.edu.in/wp-content/uploads/2023/02/10_A-M-SHIV-PRAKESH-SWAMY.jpg" },
        { name: "Dr. M Balaji", img: "https://rymec.edu.in/wp-content/uploads/2023/02/11_M-BALAJI.jpg" },
        { name: "Mr. Chandrasekhar Hiregoudar", img: "https://rymec.edu.in/wp-content/uploads/2023/02/12_CHG-1.jpg" },
        { name: "Dr. Pobbaraju Kesari Pavan Kumar", img: "https://rymec.edu.in/wp-content/uploads/2023/02/13_P-K-PAVAN-KUMAR.jpg" },
        { name: "Mr. Dudanaik D", img: "https://rymec.edu.in/wp-content/uploads/2023/02/14_DUDA-NAIK.jpg" },
        { name: "Mr. K. Suresh Kumar", img: "https://rymec.edu.in/wp-content/uploads/2023/02/15_-K-SURESH-KUMAR.jpg" },
        { name: "Mr. Y Mallikarjuna", img: "https://rymec.edu.in/wp-content/uploads/2023/02/16_-MALLIKARJUNA-Y.jpg" },
        { name: "Dr. Balaraj V", img: "https://rymec.edu.in/wp-content/uploads/2023/02/17_BALARAJ-V.jpg" },
        { name: "Dr. B. G. Chandru", img: "https://rymec.edu.in/wp-content/uploads/2023/02/18_-B-G-CHANDRU.jpg" },
        { name: "Mr. Deepak C", img: "https://rymec.edu.in/wp-content/uploads/2023/02/19_-DEEPAK-C.jpg" },
        { name: "Dr. R H M Somanath Swamy", img: "https://rymec.edu.in/wp-content/uploads/2023/02/20_-R-H-M-SOMANATH-SWAMY.jpg" },
        { name: "Mr. N. Swamy", img: "https://rymec.edu.in/wp-content/uploads/2023/02/21_N-SWAMY.jpg" },
        { name: "Dr. Manjunath Swamy G", img: "https://rymec.edu.in/wp-content/uploads/2023/02/22_MANJUNATH-SWAMY-G.jpg" },
        { name: "Dr. Mahesh G", img: "https://rymec.edu.in/wp-content/uploads/2023/02/23_MAHESH-G.jpg" },
        { name: "Mr. Achutananda K B", img: "https://rymec.edu.in/wp-content/uploads/2023/02/24_-ACHUTANANDA-K-B.jpg" },
        { name: "Mr. Lakshmana Naik T K", img: "https://rymec.edu.in/wp-content/uploads/2023/02/25_-LAKSHMANA-NAIK-T-K.jpg" },
        { name: "Dr. Vaddin Chetan", img: "https://rymec.edu.in/wp-content/uploads/2023/02/26_-VADDIN-CHETAN.jpg" },
        { name: "Mr. B Basavaprakash", img: "https://rymec.edu.in/wp-content/uploads/2023/02/27_B-BASAVA-PRAKASH.jpg" },
        { name: "Dr. H M Naveen", img: "https://rymec.edu.in/wp-content/uploads/2023/02/28_-H-M-NAVEEN.jpg" },
        { name: "Mr. K C Mahendra", img: "https://rymec.edu.in/wp-content/uploads/2023/02/29_-K-C-MAHENDRA.jpg" },
        { name: "Dr. Basavaraj K", img: "https://rymec.edu.in/wp-content/uploads/2023/02/31_BASAVARAJ-K.jpg" }
    ];

    const menuItems = [
        { id: 'about', label: 'About Course' },
        { id: 'programmes', label: 'Programmes' },
        { id: 'faculty', label: 'Faculty' },
        { id: 'resources', label: 'Academics & Learning Resources' },
        { id: 'laboratory', label: 'Laboratory' },
        { id: 'fdp', label: 'FDP / Conference' },
        { id: 'placement', label: 'Placement' },
        { id: 'randd', label: 'Research and development' },
        { id: 'societies', label: 'Professional Societies' },
        { id: 'forum', label: 'Forum' },
        { id: 'achievements', label: 'Achievements & Awards' },
        { id: 'committee', label: 'Commitee’s / Cell' },
        { id: 'publications', label: 'Publications' },
        { id: 'workshops', label: 'Workshop / Seminar' },
        { id: 'newsletter', label: 'Newsletter' },
        { id: 'results', label: 'Results' },
        { id: 'gallery', label: 'Gallery' }
    ];

    const researchScholars = [
        { sl: 1, name: "S G Desai", year: "2011", usn: "3VC11PMN01", title: "Free vibrations of three phase EME shells", guide: "Dr. A Thimmana Gouda", contact: "8105840364", email: "sgdesai966@gmail.com" },
        { sl: 2, name: "Jagadish.S.P", year: "2012", usn: "3VC12PMN03", title: "Investigations of Mechanical Properties on Biocompatible Composite Materials Used As an Orthopaedic Implants", guide: "Dr. A Thimmana Gouda", contact: "9481716642" },
        { sl: 3, name: "Mannjunatha k", year: "2012", usn: "3VC12PMN01", title: "Investigation of Biofuels in CI Engine", guide: "Dr. Hiregoudar yerranna goudar", contact: "7090511300" },
        { sl: 4, name: "K Suresh kumar", year: "2012", usn: "3VC12PMN04", title: "Characterization and analysis of single point cutting tool by using hybrid composite materials", guide: "Dr. K Veeresh", contact: "9538177189" },
        { sl: 5, name: "Chandragowda M", year: "2012", usn: "3VC12PMN02", title: "Investigation of Low Cetane Fuels Vegetable Oils in CI Engine With Catalytic Combustion Using Semi Adiabatic BiMetallic Piston", guide: "Dr. Hiregoudar yerranna goudar", contact: "9449667645" },
        { sl: 6, name: "Vithal Rao Chavan M", year: "2013", usn: "3VC13PMN02", title: "Some Investigation On Process Parameters Optimization In Modified GFRP Drilling", guide: "Dr. K Veeresh", contact: "9986122602" },
        { sl: 7, name: "K S Sreenivas M", year: "2013", usn: "3VC13PMN03", title: "Constitutive Modeling of Heat Treated Shape Memory Alloy Wires", guide: "Dr. K Veeresh", contact: "9538835166" },
        { sl: 8, name: "K G Prakash", year: "2013", usn: "3VC13PMN01", title: "A STUDY ON PMC FOR THE ENGINEERING APPLICATIONS", guide: "Dr. A Thimmana Gouda", contact: "9916315867" },
        { sl: 9, name: "M.Balaji M", year: "2015", usn: "3VC15PMJ01", title: "Experimental investigations on hybrid composites of aluminium using extrusion process", guide: "Dr. Hiregoudar yerranna goudar", contact: "9916724675" },
        { sl: 10, name: "U Shantha Kumar", year: "2015", usn: "3VC15PMJ03", title: "Design Analaysis and implimentation of active magnetic magnetic bearing using fuzzy logic controller", guide: "Dr. Chitriki Thotappa", contact: "9449667645" },
        { sl: 11, name: "Mahesh G", year: "2015", usn: "3VC15PMJ02", title: "Experimental Investigation to Achieve HCCI and Augmentation of Air Swirl using roataing Air Swirl Diffuser", guide: "Dr. Hiregoudar Yerranna Goudar", contact: "8951567477" },
        { sl: 12, name: "R H M Somanath Swamy", year: "2015", usn: "3VC15PMJ04", title: "Experimental Investigation to Achieve HCCI and Augmentation of Diesel Swirl Injection using a Novel Rotating Diesel Swirl Diffuse", guide: "Dr. Hiregoudar Yerranna Goudar", contact: "9986223664" },
        { sl: 13, name: "Manjunath Swamy G", year: "2015", usn: "3VC15PMJ05", title: "To Design Develop and Fabricate a directional control valve to control multiple actuators", guide: "Dr. K Veeresh", contact: "9008175465" },
        { sl: 14, name: "V.Balaraj", year: "2016", usn: "3VC16PMJ02", title: "Study Of Mechanical Characterization And Fatigue Behaviour On Aluminium Metal Matrix Composite", guide: "Dr. Nagaraj Kori", contact: "8749075910" },
        { sl: 15, name: "Shivaprasad Desai", year: "2016", usn: "3VC16PMJ01", title: "Computational Analysis and experimental investigation of inlet air swirl through air in CI Engines through inlet ports, inlet valves and manifold to enhance CI Engines performances", guide: "Dr. Hiregoudar Yerranna Goudar", contact: "8050702372" },
        { sl: 16, name: "G K Shiva Prasad", year: "2017", usn: "-", title: "Reduction Of Charging And Die Casting Car Stack Emissions At Recovery Coke Ovens", guide: "Dr. Chitriki Thotappa", contact: "-" },
        { sl: 17, name: "Vaddin Chetan", year: "2017", usn: "3VC17MPA07", title: "Investigation On Thermal Behaviour Of Opaque Ventilated Facades A Passive Cooling Method", guide: "Dr. Nagaraj Kori", contact: "7795518864" },
        { sl: 18, name: "N Swamy", year: "2017", usn: "3VC17MPA06", title: "Multiple objectives based investigation for performance of reconfigurable manufacturing system", guide: "Dr. A Thimmana Gouda", contact: "9611481672" },
        { sl: 19, name: "Virupakshi Gouda H", year: "2017", usn: "3VC17MPA05", title: "Investigation of polymer matrix composites for various medical applications", guide: "Dr. A Thimmana Gouda", contact: "9483066551" },
        { sl: 20, name: "B G Chandru", year: "2017", usn: "3VC17MPA03", title: "Fabrication and characterization of cryogenic treated AL7075/TiC composites for machine tool operations", guide: "Dr. A Thimmana Gouda", contact: "9880189737" },
        { sl: 21, name: "Achutananda K B", year: "2017", usn: "3VC17PMA02", title: "Influence of cementite from martensite phase on the fatigue behavior of dual phase steel", guide: "Dr. Nagaraj Kori", contact: "9980488788" },
        { sl: 22, name: "Pavan B S", year: "2017", usn: "3VC17MPA01", title: "Investigation and Performance Evaluation of Different types of nanofluids in the shell and Tube Heat Exchanger", guide: "Dr. Hiregoudar Yerranna Goudar", contact: "-" },
        { sl: 23, name: "S Veeresh", year: "2017", usn: "3VC17MPA04", title: "Design change of gas turbine blades and check the analysis of the same", guide: "Dr. Hiregoudar Yerranna Goudar", contact: "9986785775" }
    ];

    const researchGuides = [
        { name: "Dr. Hiregoudar Yerranna Goudar", underRC: 8, outsideRC: 1, total: 9 },
        { name: "Dr. K Veeresh", underRC: 4, outsideRC: 0, total: 4 },
        { name: "Dr. A Thimmana Gouda", underRC: 5, outsideRC: 0, total: 5 },
        { name: "Dr. Chitriki Thotappa", underRC: 3, outsideRC: 1, total: 2 },
        { name: "Dr. G Jagannatha Reddy", underRC: 0, outsideRC: 0, total: 0 },
        { name: "Dr. Nagaraj Kori", underRC: 5, outsideRC: 0, total: 3 },
        { name: "Dr. Shiva Kumar Modi", underRC: 1, outsideRC: 0, total: 1 },
        { name: "Dr. Veerabhadrappa Algur", underRC: 1, outsideRC: 0, total: 1 }
    ];

    const laboratories = [
        {
            id: 'workshop',
            name: 'Workshop Laboratory (WSL)',
            description: 'Provides students with hands-on experience in manufacturing processes, production, and general fabrication.',
            equipment: ['Bench Drilling Machine', 'Welding Transformer', 'Power Hacksaw', 'Sheet Metal Tools', 'Fitting & Welding Tools'],
            image: "https://rymec.edu.in/wp-content/uploads/2024/06/1a.jpg"
        },
        {
            id: 'material_testing',
            name: 'Material Testing Laboratory / Metallurgy',
            description: 'Equipped to determine mechanical properties and microstructural characteristics of materials.',
            equipment: [
                'Imported Microhardness Tester (HVS 1000B)',
                'Metallurgical Microscope with Live Image Analysis',
                'Rockwell & Brinell Hardness Testers',
                'Universal Testing Machine (UTM)',
                'Impact Testing Machine (Izod/Charpy)',
                'Muffle Furnace (1200°C)',
                'Digital Fatigue Testing Machine'
            ],
            image: "https://rymec.edu.in/wp-content/uploads/2024/06/1b.png"
        },
        {
            id: 'metrology',
            name: 'Mechanical Measurements & Metrology Laboratory',
            description: 'Focuses on precision measurement techniques and calibration of measuring instruments.',
            equipment: ['Profile Projector', 'Tool Maker\'s Microscope', 'Coordinate Measuring Machine (CMM) concepts', 'Slip Gauges', 'Sine Bar', 'Auto-Collimator'],
            image: "https://rymec.edu.in/wp-content/uploads/2024/06/4-1.png"
        },
        {
            id: 'heat_transfer',
            name: 'Heat Transfer Laboratory',
            description: 'Studies conduction, convection, and radiation principles through various experimental setups.',
            equipment: [
                'Thermal Conductivity of Metal Rod',
                'Heat Transfer through Composite Wall',
                'Stefan Boltzmann Constant Setup',
                'Parallel/Counter Flow Heat Exchangers',
                'Refrigeration & Air-Conditioning Test Rigs'
            ],
            image: "https://rymec.edu.in/wp-content/uploads/2024/06/5.jpg"
        },
        {
            id: 'energy',
            name: 'Energy Laboratory',
            description: 'Performance analysis of internal combustion engines and testing of fuel properties.',
            equipment: [
                'Computerized VCR Engine Test Rig',
                'Multi Point Fuel Injection (MPFI) Rig',
                'Common Rail Direct Injection (CRDI) Rig',
                'AVL Exhaust Gas Analyzer',
                'Bomb Calorimeter',
                'Redwood Viscometer'
            ],
            image: "https://rymec.edu.in/wp-content/uploads/2024/06/6.png"
        },
        {
            id: 'design',
            name: 'Design Laboratory (CAD/CAE)',
            description: 'Advanced computing facility for industrial design, research, and engineering analysis.',
            equipment: [
                'Dassault Systemes Suite (CATIA, DELMIA, SIMULIA)',
                'MSC Software Suite (Adams, Marc, Nastran, Apex)',
                'ISRO-FEAST Analysis Tool',
                'High-performance Workstations'
            ],
            image: "https://rymec.edu.in/wp-content/uploads/2024/06/slide1.png"
        },
        {
            id: 'cim',
            name: 'CIM & Automation Laboratory',
            description: 'Fosters learning in advanced manufacturing, robotics, and industrial automation.',
            equipment: [
                'YASKAWA MOTOMAN Industrial Welding Robot',
                'CNC Vertical Milling Machine (AMS 430)',
                'Ultimaker 3 Extended 3D Printer',
                'EinScan SE 3D Scanner',
                'Pneumatic & Hydraulic Trainer Kits'
            ],
            image: "https://rymec.edu.in/wp-content/uploads/2024/06/slide1.png"
        }
    ];

    const professionalSocieties = [
        { name: "Institution of Engineers (India) - IEI", description: "Promotes the general advancement of engineering and technology." },
        { name: "Indian Society for Technical Education - ISTE", description: "Focuses on career development of teachers and personality development of students." },
        { name: "Society of Automotive Engineers - SAE", description: "Advance mobility knowledge and solutions for the benefit of humanity." },
        { name: "American Society of Mechanical Engineers - ASME", description: "Promotes the art, science, and practice of multidisciplinary engineering." }
    ];

    const induInteraction = {
        title: "Industry Institute Interaction Cell & MOUs",
        content: "The Department has a Separate Industry Institute Interaction Cell and has MOU's with various industries like TATA Technologies Ltd. Pune, Bosch Rexroth (India) Pvt Ltd. Bangalore, etc., for training students and faculty in advanced technologies.",
        centers: [
            { name: "Centre of Excellence (CoE)", partner: "TATA Technologies Ltd.", focus: "Invention, Innovation, Incubation & Training (CIIIT)" }
        ]
    };

    const placementInfo = {
        overview: "The department has talented students with both technical and soft skill sets, well-trained to meet industry requirements. Our graduates are placed in top companies like TCS, Infosys, Wipro, and many core engineering firms.",
        training: "We conduct regular training sessions on aptitude, soft skills, and technical interview preparation to enhance employability."
    };

    const softwareList1 = [
        "Dassault System's suite: 40 modules for Industrial Design & Development.",
        "MSC Software Suite: 81 modules (Adams, Easy5, Marc, Nastran, SCFlow).",
        "ISRO-FEAST: 10 tools for Linear static, Buckling, Thermal analysis.",
        "I-GET IT: E-Learning on CAD, CAM, CAE and PLM."
    ];

    const publicationsData = {
        "2021-22": [
            { id: 1, title: "Smart Blind Stick Using Arduino", authors: "Veerabhadrappa Algur", journal: "Journal of Bio- and Tribo-Corrosion, Springer Ltd.", link: "https://link.springer.com/" },
            { id: 2, title: "Optimization of Wire Cut Electric Discharge Machining Characteristics of Hybrid Aluminium Composites (Al6061/Gr/SiCp) Using Taguchi Method", authors: "Dr. C Thotappa", journal: "Springer Singapore", link: "https://link.springer.com/" },
            { id: 3, title: "Optimization of Piston Grooves, Bridges on Cylinder Head and Inlet Valve Masking of Home Fueled Diesel Engine by Response Surface Methodology", authors: "M R Indudhar", journal: "Sustainability", link: "https://www.mdpi.com/" },
            { id: 4, title: "Development and structural analysis on longeron cross sectional area in a flat stiffened panel with a broken central longeron", authors: "R H M Somanath Swamy", journal: "Elsevier Ltd.", link: "https://www.sciencedirect.com/" },
            { id: 5, title: "Optimization of Wire Cut Electric Discharge Machining Characteristics of Hybrid Aluminium Composites (Al6061/Gr/SiCp) Using Taguchi Method", authors: "Veerabhadrappa Algur", journal: "Springer Singapore", link: "https://link.springer.com/" },
            { id: 6, title: "Effect of Gas Blockage on the Theoretical Performance of Thermoacoustic Refrigerators", authors: "Dr. Manjunatha K", journal: "International Journal of Air-Conditioning and Refrigeration", link: "https://www.worldscientific.com/" }
        ],
        "2020-21": [
            { id: 1, title: "Investigation on mechanical and Microstructural characteristics of Zn alloy MMC for bearing application", authors: "Dr Veerabhadrappa Algur", journal: "Elsevier Ltd", link: "https://www.sciencedirect.com/" },
            { id: 2, title: "Microstructural evolution and mechanical characterization of Al2O3 particles reinforced Al6061 alloy metal composites", authors: "Dr. Kori Nagaraj", journal: "Elsevier Ltd", link: "https://www.sciencedirect.com/" },
            { id: 3, title: "Review of Passive Cooling Methods for Buildings", authors: "Dr. Kori Nagaraj", journal: "International Journal of Physics", link: "https://iopscience.iop.org/" },
            { id: 4, title: "Influence of Al2O3 and B4C Dual Particles Addition on the Mechanical Characterization of Al6061 Alloy Hybrid Metal Composites for Automotive Applications", authors: "Dr. Kori Nagaraj", journal: "International Journal of Vehicle Structures & Systems", link: "https://www.scilit.net/" },
            { id: 5, title: "Effect of Reinforcement on Microstructure and Wear Properties of Al7475/Nbc Metal Matrix Composites", authors: "Chandru B. G", journal: "Journal of Scholastic Engineering Science and Management", link: "https://papers.ssrn.com/" },
            { id: 6, title: "Evaluation Of Mechanical, Biodegradable & Microstructure Analysis of Epoxy-Based Glass, Carbon and Jute Fiber Reinforced BioComposites Used as Orthopedic Implants [Human Bone]", authors: "Dr. Jagdish S.P,", journal: "Journal of Scholastic Engineering Science and Management", link: "https://papers.ssrn.com/" },
            { id: 7, title: "Effect of Reinforcement on Mechanical and Wear of Al7475/MoS2 Metal Matrix Composites", authors: "Chandru B. G", journal: "Journal of Scholastic Engineering Science and Management", link: "https://papers.ssrn.com/" },
            { id: 8, title: "Review of Passive Cooling Methods for Buildings", authors: "Dr. Shiva Kumar Modi", journal: "International Journal of Physics", link: "https://iopscience.iop.org/" },
            { id: 9, title: "Investigation of effect of ceramic material over which platinum coated", authors: "Dr. Manjunatha K", journal: "Elsevier Ltd", link: "https://www.sciencedirect.com/" },
            { id: 10, title: "Review of Passive Cooling Methods for Buildings", authors: "Vaddin Chetan", journal: "International Journal of Physics", link: "https://www.worldscientific.com/" },
            { id: 11, title: "Microstructural evolution and mechanical characterization of micro Al2O3 particles reinforced Al6061 alloy metal composites", authors: "V. Balaraj", journal: "Elsevier Ltd", link: "https://iopscience.iop.org/" }
        ],
        "2019-20": [
            { id: 1, title: "Production of Biofuels and Performance and Emission characteristics of Biofuels and Diesel in Four stroke Single Cylinder Diesel Engine", authors: "Dr Hiregoudar Yerrannagoudaru", journal: "Journal of Emerging Technologies and Innovative Research", link: "https://www.jetir.org/" },
            { id: 2, title: "Effects of single and split injection on the performance, emission and combustion attributes of a CRDI engine powered with diesel and honge biodiesel", authors: "M. R. Indudhar", journal: "Sustainable Energy & Fuels [Royal Society of Chemistry]", link: "https://pubs.rsc.org/" },
            { id: 3, title: "Effects of Combustion Vestibule Configuration on the Competence, Emissions and Combustion attributes of Direct Injection Diesel Prime Mover Powered with Diesel and Corn Oil MethylEster (CROME)", authors: "M. R. Indudhar", journal: "European Journal of Sustainable Development Research", link: "https://www.ejosdr.com/" },
            { id: 4, title: "Thermal conductivity & thermal expansion behaviour of hot extruded hybrid composites of Al6061/Sic/Gr", authors: "M Balaji", journal: "International Journal of Recent Technology and Engineering", link: "https://www.ijrte.org/" },
            { id: 5, title: "Effect of Extrusion Ratio & Extrusion Temperature on Mechanical Properties of Hot Extruded Hybrid Composites of Al6061/Sic/Graphite", authors: "M Balaji", journal: "International Journal of Innovative Technology and Exploring Engineering", link: "https://www.ijitee.org/" }
        ],
        "2018-19": [
            { id: 1, title: "Evaluation of Mechanical Properties of EGlass Fibre Reinforced Polymer Matrix Composit used as Implant for TIBIA Bone", authors: "Jagadish S P", journal: "International Journal of Mechanical Engineering and Technology (IJMET)", link: "https://iaeme.com/" },
            { id: 2, title: "Influence of post curing on GFRP hybrid composites", authors: "Veerabhadrappa Algur", journal: "MATEC Web of conferences", link: "https://www.doi.org/" },
            { id: 3, title: "Analysis and comparison of performance and emissions of compression ignition engine fueled with diesel and different bio-fuels blended with Methanol", authors: "Dr Hiregoudar Yerrannagoudaru", journal: "Elsevier MaterialsToday Proceedings", link: "https://www.sciencedirect.com/" }
        ],
        "2017-18": [
            { id: 1, title: "Influence of Mn Content on Tribological Wear Behaviour of ZA-27 Alloy", authors: "Veerabhadrappa Algur", journal: "Elsevier MaterialsToday Proceedings", link: "https://www.sciencedirect.com/" },
            { id: 2, title: "Taguchi's orthogonal array approach to evaluate drilling of GFRP particulate composites", authors: "Veerabhadrappa Algur", journal: "Elsevier MaterialsToday Proceedings", link: "https://www.sciencedirect.com/" },
            { id: 3, title: "Effect of the Tribological Behaviour of Hematite filled Hybrid Composites - A Taguchi Approach", authors: "Vithal Rao Chavan", journal: "International Journal of Advances in Scientific Research and Engineering", link: "https://ijerat.com/" }
        ]
    };

    const vision = "To Produce Professionally Excellent, Knowledgeable, Globally Competitive, Socially Responsible Mechanical Engineers and Entrepreneurs";
    const missions = [
        "To provide quality education in Mechanical Engineering and Management.",
        "To establish a continuous Industry Institute Interaction, participation, and collaboration to contribute skilled Mechanical Engineers.",
        "To impart Human, Socio-ethical values and Entrepreneurship skills among Mechanical Engineers.",
        "To Promote Research and Development (R & D) and Innovative Technologies in the Emerging Areas of Mechanical Engineering."
    ];
    const peos = [
        "Graduates of Mechanical Engineering shall Develop Strong Academic Foundation for Successful Professional Career.",
        "Graduates of Mechanical Engineering Acquires skills to excel in the area of Mechanical Engineering both in Industries and Academics.",
        "Graduates of Mechanical Engineering Possess awareness towards Higher Education, R & D and Socio-Ethical values."
    ];
    const psos = [
        "Graduates possess the knowledge to Design, Analyze and Develop Mechanical System.",
        "Graduates are Capable of Developing Research Skills in Self Sustainable Energy sources and Composite Materials."
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                        {/* HOD Message */}
                        <div className="prose max-w-none text-gray-700">
                            <h3 className="text-2xl font-bold text-cu-blue mb-4">Department Overview</h3>
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
                                <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">MECHANICAL ENGINEERING: PROPELLING FORCE OF LIFE</h4>
                                <p className="text-lg leading-relaxed mb-4">
                                    Mechanical Engineering program established in the year 1980 with present intake of 120 students for Under Graduation program, 18 Students for a Post Graduation Program in Production Management. Program encompasses in different streams of knowledge on Manufacturing, Design, Thermal and Emerging fields of CAD / CAM / CAE.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    The state of the art infrastructure and laboratories to promote congenial academic environment to impart quality technical education. The exclusive new building of Mechanical engineering program is well equipped and ambient class rooms, Air conditioned Seminar hall of 150 seating capacity, R & D Centre, Advanced Computing Facility, Wi-Fi facility, CC Camera Surveillance and Uninterrupted Power Supply along with basic amenities.
                                </p>
                            </div>

                            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 mb-8 overflow-hidden flex flex-col md:flex-row gap-8 items-center">
                                <div className="w-48 h-64 rounded-xl overflow-hidden shadow-lg flex-shrink-0 border-4 border-white">
                                    <img src="https://rymec.edu.in/wp-content/uploads/2024/06/mech_hod2.png" alt="HOD Message" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-cu-blue mb-2">HOD's Message</h4>
                                    <p className="text-sm leading-relaxed mb-4 italic">
                                        "Welcome to Mechanical Engineering Department, R Y M Engineering College. We started our journey in the year 1980 and over the decades, we have grown our expertise and competence in Mechanical Engineering and Research. Our focus is to impart technical skills among students and promote their problem solving capabilities... We believe that emphasizing in these areas will make our students well equipped to take leadership roles."
                                    </p>
                                    <div className="font-bold text-cu-gold">Dr. Kori Nagaraj</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Professor & Head, Mechanical Engineering</div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-50 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110"></div>
                                    <h4 className="font-bold text-cu-blue mb-4 text-xl flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cu-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        Vision
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed italic">"{vision}"</p>
                                </div>
                                <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-50 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110"></div>
                                    <h4 className="font-bold text-cu-blue mb-4 text-xl flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cu-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        Mission
                                    </h4>
                                    <ul className="space-y-3">
                                        {missions.map((m, i) => (
                                            <li key={i} className="text-gray-600 text-sm flex gap-3">
                                                <span className="font-bold text-cu-blue min-w-[32px]">MD{i + 1}:</span>
                                                <span>{m}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mt-6">
                                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-cu-blue mb-4 text-xl">Program Educational Objectives (PEOs)</h4>
                                    <ul className="space-y-3">
                                        {peos.map((p, i) => (
                                            <li key={i} className="text-gray-600 text-sm flex gap-3">
                                                <span className="font-bold text-cu-gold min-w-[40px]">PEO{i + 1}</span>
                                                <span>{p}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-cu-blue mb-4 text-xl">Program Specific Outcomes (PSOs)</h4>
                                    <ul className="space-y-3">
                                        {psos.map((p, i) => (
                                            <li key={i} className="text-gray-600 text-sm flex gap-3">
                                                <span className="font-bold text-cu-gold min-w-[40px]">PSO{i + 1}</span>
                                                <span>{p}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'programmes':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Programmes Offered</h3>
                        <div className="grid gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h4 className="text-xl font-bold text-gray-800 mb-2">Undergraduate Program</h4>
                                <p className="text-gray-600"><strong>B.E. in Mechanical Engineering</strong></p>
                                <p className="text-gray-500 text-sm mt-1">Intake: 120 Students</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h4 className="text-xl font-bold text-gray-800 mb-2">Postgraduate Program</h4>
                                <p className="text-gray-600"><strong>M.Tech in Production Management</strong></p>
                                <p className="text-gray-500 text-sm mt-1">Intake: 18 Students</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h4 className="text-xl font-bold text-gray-800 mb-2">Research Program</h4>
                                <p className="text-gray-600"><strong>Ph.D in Mechanical Engineering</strong></p>
                                <p className="text-gray-500 text-sm mt-1">Affiliated to VTU Research Centre</p>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'faculty':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Our Faculty</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {faculty.map((f, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-50 shadow-sm">
                                        <img src={f.img} alt={f.name} className="w-full h-full object-cover"
                                            onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=User'; }} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-lg">{f.name}</h4>
                                        <p className="text-sm text-cu-gold font-medium mt-1">Faculty Member</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            case 'resources':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Academics & Learning Resources</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                {[
                                    { name: "Academic Calendar", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
                                    { name: "Circulars & Notifications", icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" },
                                    { name: "Regulations (VTU)", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                                    { name: "Scheme and Syllabus", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
                                    { name: "Academics Timetable", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                                    { name: "CO's and PO's", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
                                    { name: "Rubrics", icon: "M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" }
                                ].map((doc, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg group hover:bg-blue-50 transition-colors cursor-pointer border border-transparent hover:border-blue-100">
                                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-cu-blue shadow-sm group-hover:scale-110 transition-transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={doc.icon} />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <span className="font-semibold text-gray-700 group-hover:text-cu-blue block text-sm">{doc.name}</span>
                                            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Download PDF</span>
                                        </div>
                                        <div className="text-cu-gold opacity-0 group-hover:opacity-100 transition-opacity">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
                                <p className="text-xs text-amber-800 leading-relaxed">
                                    <strong>Note:</strong> Most academic documents are updated per semester. Please contact the department office for the latest physical copies if links are not yet active.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'laboratory':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Laboratories</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {laboratories.map((lab) => (
                                <div key={lab.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <h4 className="text-xl font-bold text-cu-blue mb-3">{lab.name}</h4>
                                    <img
                                        src={lab.image}
                                        alt={lab.name}
                                        className="w-full h-48 object-cover rounded-lg mb-4 shadow-sm"
                                        onError={(e) => e.target.src = "https://rymec.edu.in/wp-content/uploads/2024/06/slide1.png"}
                                    />
                                    <p className="text-gray-600 text-sm mb-4">{lab.description}</p>
                                    <div className="space-y-2">
                                        <p className="text-xs font-semibold text-cu-gold uppercase tracking-wider">Major Equipment/Tools</p>
                                        <ul className="grid grid-cols-1 gap-1">
                                            {lab.equipment.map((item, idx) => (
                                                <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                                                    <span className="text-cu-gold mt-1">•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            case 'fdp': // Renamed from 'conference' to 'fdp' to match menuItems
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">FDP / Conference</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <p className="text-gray-600 italic">Faculty Development Programs and Conference updates coming soon...</p>
                        </div>
                    </motion.div>
                );
            case 'placement':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Placement & Training</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <p className="text-gray-700 leading-relaxed mb-6">{placementInfo.overview}</p>
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                <h4 className="font-bold text-cu-blue mb-2">Training Programs</h4>
                                <p className="text-sm text-gray-700">{placementInfo.training}</p>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'societies':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Professional Societies</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {professionalSocieties.map((society, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="text-lg font-bold text-cu-blue mb-2">{society.name}</h4>
                                    <p className="text-gray-600 text-sm">{society.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            case 'forum':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Mechanical Forum</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-xl font-bold text-cu-blue mb-4">MECH-FORUM</h4>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The Mechanical Department Forum provides a platform for students to showcase their talents, organize technical events, and participate in guest lectures and workshops beyond the curriculum.
                            </p>
                            <div className="inline-block px-4 py-2 bg-cu-gold text-white rounded-lg text-sm font-semibold">
                                Empowering Future Engineers
                            </div>
                        </div>
                    </motion.div>
                );
            case 'achievements':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Achievements & Awards</h3>
                        <div className="space-y-6">
                            {/* Student Achievements */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h4 className="text-lg font-bold text-cu-blue mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-cu-blue/10 rounded-full flex items-center justify-center mr-3">
                                        <GraduationCap className="w-4 h-4 text-cu-blue" />
                                    </span>
                                    Student Achievements
                                </h4>
                                <div className="space-y-4">
                                    <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-cu-blue">
                                        <h5 className="font-bold text-cu-blue text-sm">Quiz Event Winners - Mandara 2025</h5>
                                        <p className="text-sm text-gray-700 mt-1">
                                            Congratulations to the winners: C. Shrivatsa, K. Geethanjali, Rajesh Kumar P, Sohel, Hafsa, Madhu, Naina, Kaveri, M Meghana Yadav, Anagha K, Supriya, and Prathibha B R.
                                        </p>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-cu-gold">
                                        <h5 className="font-bold text-cu-blue text-sm">BEST STUDENT OF THE CHAPTER AWARD - 2019</h5>
                                        <p className="text-sm text-gray-700 mt-1">
                                            Awarded to <strong>H M Prajwal Kumar</strong> by the Indian Society for Technical Education (ISTE) Karnataka Section.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Faculty Achievements */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h4 className="text-lg font-bold text-cu-blue mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-cu-gold/10 rounded-full flex items-center justify-center mr-3">
                                        <Users className="w-4 h-4 text-cu-gold" />
                                    </span>
                                    Faculty Achievements
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 bg-gray-50 rounded-lg">
                                        <h5 className="font-bold text-cu-blue text-sm">Dr. S G Desai</h5>
                                        <p className="text-xs text-gray-600 mt-1">Published the book "Antaralada Aralu".</p>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-lg">
                                        <h5 className="font-bold text-cu-blue text-sm">Dr. Hiregoudar Yerrannagoudaru</h5>
                                        <ul className="text-xs text-gray-600 mt-1 list-disc list-inside space-y-1">
                                            <li>3 LAMBERT Academic books published</li>
                                            <li>Recipient of "Bio Fuel Award-2019"</li>
                                            <li>2 Patents: MFUCG and Air Swirl Diffuser</li>
                                        </ul>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-lg">
                                        <h5 className="font-bold text-cu-blue text-sm">Prof. Virupaksha Gouda H & Dr. R H M Somanath Swamy</h5>
                                        <p className="text-xs text-gray-600 mt-1">Published "Non-Traditional Machining" book.</p>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-lg">
                                        <h5 className="font-bold text-cu-blue text-sm">Dr. Nagaraj Kori</h5>
                                        <p className="text-xs text-gray-600 mt-1">"Best Educationalist Award" by Innovative Global Scientific Researches.</p>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-lg">
                                        <h5 className="font-bold text-cu-blue text-sm">Dr. Veerabhadrappa Algur</h5>
                                        <p className="text-xs text-gray-600 mt-1">"Excellent Professional Achievement Award".</p>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-lg">
                                        <h5 className="font-bold text-cu-blue text-sm">Dr. Manjunatha K</h5>
                                        <p className="text-xs text-gray-600 mt-1">"Best Paper Award" at SJBIT International Conference.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'committee':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Committee's / Cell</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-lg font-bold text-cu-blue mb-3">{induInteraction.title}</h4>
                            <p className="text-gray-700 text-sm mb-6 leading-relaxed">{induInteraction.content}</p>
                            <div className="space-y-4">
                                {induInteraction.centers.map((center, idx) => (
                                    <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                        <h5 className="font-bold text-cu-blue text-sm">{center.name}</h5>
                                        <p className="text-xs text-gray-600">In association with: {center.partner}</p>
                                        <p className="text-xs text-cu-gold font-semibold mt-1">Focus: {center.focus}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );
            case 'newsletter':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Newsletter</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-xl font-bold text-cu-blue mb-4 flex items-center gap-3">
                                <i className="fas fa-newspaper text-cu-gold"></i>
                                Departmental Newsletter
                            </h4>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We are extremely happy to place before you the department newsletter highlighting the activities of students and faculty members. It serves as a chronicled record of the achievements and departmental progress.
                            </p>
                            <button className="px-6 py-2 bg-cu-blue text-white rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2">
                                <i className="fas fa-download"></i>
                                Latest Edition
                            </button>
                        </div>
                    </motion.div>
                );
            case 'randd':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <div className="flex flex-col gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-2xl font-bold text-cu-blue mb-4">Research Center Overview</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    The Mechanical Engineering Department Research Center was recognized by Visvesvaraya Technological University (VTU), Belagavi, in the year 2002. Since then, it has been a hub for advanced research and academic excellence in various domains of mechanical engineering. The center is committed to fostering innovation and supporting scholars in their pursuit of doctoral degrees.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
                                <h3 className="text-2xl font-bold text-cu-blue mb-6">Guide Details</h3>
                                <table className="w-full text-left border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="p-4 border-b font-bold text-cu-blue">Sl.No</th>
                                            <th className="p-4 border-b font-bold text-cu-blue">Name of the Guide</th>
                                            <th className="p-4 border-b font-bold text-cu-blue text-center">scholars (Under RC)</th>
                                            <th className="p-4 border-b font-bold text-cu-blue text-center">scholars (Outside RC)</th>
                                            <th className="p-4 border-b font-bold text-cu-blue text-center">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {researchGuides.map((guide, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                <td className="p-4 border-b text-gray-700">{idx + 1}</td>
                                                <td className="p-4 border-b font-semibold text-gray-800">{guide.name}</td>
                                                <td className="p-4 border-b text-center text-gray-700">{guide.underRC || '-'}</td>
                                                <td className="p-4 border-b text-center text-gray-700">{guide.outsideRC || '-'}</td>
                                                <td className="p-4 border-b text-center font-bold text-cu-gold">{guide.total || '-'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
                                <h3 className="text-2xl font-bold text-cu-blue mb-6 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cu-gold" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                                    </svg>
                                    Research Scholars
                                </h3>
                                <table className="w-full text-left border-collapse min-w-[700px]">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="p-4 border-b font-bold text-cu-blue">Sl.No</th>
                                            <th className="p-4 border-b font-bold text-cu-blue">Scholar Details</th>
                                            <th className="p-4 border-b font-bold text-cu-blue">Research Guide</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {researchScholars.map((scholar) => (
                                            <tr key={scholar.sl} className="hover:bg-gray-50 transition-colors">
                                                <td className="p-4 border-b text-gray-700 align-top font-medium">{scholar.sl}</td>
                                                <td className="p-4 border-b">
                                                    <div className="space-y-1">
                                                        <p className="font-bold text-gray-800">{scholar.name}</p>
                                                        <p className="text-xs text-gray-600"><span className="font-semibold">Reg Year:</span> {scholar.year} | <span className="font-semibold">USN:</span> {scholar.usn}</p>
                                                        <p className="text-sm text-cu-gold font-medium leading-tight mt-1">"{scholar.title}"</p>
                                                        {scholar.contact && scholar.contact !== '-' && (
                                                            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                                </svg>
                                                                {scholar.contact}
                                                            </p>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="p-4 border-b align-top font-semibold text-cu-blue text-sm">
                                                    {scholar.guide}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'publications':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Publications</h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <div className="prose max-w-none text-gray-700 mb-8">
                                <p>Our faculty members regularly publish their research findings in reputed International Journals. Below are the key publishers and papers indexed.</p>
                            </div>
                            {Object.entries(publicationsData).map(([year, papers]) => (
                                <div key={year} className="mb-10">
                                    <h4 className="font-bold text-xl text-gray-800 border-b-2 border-cu-gold/30 pb-2 mb-6 flex items-center justify-between">
                                        <span>Academic Year {year}</span>
                                        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-500">{papers.length} Papers</span>
                                    </h4>
                                    <div className="space-y-4">
                                        {papers.map((paper, i) => (
                                            <div key={i} className="p-5 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-md transition-all group">
                                                <div className="flex gap-4">
                                                    <span className="text-2xl font-bold text-gray-200 group-hover:text-cu-gold transition-colors">{paper.id}</span>
                                                    <div className="flex-1">
                                                        <h5 className="font-bold text-gray-800 leading-snug mb-2 group-hover:text-cu-blue transition-colors">{paper.title}</h5>
                                                        <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm">
                                                            <p className="text-gray-600 flex items-center gap-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                                </svg>
                                                                {paper.authors}
                                                            </p>
                                                            <p className="text-cu-gold font-medium flex items-center gap-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                                </svg>
                                                                {paper.journal}
                                                            </p>
                                                        </div>
                                                        <a href={paper.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-white bg-cu-blue px-4 py-2 rounded-lg hover:bg-cu-blue/90 transform hover:-translate-y-0.5 transition-all">
                                                            View Publication
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
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
                            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 scale-150 rotate-12 transition-transform group-hover:scale-[2]">
                                    <Award className="w-24 h-24 text-cu-gold" />
                                </div>
                                <h3 className="text-2xl font-bold text-cu-blue mb-6 italic">Faculty Achievements</h3>
                                <div className="space-y-4">
                                    {[
                                        { name: "Dr. Kori Nagaraj (HOD)", ach: "'Best Educationalist Award' by Innovative Global Scientific Researches." },
                                        { name: "Dr. Hiregoudar Yerrannagoudaru", ach: "Published 3 LAMBERT Academic books; 'Bio Fuel Award-2019'; 2 Patents." },
                                        { name: "Dr. Veerabhadrappa Algur", ach: "'Excellent Professional Achievement Award' for academic excellence." },
                                        { name: "Dr. S G Desai", ach: "Authored and published the book 'Antaralada Aralu'." }
                                    ].map((f, i) => (
                                        <div key={i} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col gap-1">
                                            <p className="font-bold text-cu-blue text-sm italic">{f.name}</p>
                                            <p className="text-gray-600 text-xs italic">{f.ach}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-[#121c3d] p-10 rounded-3xl text-white shadow-xl border border-white/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 scale-150 rotate-12 transition-transform group-hover:scale-[2]">
                                    <Trophy className="w-24 h-24 text-cu-gold" />
                                </div>
                                <h3 className="text-2xl font-bold mb-6 italic text-cu-gold">Student Achievements</h3>
                                <div className="space-y-4">
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                        <h4 className="font-bold text-sm mb-2 text-blue-200 uppercase tracking-wider italic">ISTE Awards</h4>
                                        <p className="text-sm italic">H M Prajwal Kumar: <span className="text-cu-gold font-bold">"BEST STUDENT OF THE CHAPTER AWARD - 2019"</span></p>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                        <h4 className="font-bold text-sm mb-2 text-blue-200 uppercase tracking-wider italic">Technical Events</h4>
                                        <p className="text-xs italic leading-relaxed">
                                            Quiz Event Winners (Mandara 2025): C. Shrivatsa, K. Geethanjali, Rajesh Kumar P, Sohel, Hafsa, Madhu, Naina, Kaveri, M Meghana Yadav.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform group-hover:scale-[2]">
                                <Target className="w-48 h-48 text-cu-blue" />
                            </div>
                            <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-cu-blue mb-4 italic">Academic Excellence</h3>
                                    <p className="text-gray-600 leading-relaxed italic text-sm mb-6">
                                        Our department has a strong legacy of producing university rank holders and researchers who contribute significantly to the field of mechanical engineering.
                                    </p>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {[
                                            { label: "Patents", value: "2" },
                                            { label: "Books Published", value: "10+" },
                                            { label: "Research Center", value: "2014" },
                                            { label: "Consultancy", value: "Active" }
                                        ].map((stat, i) => (
                                            <div key={i} className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                                <p className="text-2xl font-bold text-cu-gold italic">{stat.value}</p>
                                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest italic">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'gallery':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Department Gallery</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {galleryImages.map((img, idx) => (
                                <div key={idx} className="aspect-square rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <img
                                        src={img}
                                        alt={`Gallery ${idx + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        onError={(e) => e.target.src = "https://rymec.edu.in/wp-content/uploads/2024/06/slide1.png"}
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            default:
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-gray-100 border-dashed">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-400">Coming Soon</h3>
                        <p className="text-gray-400 mt-2">The content for this section is being updated.</p>
                    </motion.div>
                );
        }
    };

    return (
        <div className="min-h-screen pt-20 pb-10 bg-gray-50">
            {/* Header */}
            <div className="bg-cu-blue text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-display mb-4"
                    >
                        Mechanical Engineering
                    </motion.h1>
                    <div className="w-24 h-1 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="container mx-auto px-4 md:px-8 max-w-7xl mt-8">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Navigation */}
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-2 lg:sticky lg:top-24 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
                            <nav className="space-y-1">
                                {menuItems.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors font-medium text-sm ${activeTab === tab.id
                                            ? 'bg-cu-blue text-white shadow-md'
                                            : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-3/4">
                        <div className="min-h-[500px]">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #888;
                    border-radius: 2px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }
            `}</style>
        </div>
    );
};

export default MechanicalEngineering;
