import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaLinkedin, FaGithub, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaWhatsapp,
      name: "WhatsApp",
      url: "https://wa.me/9106129458",
      color: "hover:text-green-500"
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/vivekjoshi",
      color: "hover:text-blue-600"
    },
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/vivekjoshi53",
      color: "hover:text-gray-600 dark:hover:text-gray-300"
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      url: "https://twitter.com/vivekjoshi",
      color: "hover:text-blue-400"
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12 grid md:grid-cols-4 gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold gradient-text mb-2">
                Vivek Joshi
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Passionate developer creating innovative web solutions with modern technologies. 
                Currently interning at Codage Habitation and always eager to learn and grow.
              </p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 bg-gray-800 dark:bg-gray-900 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:bg-gray-700 dark:hover:bg-gray-800`}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-all duration-300 block py-1"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-400">
              <p>
                <span className="block font-medium text-white">Email:</span>
                vivek.joshi@email.com
              </p>
              <p>
                <span className="block font-medium text-white">Phone:</span>
                +91 12345 67890
              </p>
              <p>
                <span className="block font-medium text-white">Location:</span>
                India
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-6 border-t border-gray-800 dark:border-gray-900"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              variants={itemVariants}
              className="text-gray-400 text-sm flex items-center"
            >
              © {currentYear} Vivek Joshi. Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-1"
              >
                <FaHeart className="text-red-500" />
              </motion.span>
              using React & Tailwind CSS
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-4 text-sm text-gray-400"
            >
              <span>Fresher Developer | Intern at Codage Habitation</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500" />
    </footer>
  );
};

export default Footer;