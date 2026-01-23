import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
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
  const [activeSection, setActiveSection] = useState('home');

  // Always use dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-500 ease-in-out bg-gray-900`}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="min-h-screen bg-gray-900 text-white pb-20 md:pb-0"
          >
            <Navbar activeSection={activeSection} />
            <Hero activeSection={activeSection} setActiveSection={setActiveSection} />
            <About activeSection={activeSection} setActiveSection={setActiveSection} />
            <Skills activeSection={activeSection} setActiveSection={setActiveSection} />
            <Projects activeSection={activeSection} setActiveSection={setActiveSection} />
            <Experience activeSection={activeSection} setActiveSection={setActiveSection} />
            <Contact activeSection={activeSection} setActiveSection={setActiveSection} />
            <Footer />
            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;