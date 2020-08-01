import React from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

export default () => {
  const history = useHistory();
  const { valores, handleChange } = useForm({
    titulo: '',
    cor: '',
    descricao: '',
  });

  function handleSubmit(e) {
    e.preventDefault();

    categoriasRepository.criar(valores)
      .then(() => {
        // eslint-disable-next-line no-alert
        alert('Cadastro realizado com sucesso.');
        history.push('/');
      })
      .catch((error) => {
        // eslint-disable-next-line no-alert
        alert(error.message);
      });
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

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

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

    </PageDefault>
  );
};
