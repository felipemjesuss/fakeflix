import config from '../config';

const url = `${config.SERVER_URL}/categorias`;

function getTodasCategoriasComVideos() {
  return config.requestGet(`${url}?_embed=videos`);
}

function getCategorias() {
  return config.requestGet(url);
}

function criar(categoria) {
  return config.requestPost(url, categoria);
}

export default {
  getTodasCategoriasComVideos,
  getCategorias,
  criar,
};
