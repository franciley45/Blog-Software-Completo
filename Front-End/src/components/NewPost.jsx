import React, { useState } from 'react'
import { postApi } from '../Services/Api';
import "../Style/NewPostStyle.css"

const states = {
    title: "",
    post: "",
}

function NewPost() {
    const [state, setState] = useState(states)
    console.log(state)
    const onChange = ({ target }) => {
        const { name, value } = target
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const formataDate = () => {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        const formatoIsoDate = today.toISOString();
        return formatoIsoDate;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = JSON.parse(localStorage.getItem("token"))
        const result = await postApi(state.title, formataDate(), state.post, token)
        if (result.status == 201) {
            console.log('deus toma conta de tudo')
            window.location.reload(true);
        }
    }
    return (
        <div className='conteiner'>
            <h1 className='h1'>Formulário de postagem</h1>
            <form onSubmit={handleSubmit}>
                <section className='section'>
                    <div className='div'>
                        <label htmlFor="title">Title</label>
                        <input
                            className='input'
                            placeholder='digite o titulo da sua postagem'
                            type="title"
                            name="title"
                            value={state.title}
                            onChange={onChange}
                        ></input>
                    </div>
                </section>
                <section className='section'>
                    <div className='div'>
                        <label htmlFor="post">Post</label>
                        <textarea
                            className='textarea'
                            rows="15"
                            type="post"
                            name="post"
                            value={state.post}
                            onChange={onChange}
                        ></textarea>
                    </div>
                </section >
                <section className='section'>
                    <button className='enviar' type='submit'>Enviar</button>
                </section>
            </form>
        </div>
    )
}

export default NewPost;