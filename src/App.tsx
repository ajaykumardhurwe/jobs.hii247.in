
import React from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import { BottomNav } from './components/layout/BottomNav';
import { Home } from './pages/Home';
import { MCQ } from './pages/MCQ';
import { Jobs } from './pages/Jobs';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { JobDetails } from './pages/Jobs/JobDetails';
import {A2Class} from './pages/A2Class/index'
import LanguageScreen from "./pages/A2Class/LanguageScreen";
import MainPage from "./pages/A2Class/FiveTab/";
import PaymentPage from './pages/Home/paymentPage';
import PaymentSuccessPage from './pages/Home/PaymentSuccess';
import { McqPaymentPage } from './pages/MCQ/McqPaymentPage';
import { McqPqaymentSuccessPage } from './pages/MCQ/McqPaymentSuccessPage';
import { TopicList } from './pages/MCQ/TopicList';
import { AboutUs } from './pages/Profile/AboutUs';
import {ContactUs} from './pages/Profile/ContactUs';
import {PrivacyPolicy} from './pages/Profile/PrivacyPolicy';
import {Services} from './pages/Profile/Services'
import { EFormFillup } from './pages/Jobs/EFormFillup';
import { JobConsultancy } from './pages/Jobs/JobConsultancy';
import VisitorCounter from './lib/VisitorCounter';
import Colleges from './pages/A2Class/Colleges';
import Schools from './pages/A2Class/Schools';
import SchoolsData from './pages/A2Class/SchoolsData';
import CollegeDetail from './pages/A2Class/CollegeDetail';
import Notification from './components/layout/Notification';
import NotFound from './pages/NotFound';
import { MCQTest } from './pages/MCQ/MCQTest';
import { TestList } from './pages/MCQ/TestList';
import Analytics from './lib/Analytics';
function App() {
  return (
   <BrowserRouter>
   <div>


   <div style={{ 
  display: 'flex', 
  flexDirection: 'row', 
  alignItems: 'center', 
  justifyContent: 'flex-end', 
  position: 'fixed', 
  top: 0, 
  left: 0, 
  padding: '10px',
  backgroundColor: 'transparent',
  zIndex: 1000 ,
  opacity:1,
}}>

  <Notification />
</div>


<div style={{ 
  display: 'flex', 
  flexDirection: 'row', 
  alignItems: 'center', 
  justifyContent: 'flex-end', 
  position: 'fixed', 
  top: 0, 
  right: 0, 
  padding: '10px',
  // backgroundColor: '#fff',
  backgroundColor: 'transparent',
  
  zIndex: 1000 ,
  opacity:1,
}}>

  <VisitorCounter></VisitorCounter>
  <Analytics></Analytics>
</div>

    <Routes>
 
    {/* <Route path="/" element={<Home />} /> */}
    {/* <Route path="/" element={<MCQTest />}  */}
    <Route path="/" element={<Jobs />} />

 {/* <Route path="/:subject/:topic/:testId" element={<MCQTest />} /> */}
           <Route path="/mcq/*" element={<MCQ />} />
           {/* <Route path="/mcq/indian-constitution/part-1/test2" element={<MCQ />} /> */}

           <Route path="/jobs" element={<Jobs />} />
           <Route path="/a²class" element={<A2Class />} />
           <Route path="/profile" element={<Profile />} />
           <Route path="/jobs" element={<Jobs />} />
           <Route path="/job-details" element={<JobDetails />} />
           <Route path="/english" element={<MainPage />} />
         <Route path="/hindi" element={<MainPage />} />
         <Route path="/topics/:subject" element={<TopicList />} />
         <Route path="/payment/:planId" element={<PaymentPage />} />
         <Route path="/app/payment/:planId" element={<PaymentPage />} />
         <Route path="/payment-succes" element={<PaymentSuccessPage />} /> 

      
         <Route path="/mathsten" element={<MainPage />} />
         <Route path="/about-us" element={<AboutUs />} />
         <Route path="/contact-us" element={<ContactUs />} />
         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
         <Route path="/services" element={<Services />} />
         <Route path="/eformfillup" element={<EFormFillup />} />
         <Route path="/jobconsultancy" element={<JobConsultancy />} />
       
         <Route path="/colleges" element={<Colleges />} />
         {/* <Route path="/schools" element={<Schools />} /> */}
         <Route path="/schools" element={<SchoolsData />} />

         <Route path="college/:name" element={<CollegeDetail />} />
         <Route path="*" element={<NotFound />} />
        


  <Route path="/mcq/*" element={<MCQ />} />
      
    </Routes>
   </div>
   </BrowserRouter>
  );
}

export default App;


























// import react from 'react';
// import 
// export default function App(){
//   return(
//     <div>
//       <h1>hello world</h1>
//     </div>
//   )
// }