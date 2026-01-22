import React from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiUser, FiCode, FiBriefcase, FiFolder, FiMail } from 'react-icons/fi';

const BottomNav = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { name: 'Home', href: '#home', icon: FiHome },
    { name: 'About', href: '#about', icon: FiUser },
    { name: 'Skills', href: '#skills', icon: FiCode },
    { name: 'Projects', href: '#projects', icon: FiFolder },
    { name: 'Contact', href: '#contact', icon: FiMail }
  ];

  const handleClick = (href, name) => {
    setActiveSection(name.toLowerCase());
    window.location.hash = href.replace('#', '');
  };

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass dark:glass-dark border-t border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center justify-around py-3 px-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.name.toLowerCase();
          
          return (
            <motion.button
              key={item.name}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleClick(item.href, item.name)}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'text-primary-500 bg-primary-500/10' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-primary-500'
              }`}
            >
              <Icon size={22} className={`${isActive ? 'fill-current' : ''}`} />
              <span className={`text-xs mt-1 font-medium ${
                isActive ? 'text-primary-500' : ''
              }`}>
                {item.name}
              </span>
            </motion.button>
          );
        })}
      </div>
      
      {/* Active indicator */}
      <div className="absolute top-0 left-0 h-1 w-full">
        <div 
          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300"
          style={{
            width: `${100/navItems.length}%`,
            transform: `translateX(${navItems.findIndex(item => item.name.toLowerCase() === activeSection) * 100}%)`
          }}
        />
      </div>
    </motion.nav>
  );
};

export default BottomNav;