import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

export default () => {
  const valoresIniciais = { titulo: '', cor: '', descricao: '' };
  const [categorias, setCategorias] = useState([]);

  const { valores, handleChange, clearForm } = useForm(valoresIniciais);

  function handleSubmit(e) {
    e.preventDefault();

    setCategorias([
      ...categorias,
      valores,
    ]);

    clearForm();
  }

  useEffect(() => {
    const serverUrl = window.location.hostname.includes('localhost')
      ? 'http://localhost:3001/categorias'
      : 'https://felipemjesuss-fakeflix.herokuapp.com/categorias';

    fetch(serverUrl)
      .then(async (response) => {
        const responseJson = await response.json();
        setCategorias([
          ...responseJson,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {valores.titulo}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
        />
        <FormField
          label="Título"
          type="text"
          name="titulo"
          value={valores.titulo}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>
    </PageDefault>
  );
};
