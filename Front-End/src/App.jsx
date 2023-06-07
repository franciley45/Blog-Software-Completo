import { useState } from 'react'
import './App.css'
import Login from './Pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>APP</h1>
      <Login/>
      
    </>
  )
}

export default App
