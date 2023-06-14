import React, { useState, useContext } from 'react'
import { AuthContext } from '../Contexts/auth'
import "../Style/LoginStyle.css"
import Particle from '../components/Particle'

const states = {
    email: "",
    password: "",
    name: "",
}
function Register() {
    const [state, setState] = useState(states)
    const { Register } = useContext(AuthContext)

    const onChange = ({ target }) => {
        const { name, value } = target
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        Register(state.name, state.email, state.password)
    }
    return (
        <>
        <Particle/>
            <div className='box'>
                <h2>Register</h2>
                <form action='' onSubmit={handleSubmit}>
                <div className='inputBox'>
                        <input
                            type='text'
                            autoComplete='off'
                            autoFocus=''
                            name="name"
                            spellcheck="false"
                            value={state.name}
                            onChange={onChange}
                            required></input>
                        <label for="">Name</label>
                    </div>
                    <div className='inputBox'>
                        <input
                            type="email"
                            autoComplete='off'
                            autoFocus=''
                            name="email"
                            spellcheck="false"
                            value={state.email}
                            onChange={onChange}
                            required></input>
                        <label for="">Email</label>
                    </div>
                    <div className='inputBox'>
                        <input
                            type='password'
                            autoComplete='off'
                            autoFocus=''
                            name="password"
                            value={state.password}
                            onChange={onChange}
                            required></input>
                        <label for="">Password</label>
                    </div>
                    <input type='submit' value='Register'></input>
                </form>
            </div>
        </>

    )
}

export default Register;