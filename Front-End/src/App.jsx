import { useState } from 'react'
import './App.css'
import Login from './Pages/Login'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>APP</h1>
      <Login/>
      {/* <Home/> */}
      
    </>
  )
}

export default App
