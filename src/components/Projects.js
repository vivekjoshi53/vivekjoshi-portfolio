import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode, FiArrowUpRight } from 'react-icons/fi';

const Projects = ({ activeSection, setActiveSection }) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const savedRef = ref.current; // Store ref in a variable
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setActiveSection('projects');
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

  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React and Node.js featuring user authentication, product management, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/vivekjoshi53/ecommerce-platform",
      live: "https://ecommerce-demo.vercel.app",
      featured: true,
      status: "Completed"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tech: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/vivekjoshi53/task-manager",
      live: "https://taskmanager-demo.vercel.app",
      featured: true,
      status: "In Progress"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current weather conditions and forecasts with beautiful visualizations.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      tech: ["JavaScript", "API Integration", "CSS3"],
      github: "https://github.com/vivekjoshi53/weather-dashboard",
      live: "https://weather-demo.vercel.app",
      featured: false,
      status: "Completed"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/vivekjoshi53/VivekJoshi-portfolio",
      live: "https://vivekjoshi-portfolio.vercel.app",
      featured: false,
      status: "Completed"
    },
    {
      title: "Blog Platform",
      description: "A full-featured blog platform with user authentication, rich text editor, and comment system built with modern technologies.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      github: "https://github.com/vivekjoshi53/blog-platform",
      live: "https://blog-demo.vercel.app",
      featured: false,
      status: "Planning"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with multiple rooms, file sharing, and emoji support using Socket.io for instant messaging.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
      tech: ["React", "Socket.io", "Node.js", "Express"],
      github: "https://github.com/vivekjoshi53/chat-app",
      live: "https://chat-demo.vercel.app",
      featured: false,
      status: "Completed"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900">
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
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"
          />
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Here are some of the projects I've worked on, showcasing my skills and passion for development
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-semibold text-white mb-8 text-center"
          >
            Featured Projects
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ 
                  y: -15,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                  scale: 1.02
                }}
                className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-primary-600 transition-all duration-500 relative"
              >
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                    : project.status === 'In Progress'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                }`}>
                  {project.status}
                </div>

                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Action buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-lg rounded-full text-white hover:bg-white/30 transition-all duration-200 border border-white/30"
                    >
                      <FiGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-lg rounded-full text-white hover:bg-white/30 transition-all duration-200 border border-white/30"
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  </div>

                  {/* View more button */}
                  <motion.div 
                    className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    <button className="w-full py-2 bg-white/20 backdrop-blur-lg rounded-lg text-white font-medium hover:bg-white/30 transition-all duration-200 border border-white/30">
                      View Details
                    </button>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-white">
                      {project.title}
                    </h4>
                    <motion.div
                      animate={{ rotate: hoveredProject === index ? 12 : 0 }}
                      className="text-primary-500"
                    >
                      <FiArrowUpRight size={24} />
                    </motion.div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-primary-900/30 to-secondary-900/30 text-primary-300 rounded-full text-sm font-medium shadow-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Project stats */}
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>⭐ Featured Project</span>
                    <span>{project.tech.length} technologies</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-semibold text-white mb-8 text-center"
          >
            Other Projects
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
                className="group bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-primary-600 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg">
                    <FiCode className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      <FiGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;