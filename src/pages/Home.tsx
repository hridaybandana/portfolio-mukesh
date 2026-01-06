import { Link } from 'react-router-dom'
import { FiDownload, FiArrowRight, FiCheckCircle, FiCalendar, FiUsers, FiTool, FiTrendingUp } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Home = () => {
  const stats = [
    { label: 'Years Experience', value: '9+', icon: <FiCalendar /> },
    { label: 'Projects Delivered', value: '50+', icon: <FiTrendingUp /> },
    { label: 'Client Satisfaction', value: '100%', icon: <FiCheckCircle /> },
    { label: 'Team Members Led', value: '15+', icon: <FiUsers /> },
  ]

  const skills = [
    'Project Management',
    'Data Analysis & SQL',
    'PowerBI & Dashboards',
    'React & TypeScript',
    'E-commerce Solutions',
    'Agile & Waterfall',
    'Website Development',
    'Cross-functional Teams',
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                {/* Your Profile Image */}
<div className="w-[250px] h-[290px] rounded-full border-4 border-white shadow-lg overflow-hidden">
  <img 
    src="/assets/images/profile.png" 
    className="w-full h-full object-cover"
  />
</div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-2">
                    <span className="block text-gray-800">Mukesh</span>
                    <span className="gradient-text">Rathore</span>
                  </h1>
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
                    Project Manager & Data Analyst
                  </h2>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <FiTool className="mr-2 text-primary-600" />
                  Professional Summary
                </h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  Project Manager with 3.5 years of experience and an additional 3 years in Data Analysis.
                  Proficient in both agile and waterfall methodologies, managing multiple Website Development projects and coordinating cross functional teams. Knowledgeable in programming languages such as HTML, CSS, JavaScript, Liquid, SQL, and tools like PowerBI and Excel. Skilled in creating dashboards and PowerPoint presentations, collaborating with designs team to get the website design layout, development team to develop the website, testing team to get tested the websites, and accounts team for payment insurance. Seeking new challenges to leverage my comprehensive project management skills and technical expertise.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/projects" className="btn-primary flex items-center">
                  View My Projects <FiArrowRight className="ml-2" />
                </Link>
                <Link to="/contact" className="btn-secondary flex items-center">
                  Hire Me
                </Link>
                <button className="btn-secondary flex items-center">
                  <FiDownload className="mr-2" /> Download CV
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                      <div className="text-primary-500">{stat.icon}</div>
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Skills Card */}
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Core Competencies
                  </h3>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary-50 transition-colors"
                      >
                        <FiCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                        <span className="font-medium text-gray-700">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Methodology Badges */}
                  <div className="mt-8 pt-6 border-t">
                    <h4 className="font-bold text-gray-700 mb-4">Methodologies</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
                        Agile
                      </span>
                      <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">
                        Waterfall
                      </span>
                      <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium">
                        Scrum
                      </span>
                      <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full font-medium">
                        Kanban
                      </span>
                    </div>
                  </div>

                  {/* Current Role */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl">
                    <p className="text-sm text-gray-600">Currently working as</p>
                    <p className="font-bold text-gray-800">IT Project Manager at Avalon Solution Pvt. Ltd.</p>
                    <p className="text-sm text-gray-600 mt-1">Since June 2022 - Present</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore My Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/experience" 
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">Work Experience</h3>
              <p className="text-gray-600">View my professional journey and achievements</p>
            </Link>
            
            <Link 
              to="/projects" 
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">Projects</h3>
              <p className="text-gray-600">Browse through my successful project deliveries</p>
            </Link>
            
            <Link 
              to="/dashboard" 
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">Performance Dashboard</h3>
              <p className="text-gray-600">Check my project metrics and success rates</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home