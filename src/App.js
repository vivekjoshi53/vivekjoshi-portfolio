import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for saved preference
    const savedMode = localStorage.getItem('darkMode');
    return savedMode !== null ? JSON.parse(savedMode) : true; // Default to dark mode
  });
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Handle system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemChange = (e) => {
      if (localStorage.getItem('darkMode') === null) {
        setDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-500 ease-in-out ${
      darkMode 
        ? 'dark bg-gray-900' 
        : 'bg-gradient-to-br from-gray-50 to-blue-50'
    }`}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`min-h-screen transition-colors duration-500 ${
              darkMode 
                ? 'bg-gray-900 text-white' 
                : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900'
            } pb-20 md:pb-0`}
          >
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} activeSection={activeSection} />
            <Hero activeSection={activeSection} setActiveSection={setActiveSection} />
            <About activeSection={activeSection} setActiveSection={setActiveSection} />
            <Skills activeSection={activeSection} setActiveSection={setActiveSection} />
            <Projects activeSection={activeSection} setActiveSection={setActiveSection} />
            <Experience activeSection={activeSection} setActiveSection={setActiveSection} />
            <Contact activeSection={activeSection} setActiveSection={setActiveSection} />
            <Footer />
            <BackToTop />
            <BottomNav activeSection={activeSection} setActiveSection={setActiveSection} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;