import { useState } from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const skillCategories = [
    {
      id: 'project-management',
      name: 'Project Management',
      color: 'from-blue-500 to-cyan-500',
      description: 'Methodologies, tools, and techniques for successful project delivery'
    },
    {
      id: 'technical',
      name: 'Technical Skills',
      color: 'from-purple-500 to-pink-500',
      description: 'Programming languages, frameworks, and development expertise'
    },
    {
      id: 'data-analysis',
      name: 'Data Analysis',
      color: 'from-green-500 to-emerald-500',
      description: 'Data processing, visualization, and business intelligence'
    },
    {
      id: 'tools',
      name: 'Tools & Platforms',
      color: 'from-orange-500 to-red-500',
      description: 'Software, platforms, and development tools mastery'
    },
    {
      id: 'soft-skills',
      name: 'Soft Skills',
      color: 'from-indigo-500 to-purple-500',
      description: 'Leadership, communication, and team collaboration'
    }
  ]

  const skills = [
    // Project Management Skills
    {
      id: 1,
      name: 'Agile Methodologies',
      category: 'project-management',
      proficiency: 95,
      years: 3.5,
      description: 'Scrum, Kanban, Sprint Planning, Daily Standups',
      featured: true
    },
    {
      id: 2,
      name: 'Waterfall Methodology',
      category: 'project-management',
      proficiency: 90,
      years: 3,
      description: 'Sequential project phases, documentation, milestones',
      featured: true
    },
    {
      id: 3,
      name: 'Team Leadership',
      category: 'project-management',
      proficiency: 92,
      years: 3.5,
      description: 'Cross-functional team coordination, motivation, mentoring'
    },
    {
      id: 4,
      name: 'Risk Management',
      category: 'project-management',
      proficiency: 88,
      years: 3,
      description: 'Risk identification, mitigation planning, contingency'
    },

    // Technical Skills
    {
      id: 5,
      name: 'HTML/CSS',
      category: 'technical',
      proficiency: 95,
      years: 5,
      description: 'Semantic HTML, CSS3, Responsive Design, Flexbox/Grid',
      featured: true
    },
    {
      id: 6,
      name: 'JavaScript',
      category: 'technical',
      proficiency: 90,
      years: 4,
      description: 'ES6+, DOM Manipulation, Async Programming',
      featured: true
    },
    {
      id: 7,
      name: 'React & TypeScript',
      category: 'technical',
      proficiency: 85,
      years: 2,
      description: 'Component Architecture, Hooks, State Management',
      featured: true
    },
    {
      id: 8,
      name: 'Shopify Development',
      category: 'technical',
      proficiency: 96,
      years: 3,
      description: 'Liquid Templating, Theme Development, App Integration',
      featured: true
    },

    // Data Analysis Skills
    {
      id: 9,
      name: 'SQL',
      category: 'data-analysis',
      proficiency: 92,
      years: 3,
      description: 'Query Optimization, Joins, Subqueries, Data Modeling',
      featured: true
    },
    {
      id: 10,
      name: 'Power BI',
      category: 'data-analysis',
      proficiency: 90,
      years: 3,
      description: 'Dashboard Creation, DAX, Data Visualization, Reports',
      featured: true
    },
    {
      id: 11,
      name: 'Excel/Google Sheets',
      category: 'data-analysis',
      proficiency: 95,
      years: 5,
      description: 'Pivot Tables, Formulas, Macros, Data Analysis',
      featured: true
    },

    // Tools & Platforms
    {
      id: 12,
      name: 'JIRA',
      category: 'tools',
      proficiency: 94,
      years: 3,
      description: 'Project Tracking, Agile Boards, Workflow Management',
      featured: true
    },
    {
      id: 13,
      name: 'Git & Version Control',
      category: 'tools',
      proficiency: 88,
      years: 3,
      description: 'Branching, Merging, Pull Requests, GitHub/GitLab'
    },
    {
      id: 14,
      name: 'ChatGPT & AI Tools',
      category: 'tools',
      proficiency: 90,
      years: 1.5,
      description: 'Prompt Engineering, AI-assisted Development, Automation',
      featured: true
    },

    // Soft Skills
    {
      id: 15,
      name: 'Communication',
      category: 'soft-skills',
      proficiency: 96,
      years: 9 ,
      description: 'Clear articulation, active listening, effective presentations'
    },
    {
      id: 16,
      name: 'Problem Solving',
      category: 'soft-skills',
      proficiency: 94,
      years: 9,
      description: 'Analytical thinking, creative solutions, decision making'
    },
    {
      id: 17,
      name: 'Team Collaboration',
      category: 'soft-skills',
      proficiency: 95,
      years: 9,
      description: 'Cross-functional teamwork, conflict resolution, synergy'
    }
  ]

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'project-management': return '🎯'
      case 'technical': return '💻'
      case 'data-analysis': return '📊'
      case 'tools': return '🛠️'
      case 'soft-skills': return '🤝'
      default: return '⭐'
    }
  }

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
              My <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              9 + years of accumulated expertise across project management, technical development, and data analysis
            </p>
            
            {/* Skills Overview */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {skillCategories.map((category) => (
                <motion.div
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  className={`bg-gradient-to-r ${category.color} text-white p-4 rounded-2xl cursor-pointer`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <div className="text-2xl mb-2">{getCategoryIcon(category.id)}</div>
                  <div className="font-bold">{category.name}</div>
                  <div className="text-xs opacity-90 mt-1">
                    {skills.filter(s => s.category === category.id).length} skills
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Stats */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{skills.length}</div>
              <div className="text-gray-600">Total Skills</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">9 +</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">92%</div>
              <div className="text-gray-600">Average Proficiency</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">5</div>
              <div className="text-gray-600">Skill Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{getCategoryIcon(category.id)}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {activeCategory !== 'all' && (
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold mb-2">
                {skillCategories.find(c => c.id === activeCategory)?.name}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {skillCategories.find(c => c.id === activeCategory)?.description}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => {
              const category = skillCategories.find(cat => cat.id === skill.category)
              
              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 ${
                    skill.category === 'project-management' ? 'border-l-blue-500' :
                    skill.category === 'technical' ? 'border-l-purple-500' :
                    skill.category === 'data-analysis' ? 'border-l-green-500' :
                    skill.category === 'tools' ? 'border-l-orange-500' :
                    'border-l-indigo-500'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-lg text-xl ${
                        skill.category === 'project-management' ? 'bg-blue-100 text-blue-600' :
                        skill.category === 'technical' ? 'bg-purple-100 text-purple-600' :
                        skill.category === 'data-analysis' ? 'bg-green-100 text-green-600' :
                        skill.category === 'tools' ? 'bg-orange-100 text-orange-600' :
                        'bg-indigo-100 text-indigo-600'
                      }`}>
                        {getCategoryIcon(skill.category)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{skill.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            skill.category === 'project-management' ? 'bg-blue-50 text-blue-700' :
                            skill.category === 'technical' ? 'bg-purple-50 text-purple-700' :
                            skill.category === 'data-analysis' ? 'bg-green-50 text-green-700' :
                            skill.category === 'tools' ? 'bg-orange-50 text-orange-700' :
                            'bg-indigo-50 text-indigo-700'
                          }`}>
                            {category?.name}
                          </span>
                          {skill.featured && (
                            <span className="text-xs px-2 py-1 rounded-full bg-yellow-50 text-yellow-700">
                              ⭐ Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-800">{skill.proficiency}%</div>
                      <div className="text-sm text-gray-500">{skill.years} years</div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{skill.description}</p>

                  {/* Proficiency Bar */}
                  <div className="mb-2">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Proficiency</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          skill.category === 'project-management' ? 'bg-blue-500' :
                          skill.category === 'technical' ? 'bg-purple-500' :
                          skill.category === 'data-analysis' ? 'bg-green-500' :
                          skill.category === 'tools' ? 'bg-orange-500' :
                          'bg-indigo-500'
                        }`}
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Experience Indicator */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <span className="mr-1">⏱️</span>
                      <span>{skill.years} {skill.years === 1 ? 'year' : 'years'} experience</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-1 text-green-500">✓</span>
                      <span>Expert Level</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Technical Stack Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white"
          >
            <h2 className="text-2xl font-bold mb-6">Technical Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { icon: '🅷', name: 'HTML5', color: 'text-orange-500' },
                { icon: '🅲', name: 'CSS3', color: 'text-blue-500' },
                { icon: '𝐉', name: 'JavaScript', color: 'text-yellow-500' },
                { icon: '🅣', name: 'TypeScript', color: 'text-blue-400' },
                { icon: '⚛️', name: 'React', color: 'text-cyan-400' },
                { icon: '🎨', name: 'Tailwind', color: 'text-teal-400' },
                { icon: '🛍️', name: 'Shopify', color: 'text-green-500' },
                { icon: '📈', name: 'Power BI', color: 'text-yellow-400' },
                { icon: '🗃️', name: 'SQL', color: 'text-blue-300' },
                { icon: '🐍', name: 'Python', color: 'text-green-400' },
                { icon: '📊', name: 'Excel', color: 'text-green-600' },
                { icon: '📝', name: 'JIRA', color: 'text-blue-500' },
                { icon: '🤖', name: 'AI Tools', color: 'text-purple-400' },
                { icon: '🎯', name: 'Agile', color: 'text-orange-400' },
              ].map((tech, index) => (
                <div key={index} className="text-center group">
                  <div className={`text-4xl mb-2 ${tech.color} group-hover:scale-110 transition-transform`}>
                    {tech.icon}
                  </div>
                  <div className="text-sm font-medium">{tech.name}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Methodology Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Methodology Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-bold mb-2">Agile & Scrum</h3>
                <p className="text-gray-600">Sprint planning, daily standups, retrospectives, backlog grooming</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Scrum</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Kanban</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Sprints</span>
                </div>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-bold mb-2">Waterfall</h3>
                <p className="text-gray-600">Sequential phases, comprehensive documentation, milestone tracking</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Planning</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Design</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Testing</span>
                </div>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-bold mb-2">Hybrid Approach</h3>
                <p className="text-gray-600">Combining Agile flexibility with Waterfall structure as needed</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Flexible</span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Adaptive</span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Structured</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Skills