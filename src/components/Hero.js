import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiMail, FiGithub } from 'react-icons/fi';

const Hero = ({ activeSection, setActiveSection }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const savedRef = sectionRef.current; // Store ref in a variable
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('home');
        }
      },
      { threshold: 0.5 }
    );

    if (savedRef) {
      observer.observe(savedRef);
    }

    return () => {
      if (savedRef) {
        observer.unobserve(savedRef);
      }
    };
  }, [setActiveSection]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatingShapes = [
    { size: 'w-32 h-32', position: 'top-10 left-5', delay: 0, color: 'from-blue-400/30 to-purple-400/30' },
    { size: 'w-24 h-24', position: 'top-32 right-10', delay: 1, color: 'from-green-400/30 to-blue-400/30' },
    { size: 'w-20 h-20', position: 'bottom-40 left-10', delay: 2, color: 'from-purple-400/30 to-pink-400/30' },
    { size: 'w-28 h-28', position: 'bottom-20 right-5', delay: 3, color: 'from-yellow-400/30 to-red-400/30' },
    { size: 'w-16 h-16', position: 'top-1/2 left-1/4', delay: 4, color: 'from-indigo-400/30 to-blue-400/30' },
    { size: 'w-20 h-20', position: 'top-1/3 right-1/3', delay: 5, color: 'from-pink-400/30 to-purple-400/30' }
  ];

  // const wavePoints = [
  //   { x: 0, y: 60 },
  //   { x: 25, y: 40 },
  //   { x: 50, y: 70 },
  //   { x: 75, y: 30 },
  //   { x: 100, y: 60 }
  // ];

  return (
    <section id="home" ref={sectionRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient waves */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="waveGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path 
              d="M0,50 Q25,30 50,60 T100,50 L100,100 L0,100 Z" 
              fill="url(#waveGradient1)"
              className="animate-pulse"
            />
            <path 
              d="M0,70 Q25,90 50,60 T100,70 L100,100 L0,100 Z" 
              fill="url(#waveGradient2)"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </svg>
        </div>

        {/* Floating shapes with enhanced animations */}
        {floatingShapes.map((shape, index) => (
          <motion.div
            key={index}
            className={`absolute ${shape.size} ${shape.position} rounded-full blur-xl`}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(index) * 20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8 + shape.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.delay
            }}
          >
            <div className={`w-full h-full bg-gradient-to-br ${shape.color} rounded-full`} />
          </motion.div>
        ))}

        {/* Particle effects */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            animate={{
              y: [0, -100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut"
            }}
            style={{
              left: `${10 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-bold"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="block text-white">Hi, I'm</span>
              <span className="block gradient-text mt-2">Vivek Joshi</span>
            </motion.h1>
          </motion.div>

          {/* Animated Typing Effect */}
          <motion.div variants={itemVariants}>
            <motion.p 
              className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Fresher Developer & Intern at{' '}
              <span className="font-semibold text-primary-400">
                Codage Habitation
              </span>
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative web solutions with modern technologies. 
              Specializing in React, Node.js, and full-stack development.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>View Projects</span>
              <FiArrowDown className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <FiMail className="w-4 h-4" />
              <span>Contact Me</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-6 pt-8"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-700 text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-300"
            >
              <FiGithub size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gray-600 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;