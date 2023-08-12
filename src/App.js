import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/Login/LoginPage';
import RegisterPage from './Components/Registration/RegisterPage';
import DashboardPage from './Components/Dashboard/DashboardPage';
import FAQPage from './Components/FAQ/FAQPage';
import BookingPage from './Components/Booking/BookingPage';
import AboutPage from './Components/About/AboutPage';
import OurServicesPage from './Components/Services/OurServicesPage';
import ProfilePage from './Components/Profile/ProfilePage';
import ContactPage from './Components/Contact/ContactPage';
import BlogPage from './Components/Blog/BlogPage';
import ClinicDetailsPage from './Components/Clinic/ClinicDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<OurServicesPage />} />
        <Route path="/clinic/:clinicId"  element={<ClinicDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
