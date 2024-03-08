import React from 'react';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {HomePage} from '../pages/HomePage/homePage';
import {AboutPage} from '../pages/AboutPage/aboutPage';
import {TermsPage} from '../pages/TermsPage/termsPage';
import {PrivacyPage} from '../pages/PrivacyPage/privacyPage';
import {Success} from "../pages/success/success";
import {ContactPage} from "../pages/ContactPage/contactPage"
import {ResetPasswordPage} from "../pages/ResetPasswordPage/reset-password"

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
      </Routes>
    </Router>
  );
};

export default RouteManager;