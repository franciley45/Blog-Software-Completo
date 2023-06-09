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
            <h1>Formulário de postagem</h1>
            <form onSubmit={handleSubmit}>
                <section>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            placeholder='digite o seu nome'
                            type="name"
                            name="name"
                            value={state.name}
                            onChange={onChange}
                        ></input>
                    </div>
                </section>
                <section>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            placeholder='digite o titulo do seu poste'
                            type="title"
                            name="title"
                            value={state.title}
                            onChange={onChange}
                        ></input>
                    </div>
                </section>
                <section>
                    <div>
                        <label htmlFor="post">Post</label>
                        <textarea
                            rows="15"
                            type="post"
                            name="post"
                            value={state.post}
                            onChange={onChange}
                        ></textarea>
                    </div>
                </section>
                <section>
                    <button className='enviar' type='submit'>Enviar</button>
                </section>
            </form>
        </div>
    )
}

export default NewPost;