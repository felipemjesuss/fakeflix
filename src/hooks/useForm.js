import { useState } from 'react';

function useForm(valoresIniciais) {
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(campo, valor) {
    setValores({
      ...valores,
      [campo]: valor,
    });
  }

  function handleChange(e) {
    const { value } = e.target;
    setValor(e.target.getAttribute('name'), value);
  }

  function clearForm() {
    setValor(valoresIniciais);
  }

  return {
    valores,
    handleChange,
    clearForm,
  };
}

export default useForm;
