import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiUsers, FiTrendingUp } from 'react-icons/fi';

const About = ({ activeSection, setActiveSection }) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const savedRef = ref.current; // Store ref in a variable
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setActiveSection('about');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3, once: true }
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
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Animation variants for the profile picture
  const profilePictureVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      rotateY: 90
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.3
      }
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const highlights = [
    {
      icon: FiCode,
      title: "Clean Code",
      description: "Writing maintainable and efficient code following best practices"
    },
    {
      icon: FiUsers,
      title: "Team Player",
      description: "Collaborative approach to problem-solving and project development"
    },
    {
      icon: FiTrendingUp,
      title: "Growth Mindset",
      description: "Continuously learning new technologies and improving skills"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Picture Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Main Profile Picture */}
              <motion.div
                variants={profilePictureVariants}
                whileHover="hover"
                className="relative z-10"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <img 
                    src="/img1.webp" 
                    alt="Vivek Joshi - Developer Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative Elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <FiCode className="text-white text-2xl" />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <FiTrendingUp className="text-white text-xl" />
                </motion.div>
              </motion.div>
              
              {/* Floating Animation Ring */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-primary-500/30"
                style={{ width: 'calc(100% + 2rem)', height: 'calc(100% + 2rem)', top: '-1rem', left: '-1rem' }}
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white"
            >
              Passionate Developer Building the Future
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              I'm currently pursuing BCA Semester 6 at Bholabhai Patel College of Computer Studies (KSV), 
              while also working as a Developer Intern at Codage Habitation since December 2025. 
              During my 6-month internship journey till June 2026, I'm gaining hands-on experience 
              in modern web development and contributing to real-world projects.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Alongside my internship, I actively engage in freelance development projects, 
              allowing me to broaden my skillset and work with diverse clients and technologies. 
              I specialize in full-stack development with a focus on React, Node.js, and 
              modern JavaScript frameworks. I believe in writing clean, efficient code and 
              staying updated with the latest industry trends and best practices.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 rounded-full text-sm font-medium">
                Quick Learner
              </span>
              <span className="px-4 py-2 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium">
                Team Collaborator
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights Cards - Moved to separate row */}
        <div className="mt-16">
          <motion.h3 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white text-center mb-12"
          >
            My Core <span className="gradient-text">Values</span>
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                      {React.createElement(highlight.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;