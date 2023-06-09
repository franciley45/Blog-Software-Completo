import React, { useEffect, useContext, useState } from 'react'
import { AuthContext } from '../Contexts/auth'
import { getAllDate } from '../Services/Api'
import "../Style/HomeStyle.css"

function Home() {
  const [posts, setPosts] = useState([])
  const { authenticated, setUser, logout, clickLogin } = useContext(AuthContext);

  useEffect(() => {
    const storage = localStorage.getItem("user");
    setUser(storage);
    (async () => {
      const response = await getAllDate();
      setPosts(response.data);
    })();
  }, [])

  function getRandomInt() {
    const random = String(Math.floor(Math.random() * (4 - 1) + 1))
    const result = `../../src/Imagens/b${random}.jpg`
    return result
  }

  const portId = ({ target }) => {
    const { id } = target;
    console.log(`post${id}`)
    const port = document.getElementById(`post${id}`)
    const btn = document.getElementById(id)
    console.log(btn)
    if (port.style.display == "flex") {
      port.style.display = "-webkit-box";
      btn.innerHTML = "Leia Mais"
    } else {
      port.style.display = "flex";
      btn.innerHTML = "Leia Menos"
    }
  }

  return (
    <>

      <div id="blog">
        <div class="blog-heading">
          <h3>TESTEMUNHOS DE FÉ – BLOG</h3>
        </div>
        <div>
          {authenticated ? <button type='button' className='btn' onClick={logout}>Sair</button> :
            <button type='button' className='btn' onClick={clickLogin}>Login</button>
          }
        </div>
      </div>
      {posts.map((post) =>
        <section id="blog" key={post.posts_id}>

          <div class="blog-box-container">

            <div class="blog-box">
              <div class="blog-box-img">
                <img src={getRandomInt()} alt="blog" />
                <a href="#" class="blog-img-link">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>

              <div class="blog-box-text">
                <strong>Artificial Intelligence</strong>
                <a href="#">{post.title}</a>
                <p id={`post${post.posts_id}`}>{post.milagres}</p>
                <button id={post.posts_id} onClick={portId}>Leia Mais</button>
                <div class="blog-author">
                  <div class="blog-author-img">
                    <img src={getRandomInt()} alt="" />
                  </div>
                  <div class="blog-author-text">
                    <strong>Alax</strong>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Home;