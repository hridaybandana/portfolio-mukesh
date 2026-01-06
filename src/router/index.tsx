import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent"></div>
      <p className="mt-4 text-lg font-semibold text-gray-600">Loading Portfolio...</p>
    </div>
  </div>
)

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Experience = lazy(() => import('../pages/Experience'))
const Projects = lazy(() => import('../pages/Projects'))
const Skills = lazy(() => import('../pages/Skills'))
const Contact = lazy(() => import('../pages/Contact'))
const Dashboard = lazy(() => import('../pages/Dashboard'))

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes