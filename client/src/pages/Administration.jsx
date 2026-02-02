import React from 'react';
import { motion } from 'framer-motion';

const Administration = () => {
    const adminList = [
        { id: 1, name: "Sri. Janekunte Basavaraj", designation: "Chairman, RYMEC", role: "Administration" },
        { id: 2, name: "Dr. Rajasekaran Shanmugam", designation: "Principal", role: "Administration" },
        { id: 3, name: "Dr. Savita Sonoli", designation: "Vice Principal & HOD, E&CE", role: "Admission, Departmental Work, Research Centre Coordinator" },
        { id: 4, name: "Dr. B. Sreepathi", designation: "Professor & HOD, ISE", role: "EMS Coordinator, Examination Dean" },
        { id: 5, name: "Dr. H. Girish", designation: "Professor & HOD, CSE", role: "Dean Academic" },
        { id: 6, name: "Dr. H.M. Mallikarjuna", designation: "Professor and HOD Civil", role: "Departmental Work, Research Centre Coordinator" },
        { id: 7, name: "Dr. S. Kotresh", designation: "Professor, HOD, EEE", role: "Departmental Work, Research Centre Coordinator" },
        { id: 8, name: "Dr. Kori Nagaraj", designation: "Professor, HOD, Mechanical", role: "Departmental Work, Research Centre Coordinator" },
        { id: 9, name: "Dr. A. Thimmana Gouda", designation: "Profesor, & MBA Coordinator", role: "Departmental Work, Research Centre Coordinator" },
        { id: 10, name: "Dr. Hiregodar Yerranagoudaru", designation: "Professor, & PG Coordinator", role: "Departmental Work" },
        { id: 11, name: "Dr. C. Thotappa", designation: "Profesor, & PG Coordinator", role: "Departmental Work" },
        { id: 12, name: "Dr. Phakirappa", designation: "Profesor, & HOD, Mathematics", role: "Departmental Work" },
        { id: 13, name: "Dr. Hiremath Suresh Babu", designation: "Profesor, & HOD, Chemistry", role: "Departmental Work" },
        { id: 14, name: "Dr. N.M. Nagabhushan", designation: "Asst. Professor & HOD, Physics", role: "Departmental Work, Research Centre Coordinator" },
        { id: 15, name: "Dr. S.P. Jagadish", designation: "Associate Professor", role: "Hostel Chief Warden" },
        { id: 16, name: "Dr. Veeragangadhar Swamy", designation: "Professor", role: "IQAC Coordinator" },
        { id: 17, name: "Sri. Gururaja K.K", designation: "Asst. Professor", role: "Training and Placement Officer" },
        { id: 18, name: "Dr. S.G. Anuradha", designation: "Professor & PG Coordinator", role: "RYMEC Website Coordinator, Institute Level NBA Coordinator" },
        { id: 19, name: "Sri. Virupakshi Gouda", designation: "Assistant Professor", role: "NSS & Red Cross Convener" },
        { id: 20, name: "Smt. G. Girijavani", designation: "Assistant Professor", role: "Warden, Gandhinagar Girls Hostel" },
        { id: 21, name: "Sri. K.M. Shiva Prasad", designation: "Assistant Professor", role: "Warden, Gandhinagar Boys Hostel" },
        { id: 22, name: "Sri. K Phanindra Reddy", designation: "Assistant Professor", role: "Warden, Campus Boys Hostel" },
        { id: 23, name: "Sri. Sridevi S Malipatil", designation: "Assistant Professor", role: "Warden, Working Women’s Hostel" },
        { id: 24, name: "Sri. M. Vishwanath Reddy", designation: "Librarian", role: "Library" },
        { id: 25, name: "Sri. S. Vijaya Mahnthesh", designation: "Physical Director", role: "Sports and Games" },
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
                        Administration
                    </motion.h1>
                    <div className="w-20 h-1 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 py-12 max-w-7xl">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-cu-blue text-white">
                                    <th className="p-4 rounded-tl-lg font-bold w-16 text-center">Sl.No</th>
                                    <th className="p-4 font-bold">Name</th>
                                    <th className="p-4 font-bold">Designation</th>
                                    <th className="p-4 rounded-tr-lg font-bold">Role</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {adminList.map((admin) => (
                                    <tr
                                        key={admin.id}
                                        className="hover:bg-gray-50 transition-colors duration-150"
                                    >
                                        <td className="p-4 text-center font-medium text-gray-500">{admin.id}</td>
                                        <td className="p-4 font-semibold text-gray-800">{admin.name}</td>
                                        <td className="p-4 text-gray-600 font-medium">{admin.designation}</td>
                                        <td className="p-4 text-gray-600">{admin.role}</td>
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

export default Administration;
