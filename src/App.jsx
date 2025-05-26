import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EmailButton from './components/EmailButton';
import Home from './pages/Home';
import Services from './pages/Services';
import Trading from './pages/Trading';
import Academy from './pages/Academy';
import About from './pages/About';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-text-primary dark:text-text-light transition-colors duration-200">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/trading" element={<Trading />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <EmailButton />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;