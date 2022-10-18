import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Alert from './components/layout/Alert'
import Home from './pages/Home'
import About from './pages/About'
import User from './pages/User'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'
import Layout from './components/layout/Layout'

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <Layout>
            <Routes>
              <Route
                path='/'
                element={
                  <>
                    <Alert />
                    <Home />
                  </>
                }
              />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/user/:login' element={<User />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App
