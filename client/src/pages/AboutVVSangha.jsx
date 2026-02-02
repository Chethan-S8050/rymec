import React from 'react';
import { motion } from 'framer-motion';

// Import Images
import presidentImg from '../assets/rymec/vvs_president.jpg';
import vicePresidentImg from '../assets/rymec/vvs_vice_president.jpg';
import secretaryImg from '../assets/rymec/vvs_secretary.jpg';
import jointSecretaryImg from '../assets/rymec/vvs_joint_secretary.jpg';
import treasurerImg from '../assets/rymec/vvs_treasurer.jpg';

const AboutVVSangha = () => {
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
                        About V.V. Sangha
                    </motion.h1>
                    <div className="w-20 h-1 bg-cu-gold mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 py-12 max-w-5xl">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">

                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        The Veerasaiva Vidyavardhaka Sangha is Registered Education Body started in 1916. The Sangha over the years, with a humble beginning with a Sanskrit Pathasala and a Primary Kannada School, has grown in size and strength. It now runs 2 Middle Schools, 5 High Schools, 1 Jr. College and 9 Degree Colleges of Arts, Science and Commerce, 5 Educational Institutions, Law, 2 Engineering, B.Pharmacy, D.Pharmacy Colleges, Polytechnic and Institute of Management. The achievements of the Sangha have been hailed by eminent scholars, administrators and men of eminence and standing who had occasion to visit and participate in the functioning of the Institutions of the Sangha.
                    </p>

                    {/* Office Bearers Table */}
                    <div className="mt-12 overflow-x-auto">
                        <h3 className="text-2xl font-bold text-cu-blue mb-6">Office Bearers of V.V. Sangha</h3>
                        <table className="w-full border-collapse border border-gray-200 min-w-[800px]">
                            <thead className="bg-cu-blue text-white">
                                <tr>
                                    <th className="p-4 border border-gray-300 text-left">Sl. No</th>
                                    <th className="p-4 border border-gray-300 text-left">Name, Address and Phone Number</th>
                                    <th className="p-4 border border-gray-300 text-left">Father's Name</th>
                                    <th className="p-4 border border-gray-300 text-left">Designation</th>
                                    <th className="p-4 border border-gray-300 text-left">Date of Birth</th>
                                    <th className="p-4 border border-gray-300 text-left">Qualification & Profession</th>
                                    <th className="p-4 border border-gray-300 text-left w-32">Photos</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 text-sm">
                                {/* Row 1 */}
                                <tr className="hover:bg-gray-50">
                                    <td className="p-4 border border-gray-200">1</td>
                                    <td className="p-4 border border-gray-200 font-medium">
                                        Dr Kanekal Mahantesh<br />
                                        <span className="text-gray-500 font-normal">2nd Cross, Patel Nagar, Ballari</span>
                                    </td>
                                    <td className="p-4 border border-gray-200">Dr Late K. Mahantarudrappa</td>
                                    <td className="p-4 border border-gray-200 font-bold text-cu-blue">President, V. V. Sangha, Ballari.</td>
                                    <td className="p-4 border border-gray-200">–</td>
                                    <td className="p-4 border border-gray-200">Profession Doctor</td>
                                    <td className="p-4 border border-gray-200">
                                        <img src={presidentImg} alt="Dr Kanekal Mahantesh" className="w-24 h-auto rounded shadow-sm" />
                                    </td>
                                </tr>
                                {/* Row 2 */}
                                <tr className="hover:bg-gray-50">
                                    <td className="p-4 border border-gray-200">2</td>
                                    <td className="p-4 border border-gray-200 font-medium">
                                        Sri. Janekunte Basavaraj<br />
                                        <span className="text-gray-500 font-normal">Gandhinagar 3rd Cross, Ballari – 583103<br />Ph.No: 9448378855</span>
                                    </td>
                                    <td className="p-4 border border-gray-200">Late Janekunte Virupakshappa</td>
                                    <td className="p-4 border border-gray-200 font-bold text-cu-blue">Vice President</td>
                                    <td className="p-4 border border-gray-200">16.12.1963</td>
                                    <td className="p-4 border border-gray-200">B.E<br />Business Man</td>
                                    <td className="p-4 border border-gray-200">
                                        <img src={vicePresidentImg} alt="Sri. Janekunte Basavaraj" className="w-24 h-auto rounded shadow-sm" />
                                    </td>
                                </tr>
                                {/* Row 3 */}
                                <tr className="hover:bg-gray-50">
                                    <td className="p-4 border border-gray-200">3</td>
                                    <td className="p-4 border border-gray-200 font-medium">
                                        Dr. Aravind Patil<br />
                                        <span className="text-gray-500 font-normal">Adarsha Nursing Home, Gandhi Nagar, Ballari<br />Ph.No: 9448918764</span>
                                    </td>
                                    <td className="p-4 border border-gray-200">P. Basavaraj</td>
                                    <td className="p-4 border border-gray-200 font-bold text-cu-blue">Secretary</td>
                                    <td className="p-4 border border-gray-200">21.07.1959</td>
                                    <td className="p-4 border border-gray-200">MBBS, MIS<br />Doctor</td>
                                    <td className="p-4 border border-gray-200">
                                        <img src={secretaryImg} alt="Dr. Aravind Patil" className="w-24 h-auto rounded shadow-sm" />
                                    </td>
                                </tr>
                                {/* Row 4 */}
                                <tr className="hover:bg-gray-50">
                                    <td className="p-4 border border-gray-200">4</td>
                                    <td className="p-4 border border-gray-200 font-medium">
                                        Sr. Yalpi Meti Pampanagouda<br />
                                        <span className="text-gray-500 font-normal">Yalpi (P), Ballari (T), (D)<br />Ph.No: 9686168390</span>
                                    </td>
                                    <td className="p-4 border border-gray-200">Meti Giregouda</td>
                                    <td className="p-4 border border-gray-200 font-bold text-cu-blue">Assistant Secretary</td>
                                    <td className="p-4 border border-gray-200">01.06.1953</td>
                                    <td className="p-4 border border-gray-200">SSLC<br />Landlord</td>
                                    <td className="p-4 border border-gray-200">
                                        <img src={jointSecretaryImg} alt="Sr. Yalpi Meti Pampanagouda" className="w-24 h-auto rounded shadow-sm" />
                                    </td>
                                </tr>
                                {/* Row 5 */}
                                <tr className="hover:bg-gray-50">
                                    <td className="p-4 border border-gray-200">5</td>
                                    <td className="p-4 border border-gray-200 font-medium">
                                        Sri Byaluvadigeri Yerriswamy<br />
                                        <span className="text-gray-500 font-normal">Sri Yerrithatha Nilaya, Near Dem and Deaf School, Siddharth Colony, Moka Road, Gandhi Nagar, Ballari – 583103<br />Ph.No: 9886159303</span>
                                    </td>
                                    <td className="p-4 border border-gray-200">Late. Byyluvaddigeri Basavanagouda</td>
                                    <td className="p-4 border border-gray-200 font-bold text-cu-blue">Treasurer</td>
                                    <td className="p-4 border border-gray-200">20.05.1960</td>
                                    <td className="p-4 border border-gray-200">B.Com<br />Accountant</td>
                                    <td className="p-4 border border-gray-200">
                                        <img src={treasurerImg} alt="Sri Byaluvadigeri Yerriswamy" className="w-24 h-auto rounded shadow-sm" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
                        <h3 className="text-xl font-bold text-cu-blue mb-2">Contact Information</h3>
                        <p className="text-gray-700">
                            Stake holders can contact to VV Sangha at: <a href="mailto:vvsbly@gmail.com" className="text-cu-blue font-bold hover:underline">vvsbly@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutVVSangha;
