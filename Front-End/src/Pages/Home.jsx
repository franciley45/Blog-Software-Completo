import React, { useEffect, useContext } from 'react'
import { AuthContext } from '../Contexts/auth'

function Home() {
  const { authenticated, setUser, logout, clickLogin } = useContext(AuthContext);
  useEffect(() => {
    const storage = localStorage.getItem("user");
    setUser(storage);
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