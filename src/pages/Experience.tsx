import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle, FiStar, FiTrendingUp } from 'react-icons/fi'
import 'react-vertical-timeline-component/style.min.css'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'IT Project Manager',
      company: 'Avalon Solution Pvt. Ltd.',
      location: 'Indore, M.P.',
      period: 'June 2022 - Present',
      duration: '3.5+ Years',
      description: 'Leading Shopify websites and digital solutions projects from conception to deployment.',
      responsibilities: [
        'Collaborate with Business Development and Sales teams to gather project requirements',
        'Create project planning with timelines, resource allocation, and risk management',
        'Coordinate with UI/UX designers to align designs with client requirements',
        'Oversee development lifecycle ensuring quality standards and coding best practices',
        'Review developed solutions and supervise testing on beta platforms',
        'Manage client feedback implementation and ensure satisfaction',
        'Ensure payment milestones are met before deliverables',
        'Provide post-launch support and maintain optimal functionality',
        'Act as primary client contact and facilitate team collaboration'
      ],
      technologies: ['Shopify', 'JIRA', 'Agile', 'Waterfall', 'PowerBI', 'Project Management'],
      achievements: [
        'Successfully delivered 30+ Shopify websites',
        'Maintained 100% client satisfaction rate',
        'Reduced project delivery time by 20%',
        'Implemented efficient project tracking system'
      ],
      color: '#3B82F6'
    },
    {
      id: 2,
      title: 'Data Analyst',
      company: 'TaskUS, Indore',
      location: 'India',
      period: '2019 - 2022',
      duration: '3 Years',
      description: 'Specialized in data analysis, dashboard creation, and business intelligence.',
      responsibilities: [
        'Analyzed business data to provide actionable insights',
        'Created interactive dashboards using PowerBI and Excel',
        'Developed SQL queries for data extraction and reporting',
        'Collaborated with stakeholders to define metrics and KPIs',
        'Presented findings through detailed reports and presentations',
        'Automated reporting processes to improve efficiency'
      ],
      technologies: ['SQL', 'PowerBI', 'Excel', 'Python', 'Data Visualization', 'Statistical Analysis'],
      achievements: [
        'Developed 50+ analytical dashboards',
        'Reduced reporting time by 40% through automation',
        'Improved data accuracy by 25%',
        'Trained 10+ team members on data analysis tools'
      ],
      color: '#06B6D4'
    },
        {
      id: 3,
      title: 'Quality Assurance',
      company: 'Teleperformance, Indore ',
      location: 'India',
      period: '2017 - 2019',
      duration: '2.5 Years',
      description: 'Specialized in Monitor Calls/Chats/Emails and create the Dashboard .',
      responsibilities: [
        'Identify gaps and provide feedback & refresher sessions to agents to improve call quality',
        'Participate in Calibration Sessions, Pre & Post shift Briefings ',
        'Arrange the PKT for Agents and Team Leader and share the score',
        'Analyze reports and share the Dashboards with internal and external stack holders and Participation in WBR and MBR'
      ],
      technologies: ['MS Excel', 'Google Sheet', 'Client Tools', 'Email Drafting', 'Data Visualization', 'Statistical Analysis'],
      achievements: [
        'Achieved Quality Targets Most of the Times',
        'Less then 5% Client call calibration',
        'Improved Callibration accuracy by 45%',
        'Trained 10+ team members on Client tools'
      ],
      color: '#06B6D4'
    }
  ]

  const skillsGained = [
    { skill: 'Project Management', level: 95, years: 3.5 },
    { skill: 'Data Analysis', level: 90, years: 3 },
    { skill: 'Agile Methodologies', level: 88, years: 2.5 },
    { skill: 'Team Leadership', level: 85, years: 3 },
    { skill: 'Client Communication', level: 92, years: 3.5 },
    { skill: 'Risk Management', level: 80, years: 2.5 },
    { skill: 'Quality Assurance', level: 85, years: 3 },
    { skill: 'Budget Management', level: 82, years: 2.5 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              9 + years of progressive experience in Project Management and Data Analysis
            </p>
          </motion.div>

          {/* Experience Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">9 +</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-accent-500 mb-2">50+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">30+</div>
              <div className="text-gray-600">Team Members Led</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-accent-500"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 md:left-auto md:right-[-6px] md:transform-none">
                    <div className="w-4 h-4 rounded-full bg-white border-4 border-primary-500"></div>
                  </div>

                  {/* Experience Card */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Card Header */}
                    <div className="p-6 border-b" style={{ backgroundColor: `${exp.color}10` }}>
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="flex items-center text-gray-600">
                              <FiBriefcase className="mr-2" />
                              {exp.company}
                            </span>
                            <span className="flex items-center text-gray-600">
                              <FiMapPin className="mr-2" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0 text-right">
                          <div className="flex items-center text-gray-600 mb-1">
                            <FiCalendar className="mr-2" />
                            {exp.period}
                          </div>
                          <div className="text-sm font-medium px-3 py-1 rounded-full bg-primary-100 text-primary-800">
                            {exp.duration}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">{exp.description}</p>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <h4 className="text-lg font-bold mb-3 flex items-center">
                        <FiCheckCircle className="mr-2 text-green-500" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            <span className="text-gray-600">{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold mb-3">Technologies & Tools</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      {exp.achievements && (
                        <div>
                          <h4 className="text-lg font-bold mb-3 flex items-center">
                            <FiStar className="mr-2 text-yellow-500" />
                            Key Achievements
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {exp.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-start bg-green-50 p-3 rounded-lg">
                                <FiTrendingUp className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Progression Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Skills Progression</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Technical & Management Skills</h3>
              <div className="space-y-6">
                {skillsGained.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-800">{skill.skill}</span>
                      <span className="text-gray-600 text-sm">{skill.years} years</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="h-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Methodologies Mastered</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Agile', 'Waterfall', 'Scrum', 'Kanban', 'Lean', 'Six Sigma'].map((method, idx) => (
                    <div key={idx} className="bg-white/20 p-4 rounded-xl text-center">
                      <div className="font-bold">{method}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Career Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FiStar className="text-yellow-500 mr-3" />
                    <span>Managed projects worth ₹2+ Crores</span>
                  </li>
                  <li className="flex items-center">
                    <FiStar className="text-yellow-500 mr-3" />
                    <span>Led cross-functional teams of 15+ members</span>
                  </li>
                  <li className="flex items-center">
                    <FiStar className="text-yellow-500 mr-3" />
                    <span>Achieved 100% on-time project delivery in 2024</span>
                  </li>
                  <li className="flex items-center">
                    <FiStar className="text-yellow-500 mr-3" />
                    <span>Implemented process improvements reducing costs by 15%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience