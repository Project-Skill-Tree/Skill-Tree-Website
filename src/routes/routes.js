import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {HomePage} from '../components/HomePage/homePage';
import {AboutPage} from '../components/AboutPage/aboutPage';
import {TermsPage} from '../components/TermsPage/termsPage';
import {PrivacyPage} from '../components/PrivacyPage/privacyPage';

const RouteManager = () => {
  return (
    <Router>
      <Routes>
        <Route path="index.html" element={<Navigate to={"/"}/>} />
        <Route path="" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/terms" element={<TermsPage/>} />
        <Route path="/privacy" element={<PrivacyPage/>} />
      </Routes>
    </Router>
  );
};

export default RouteManager;