import React from 'react';
import { motion } from 'framer-motion';

const Guidelines = () => {
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
                        Admission Guidelines
                    </motion.h1>
                    <div className="w-20 h-1 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 py-12 max-w-4xl">
                <div className="space-y-8">

                    {/* B.E Eligibility */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-cu-gold pl-4">
                            Eligibility Criteria For B.E
                        </h2>
                        <div className="prose text-gray-600 leading-relaxed">
                            <p className="mb-4">
                                A Candidate who has successfully passed 10 + 2 pattern of examination (equivalent to the two year Pre University in Karnataka) with Physics and Mathematics as compulsory subjects along with Chemistry / Biology / Computer Science /Electronics as optional subjects in the qualifying examination is eligible to pursue undergraduate degree in engineering at RYMEC
                            </p>
                            <ul className="list-disc pl-5 space-y-2 bg-gray-50 p-4 rounded-lg">
                                <li>The eligibility for admission is 45% in case of General Category and 40% in case of SC/ST, Category-1 and OBC Category Candidates in Physics, Chemistry and Mathematics as compulsory subjects in the qualifying examination. The marks obtained by the candidate in Biology / Computer Science / Electronics in the qualifying examination will be considered in the place of Chemistry in case the marks obtained in Chemistry is less for the required aggregate Percentage for the Purpose of determination of eligibility.</li>
                                <li>To Obtain a seat under Management quota in any branch candidate should compulsorily appear and obtained a Rank in KEA 2025 / COMED-K 2025/ JEE – Mains 2025 / State level entrance test conducted for Engineering admissions.</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* B.E Lateral Entry Eligibility */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-cu-gold pl-4">
                            Eligibility Criteria For B.E Lateral Entry
                        </h2>
                        <div className="prose text-gray-600 leading-relaxed">
                            <ul className="list-disc pl-5 space-y-2">
                                <li>A Candidate who has passed Qualifying Examination i.e Diploma Examination and obtained an aggregate minimum of 45% (for General merit candidates) of marks taken together in all the subjects of the final year (i.e Fifth & Sixth semesters) Diploma examination is eligible for admission to BE Lateral Entry Courses and 40 % of marks in Qualifying Examination; for Candidates from Karnataka belonging to SC/ST and Backward class students eligible for Lateral entry admissions.</li>
                                <li>To Obtain a seat under Management quota in any branch candidate should compulsorily appear and obtained a Rank in DCET 2025 State level entrance test conducted for Engineering Lateral Entry admissions.</li>
                            </ul>
                        </div>
                    </motion.div>


                    {/* PG Programmes Header */}
                    <div className="pt-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-cu-blue text-center mb-6">
                            The Academic Eligibility For Admission To Post Graduate Programmes MBA MCA & M.TECH.
                        </h2>
                    </div>

                    {/* MBA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
                    >
                        <h2 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-cu-gold pl-4">
                            MBA Programme
                        </h2>
                        <div className="prose text-gray-600 leading-relaxed">
                            <p className="mb-4">
                                A candidate who has passed Recognised Bachelor’s Degree of minimum of 3 years duration examination or equivalent examination and obtained an aggregate minimum of 50% marks taken together in all the subjects including languages in all the years of the Degree Examination is eligible for admission to MBA courses. (45% of marks in Q. E. in case of SC. ST and Category-I of Karnataka candidates. And students should have write any one of the entrance is compulsory i.e PGCET/CMAT/KMAT
                            </p>
                        </div>
                    </motion.div>

                    {/* MCA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
                    >
                        <h2 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-cu-gold pl-4">
                            MCA Programme
                        </h2>
                        <div className="prose text-gray-600 leading-relaxed">
                            <p className="mb-4">
                                A candidate who has passed any recognized BCA / Bachelor Degree in Computer Science Engineering or equivalent Degree Or Passed B.Sc., B.Com , B.A, preferably with Mathematics at 10 + 2 level or at Graduation level the students having no Mathematics background bridge courses will have to be studied and passed as notified by the University and obtained an aggregate minimum of 50% marks taken together in all the subjects in all the years of the Degree Examination is eligible for admission to MCA courses. 45% of marks in Q. E. in case if SC, ST and Category-I of Karnataka candidates. And students should have write any one of the entrance is compulsory i.e PGCET/CMAT/KMAT
                            </p>
                        </div>
                    </motion.div>

                    {/* M.Tech */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
                    >
                        <h2 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-cu-gold pl-4">
                            M.Tech Programme
                        </h2>
                        <div className="prose text-gray-600 leading-relaxed">
                            <p className="mb-4">
                                A candidate with valid GATE scores. A candidate who has passed qualifying examination or equivalent examination as prescribed by the Competent Authority and obtained an aggregate minimum of 50% marks taken together in all the subjects of all the years / semesters of the Degree Examination is eligible for admission to M.Tech courses. 45% of marks in Q. E. in case of SC, ST and Category-I of Karnataka candidates. And students should have write any one of the entrance is compulsory i.e GATE/ PGCET
                            </p>
                        </div>
                    </motion.div>


                    {/* Documents Required Table */}
                    <div className="pt-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-cu-blue text-center mb-6">
                            Documents Required for Admission
                        </h2>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 overflow-hidden">
                            <p className="text-gray-600 mb-6 font-medium text-center">
                                All original documents along with 3 sets of Xerox copies must be submitted at the time of admission.
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="bg-cu-blue text-white">
                                            <th className="p-4 border text-center w-20 rounded-tl-lg">Sl. No.</th>
                                            <th className="p-4 border text-left rounded-tr-lg">Document Name</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        {[
                                            "SSLC / 10th Standard Marks Card",
                                            "PUC / 12th Standard Marks Card",
                                            "Transfer Certificate (TC)",
                                            "Study Certificate (from the institution last attended)",
                                            "Caste Information",
                                            "Income Certificate (if claiming fee concession)",
                                            "Kannada Medium Certificate (if applicable)",
                                            "Rural Study Certificate (if applicable)",
                                            "Migration Certificate (for Non-Karnataka students)",
                                            "Rank Card (CET / COMED-K / JEE)",
                                            "Aadhar Card Copy",
                                            "Recent Passport Size Photographs (4 Copies)"
                                        ].map((doc, index) => (
                                            <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                                                <td className="p-4 border text-center font-bold text-cu-blue">{index + 1}</td>
                                                <td className="p-4 border font-medium">{doc}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Guidelines;
