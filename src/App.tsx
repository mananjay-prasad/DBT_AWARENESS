import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Services from './pages/Services';
import Guide from './pages/Guide';
import Check from './pages/Check';
import Track from './pages/Track';
import GramPanchayat from './pages/GramPanchayat';
import Schools from './pages/Schools';
import Documents from './pages/Documents';
import Chatbot from './components/Chatbot';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleLogin = (credentials: { username: string; password: string }) => {
    // Simple authentication logic - in production, this would connect to a real backend
    if (credentials.username && credentials.password) {
      localStorage.setItem('authToken', 'sample-token');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            {isAuthenticated ? (
              <>
                <Header onLogout={handleLogout} />
                <main className="pt-20">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/guide" element={<Guide />} />
                    <Route path="/check" element={<Check />} />
                    <Route path="/track" element={<Track />} />
                    <Route path="/gram-panchayat" element={<GramPanchayat />} />
                    <Route path="/schools" element={<Schools />} />
                    <Route path="/documents" element={<Documents />} />
                    <Route path="*" element={<Navigate to="/" />} />
                  </Routes>
                </main>
                <Footer />
                <Chatbot />
              </>
            ) : (
              <Routes>
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            )}
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;