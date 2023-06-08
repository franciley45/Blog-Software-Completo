import React, { useEffect, useContext, useState } from 'react'
import { AuthContext } from '../Contexts/auth'
import { getAllDate } from '../Services/Api';

function Home() {
  const[posts, setPosts] = useState([])
  const { authenticated, setUser, logout, clickLogin } = useContext(AuthContext);

  console.log(posts)

  useEffect(() => {
    const storage = localStorage.getItem("user");
    setUser(storage);
    (async () => {
      const response = await getAllDate();
      setPosts(response.data);
    })();
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