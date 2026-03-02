import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiMessageCircle } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = ({ activeSection, setActiveSection }) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const savedRef = ref.current; // Store ref in a variable
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setActiveSection('contact');
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
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create WhatsApp message with proper formatting
    const message = `👋 Hello Vivek!

I'm ${formData.name} (${formData.email}) and I'd like to connect with you.

${formData.message}

Looking forward to hearing from you!

Best regards,
${formData.name}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+91 9106129458?text=${encodedMessage}`;
    
    try {
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      
      // Show success feedback
      setTimeout(() => {
        alert('Message sent successfully! WhatsApp should have opened with your message pre-filled.');
      }, 500);
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      // Fallback: Copy message to clipboard
      navigator.clipboard.writeText(message).then(() => {
        alert('WhatsApp link opened! Your message has been copied to clipboard.');
      }).catch(() => {
        alert(`Click this link to message me on WhatsApp: ${whatsappUrl}`);
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const quickMessage = encodeURIComponent("Hi Vivek! I saw your portfolio and would like to connect.");
    const whatsappUrl = `https://wa.me/+91 9106129458?text=${quickMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };
    
  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      value: "vivekjoshi.53107@email.com",
      link: "mailto:vivekjoshi.53107@email.com"
    },
    {
      icon: FiPhone,
      title: "Phone",
      value: "+91 9106129458",
      link: "tel:+91 9106129458"
    },
    {
      icon: FiMapPin,
      title: "Location",
      value: "Kalol",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: FaWhatsapp,
      name: "WhatsApp",
      url: "#",
      color: "text-green-500",
      bgColor: "bg-green-500",
      onClick: handleWhatsAppClick
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/vivekjoshi",
      color: "text-blue-600",
      bgColor: "bg-blue-600"
    },
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/vivekjoshi53",
      color: "text-gray-700 dark:text-gray-300",
      bgColor: "bg-gray-700"
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      url: "https://twitter.com/vivekjoshi",
      color: "text-blue-400",
      bgColor: "bg-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
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
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"
          />
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm currently looking for new opportunities and would love to hear from you. 
                Whether you have a question, want to collaborate on a project, or just want to say hi, 
                I'll do my best to get back to you!
              </p>
            </motion.div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  onClick={(e) => {
                    if (info.link === "#") {
                      e.preventDefault(); // Prevent default behavior for "#" links
                    }
                  }}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {React.createElement(info.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target={social.onClick ? "_self" : "_blank"}
                    rel={social.onClick ? undefined : "noopener noreferrer"}
                    onClick={(e) => {
                      if (social.url === "#") {
                        e.preventDefault(); // Prevent default behavior for "#" links
                      }
                      if (social.onClick) {
                        social.onClick();
                      }
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: social.name === "WhatsApp" ? [0, -10, 10, 0] : 5,
                      y: -5
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 ${social.bgColor} text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative overflow-hidden`}
                  >
                    <div className="relative z-10">
                      {React.createElement(social.icon, { size: 24 })}
                    </div>
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    
                    {/* Tooltip */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.name}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <FiMessageCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Send Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;