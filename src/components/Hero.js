import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiMail, FiGithub } from 'react-icons/fi';

const Hero = ({ activeSection, setActiveSection }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('home');
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
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
    { size: 'w-20 h-20', position: 'top-20 left-10', delay: 0 },
    { size: 'w-16 h-16', position: 'top-40 right-20', delay: 2 },
    { size: 'w-12 h-12', position: 'bottom-40 left-20', delay: 4 },
    { size: 'w-24 h-24', position: 'bottom-20 right-10', delay: 1 }
  ];

  return (
    <section id="home" ref={sectionRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        {floatingShapes.map((shape, index) => (
          <motion.div
            key={index}
            className={`absolute ${shape.size} ${shape.position} bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-xl`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6 + shape.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.delay
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
              <span className="block text-gray-900 dark:text-white">Hi, I'm</span>
              <span className="block gradient-text mt-2">Vivek Joshi</span>
            </motion.h1>
          </motion.div>

          {/* Animated Typing Effect */}
          <motion.div variants={itemVariants}>
            <motion.p 
              className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Fresher Developer & Intern at{' '}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                Codage Habitation
              </span>
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
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
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-300"
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
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;