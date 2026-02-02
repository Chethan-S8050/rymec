import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NssNccIrcs = () => {
    const [activeTab, setActiveTab] = useState('NSS');

    const tabs = ['NSS', 'IRCS', 'Committee', 'Events', 'Volunteers'];

    const committeeMembers = [
        { sl: 1, name: "Dr. Virupaksha Gouda H", dept: "Mechanical", role: "Convener" },
        { sl: 2, name: "Sri. K Suresh", dept: "CSE", role: "Co-Convener" },
        { sl: 3, name: "Sri. Prashanth Keni", dept: "ECE", role: "Member" },
        { sl: 4, name: "Sri. Ravi Kumar H M", dept: "EEE", role: "Member" },
        { sl: 5, name: "Sri. Prasanna Kumar", dept: "CSE", role: "Member" },
        { sl: 6, name: "Sri. Somanath Swamy R H M", dept: "Mechanical", role: "Member" },
        { sl: 7, name: "Sri. Nagaraj Gouda", dept: "ISE", role: "Member" },
        { sl: 8, name: "Sri. Ganesh H", dept: "Civil", role: "Member" },
        { sl: 9, name: "Smt. Deepa B", dept: "EEE", role: "Member" },
        { sl: 10, name: "Sri. Swamy N", dept: "Mechanical", role: "Member" },
        { sl: 11, name: "Smt. Amrutha G M", dept: "EEE", role: "Member" },
        { sl: 12, name: "Sri. B L Eshwar Gouda", dept: "Mechanical", role: "Member" },
        { sl: 13, name: "Sri. B L Eshwar Gouda", dept: "CSE", role: "Member" }
    ];

    const nssEvents = [
        { title: "Covid-19 Vaccination Drive-1", date: "16-04-2021", link: "https://rymec.edu.in/wp-content/uploads/2024/06/01.-Covid-Vaccination-Drive_16-04-2021.pdf" },
        { title: "Oxygen Challenge", date: "17-06-2021", link: "https://rymec.edu.in/wp-content/uploads/2024/06/02.-Oxygen-Challenge_17-06-2021.pdf" },
        { title: "Covid-19 Vaccination Drive-2", date: "02-07-2021", link: "https://rymec.edu.in/wp-content/uploads/2024/06/03.-Covid-Vaccination-Drive_02-07-2021.pdf" },
        { title: "Covid-19 Vaccination Drive-3", date: "12-07-2021", link: "https://rymec.edu.in/wp-content/uploads/2024/06/04.-Covid-Vaccination-Drive_12-07-2021.pdf" },
        { title: "Village and House Hold Survey Under UBA", date: "10-08-2021", link: "https://rymec.edu.in/wp-content/uploads/2024/06/05.-Village-and-House-Hold-Survey-Under-UBA_10-08-2021.pdf" },
        { title: "Plantation Program", date: "15-08-2021", link: "https://rymec.edu.in/wp-content/uploads/2024/06/06.-Plantation-on-74th-Independence-Day_15-08-2021.pdf" },
        { title: "Large Scale Covid-19 Vaccination Campaign", date: "17-09-2021", link: "https://rymec.edu.in/wp-content/uploads/2024/06/07.-Covid-Vaccination-Drive_17-09-2021.pdf" },
        { title: "Covid-19 Vaccination Drive-4", date: "18-10-2021", link: "https://rymec.edu.in/wp-content/uploads/2024/06/08.-Covid-Vaccination-Drive_18-10-2021.pdf" },
        { title: "Mass Singing Event - Geeta Gayana", date: "28-10-2021", link: "https://rymec.edu.in/wp-content/uploads/2024/06/09.-Mass-Singing-Event-Geeta-Gayana_28-10-2021.pdf" },
        { title: "Volunteer Blood Donation Camp", date: "15-06-2022", link: "https://rymec.edu.in/wp-content/uploads/2024/06/10.-Blood-Donation-Camp_15-06-2022.pdf" },
        { title: "Covid Vaccination Drive-5", date: "22-07-2022", link: "https://rymec.edu.in/wp-content/uploads/2024/06/11.-Covid-Vaccination-Drive_22-07-2022.pdf" },
        { title: "Covid Vaccination Drive", date: "12-01-2023", link: "https://rymec.edu.in/wp-content/uploads/2024/06/12.-Covid-Vaccination-Drive_12-01-2023.pdf" },
        { title: "Computerized Eye Checkup", date: "12-01-2023", link: "https://rymec.edu.in/wp-content/uploads/2024/06/13.-Computerized-Eye-Checkup_12-01-2023.pdf" },
        { title: "Awareness Program on Blood Donation and Organ Donation", date: "11-12-2023", link: "https://rymec.edu.in/wp-content/uploads/2024/06/14.-Awareness-Program-on-Blood-Donation-and-Organ-Donation_11-12-2023.pdf" },
        { title: "Volunteer Blood Donation Camp", date: "13-12-2023", link: "https://rymec.edu.in/wp-content/uploads/2024/06/15.-Blood-Donation-Camp_13-12-2023.pdf" },
        { title: "Organ Donation Registration Campaign", date: "13-12-2023", link: "https://rymec.edu.in/wp-content/uploads/2024/06/16.-Organ-Donation-Registration-Campaign_13-12-2023.pdf" },
        { title: "Drugs Free Campus and E-Pledge Campaign", date: "16-02-2024", link: "https://rymec.edu.in/wp-content/uploads/2024/06/17.-Drugs-Free-Campus-E-Pledge-Campaign_16-02-2024.pdf" },
        { title: "Constitution Day & Awareness Campaign", date: "01-03-2024", link: "https://rymec.edu.in/wp-content/uploads/2024/06/18.-Constitution-Awareness-Campaign_01-03-2024.pdf" },
        { title: "Plantation Drive", date: "15-06-2024", link: "https://rymec.edu.in/wp-content/uploads/2025/08/Plantation-Drive_15-06-2024.pdf" },
        { title: "Health Checkup Camp", date: "27-09-2024", link: "https://rymec.edu.in/wp-content/uploads/2025/08/Health-Checkup-Camp_27-09-2024.pdf" },
        { title: "Constitution Day Celebration", date: "26-11-2024", link: "https://rymec.edu.in/wp-content/uploads/2025/08/Constitution-Day-Celebration_26-11-2024.pdf" },
        { title: "Air Pollution Month-2024", date: "29-11-2024", link: "https://rymec.edu.in/wp-content/uploads/2025/08/Air-Pollution-Month-With-RTO-Ballari_29-11-2024.pdf" },
        { title: "Swachh Campus Mission", date: "22-12-2024", link: "https://rymec.edu.in/wp-content/uploads/2025/08/Swachh-Campus-Mission_22-12-2024.pdf" },
        { title: "Awareness Program on HIV-AIDS", date: "28-02-2025", link: "https://rymec.edu.in/wp-content/uploads/2025/08/Awareness-Program-on-HIV-AIDS_28-02-2025.pdf" },
        { title: "Awareness on Blood Donation", date: "10-03-2025", link: "https://rymec.edu.in/wp-content/uploads/2025/08/Awareness-Program-on-Blood-Donation_10-03-2025.pdf" },
        { title: "Awareness Program on Blood Donation", date: "07-04-2025", link: "https://rymec.edu.in/wp-content/uploads/2025/08/Awareness-Program-on-Blood-Donation_07-04-2025.pdf" },
        { title: "Volunteer Blood Donation Camp", date: "08-04-2025", link: "https://rymec.edu.in/wp-content/uploads/2025/08/Blood-Donation-Camp-08-04-2025.pdf" },
        { title: "Celebration of 135th Dr. Ambedkar Jayanthi", date: "14-04-2025", link: "https://rymec.edu.in/wp-content/uploads/2025/08/Dr.-B-R-Ambedkar-Jayanthi-Celebrations_14-04-2025.pdf" },
        { title: "Celebration of 09th International Yoga Day", date: "21-06-2025", link: "https://rymec.edu.in/wp-content/uploads/2025/08/International-Yoga-Day_21-06-2025.pdf" }
    ];

    const studentVolunteers = [
        { sl: 1, usn: "3VC17ME065", name: "Sanjay S", dept: "MECH" },
        { sl: 2, usn: "3VC18ME064", name: "Vikas P", dept: "MECH" },
        { sl: 3, usn: "3VC18CV111", name: "Vihshnu Prasad C", dept: "CIVIL" },
        { sl: 4, usn: "3VC17ME011", name: "Eknatha Kg", dept: "MECH" },
        { sl: 5, usn: "3VC19CS003", name: "Abhi S Kamarthi", dept: "CSE" },
        { sl: 6, usn: "3VC17CS035", name: "Dhanvi Raj Y M", dept: "CSE" },
        { sl: 7, usn: "3VC19CS105", name: "Pavan M", dept: "CSE" },
        { sl: 8, usn: "3VC19EC056", name: "Sreekar R", dept: "ECE" },
        { sl: 9, usn: "3VC20CS031", name: "B Nivas", dept: "CSE" },
        { sl: 10, usn: "3VC20CS067", name: "Hemanthi A", dept: "CSE" },
        { sl: 11, usn: "3VC19CS091", name: "N Naveen Upadhyaya", dept: "CSE" },
        { sl: 12, usn: "3VC20CV015", name: "M S Sindhu", dept: "CIVIL" },
        { sl: 13, usn: "3VC19CS119", name: "Rekha M", dept: "CSE" },
        { sl: 14, usn: "3VC19CS001", name: "A Madhuri", dept: "CSE" },
        { sl: 15, usn: "3VC18ME059", name: "Udaykiran S L", dept: "MECH" },
        { sl: 16, usn: "3VC19CV013", name: "Divya K", dept: "CIVIL" },
        { sl: 17, usn: "3VC20CS003", name: "A S Kruthik", dept: "CSE" },
        { sl: 18, usn: "3VC19IS013", name: "Prateeksha M S", dept: "ISE" },
        { sl: 19, usn: "3VC20EC048", name: "Sai Ambrutha Y", dept: "ECE" },
        { sl: 20, usn: "3VC20EC033", name: "Nagarakshitha Mr", dept: "ECE" },
        { sl: 21, usn: "3VC18ME012", name: "Santosh B K", dept: "MECH" },
        { sl: 22, usn: "3VC18ME037", name: "P Pavan Kumar", dept: "MECH" },
        { sl: 23, usn: "3VC19CV028", name: "Jaiveer Chavan M S", dept: "CIVIL" },
        { sl: 24, usn: "3VC18CS172", name: "Sinchana V S", dept: "CSE" },
        { sl: 25, usn: "3VC20CS094", name: "M B Preetham", dept: "CSE" },
        { sl: 26, usn: "3VC19CS188", name: "YedneshSutrave S", dept: "CSE" },
        { sl: 27, usn: "3VC19CS065", name: "Lavanya K", dept: "CSE" },
        { sl: 28, usn: "3VC19IS012", name: "Jeeva P", dept: "ISE" },
        { sl: 29, usn: "3VC20CV006", name: "Jayashree H", dept: "CIVIL" },
        { sl: 30, usn: "3VC18ME019", name: "Jagadish N", dept: "MECH" },
        { sl: 31, usn: "3VC19EE007", name: "B S Anusha", dept: "EEE" },
        { sl: 32, usn: "3VC20CS013", name: "Ajay Kumar H A", dept: "CSE" },
        { sl: 33, usn: "3VC20CV029", name: "R Diggaja", dept: "CIVIL" },
        { sl: 34, usn: "3VC19CS087", name: "Mohammed Sohail Ahmed", dept: "CSE" },
        { sl: 35, usn: "3VC19CV010", name: "Davidkumar C B", dept: "CIVIL" },
        { sl: 36, usn: "3VC20CV018", name: "Mohammed Faisal", dept: "CIVIL" },
        { sl: 37, usn: "3VC19CV011", name: "Deepak Singh M Rajput", dept: "CIVIL" },
        { sl: 38, usn: "3VC19CV070", name: "Sujan Sunad J", dept: "CIVIL" },
        { sl: 39, usn: "3VC20EC403", name: "Poornima S", dept: "ECE" },
        { sl: 40, usn: "3VC19CS157", name: "Sushas K", dept: "CSE" },
        { sl: 41, usn: "3VC20EC058", name: "T Anusha", dept: "ECE" },
        { sl: 42, usn: "3VC19EC040", name: "Priyanaka", dept: "ECE" },
        { sl: 43, usn: "3VC19CS002", name: "A Shivakrishna", dept: "CSE" },
        { sl: 44, usn: "3VC20CV041", name: "Vikas Vl", dept: "CIVIL" },
        { sl: 45, usn: "3VC20EE463", name: "Shivaraj Basavaraj Aladakati", dept: "EEE" },
        { sl: 46, usn: "3VC19EC037", name: "N Venkat Sai", dept: "ECE" },
        { sl: 47, usn: "3VC20CV028", name: "Ravikumar P", dept: "CIVIL" },
        { sl: 48, usn: "3VC20EC023", name: "Haritha K", dept: "ECE" },
        { sl: 49, usn: "3VC19IS023", name: "T Sujana", dept: "ISE" },
        { sl: 50, usn: "3VC20IS401", name: "Syed Abdul Gaffoor", dept: "ISE" },
        { sl: 51, usn: "3VC20IS017", name: "MeghaTontanal", dept: "ISE" },
        { sl: 52, usn: "3VC20CS023", name: "Apoorva K", dept: "CSE" },
        { sl: 53, usn: "3VC20IS035", name: "Viswanath K", dept: "ISE" },
        { sl: 54, usn: "3VC19CS046", name: "Gokul P", dept: "CSE" },
        { sl: 55, usn: "3VC20ME019", name: "Vihar G", dept: "MECH" },
        { sl: 56, usn: "3VC20ME015", name: "Om Prakasha", dept: "MECH" },
        { sl: 57, usn: "3VC20CS037", name: "Bhavana", dept: "CSE" },
        { sl: 58, usn: "3VC19ME033", name: "S Saikumar", dept: "MECH" },
        { sl: 59, usn: "3VC20EE422", name: "K Nagaraju", dept: "EEE" },
        { x: 60, usn: "3VC20ME013", name: "Mahesh B", dept: "MECH" },
        { sl: 61, usn: "3VC19CV021", name: "Govind Raj G", dept: "CIVIL" },
        { sl: 62, usn: "3VC20EC007", name: "D Ayaan Ali Ahmed", dept: "ECE" },
        { sl: 63, usn: "3VC20CS051", name: "G S Vinaykumar", dept: "CSE" },
        { sl: 64, usn: "3VC19CS186", name: "Yalageri Harsha", dept: "CSE" },
        { sl: 65, usn: "3VC18CV063", name: "Mohan Reddy G", dept: "CIVIL" },
        { sl: 66, usn: "3VC20CV402", name: "Amir D", dept: "CIVIL" },
        { sl: 67, usn: "3VC18ME064", name: "Vikas P", dept: "MECH" },
        { sl: 68, usn: "3VC19CS120", name: "Rohini Gr", dept: "CSE" },
        { sl: 69, usn: "3VC19CS025", name: "Bhoomika Jahagirdar", dept: "CSE" },
        { sl: 70, usn: "3VC18CV420", name: "Manjunatha K", dept: "CIVIL" },
        { sl: 71, usn: "3VC19CS090", name: "N Ashok Reddy", dept: "EEE" },
        { sl: 72, usn: "3VC18EE042", name: "Pavan S", dept: "EEE" },
        { sl: 73, usn: "3VC19EC030", name: "M Raghavendra", dept: "ECE" },
        { sl: 74, usn: "3VC19EC066", name: "U Vinod Kumar", dept: "ECE" },
        { sl: 75, usn: "3VC19ME422", name: "Jashwa K", dept: "MECH" },
        { sl: 76, usn: "3VC19ME463", name: "Umesh", dept: "MECH" },
        { sl: 77, usn: "3VC20CS093", name: "M Ashish Narayana", dept: "CSE" },
        { sl: 78, usn: "3VC20ME003", name: "Dharun Kumar", dept: "MECH" },
        { sl: 79, usn: "3VC19EC023", name: "Kavitha K", dept: "ECE" },
        { sl: 80, usn: "3VC19EC032", name: "Madhuri Kv", dept: "ECE" },
        { sl: 81, usn: "3VC20EC406", name: "PrahaladaSk", dept: "ECE" },
        { sl: 82, usn: "3VC19EE018", name: "H Prashanth", dept: "EEE" },
        { sl: 83, usn: "3VC19EE023", name: "K Santosh Kumar", dept: "EEE" }
    ];

    const ayReports = [
        { sl: 1, title: "Covid-19 Vaccination Drive-1", resource: "District Health and Family Welfare Office and VIMS Ballari", date: "16-04-21", venue: "RYMEC, Ballari", motto: "To Vaccinate the faculties above 40+ Years", students: 50 },
        { sl: 2, title: "Oxygen Challenge", resource: "ABVP, Karnataka State and Ballari Division", date: "17-06-21", venue: "RYMEC, Ballari", motto: "On occasion of “International Environment Day”, Around 1500 Seed Balls sown", students: 50 },
        { sl: 3, title: "Covid-19 Vaccination Drive-2", resource: "District Health and Family Welfare Office, Ballari", date: "02-07-21", venue: "RYMEC, Ballari", motto: "To Vaccinate the faculties & Students above 18+ Years", students: 500 },
        { sl: 4, title: "Covid-19 Vaccination Drive-3", resource: "District Health and Family Welfare Office, Ballari", date: "12-07-21", venue: "RYMEC, Ballari", motto: "To Vaccinate the faculties & Students above 18+ Years", students: 250 },
        { sl: 5, title: "Village and House Hold Survey Under UBA", resource: "Unnat Bharat Abhiyan Cell, RYMEC - Ballari", date: "10-08-21", venue: "Haraginadone Village", motto: "Village and House hold survey conducted to identify local problems", students: 50 },
        { sl: 6, title: "Plantation Program", resource: "Students of RYMEC, Ballari", date: "15-08-21", venue: "RYMEC, Ballari", motto: "On the occasion of 75th Independence Day, more than 100 plants planted", students: 100 }
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
                        Activities
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold font-display mb-6 tracking-tight uppercase"
                    >
                        NSS / NCC / IRCS
                    </motion.h1>
                    <div className="w-24 h-1.5 bg-cu-gold mx-auto rounded-full"></div>
                    <p className="mt-6 text-blue-100 max-w-2xl mx-auto text-sm md:text-base">
                        Promoting community service and social responsibility through National Service Scheme, National Cadet Corps, and Indian Red Cross Society.
                    </p>
                </div>
            </div>

            {/* Breadcrumb Area */}
            <div className="bg-white border-b border-gray-100 py-4">
                <div className="container mx-auto px-4 md:px-8">
                    <nav className="flex text-sm font-medium text-gray-500">
                        <a href="/" className="hover:text-cu-blue transition-colors">Home</a>
                        <span className="mx-2">/</span>
                        <span className="text-cu-blue">NSS / NCC / IRCS</span>
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
                        className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 overflow-hidden"
                    >
                        {activeTab === 'NSS' && (
                            <div className="space-y-8">
                                <section>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-4">
                                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xl">
                                            <i className="fas fa-users"></i>
                                        </div>
                                        National Service Scheme (NSS) Unit
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        National Service Scheme (NSS) was launched during 1969, the birth centenary year of Mahatma Gandhi, in 37 Universities involving 40000 students. NSS is an extension dimension to the higher education system to orient the student youth to community service while they are studying in educational institutions. It is being implemented by the Ministry of Youth Affairs and Sports, Government of India.
                                    </p>
                                </section>

                                <div className="grid md:grid-cols-2 gap-10">
                                    <section>
                                        <h3 className="text-xl font-bold text-cu-blue mb-4">Aims and Objectives</h3>
                                        <ul className="space-y-3 text-gray-600 list-disc pl-5 text-sm">
                                            <li>Understand the community in which they work.</li>
                                            <li>Understand themselves in relation to their community.</li>
                                            <li>Identify the needs and problems of the community and involve them in problem-solving process.</li>
                                            <li>Develop among themselves a sense of social and civic responsibility.</li>
                                            <li>Utilize their knowledge in finding practical solution to individual and community problems.</li>
                                            <li>Develop competence required for group-living and sharing of responsibilities.</li>
                                            <li>Gain skills in mobilizing community participation.</li>
                                            <li>Acquire leadership qualities and democratic attitude.</li>
                                            <li>Develop capacity to meet emergencies and natural disasters.</li>
                                            <li>Practice national integration and social harmony.</li>
                                        </ul>
                                    </section>
                                    <div className="space-y-6">
                                        <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-inner">
                                            <h3 className="text-xl font-bold text-cu-blue mb-2">Motto of NSS</h3>
                                            <p className="text-2xl font-display font-bold text-cu-gold mb-4">"NOT ME BUT YOU"</p>
                                            <h3 className="text-xl font-bold text-cu-blue mb-2">NSS Symbol</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Based on the "Rath" wheel of the Konark Sun Temple in Odisha. The navy-blue colour indicates the cosmos, while the Red indicates that NSS volunteers are lively, active, energetic and full of high spirit.
                                            </p>
                                        </section>
                                        <section className="p-6 rounded-2xl border border-blue-100 bg-blue-50/50">
                                            <h3 className="text-xl font-bold text-cu-blue mb-3">Enrolment</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                NSS is a voluntary scheme. A volunteer needs to devote 240 hours of social service in two years. NCC cadets are not allowed to join NSS concurrently. Enrolment is free for first and second-year degree students.
                                            </p>
                                        </section>
                                    </div>
                                </div>

                                <section>
                                    <h3 className="text-xl font-bold text-cu-blue mb-4">Administrative Structure</h3>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {[
                                            { level: 'Colleges', info: 'Grass-root units (100 volunteers each)' },
                                            { level: 'Universities', info: 'NSS Cells coordinating multiple colleges' },
                                            { level: 'State Level', info: 'State NSS Cell headed by Liaison Officer' },
                                            { level: 'Regional Level', info: 'Liaison with State Govts & Universities' }
                                        ].map(item => (
                                            <div key={item.level} className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm text-center">
                                                <h4 className="font-bold text-gray-800 mb-1">{item.level}</h4>
                                                <p className="text-xs text-gray-500">{item.info}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        )}

                        {activeTab === 'IRCS' && (
                            <div className="space-y-8">
                                <section>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-4">
                                        <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white text-xl">
                                            <i className="fas fa-plus"></i>
                                        </div>
                                        Indian Red Cross Society (IRCS)
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        The Indian Red Cross is a voluntary humanitarian organization providing relief in times of disasters/emergencies and promotes health & care of the vulnerable people and communities. It was established in 1920 under the Indian Red Cross Society Act.
                                    </p>
                                </section>

                                <div className="grid md:grid-cols-2 gap-10">
                                    <section>
                                        <h3 className="text-xl font-bold text-cu-blue mb-4">Mission and History</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            Founded in 1859 by Jean Henry Dunant after the battle of Solferino. The emblem, a Red Cross on white background, was recognized in 1864. The IRCS has over 1100 branches across India, with the President of India as its President.
                                        </p>
                                        <h3 className="text-xl font-bold text-cu-blue mb-4">Objectives</h3>
                                        <ul className="space-y-2 text-gray-600 list-disc pl-5 text-sm">
                                            <li>To serve as an information centre about Red Cross features.</li>
                                            <li>To obtain Red Cross services for the college community.</li>
                                            <li>To serve as a focal point for coordinated incoming services.</li>
                                            <li>To serve as an outlet for College Youth Red Cross volunteer services.</li>
                                            <li>Provide an atmosphere for all-round development of its members.</li>
                                        </ul>
                                    </section>
                                    <section>
                                        <h3 className="text-xl font-bold text-cu-blue mb-6 underline decoration-red-200 underline-offset-8">Core Activities</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {[
                                                { title: 'Orphanage Visits', icon: 'home' },
                                                { title: 'Health Awareness', icon: 'heart' },
                                                { title: 'First Aid Training', icon: 'medkit' },
                                                { title: 'Blood Donation', icon: 'tint' }
                                            ].map(act => (
                                                <div key={act.title} className="p-5 bg-red-50/50 text-red-700 rounded-2xl font-bold flex flex-col items-center justify-center gap-2 border border-red-100 hover:scale-105 transition-transform">
                                                    <i className={`fas fa-${act.icon} text-2xl`}></i>
                                                    {act.title}
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Committee' && (
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">Committee Members</h2>
                                <div className="overflow-x-auto rounded-2xl border border-gray-100">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-gray-50 text-cu-blue uppercase text-sm tracking-wider">
                                                <th className="px-6 py-4 border-b">Sl. No.</th>
                                                <th className="px-6 py-4 border-b">Name of the Staff</th>
                                                <th className="px-6 py-4 border-b">Department</th>
                                                <th className="px-6 py-4 border-b">Role</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-600">
                                            {committeeMembers.map((member) => (
                                                <tr key={member.sl} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="px-6 py-4 border-b">{member.sl}</td>
                                                    <td className="px-6 py-4 border-b font-semibold text-gray-800">{member.name}</td>
                                                    <td className="px-6 py-4 border-b">{member.dept}</td>
                                                    <td className="px-6 py-4 border-b">
                                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest ${member.role === 'Convener' ? 'bg-cu-gold/10 text-cu-gold' :
                                                                member.role === 'Co-Convener' ? 'bg-blue-600/10 text-blue-600' :
                                                                    'bg-gray-100 text-gray-500'
                                                            }`}>
                                                            {member.role.toUpperCase()}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Events' && (
                            <div className="space-y-12">
                                <section>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-6">NSS Reports / Download</h2>
                                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        {nssEvents.map((event, idx) => (
                                            <div key={idx} className="group p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-2 h-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                <div className="flex items-start gap-4 mb-4">
                                                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-600 font-bold shrink-0 text-xs">
                                                        PDF
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-800 text-sm leading-tight mb-1">{event.title}</h4>
                                                        <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">{event.date}</p>
                                                    </div>
                                                </div>
                                                <a
                                                    href={event.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full inline-flex items-center justify-center gap-2 py-2 bg-gray-50 group-hover:bg-red-600 group-hover:text-white text-gray-600 rounded-xl text-[10px] font-bold transition-all"
                                                >
                                                    <i className="fas fa-download"></i>
                                                    DOWNLOAD PDF
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Detailed Activities (AY 2021-22)</h2>
                                    <div className="overflow-x-auto rounded-2xl border border-gray-100">
                                        <table className="w-full text-left border-collapse min-w-[800px]">
                                            <thead>
                                                <tr className="bg-gray-50 text-cu-blue uppercase text-xs tracking-wider">
                                                    <th className="px-6 py-4 border-b">Sl.</th>
                                                    <th className="px-6 py-4 border-b">Event Title</th>
                                                    <th className="px-6 py-4 border-b">Resource / Collaboration</th>
                                                    <th className="px-6 py-4 border-b">Date</th>
                                                    <th className="px-6 py-4 border-b">Motto / Details</th>
                                                    <th className="px-6 py-4 border-b">Students</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-gray-600 text-sm">
                                                {ayReports.map((report) => (
                                                    <tr key={report.sl} className="hover:bg-gray-50/30 transition-colors">
                                                        <td className="px-6 py-4 border-b">{report.sl}</td>
                                                        <td className="px-6 py-4 border-b font-bold text-gray-800">{report.title}</td>
                                                        <td className="px-6 py-4 border-b">{report.resource}</td>
                                                        <td className="px-6 py-4 border-b italic">{report.date}</td>
                                                        <td className="px-6 py-4 border-b text-xs leading-relaxed">{report.motto}</td>
                                                        <td className="px-6 py-4 border-b font-bold">{report.students}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </section>
                            </div>
                        )}

                        {activeTab === 'Volunteers' && (
                            <div className="space-y-8">
                                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                                    <h2 className="text-3xl font-bold text-gray-800">Student Volunteers</h2>
                                    <div className="px-4 py-2 bg-blue-50 text-cu-blue rounded-full text-sm font-bold border border-blue-100">
                                        Total Volunteers: 83
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent">
                                    {studentVolunteers.map((vol) => (
                                        <div key={vol.sl} className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-cu-blue transition-all group">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-colors text-xs font-bold">
                                                    {vol.sl}
                                                </div>
                                                <div className="overflow-hidden">
                                                    <p className="text-[10px] text-cu-blue font-bold truncate">{vol.usn}</p>
                                                    <h4 className="font-bold text-gray-800 text-xs truncate uppercase">{vol.name}</h4>
                                                    <p className="text-[9px] text-gray-400 font-semibold">{vol.dept}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 text-center">
                                    <p className="text-blue-700 font-medium text-sm italic">
                                        "These students actively participate in social service projects, blood donation camps, and community awareness programs as part of RYMEC's commitment to social welfare."
                                    </p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default NssNccIrcs;
