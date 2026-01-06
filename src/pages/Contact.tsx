import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend,
  FiCheckCircle,
  FiClock,
  FiCalendar,
  FiMessageSquare,
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiGlobe
} from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showCalendly, setShowCalendly] = useState(false)

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'mukeshfreedom1@gmail.com',
      link: 'mailto:mukeshfreedom1@gmail.com',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: '+91 8871 8871 85',
      link: 'tel:+918871887185',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: 'Palash Parisar II, Omex Hills, Indore, M.P.',
      link: 'https://maps.google.com/?q=Palash+Parisar+II,+Omex+Hills,+Indore',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <FiGlobe />,
      title: 'Portfolio',
      value: 'mukeshrathore.my.canva.site',
      link: 'https://mukeshrathore.my.canva.site',
      color: 'bg-purple-100 text-purple-600'
    }
  ]

  const socialLinks = [
    { icon: <FiLinkedin />, platform: 'LinkedIn', url: 'https://linkedin.com', color: 'hover:bg-blue-600' },
    { icon: <FiGithub />, platform: 'GitHub', url: 'https://github.com', color: 'hover:bg-gray-800' },
    { icon: <FiTwitter />, platform: 'Twitter', url: 'https://twitter.com', color: 'hover:bg-sky-500' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Prevent scrolling when Calendly modal is open
  useEffect(() => {
    if (showCalendly) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showCalendly])

  return (
    <>
      {/* Calendly Popup Modal */}
      {showCalendly && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh]"
          >
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
            >
              ✕
            </button>
            
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <iframe
                src="https://calendly.com/mukesh-rathore-avalon/30min"
                title="Schedule Meeting"
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            </div>
          </motion.div>
        </div>
      )}

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
                Get In <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Let's discuss your next project, explore collaboration opportunities, or just connect
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <div className="text-2xl font-bold text-primary-600 mb-1">1-2</div>
                  <div className="text-gray-600 text-sm">Days Response Time</div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                  <div className="text-gray-600 text-sm">Response Rate</div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
                  <div className="text-gray-600 text-sm">Meeting Availability</div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <div className="text-2xl font-bold text-orange-600 mb-1">52+</div>
                  <div className="text-gray-600 text-sm">Happy Clients</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-1"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-24">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6 mb-8">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <div className={`p-3 rounded-lg mr-4 ${info.color} group-hover:scale-110 transition-transform`}>
                          {info.icon}
                        </div>
                        <div>
                          <div className="font-bold text-gray-800">{info.title}</div>
                          <div className="text-gray-600">{info.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="mb-8">
                    <h3 className="font-bold text-gray-800 mb-4">Connect with me</h3>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl text-gray-600 ${social.color} hover:text-white transition-all duration-300`}
                          aria-label={social.platform}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Schedule Meeting CTA */}
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-6 text-white">
                    <div className="flex items-center mb-4">
                      <FiCalendar className="text-2xl mr-3" />
                      <h3 className="text-xl font-bold">Schedule a Meeting</h3>
                    </div>
                    <p className="mb-4 opacity-90">
                      Book a 30-minute consultation to discuss your project requirements
                    </p>
                    <button
                      onClick={() => setShowCalendly(true)}
                      className="w-full bg-white text-gray-800 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center"
                    >
                      <FiClock className="mr-2" />
                      Book Free Consultation
                    </button>
                    <p className="text-sm opacity-75 mt-3 text-center">
                      Typically responds within 1 hour
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-2"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Send a Message</h2>
                    <p className="text-gray-600">
                      Fill out the form below and I'll get back to you as soon as possible
                    </p>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 text-4xl mb-6">
                        <FiCheckCircle />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for reaching out. I'll get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="btn-primary"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2 font-medium" htmlFor="subject">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="Project Inquiry"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2 font-medium" htmlFor="message">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                          placeholder="Tell me about your project..."
                        ></textarea>
                      </div>

                      <div className="flex items-center justify-between pt-4">
                        <div className="text-sm text-gray-500">
                          <FiMessageSquare className="inline mr-2" />
                          All fields marked * are required
                        </div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`btn-primary flex items-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                              <FiSend className="mr-2" />
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}

                  {/* Additional Contact Options */}
                  <div className="mt-12 pt-8 border-t border-gray-100">
                    <h3 className="text-xl font-bold mb-4">Prefer other methods?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button
                        onClick={() => setShowCalendly(true)}
                        className="p-4 border border-gray-200 rounded-xl text-center hover:border-primary-500 hover:bg-primary-50 transition-all group"
                      >
                        <div className="text-2xl mb-2 text-primary-600">📅</div>
                        <div className="font-bold mb-1">Schedule Meeting</div>
                        <div className="text-sm text-gray-600">Book 30-min consultation</div>
                      </button>
                      <a
                        href="mailto:mukeshfreedom1@gmail.com"
                        className="p-4 border border-gray-200 rounded-xl text-center hover:border-red-500 hover:bg-red-50 transition-all group"
                      >
                        <div className="text-2xl mb-2 text-red-600">✉️</div>
                        <div className="font-bold mb-1">Email Directly</div>
                        <div className="text-sm text-gray-600">mukeshfreedom1@gmail.com</div>
                      </a>
                      <a
                        href="tel:+918871887185"
                        className="p-4 border border-gray-200 rounded-xl text-center hover:border-green-500 hover:bg-green-50 transition-all group"
                      >
                        <div className="text-2xl mb-2 text-green-600">📞</div>
                        <div className="font-bold mb-1">Call Now</div>
                        <div className="text-sm text-gray-600">+91 8871 8871 85</div>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {[
                  {
                    q: "What's your typical response time?",
                    a: "I typically respond within 1-2 business days. For urgent matters, please use the phone number provided."
                  },
                  {
                    q: "Do you offer free consultations?",
                    a: "Yes! I offer a free 30-minute consultation to discuss your project requirements and see if we're a good fit."
                  },
                  {
                    q: "What information should I include in my project inquiry?",
                    a: "Please include project goals, timeline, budget range, and any specific requirements or constraints."
                  },
                  {
                    q: "Do you work with international clients?",
                    a: "Absolutely! I work with clients worldwide and can accommodate different time zones."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Still have questions? Don't hesitate to reach out!
                </p>
                <button
                  onClick={() => setShowCalendly(true)}
                  className="btn-primary inline-flex items-center"
                >
                  <FiCalendar className="mr-2" />
                  Schedule a Quick Call
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-3xl p-8 md:p-12 text-white text-center"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let's transform your ideas into reality with expert project management and technical execution
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowCalendly(true)}
                  className="bg-white text-gray-800 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors text-lg flex items-center justify-center"
                >
                  <FiCalendar className="mr-3" />
                  Book Free Consultation
                </button>
                <a
                  href="mailto:mukeshfreedom1@gmail.com"
                  className="bg-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors text-lg border-2 border-white/30"
                >
                  Send Quick Email
                </a>
              </div>
              <p className="mt-6 opacity-75">
                <FiClock className="inline mr-2" />
                Average response time: 1-2 hours during business hours
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact