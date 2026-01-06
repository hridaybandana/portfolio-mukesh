import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FiTrendingUp, 
  FiCheckCircle, 
  FiDollarSign, 
  FiUsers,
  FiCalendar,
  FiPieChart,
  FiBarChart2,
  FiStar,
  FiTarget,
  FiClock,
  FiShoppingBag
} from 'react-icons/fi'

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    totalProjects: 0,
    onTimeDelivery: 0,
    clientSatisfaction: 0,
    budgetAdherence: 0,
    teamMembers: 15,
    repeatClients: 12,
    referralRate: 35,
    avgProjectDuration: 3.2
  })

  const monthlyData = [
    { month: 'Dec', projects: 2, satisfaction: 95, onTime: 96 },
    { month: 'Nov', projects: 5, satisfaction: 96, onTime: 97 },
    { month: 'Oct', projects: 2, satisfaction: 97, onTime: 98 },
    { month: 'Sept', projects: 2, satisfaction: 98, onTime: 97 },
    { month: 'Aug', projects: 3, satisfaction: 96, onTime: 96 },
    { month: 'July', projects: 2, satisfaction: 97, onTime: 97 }
  ]

  const categories = [
    { name: 'E-commerce', value: 52, color: 'bg-blue-500' },
    { name: 'Dashboards', value: 15, color: 'bg-green-500' },
    { name: 'Web Apps', value: 0, color: 'bg-purple-500' }
  ]

  const technologies = [
    { name: 'Shopify', projects: 52, icon: '🛍️', color: 'from-green-500 to-emerald-500' },
    { name: 'Power BI', projects: 15, icon: '📊', color: 'from-yellow-500 to-orange-500' },
    { name: 'HTML/CSS', projects: 52, icon: '🎨', color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', projects: 40, icon: '𝐉', color: 'from-yellow-400 to-yellow-600' },
    { name: 'SQL', projects: 15, icon: '🗃️', color: 'from-blue-400 to-blue-600' },
    { name: 'Excel', projects: 15, icon: '📈', color: 'from-green-400 to-green-600' },
    { name: 'JIRA', projects: 52, icon: '🎯', color: 'from-blue-500 to-cyan-500' },
    { name: 'Agile', projects: 52, icon: '⚡', color: 'from-purple-500 to-pink-500' }
  ]

  const recentDeliveries = [
    { name: 'KB Jewelers', date: '2024-06-15', satisfaction: 94, status: 'delivered' },
    { name: 'Bernards Jewelers', date: '2024-05-20', satisfaction: 97, status: 'delivered' },
    { name: 'Ashley Brooke Jewelry', date: '2024-04-10', satisfaction: 92, status: 'delivered' },
    { name: 'Charleston Alexander Diamonds', date: '2024-03-05', satisfaction: 95, status: 'delivered' },
    { name: 'D&D JEWELERS', date: '2024-02-28', satisfaction: 96, status: 'delivered' }
  ]

  // Animated counters
  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const interval = duration / steps
    
    const counters = {
      totalProjects: { target: 52, current: 0, step: 52 / steps },
      onTimeDelivery: { target: 52, current: 0, step: 52 / steps },
      clientSatisfaction: { target: 97, current: 0, step: 97 / steps },
      budgetAdherence: { target: 95, current: 0, step: 95 / steps }
    }

    const intervalId = setInterval(() => {
      setMetrics(prev => {
        const updated = { ...prev }
        let allCompleted = true
        
        Object.keys(counters).forEach(key => {
          const counter = counters[key as keyof typeof counters]
          if (counter.current < counter.target) {
            counter.current = Math.min(counter.current + counter.step, counter.target)
            updated[key as keyof typeof updated] = Math.round(counter.current)
            allCompleted = false
          }
        })

        if (allCompleted) clearInterval(intervalId)
        return updated
      })
    }, interval)

    return () => clearInterval(intervalId)
  }, [])

  const MetricCard = ({ 
    title, 
    value, 
    icon, 
    color, 
    suffix = '',
    subtitle = '',
    trend = null 
  }: { 
    title: string, 
    value: number | string, 
    icon: React.ReactNode, 
    color: string,
    suffix?: string,
    subtitle?: string,
    trend?: 'up' | 'down' | null
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${color} text-white`}>
          {icon}
        </div>
        {trend && (
          <div className={`flex items-center px-3 py-1 rounded-full text-sm ${
            trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {trend === 'up' ? '📈' : '📉'} {trend === 'up' ? '+5.2%' : '-2.1%'}
          </div>
        )}
      </div>
      <div className="mb-2">
        <div className="text-3xl font-bold text-gray-800">
          {value}{suffix}
        </div>
        <div className="text-sm text-gray-500">{title}</div>
      </div>
      {subtitle && (
        <div className="text-xs text-gray-400 mt-2">{subtitle}</div>
      )}
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Performance <span className="gradient-text">Dashboard</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Real-time metrics and analytics of project delivery performance and client satisfaction
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <div className="flex items-center text-sm text-gray-600">
                <FiClock className="mr-2" />
                <span>Last updated: Today</span>
              </div>
              <div className="flex items-center text-sm text-green-600">
                <FiTrendingUp className="mr-2" />
                <span>Overall performance: Excellent</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Total Projects Delivered"
              value={metrics.totalProjects}
              icon={<FiShoppingBag size={24} />}
              color="bg-blue-500"
              subtitle="All-time project count"
              trend="up"
            />
            <MetricCard
              title="On-time Delivery"
              value={metrics.onTimeDelivery}
              icon={<FiCheckCircle size={24} />}
              color="bg-green-500"
              suffix=" Projects"
              subtitle="100% on-time rate"
              trend="up"
            />
            <MetricCard
              title="Client Satisfaction"
              value={metrics.clientSatisfaction}
              icon={<FiStar size={24} />}
              color="bg-yellow-500"
              suffix="%"
              subtitle="Average satisfaction score"
              trend="up"
            />
            <MetricCard
              title="Budget Adherence"
              value={metrics.budgetAdherence}
              icon={<FiDollarSign size={24} />}
              color="bg-emerald-500"
              suffix="%"
              subtitle="Average budget accuracy"
              trend="up"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Team Members Led"
              value={metrics.teamMembers}
              icon={<FiUsers size={24} />}
              color="bg-purple-500"
              suffix="+"
              subtitle="Maximum team size"
            />
            <MetricCard
              title="Repeat Clients"
              value={metrics.repeatClients}
              icon={<FiTarget size={24} />}
              color="bg-pink-500"
              subtitle="Returning customers"
            />
            <MetricCard
              title="Referral Rate"
              value={metrics.referralRate}
              icon={<FiTrendingUp size={24} />}
              color="bg-orange-500"
              suffix="%"
              subtitle="Client referrals"
            />
            <MetricCard
              title="Avg. Project Duration"
              value={metrics.avgProjectDuration}
              icon={<FiCalendar size={24} />}
              color="bg-cyan-500"
              suffix=" months"
              subtitle="Average timeline"
            />
          </div>
        </div>
      </section>

      {/* Charts & Visualizations */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Monthly Performance */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Monthly Performance</h2>
                <FiBarChart2 className="text-gray-400" />
              </div>
              
              <div className="space-y-6">
                {monthlyData.map((month) => (
                  <div key={month.month} className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{month.month}</span>
                      <span>{month.projects} projects • {month.satisfaction}% satisfaction</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 mb-1">Projects</div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-blue-500 h-3 rounded-full"
                            style={{ width: `${(month.projects / 5) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 mb-1">Satisfaction</div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-green-500 h-3 rounded-full"
                            style={{ width: `${month.satisfaction}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 mb-1">On-time</div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-purple-500 h-3 rounded-full"
                            style={{ width: `${month.onTime}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-600">Projects Completed</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-gray-600">Client Satisfaction</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                    <span className="text-gray-600">On-time Delivery</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project Categories */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Project Categories</h2>
                <FiPieChart className="text-gray-400" />
              </div>
              
              <div className="space-y-6">
                {categories.map((category) => (
                  <div key={category.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{category.name}</span>
                      <span className="text-gray-600">{category.value} projects</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className={`h-4 rounded-full ${category.color} transition-all duration-1000`}
                        style={{ 
                          width: category.value > 0 
                            ? `${(category.value / 52) * 100}%` 
                            : '0%' 
                        }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {category.value > 0 
                        ? `${Math.round((category.value / 52) * 100)}% of total projects`
                        : 'No projects in this category'}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm opacity-90">Dominant Category</div>
                    <div className="text-xl font-bold">E-commerce</div>
                    <div className="text-sm opacity-90">52 projects (100%)</div>
                  </div>
                  <div className="text-4xl">🛍️</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack & Recent Deliveries */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technology Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <h2 className="text-2xl font-bold mb-6">Technology Stack Usage</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {technologies.map((tech) => (
                  <div 
                    key={tech.name}
                    className={`bg-gradient-to-br ${tech.color} text-white p-4 rounded-xl text-center`}
                  >
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <div className="font-bold mb-1">{tech.name}</div>
                    <div className="text-sm opacity-90">{tech.projects} projects</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center text-gray-600 text-sm">
                * Based on project implementation frequency
              </div>
            </motion.div>

            {/* Recent Deliveries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Recent Project Deliveries</h2>
                <FiCalendar className="text-gray-400" />
              </div>
              
              <div className="space-y-4">
                {recentDeliveries.map((project) => (
                  <div key={project.name} className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-3 ${
                        project.status === 'delivered' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></div>
                      <div>
                        <div className="font-medium">{project.name}</div>
                        <div className="text-sm text-gray-500">
                          Delivered: {new Date(project.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric' 
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-800">{project.satisfaction}%</div>
                      <div className="text-sm text-gray-500">Satisfaction</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">52</div>
                    <div className="text-sm text-gray-600">Total Delivered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-sm text-gray-600">On-time Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-600">97%</div>
                    <div className="text-sm text-gray-600">Avg. Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Summary */}
      <section className="py-12 bg-gradient-to-r from-primary-500 to-accent-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Performance Summary</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Consistent excellence in project delivery with 100% on-time completion rate and 
              97% average client satisfaction across all 52 projects managed.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold">52</div>
                <div className="text-sm opacity-90">Successful Projects</div>
              </div>
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-90">On-time Delivery</div>
              </div>
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold">0</div>
                <div className="text-sm opacity-90">Project Failures</div>
              </div>
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm opacity-90">Team Members Led</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard