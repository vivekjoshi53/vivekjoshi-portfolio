import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiTrendingUp } from 'react-icons/fi';

const Experience = ({ activeSection, setActiveSection }) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const savedRef = ref.current; // Store ref in a variable
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setActiveSection('experience');
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



  const experiences = [
    
    {
      title: "Developer Intern",
      company: "Codage Habitation",
      period: "DEC-2025 - Present",
      location: "On-Site",
      description: "Working as a developer intern, gaining hands-on experience in full-stack web development. Contributing to real-world projects and learning industry best practices.",
      responsibilities: [
        "Developing responsive web applications using React and Node.js",
        "Collaborating with senior developers on project planning and implementation",
        "Writing clean, maintainable code following company standards",
        "Participating in code reviews and learning from feedback",
        "Working with modern development tools and workflows"
      ],
      skills: ["React", "Node.js", "JavaScript", "Git", "Agile"],
      current: true
    }
  ];

  const achievements = [
    {
      icon: FiTrendingUp,
      title: "Quick Learner",
      description: "Rapidly adapted to new technologies and development practices"
    },
    {
      icon: FiBriefcase,
      title: "Project Contributor",
      description: "Successfully contributed to multiple client projects"
    },
    {
      icon: FiCalendar,
      title: "Consistent Growth",
      description: "Continuously improving skills and taking on new challenges"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            My <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"
          />
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            My professional journey and the experiences that have shaped my development career
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline Line - animated with motion - positioned to not cross through cards */}
              <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500 z-0">
                <motion.div
                  initial={{ height: 0 }}
                  animate={isInView ? { height: "100%" } : { height: "0%" }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                  className="w-full bg-gradient-to-b from-primary-500 to-secondary-500 origin-top"
                  style={{ transformOrigin: 'top' }}
                />
              </div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="relative flex items-start space-x-6 pb-12 pl-16"
                >
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 relative -left-16 top-4 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        exp.current 
                          ? 'bg-gradient-to-br from-primary-500 to-secondary-500' 
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    >
                      <FiBriefcase className="w-8 h-8 text-white" />
                    </motion.div>
                    {exp.current && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-primary-500/30"
                      />
                    )}
                  </div>

                  {/* Content - increased padding for better spacing */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 relative z-10"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                          <FiCalendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mt-1">
                          <FiMapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <motion.h3 
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-6"
            >
              Key Achievements
            </motion.h3>

            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                      {React.createElement(achievement.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Current Status */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-6 rounded-xl border border-primary-200 dark:border-primary-800"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiTrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Currently Growing
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Actively learning new technologies and contributing to exciting projects at Codage Habitation
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;