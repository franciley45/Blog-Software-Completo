import './App.css'
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
