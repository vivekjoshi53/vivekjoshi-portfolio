import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJava 
} from 'react-icons/fa';
import { 
  SiExpress, 
  SiMongodb, 
  SiTailwindcss,
  SiGit,
  SiVisualstudiocode
} from 'react-icons/si';

const Skills = ({ activeSection, setActiveSection }) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const savedRef = ref.current; // Store ref in a variable
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setActiveSection('skills');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, once: true }
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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const skills = [
    { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
    { name: 'React', icon: FaReact, color: 'text-cyan-500' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Express.js', icon: SiExpress, color: 'text-gray-600' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { name: 'Python', icon: FaPython, color: 'text-blue-600' },
    { name: 'Java', icon: FaJava, color: 'text-red-600' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-500' },
    { name: 'Git', icon: SiGit, color: 'text-orange-600' },
    { name: 'VS Code', icon: SiVisualstudiocode, color: 'text-blue-600' }
  ];

  const categories = [
    {
      title: 'Frontend',
      skills: skills.filter(skill => 
        ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'].includes(skill.name)
      )
    },
    {
      title: 'Backend',
      skills: skills.filter(skill => 
        ['Node.js', 'Express.js', 'MongoDB', 'Python', 'Java'].includes(skill.name)
      )
    },
    {
      title: 'Tools',
      skills: skills.filter(skill => 
        ['Git', 'VS Code'].includes(skill.name)
      )
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"
          />
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Here are the technologies and tools I work with to bring ideas to life
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                    }}
                    className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {React.createElement(skill.icon, { className: `text-2xl ${skill.color}` })}
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">12+</div>
              <div className="text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">6+</div>
              <div className="text-gray-600 dark:text-gray-400">Months Learning</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">5+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Built</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Dedication</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;