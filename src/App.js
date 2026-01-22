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
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white pb-20 md:pb-0"
          >
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
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