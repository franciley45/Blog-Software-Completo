import React, { useEffect, useContext, useState } from 'react'
import { AuthContext } from '../Contexts/auth'
import { getAllDate } from '../Services/Api';

function Home() {
  const { authenticated, setUser, logout, clickLogin } = useContext(AuthContext);
  const [date,  setDate] = useState([])
  
  console.log(date)

  useEffect(() => {
    const storage = localStorage.getItem("user");
    setUser(storage);
    setDate(getAllDate())
  },[])

  return (
    <>
      <div>Home</div>
      {authenticated ? <button type='button' onClick={logout}>Sair</button> :
        <button type='button' onClick={clickLogin}>Login</button>
      }
    </>
  )
}

export default Home;