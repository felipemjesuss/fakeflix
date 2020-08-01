const SERVER_URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:3001'
  : 'https://felipemjesuss-fakeflix.herokuapp.com';

const mensagemErro = 'Não foi possível conectar ao servidor.';

function requestGet(url) {
  return fetch(url)
    .then(async (response) => {
      if (response.ok) {
        const responseJson = await response.json();
        return responseJson;
      }

      throw new Error(mensagemErro);
    });
}

function requestPost(url, dados) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(dados),
  })
    .then(async (response) => {
      if (response.ok) {
        const responseJson = await response.json();
        return responseJson;
      }

      throw new Error(mensagemErro);
    });
}

export default {
  SERVER_URL,
  requestGet,
  requestPost,
};
