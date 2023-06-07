import './App.css'
import{
  BrowserRouter as Router, 
  Route, 
  Routes, 
  Navigate
} from "react-router-dom"
import Login from './Pages/Login'
import Home from './Pages/Home'

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/login'element={<Login/>}/>
       
      </Routes>
    </Router>
    </>
  )
}

export default App
