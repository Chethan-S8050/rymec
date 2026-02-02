import React from 'react';
import { motion } from 'framer-motion';

const GoverningBody = () => {
    // Real data extracted from https://rymec.edu.in/governing-body/
    const members = [
        {
            id: 1,
            name: "Dr. Kanekal Mahantesh",
            designation: "President, V.V. Sangha, Ballari",
            role: "President",
            image: "https://rymec.edu.in/wp-content/uploads/2025/03/Dr-Kanekal-Mahantesh.jpeg"
        },
        {
            id: 2,
            name: "Sri. Janekunte Basavaraj",
            designation: "Vice President, V.V. Sangha, Ballari",
            role: "Chairman, GC",
            image: "https://rymec.edu.in/wp-content/uploads/2025/03/Janekunte-Basavaraj.jpeg"
        },
        {
            id: 3,
            name: "Dr. Aravind Patel",
            designation: "Secretary, V.V. Sangha, Ballari",
            role: "Secretary",
            image: "https://rymec.edu.in/wp-content/uploads/2024/06/rimg3.jpeg"
        },
        {
            id: 4,
            name: "Sri. Byluvaddigeri Yerriswamy",
            designation: "Treasurer, V.V. Sangha, Ballari",
            role: "Treasurer",
            image: "https://rymec.edu.in/wp-content/uploads/2024/06/rimg4.jpeg"
        },
        {
            id: 5,
            name: "Sri. Meti Pampanagouda",
            designation: "Assistant Secretary, V.V. Sangha, Ballari",
            role: "Assistant Secretary",
            image: "https://rymec.edu.in/wp-content/uploads/2024/06/rimg5.jpeg"
        },
        {
            id: 6,
            name: "Dr. Rajasekaran Shanmugam",
            designation: "Principal, RYMEC, Ballari",
            role: "Ex-Officio Member Secretary",
            image: "https://rymec.edu.in/wp-content/uploads/2026/01/im1.jpg"
        },
        {
            id: 7,
            name: "Er. Devadevan. V",
            designation: "Regional Officer, SWRO, AICTE, Bangalore",
            role: "AICTE Nominee",
            image: null
        },
        {
            id: 8,
            name: "R. Manjunath",
            designation: "Assistant Director, DTE, Bangalore",
            role: "DTE Nominee",
            image: null
        },
        {
            id: 9,
            name: "Dr. Parashivamurthy",
            designation: "Principal, Govt Engg College, Chamarajanagar",
            role: "VTU Nominee",
            image: null
        },
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
                        Governing Body
                    </motion.h1>
                    <div className="w-20 h-1 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 py-12 max-w-7xl">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200 text-cu-blue uppercase text-sm tracking-wider">
                                    <th className="p-4 font-bold w-16">Sl. No.</th>
                                    <th className="p-4 font-bold w-32">Photo</th>
                                    <th className="p-4 font-bold">Name</th>
                                    <th className="p-4 font-bold">Designation</th>
                                    <th className="p-4 font-bold">Role</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {members.map((member) => (
                                    <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 text-gray-500 font-medium">{member.id}</td>
                                        <td className="p-4">
                                            {member.image ? (
                                                <div className="w-20 h-24 overflow-hidden rounded-lg shadow-sm border border-gray-200">
                                                    <img
                                                        src={member.image}
                                                        alt={member.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-20 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                                                    <span className="text-xs text-center px-1">No Photo</span>
                                                </div>
                                            )}
                                        </td>
                                        <td className="p-4 font-bold text-gray-800 text-lg">{member.name}</td>
                                        <td className="p-4 text-gray-600">{member.designation}</td>
                                        <td className="p-4 text-cu-blue font-semibold">{member.role}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoverningBody;
