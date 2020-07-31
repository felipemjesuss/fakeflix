import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'

export default () => {
    const valoresIniciais = {nome: '', cor: '', descricao: ''}
    const [categorias, setCategorias] = useState([])
    const [categoria, setCategoria] = useState(valoresIniciais)

    function setValor(campo, valor) {
        setCategoria({
            ...categoria,
            [campo]: valor
        })
    }

    function handleChange(e) {
        const { getAttribute, value } = e.target
        setValor(getAttribute('name'), value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setCategorias([
            ...categorias, 
            categoria
        ])
        setCategoria(valoresIniciais)
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {categoria.nome}</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nome:
                        <input
                            type="text"
                            name="nome"
                            value={categoria.nome}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Cor:
                        <input
                            type="color"
                            name="cor"
                            value={categoria.cor}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            name="descricao"
                            value={categoria.descricao}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, i) => {
                    return (
                        <li key={`${categoria}${i}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>
        </PageDefault>
    )
}