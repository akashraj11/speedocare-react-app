import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/Login/LoginPage';
import RegisterPage from './Components/Registration/RegisterPage';
import DashboardPage from './Components/Dashboard/DashboardPage';
import FAQPage from './Components/FAQ/FAQPage';
import BookingPage from './Components/Booking/BookingPage';

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
      </Routes>
    </Router>
  );
}

export default App;
