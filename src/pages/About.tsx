import { motion } from 'framer-motion'
import { FiUser, FiMapPin, FiMail, FiPhone, FiGlobe, FiAward, FiTarget, FiUsers } from 'react-icons/fi'

const About = () => {
  const personalInfo = [
    { icon: <FiUser />, label: 'Full Name', value: 'Mukesh Rathore' },
    { icon: <FiMapPin />, label: 'Location', value: 'Indore, Madhya Pradesh' },
    { icon: <FiMail />, label: 'Email', value: 'mukeshfreedom1@gmail.com' },
    { icon: <FiPhone />, label: 'Phone', value: '+91 8871 8871 85' },
    { icon: <FiGlobe />, label: 'Portfolio', value: 'mukeshrathore.my.canva.site' },
  ]

  const languages = [
    { language: 'English', proficiency: 'Fluent', level: 'Professional' },
    { language: 'Hindi', proficiency: 'Native', level: 'Native Speaker' },
  ]

  const coreValues = [
    {
      icon: <FiTarget />,
      title: 'Client-Centric Approach',
      description: 'Delivering solutions that exceed client expectations while maintaining scope, budget, and timeline.'
    },
    {
      icon: <FiAward />,
      title: 'Quality Excellence',
      description: 'Ensuring highest quality standards through rigorous testing and attention to detail.'
    },
    {
      icon: <FiUsers />,
      title: 'Team Collaboration',
      description: 'Fostering cross-functional team coordination for seamless project execution.'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Project Manager & Data Analyst with 6.5+ years of experience driving successful digital transformations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Personal Info & Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                {/* Profile Image */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-yellow shadow-2xl">
                      {/* Replace with your image */}
                      <div className="w-full h-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                        <span className="text-6xl font-bold text-white">MR <img src="/assets/images/profile.png" alt="" /></span>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                      Available
                    </div>
                  </div>
                </div>

                {/* Personal Info */}
                <div className="space-y-4">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="text-primary-600 text-xl mr-4">{info.icon}</div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-500">{info.label}</div>
                        <div className="font-medium text-gray-800">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Languages</h3>
                <div className="space-y-6">
                  {languages.map((lang, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800">{lang.language}</span>
                        <span className="text-sm text-gray-500">{lang.proficiency}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            lang.language === 'English' ? 'w-4/5 bg-primary-500' : 'w-full bg-green-500'
                          }`}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{lang.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Professional Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Professional Summary */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-justify">Professional Profile</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                  <p>
                    As a seasoned Project Manager with 9 + years of specialized experience complemented by 
                    3 years in Data Analysis, I bring a unique blend of technical expertise and management 
                    proficiency to every project. My journey has equipped me with comprehensive skills in 
                    both Agile and Waterfall methodologies, enabling me to adapt seamlessly to diverse 
                    project requirements.
                  </p>
                  <p>
                    I specialize in managing end-to-end Website Development projects, from initial client 
                    consultation to final deployment and post-launch support. My experience extends to 
                    coordinating cross-functional teams including UI/UX designers, developers, QA testers, 
                    and account management professionals, ensuring smooth collaboration and timely delivery.
                  </p>
                  <p>
                    My technical toolkit includes proficiency in HTML, CSS, JavaScript, Liquid, SQL, 
                    PowerBI, and Excel, allowing me to bridge the gap between technical teams and 
                    stakeholders. I excel in creating insightful dashboards and presentations that 
                    translate complex data into actionable business intelligence.
                  </p>
                  <p>
                    Currently serving as an IT Project Manager at Avalon Solution Pvt. Ltd., I manage 
                    Shopify websites and digital solutions, ensuring quality standards, coding best 
                    practices, and adherence to project timelines while maintaining exceptional client 
                    satisfaction rates.
                  </p>
                </div>
              </div>

              {/* Core Values */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Core Values & Approach</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {coreValues.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center p-6 rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 text-2xl mb-4">
                        {value.icon}
                      </div>
                      <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Current Focus */}
              <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Current Focus</h3>
                <p className="mb-4">
                  Seeking new challenges to leverage comprehensive project management skills and technical 
                  expertise in innovative environments that value strategic thinking and digital transformation.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Project Management',
                    'Data Analytics',
                    'Web Development',
                    'E-commerce Solutions',
                    'Team Leadership',
                    'Process Optimization'
                  ].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About