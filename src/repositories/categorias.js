import config from '../config';

const urlCategorias = `${config.SERVER_URL}/categorias`;

function getTodasCategoriasComVideos() {
  return fetch(`${urlCategorias}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const responseJson = await response.json();
        return responseJson;
      }

      throw new Error('Não foi possível conectar ao servidor.');
    });
}

export default {
  getTodasCategoriasComVideos,
};
