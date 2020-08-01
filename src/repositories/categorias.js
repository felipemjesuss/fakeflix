import config from '../config';

const url = `${config.SERVER_URL}/categorias`;

function getTodasCategoriasComVideos() {
  return config.requestGet(`${url}?_embed=videos`);
}

function getCategorias() {
  return config.requestGet(url);
}

export default {
  getTodasCategoriasComVideos,
  getCategorias,
};
