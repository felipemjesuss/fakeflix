import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

export default () => {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoriasTitulos = categorias.map(({ titulo }) => titulo);
  const { valores, handleChange } = useForm({
    titulo: '',
    url: '',
    categoriaId: '',
  });

  useEffect(() => {
    categoriasRepository
      .getCategorias()
      .then((response) => {
        setCategorias(response);
      })
      .catch((error) => {
        // eslint-disable-next-line no-alert
        alert(error.message);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const categoriaEscolhida = categorias
      .find((categoria) => categoria.titulo === valores.categoriaId);
    valores.categoriaId = categoriaEscolhida.id;

    videosRepository.criar(valores)
      .then(() => {
        // eslint-disable-next-line no-alert
        alert('Cadastro realizado com sucesso.');
      })
      .catch((error) => {
        // eslint-disable-next-line no-alert
        alert(error.message);
      });

    history.push('/');
  }

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Título"
          name="titulo"
          value={valores.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={valores.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoriaId"
          value={valores.categoriaId}
          onChange={handleChange}
          suggestions={categoriasTitulos}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastar Categoria
      </Link>
    </PageDefault>
  );
};
