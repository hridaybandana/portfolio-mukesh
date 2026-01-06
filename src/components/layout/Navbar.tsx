import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FiMenu, FiX, FiHome, FiUser, FiBriefcase, FiFolder, FiCode, FiMail, FiBarChart2 } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/', icon: <FiHome /> },
    { name: 'About', path: '/about', icon: <FiUser /> },
    { name: 'Experience', path: '/experience', icon: <FiBriefcase /> },
    { name: 'Projects', path: '/projects', icon: <FiFolder /> },
    { name: 'Skills', path: '/skills', icon: <FiCode /> },
    { name: 'Dashboard', path: '/dashboard', icon: <FiBarChart2 /> },
    { name: 'Contact', path: '/contact', icon: <FiMail /> },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">MR</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Mukesh Rathore</h1>
              <p className="text-xs text-gray-500">Project Manager</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-1 px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300"
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
            <button className="ml-4 btn-primary">
              Download CV
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
            <button className="w-full mt-4 btn-primary">
              Download CV
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar