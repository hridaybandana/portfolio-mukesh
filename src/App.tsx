import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './router'
import Layout from './components/layout/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  )
}

export default App