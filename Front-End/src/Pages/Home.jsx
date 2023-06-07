import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  useEffect(() => {
    const result = localStorage.getItem("user")
    setUser(result)
  })
  const handleClick = () => {
    navigate('/login')
  }
  const handleClick2 = () => {
    localStorage.removeItem("user")
    setUser(null)
  }
  return (
    <>
    <div>Home</div>
   
    {user ? <button type='button' onClick={handleClick2}>Sair</button> : 
     <button type='button' onClick={handleClick}>Login</button>
    }
    
    </>
    
  )
}

export default Home;