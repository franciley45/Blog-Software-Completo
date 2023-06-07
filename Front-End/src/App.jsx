import './App.css'
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom"
import Login from './Pages/Login'
import Home from './Pages/Home'
import { AuthProvider } from './Contexts/auth'


function App() {
  const [user, setUser] = useState(null)

  const login = (email, password) => {
    console.log('login', { email, password })
    setUser({ id: '123', email })
  }
  const logout = () => {
    console.log("logout")
  }

  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
          </Routes>
        </AuthProvider>

      </Router>
    </>
  )
}

export default App
