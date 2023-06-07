import React,{ useState } from 'react'


const states = {
    email: "",
    password: ""
}
function Login() {
    const [state, setState] = useState(states)
    
   
    const onChange = ({target}) =>{
     const { name, value } = target
     setState((prevState) => ({ 
        ...prevState,
        [name]: value 
    }))
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(state)
    }
  return (
    <>
     <div>Login</div>
     <form onSubmit={handleSubmit}>
        <section>
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            name="email" 
            value={state.email}
            onChange={onChange}
            ></input>
        </section>
        <section>
            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            name="password"
            value={state.password}
            onChange={onChange}
            ></input>
        </section>
        <section>
           <button type='submit'>Entrar</button>
        </section>
     </form>
    </>
   
  )
}

export default Login;
