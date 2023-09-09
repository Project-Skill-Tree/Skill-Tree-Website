import React from 'react';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {HomePage} from '../components/HomePage/homePage';
import {AboutPage} from '../components/AboutPage/aboutPage';
import {TermsPage} from '../components/TermsPage/termsPage';
import {PrivacyPage} from '../components/PrivacyPage/privacyPage';
import {Success} from "../components/success/success";
import {ContactPage} from "../components/ContactPage/contactPage"

const RouteManager = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route path="index.html" element={<Navigate to={"/"}/>} />
        <Route path="" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/terms" element={<TermsPage/>} />
        <Route path="/privacy" element={<PrivacyPage/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/contact-us" element={<ContactPage/>} />
      </Routes>
    </Router>
  );
};

export default RouteManager;