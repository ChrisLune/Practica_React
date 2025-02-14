import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdvertsPage from './pages/AdvertsPage';
import AdvertPage from './pages/AdvertPage';
import NewAdvertPage from './pages/NewAdvertPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';





function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adverts" element={<AdvertsPage />} />
        <Route path="/adverts/:id" element={<AdvertPage />} />
        <Route path="/adverts/new" element={<NewAdvertPage />} />
        <Route path="/" element={<Navigate to="/adverts" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
