import React from 'react'

function Login() {
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("submit")
    }
  return (
    <>
     <div>Login</div>
     <form onSubmit={handleSubmit}>
        <section>
            <label htmlFor="email">Email</label>
            <input type="email" name="email"></input>
        </section>
        <section>
            <label htmlFor="password">Password</label>
            <input type="password" name="password"></input>
        </section>
        <section>
           <button type='submit'>Entrar</button>
        </section>
     </form>
    </>
   
  )
}

export default Login;
