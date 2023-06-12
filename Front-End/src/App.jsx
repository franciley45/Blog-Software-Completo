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
import { PostsProvider } from './Contexts/Posts'


function App() {
  return (
    <>
      <Router>
        <PostsProvider>
          <AuthProvider>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/login' element={<Login />} />
            </Routes>
          </AuthProvider>
        </PostsProvider>
      </Router>
    </>
  )
}

export default App
