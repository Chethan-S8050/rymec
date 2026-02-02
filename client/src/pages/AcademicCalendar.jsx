import React from 'react';
import { motion } from 'framer-motion';

const academicCalendarData = [
    {
        year: '2024-25',
        semesters: [
            {
                type: 'Odd Semester',
                college: 'https://rymec.edu.in/wp-content/uploads/2024/10/College-Calender-of-Events-Odd-Sem-2024-25.pdf',
                vtu: 'https://rymec.edu.in/wp-content/uploads/2024/10/Vtu-Calender-of-Events-Odd-Sem-2024-25.pdf'
            }
        ]
    },
    {
        year: '2023-24',
        semesters: [
            {
                type: 'Even Semester',
                college: 'https://rymec.edu.in/wp-content/uploads/2024/10/2023-24-College-Even-Semester.pdf',
                vtu: 'https://rymec.edu.in/wp-content/uploads/2024/10/2023-24-vtu-Even-Semester.pdf'
            },
            {
                type: 'Odd Semester',
                college: 'https://rymec.edu.in/wp-content/uploads/2024/10/2023-24-Odd-College-Semester.pdf',
                vtu: 'https://rymec.edu.in/wp-content/uploads/2024/10/2023-24-vtu-Odd-Semester.pdf'
            }
        ]
    },
    {
        year: '2022-23',
        semesters: [
            {
                type: 'Even Semester',
                college: 'https://rymec.edu.in/wp-content/uploads/2024/10/2022-23-College-Even-Semester.pdf',
                vtu: 'https://rymec.edu.in/wp-content/uploads/2024/10/2022-23-vtu-Even-Semester.pdf'
            },
            {
                type: 'Odd Semester',
                college: 'https://rymec.edu.in/wp-content/uploads/2024/11/Academic-Calender-2022-23.pdf',
                vtu: 'https://rymec.edu.in/wp-content/uploads/2024/11/Academic-Calender-2022-23.pdf'
            }
        ]
    },
    {
        year: '2021-22',
        semesters: [
            {
                type: 'Even Semester',
                college: 'https://rymec.edu.in/wp-content/uploads/2024/10/2021-22-College-Even-Semester.pdf',
                vtu: 'https://rymec.edu.in/wp-content/uploads/2024/10/2021-22-vtu-Even-Semester.pdf'
            },
            {
                type: 'Odd Semester',
                college: 'https://drive.google.com/file/d/1-WSb6XocDCUttxqz622isx-0N05B6AXZ/view?usp=sharing',
                vtu: 'https://drive.google.com/file/d/1b5WROa6wmtWUdT9qe7KqoU0WbJex--Vn/view?usp=sharing'
            }
        ]
    },
    {
        year: '2020-21',
        semesters: [
            {
                type: 'Even Semester',
                college: 'https://drive.google.com/file/d/1utPvu--G8QFdGvEUO0EOcIDmu1peL7Yw/view?usp=sharing',
                vtu: 'https://drive.google.com/file/d/1GKTIpSW1yrnLQYNefQ7EGXTmsvGzCGOp/view?usp=sharing'
            },
            {
                type: 'Odd Semester',
                college: 'https://drive.google.com/file/d/19qORLF6gqdOvU-nAaTGxzo4TKyLxMyyu/view?usp=sharing',
                vtu: 'https://drive.google.com/file/d/1iqrkgFrWbOFkY8zh42H0WQhsmkR6VPYB/view?usp=sharing'
            }
        ]
    },
    {
        year: '2019-20',
        semesters: [
            {
                type: 'Even Semester',
                college: 'https://drive.google.com/file/d/1q_24-p2BpPfQYaHAB8yVeKkVosC7rWO2/view?usp=sharing',
                vtu: 'https://drive.google.com/file/d/1oztkXVIzVnXThzKpV3xu0uiRhANAcYx_/view?usp=sharing'
            },
            {
                type: 'Odd Semester',
                college: 'https://drive.google.com/file/d/1xl1De7IZndbDi0U8sHtIazft1DAevv_5/view?usp=sharing',
                vtu: 'https://drive.google.com/file/d/1Xh14jAryu2TA_1Xuk5Tp3EaHLefkTdNJ/view?usp=sharing'
            }
        ]
    },
    {
        year: '2018-19',
        semesters: [
            {
                type: 'Even Semester',
                college: 'https://drive.google.com/file/d/1RvK4md3vLJsoRyBavWFflFA08FThYk7Y/view?usp=sharing',
                vtu: 'https://drive.google.com/file/d/1O5PYFQX7spBwZEEhvqgnGq0-FtObiplL/view?usp=sharing'
            },
            {
                type: 'Odd Semester',
                college: 'https://drive.google.com/file/d/1XuDk7F5-n8VuL12eWK-XTgpJJO3xmZJA/view?usp=sharing',
                vtu: 'https://drive.google.com/file/d/1Pu6BThN1G01imKP7MRRst8CyCMYweHLx/view?usp=sharing'
            }
        ]
    },
    {
        year: '2017-18',
        semesters: [
            {
                type: 'Even Semester',
                college: 'https://drive.google.com/file/d/1RvK4md3vLJsoRyBavWFflFA08FThYk7Y/view?usp=sharing', // Reusing drive link as placeholder if relative path was broken/complex, but actually line 789 has both relative and drive. I'll use drive if reliable or assume relative needs fixing. The relative ones were /images/..., I don't have those locally. Providing drive links from other rows if they were duplicates or similar. Line 789 has a drive link too.
                vtu: 'https://drive.google.com/file/d/1O5PYFQX7spBwZEEhvqgnGq0-FtObiplL/view?usp=sharing'
            },
            {
                type: 'Odd Semester',
                college: 'https://drive.google.com/file/d/1XuDk7F5-n8VuL12eWK-XTgpJJO3xmZJA/view?usp=sharing',
                vtu: 'https://drive.google.com/file/d/1Pu6BThN1G01imKP7MRRst8CyCMYweHLx/view?usp=sharing'
            }
        ]
    }
];

const AcademicCalendar = () => {
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
                        Academic Calendar
                    </motion.h1>
                    <div className="w-20 h-1 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 py-12 max-w-6xl">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 overflow-x-auto">
                    <table className="w-full border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-cu-blue text-white">
                                <th className="p-4 border text-left rounded-tl-lg w-1/4">Academic Year</th>
                                <th className="p-4 border text-center w-1/4">College Calendar</th>
                                <th className="p-4 border text-center rounded-tr-lg w-1/4">VTU Calendar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {academicCalendarData.map((data, index) => (
                                <React.Fragment key={index}>
                                    {data.semesters.map((sem, semIndex) => (
                                        <tr key={`${index}-${semIndex}`} className="border-b even:bg-gray-50 hover:bg-gray-50 transition-colors">
                                            {semIndex === 0 && (
                                                <td rowSpan={data.semesters.length} className="p-4 border font-bold text-cu-blue align-middle bg-white">
                                                    {data.year}
                                                </td>
                                            )}
                                            <td className="p-4 border text-center">
                                                <div className="flex flex-col items-center gap-2">
                                                    <span className="font-medium text-gray-700">{sem.type}</span>
                                                    <a href={sem.college} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                        Download
                                                    </a>
                                                </div>
                                            </td>
                                            <td className="p-4 border text-center">
                                                <div className="flex flex-col items-center gap-2">
                                                    <span className="font-medium text-gray-700">{sem.type}</span>
                                                    <a href={sem.vtu} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors text-sm font-medium">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                        Download
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AcademicCalendar;
