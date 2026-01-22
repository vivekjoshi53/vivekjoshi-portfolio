import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
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
      rotate: 360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
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
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={shapeVariants}
          animate="animate"
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/20 rounded-full"
        />
        <motion.div
          variants={shapeVariants}
          animate="animate"
          className="absolute top-3/4 right-1/4 w-24 h-24 border-2 border-white/30 rounded-lg"
          style={{ animationDelay: '2s' }}
        />
        <motion.div
          variants={shapeVariants}
          animate="animate"
          className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-white/10 rounded-full"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Content */}
      <div className="text-center z-10">
        <motion.h1
          variants={textVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-4"
        >
          Vivek Joshi
        </motion.h1>
        
        <motion.p
          variants={subtextVariants}
          className="text-xl md:text-2xl text-white/90 font-light"
        >
          Fresher Developer | Intern at Codage Habitation
        </motion.p>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex justify-center"
        >
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-white rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;