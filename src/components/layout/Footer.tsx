import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiInstagram, FiGlobe } from 'react-icons/fi'

const Footer = () => {
  const socialLinks = [
    { 
      icon: <FiGithub />, 
      url: 'https://github.com/hridaybandana', 
      label: 'GitHub',
      color: 'hover:bg-gray-800'
    },
    { 
      icon: <FiLinkedin />, 
      url: 'https://www.linkedin.com/in/mukaishrathore/', 
      label: 'LinkedIn',
      color: 'hover:bg-blue-700'
    },
    { 
      icon: <FiInstagram />, 
      url: 'https://www.instagram.com/mukeshrathore6775', 
      label: 'Instagram',
      color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500'
    },
  ]

  const contactInfo = [
    { 
      icon: <FiMail />, 
      text: 'mukeshfreedom1@gmail.com',
      link: 'mailto:mukeshfreedom1@gmail.com'
    },
    { 
      icon: <FiPhone />, 
      text: '+91 8871 8871 85',
      link: 'tel:+918871887185'
    },
    { 
      icon: <FiMapPin />, 
      text: 'Palash Parisar II, Omex Hills, Indore, M.P.',
      link: 'https://maps.google.com/?q=Palash+Parisar+II,+Omex+Hills,+Indore'
    },
    { 
      icon: <FiGlobe />, 
      text: 'mukeshrathore.my.canva.site',
      link: 'https://mukeshrathore.my.canva.site'
    },
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="gradient-text">Get In Touch</span>
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target={item.link.includes('mailto:') || item.link.includes('tel:') ? '_self' : '_blank'}
                  rel={item.link.includes('mailto:') || item.link.includes('tel:') ? '' : 'noopener noreferrer'}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-secondary-800 transition-all duration-300 group"
                >
                  <div className="text-accent-400 group-hover:text-accent-300 transition-colors">
                    {item.icon}
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {item.text}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="gradient-text">Quick Links</span>
            </h3>
            <div className="space-y-3">
              {quickLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 py-1"
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            {/* CV Download Button */}
            <div className="mt-6">
              <button className="w-full btn-primary py-2">
                📄 Download CV
              </button>
              <p className="text-xs text-gray-400 mt-2">
                Updated: December 2024
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="gradient-text">Connect With Me</span>
            </h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-secondary-800 rounded-full flex items-center justify-center text-xl text-white ${social.color} hover:scale-110 transition-all duration-300 transform`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Available for new projects</span>
              </div>
              
              <p className="text-gray-400 text-sm">
                Portfolio built with React, TypeScript & Tailwind CSS
              </p>
              
              <p className="text-gray-400 text-sm">
                Deployed on Vercel • Optimized for performance
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">MR</span>
                </div>
                <div>
                  <p className="font-bold text-white">Mukesh Rathore</p>
                  <p className="text-sm text-gray-400">Project Manager & Data Analyst</p>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Mukesh Rathore. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Based in Indore, India • Serving clients worldwide
              </p>
            </div>
          </div>
          
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
              React
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
              Vite
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
              Vercel
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer