import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutRymec from './pages/AboutRymec';
import AboutVVSangha from './pages/AboutVVSangha';
import PrincipalsMessage from './pages/PrincipalsMessage';
import Iqac from './pages/Iqac';
import GoverningBody from './pages/GoverningBody';
import Administration from './pages/Administration';
import StaffDetails from './pages/StaffDetails';
import CivilEngineering from './pages/CivilEngineering';
import MechanicalEngineering from './pages/MechanicalEngineering';
import ElectricalElectronicsEngineering from './pages/ElectricalElectronicsEngineering';
import ElectronicsCommunicationEngineering from './pages/ElectronicsCommunicationEngineering';
import ComputerScienceEngineering from './pages/ComputerScienceEngineering';
import ComputerScienceCyberSecurity from './pages/ComputerScienceCyberSecurity';
import ArtificialIntelligenceMachineLearning from './pages/ArtificialIntelligenceMachineLearning';
import InformationScienceEngineering from './pages/InformationScienceEngineering';
import DataScience from './pages/DataScience';
import MasterBusinessAdministration from './pages/MasterBusinessAdministration';
import MasterComputerApplications from './pages/MasterComputerApplications';
import MTechComputerScience from './pages/MTechComputerScience';
import MTechProductionManagement from './pages/MTechProductionManagement';
import MTechVLSIDesignEmbeddedSystems from './pages/MTechVLSIDesignEmbeddedSystems';
import MTechStructuralEngineering from './pages/MTechStructuralEngineering';
import MathematicsDepartment from './pages/MathematicsDepartment';
import PhysicsDepartment from './pages/PhysicsDepartment';
import ChemistryDepartment from './pages/ChemistryDepartment';
import AcademicCalendar from './pages/AcademicCalendar';
import CircularsNotifications from './pages/CircularsNotifications';
import Regulations from './pages/Regulations';
import InstitutionalCommittee from './pages/InstitutionalCommittee';
import Notifications from './pages/Notifications';
import FeeStructure from './pages/FeeStructure';
import Guidelines from './pages/Guidelines';
import AdmissionEnquiry from './pages/AdmissionEnquiry';
import AboutRD from './pages/AboutRD';
import ResearchCentres from './pages/ResearchCentres';
import FundedProjects from './pages/FundedProjects';
import ResearchIncentives from './pages/ResearchIncentives';
import PhDAwarded from './pages/PhDAwarded';
import Patents from './pages/Patents';
import IndustrialCollaboration from './pages/IndustrialCollaboration';
import PlaceholderPage from './pages/PlaceholderPage';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import RIIC from './pages/RIIC';
import Nain from './pages/Nain';
import Edc from './pages/Edc';
import Ict from './pages/Ict';
import Auditorium from './pages/Auditorium';
import Sports from './pages/Sports';
import MedicalCentre from './pages/MedicalCentre';
import Hostel from './pages/Hostel';
import Transport from './pages/Transport';
import Bank from './pages/Bank';
import NssNccIrcs from './pages/NssNccIrcs';
import Library from './pages/Library';
import Placements from './pages/Placements';
import Naac from './pages/Naac';
import Nba from './pages/Nba';
import Nirf from './pages/Nirf';
import GrievanceRedressal from './pages/GrievanceRedressal';
import Newsletter from './pages/Newsletter';
import MandatoryDisclosure from './pages/MandatoryDisclosure';
import StudentVerification from './pages/StudentVerification';
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <Router>
      <div className="min-h-screen w-full relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#eef2ff_100%)]"></div>
        <Navbar />
        <ChatWidget />
        <main className="flex flex-col items-center justify-center w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-rymec" element={<AboutRymec />} />
            <Route path="/about-vv-sangha" element={<AboutVVSangha />} />
            <Route path="/principals-message" element={<PrincipalsMessage />} />
            <Route path="/iqac" element={<Iqac />} />
            <Route path="/iqac/committee" element={<PlaceholderPage title="IQAC Committee" />} />
            <Route path="/iqac/moms" element={<PlaceholderPage title="IQAC MOM’s" />} />
            <Route path="/iqac/aqar-reports" element={<PlaceholderPage title="IQAC AQAR Reports" />} />
            <Route path="/iqac/audit-report" element={<PlaceholderPage title="IQAC Audit Report" />} />
            <Route path="/iqac/accreditation" element={<PlaceholderPage title="IQAC Accrediation" />} />
            <Route path="/iqac/others" element={<PlaceholderPage title="IQAC Others" />} />
            <Route path="/iqac/best-practices" element={<PlaceholderPage title="IQAC Best Practices" />} />
            <Route path="/iqac/feedback" element={<PlaceholderPage title="IQAC Feedback" />} />

            <Route path="/governing-body" element={<GoverningBody />} />
            <Route path="/administration" element={<Administration />} />
            <Route path="/staff-details" element={<StaffDetails />} />

            {/* Placement Routes */}
            <Route path="/about-placements" element={<Placements />} />
            <Route path="/placement-training" element={<Placements />} />
            <Route path="/placement-achievements" element={<Placements />} />
            <Route path="/placement-staff" element={<Placements />} />
            <Route path="/placement-statistics" element={<Placements />} />
            <Route path="/placement-activities" element={<Placements />} />
            <Route path="/recruiting-companies" element={<Placements />} />
            <Route path="/department/civil-engineering" element={<CivilEngineering />} />
            <Route path="/department/mechanical-engineering" element={<MechanicalEngineering />} />
            <Route path="/department/electrical-electronics-engineering" element={<ElectricalElectronicsEngineering />} />
            <Route path="/department/electronics-communication-engineering" element={<ElectronicsCommunicationEngineering />} />
            <Route path="/department/computer-science-engineering" element={<ComputerScienceEngineering />} />
            <Route path="/department/computer-science-engineering-cyber-security" element={<ComputerScienceCyberSecurity />} />
            <Route path="/department/cse-artificial-intelligence-and-machine-learning" element={<ArtificialIntelligenceMachineLearning />} />
            <Route path="/department/information-science-engineering" element={<InformationScienceEngineering />} />
            <Route path="/department/cse-data-science" element={<DataScience />} />
            <Route path="/department/master-of-business-administration" element={<MasterBusinessAdministration />} />
            <Route path="/department/master-of-computer-applications" element={<MasterComputerApplications />} />
            <Route path="/department/m-tech-in-computer-science" element={<MTechComputerScience />} />
            <Route path="/department/m-tech-in-production-management" element={<MTechProductionManagement />} />
            <Route path="/department/m-tech-in-vlsi-design-embedded-systems" element={<MTechVLSIDesignEmbeddedSystems />} />
            <Route path="/department/m-tech-in-structural-engineering" element={<MTechStructuralEngineering />} />

            {/* Basic Science Routes */}
            <Route path="/department/mathematics-department" element={<MathematicsDepartment />} />
            <Route path="/department/physics-department" element={<PhysicsDepartment />} />
            <Route path="/department/chemistry-department" element={<ChemistryDepartment />} />
            {/* Academics Routes */}
            <Route path="/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/circulars-notifications" element={<CircularsNotifications />} />
            <Route path="/regulations" element={<Regulations />} />
            <Route path="/institutional-committee" element={<InstitutionalCommittee />} />

            {/* Admissions Routes */}
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/fee-structure" element={<FeeStructure />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/admission-enquiry" element={<AdmissionEnquiry />} />

            {/* Research Routes */}
            <Route path="/about-rd" element={<AboutRD />} />
            <Route path="/research-centres" element={<ResearchCentres />} />
            <Route path="/funded-and-sponsored-projects" element={<FundedProjects />} />
            <Route path="/research-incentives" element={<ResearchIncentives />} />
            <Route path="/phd-awarded" element={<PhDAwarded />} />
            <Route path="/patents" element={<Patents />} />
            <Route path="/industrial-collaboration-mous" element={<IndustrialCollaboration />} />
            <Route path="/riic" element={<RIIC />} />
            <Route path="/nain" element={<Nain />} />
            <Route path="/entrepreneurship-development-cell" element={<Edc />} />
            <Route path="/ict" element={<Ict />} />
            <Route path="/auditorium" element={<Auditorium />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/medical-centre" element={<MedicalCentre />} />
            <Route path="/hostel" element={<Hostel />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/bank" element={<Bank />} />
            <Route path="/nss-ncc-ircs" element={<NssNccIrcs />} />
            <Route path="/library" element={<Library />} />
            <Route path="/naac" element={<Naac />} />
            <Route path="/nba" element={<Nba />} />
            <Route path="/nirf" element={<Nirf />} />
            <Route path="/grievance-redressal" element={<GrievanceRedressal />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
            <Route path="/student-verification-details" element={<StudentVerification />} />
            <Route path="/contact-us" element={<ContactUs />} />


            <Route path="/staff-details" element={<StaffDetails />} />
            <Route path="/statutory" element={<PlaceholderPage title="Statutory" />} />
            <Route path="/executive-council" element={<PlaceholderPage title="Executive Council" />} />
            <Route path="/iiic" element={<PlaceholderPage title="Institute Industry Interaction Cell (IIIC)" />} />
            <Route path="/annual-reports" element={<PlaceholderPage title="Annual Reports (Finance)" />} />
            <Route path="/life-at-rymec" element={<PlaceholderPage title="Life at RYMEC" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
