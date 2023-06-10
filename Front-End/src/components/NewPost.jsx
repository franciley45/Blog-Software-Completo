import React, { useState } from 'react'
import "../Style/NewPostStyle.css"

function NewPost() {
    const [state, setState] = useState('')
    const handleSubmit = () => {

    }
    const onChange = () => {

    }
    return (
        <div className='conteiner'>
            <h1 className='h1'>Formulário de postagem</h1>
            <form onSubmit={handleSubmit}>
                <section className='section'>
                    <div className='div'>
                        <label htmlFor="name">Name</label>
                        <input
                            className='input'
                            placeholder='digite o seu nome'
                            type="name"
                            name="name"
                            value={state.name}
                            onChange={onChange}
                        ></input>
                    </div>
                </section>
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