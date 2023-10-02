import React, { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../Contexts/auth';
import { PostsContext } from '../Contexts/Posts';
import { getAllDate } from '../Services/Api';
import "../Style/HomeStyle.css";
import NewPost from '../components/NewPost';
import b0 from '../../src/Imagens/b0.jpg'
import b1 from '../../src/Imagens/b1.jpg'
import b2 from '../../src/Imagens/b2.jpg'
import b3 from '../../src/Imagens/b2.jpg'

function Home() {
  const { posts, setPosts } = useContext(PostsContext);
  const { authenticated, setUser, logout, clickLogin } = useContext(AuthContext);
  const [validUser, setvalidUser] = useState(false);

  useEffect(() => {
    const storage = localStorage.getItem("user");
    setUser(storage);
    (async () => {
      const response = await getAllDate();
      setPosts(response.data);
    })();
  }, []);

  /* function getRandomInt() {
    const random = String(Math.floor(Math.random() * (5 - 1) + 1));
    const result = `../../src/Imagens/b${random}.jpg`;
    return result;
  } */

  const portId = ({ target }) => {
    const { id } = target;
    const port = document.getElementById(`post${id}`);
    const btn = document.getElementById(id);

    if (port.style.display == "flex") {
      port.style.display = "-webkit-box";
      btn.innerHTML = "Leia Mais";
    } else {
      port.style.display = "flex";
      btn.innerHTML = "Leia Menos";
    }
  }

  const handleClick = () => {
    const header = [...document.getElementsByClassName('header')]
    const boxText = [...document.getElementsByClassName('blog-box-text')]

    if (authenticated) {
      setvalidUser(true);
      header.forEach((element) => element.style.filter = "blur(3px)")
      boxText.forEach((element) => element.style.filter = "blur(3px)")
    } else {
      alert('Você precisa estar logado para fazer uma postagem.');
    }
  };

  const handleClickBody = () => {
    const header = [...document.getElementsByClassName('header')]
    const boxText = [...document.getElementsByClassName('blog-box-text')]

    if (validUser == true) {
      setvalidUser(false);
      header.forEach((element) => element.style.filter = "none")
      boxText.forEach((element) => element.style.filter = "none")
    };
  }
  return (
    <>
      <div>
        <div>
          <div id="blog">
            <div className='header'>
              <div>
                <div className="blog-heading">
                  <h3>TESTEMUNHOS DE FÉ – BLOG</h3>
                </div>
              </div>
              <div>
                {authenticated ? <button type='button' className='btn' onClick={logout}>Sair</button> :
                  <button type='button' className='btn' onClick={clickLogin}>Login</button>
                }
              </div>
            </div>
            {validUser ? <NewPost /> : null}
          </div>
          <div onClick={handleClickBody}>
            {posts.map((post) =>
              <section id="blog" key={post.posts_id}>

                <div className="blog-box-container">

                  <div className="blog-box">
                    <div className="blog-box-img">
                      <img src={b2}alt="blog" />
                      <a href="#" className="blog-img-link">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </div>
                    <div className="blog-box-text">
                      <strong id='blur'>Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas.
                        - Mateus 6:33</strong>
                      <a href="#">{post.title}</a>
                      <div id='display'>
                      <p id={`post${post.posts_id}`}>{post.milagres}</p>
                      </div>
                      <button id={post.posts_id} onClick={portId}>Leia Mais</button>
                      <div className="blog-author">
                        <div className="blog-author-img">
                          <img src={b1} alt="" />
                        </div>
                        <div className="blog-author-text">
                          <strong>{post.name}</strong>
                          <span>{new Date(post.date).toDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
        <button className='button' id='mais' type='button' onClick={handleClick}>+</button>
      </div>
    </>
  )
}

export default Home;