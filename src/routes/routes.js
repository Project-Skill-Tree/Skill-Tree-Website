import React from 'react';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {HomePage} from '../components/HomePage/homePage';
import {AboutPage} from '../components/AboutPage/aboutPage';
import {TermsPage} from '../components/TermsPage/termsPage';
import {PrivacyPage} from '../components/PrivacyPage/privacyPage';
import {Success} from "../components/success/success";
import {ContactPage} from "../components/ContactPage/contactPage"
import {ResetPasswordPage} from "../components/ResetPasswordPage/reset-password"
import {RoadmapPage} from "../components/RoadmapPage/roadmapPage"
import SmoothScroll from "../components/SmoothScroll/smooth-scroll";

const RouteManager = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route path="index.html" element={<Navigate to={"/"}/>} />
        <Route path="" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/terms" element={<TermsPage/>} />
        <Route path="/privacy" element={<PrivacyPage/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/contact-us" element={<ContactPage/>} />
        <Route path="/reset-password" element={<ResetPasswordPage/>} />
        <Route path="/roadmap" element={<RoadmapPage/>} />
      </Routes>
    </Router>
  );
};

export default RouteManager;