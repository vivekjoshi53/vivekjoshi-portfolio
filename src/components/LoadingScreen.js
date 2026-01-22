import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  
  const fullName = "Vivek Joshi";
  const [roleText, setRoleText] = useState('');

  // Typing effect for name
  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullName.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Show subtitle after name is typed
      setTimeout(() => setShowSubtitle(true), 300);
    }
  }, [currentIndex, fullName]);

  // Typing effect for roles
  useEffect(() => {
    if (showSubtitle) {
      const role = "Web-Developer";
      if (roleText.length < role.length) {
        const timer = setTimeout(() => {
          setRoleText(role.slice(0, roleText.length + 1));
        }, 80);
        return () => clearTimeout(timer);
      } else {
        // Show loading dots after "Fresher Developer" is fully written
        setTimeout(() => setShowLoading(true), 500);
        // Trigger completion after a short delay
        setTimeout(() => {
          if (onComplete) {
            onComplete();
          }
        }, 1500); // 1.5 seconds after role is complete
      }
    }
  }, [showSubtitle, roleText, onComplete]);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { 
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5 }
    }
  };

  const textVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const subtextVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const shapeVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: 360,
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center gradient-bg"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`
            }}
          />
        ))}
        
        {/* Rotating shapes */}
        <motion.div
          variants={shapeVariants}
          animate="animate"
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/20 rounded-full"
        />
        <motion.div
          variants={shapeVariants}
          animate="animate"
          className="absolute top-3/4 right-1/4 w-24 h-24 border-2 border-white/30 rounded-lg"
        />
        <motion.div
          variants={shapeVariants}
          animate="animate"
          className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-white/10 rounded-full"
        />
      </div>

      {/* Enhanced Content */}
      <div className="text-center z-10 max-w-2xl px-4">
        <motion.h1
          variants={textVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          {displayText}
          <motion.span 
            className="inline-block w-1 h-16 bg-white ml-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </motion.h1>
        
        {showSubtitle && (
          <motion.div
            variants={subtextVariants}
            initial="initial"
            animate="animate"
            className="min-h-[3rem]"
          >
            <motion.p className="text-xl md:text-2xl text-white/90 font-light mb-2">
              {roleText}
              <motion.span 
                className="inline-block w-2 h-8 bg-white/80 ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
            </motion.p>
          </motion.div>
        )}

        {/* Enhanced Loading Animation */}
        {showLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <p className="text-white/80 mb-4">Loading portfolio...</p>
            <div className="flex justify-center space-x-3">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-4 h-4 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 1, 0.4],
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;