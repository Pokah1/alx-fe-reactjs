import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './components/Profile'
import BlogPost from './pages/BlogPost'
import NotFound from './pages/NotFound'
import './App.css'

function App() {

  const isAuthenticated = true
  return (
    <Router>
      <nav style={{display: "flex", gap: "1rem", marginBottom: "1rem"}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog/1">Blog #1</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>

       <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
        {/* Dynamic Route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    
  )
}

export default App
