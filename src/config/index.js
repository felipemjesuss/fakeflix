const SERVER_URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:3001'
  : 'https://felipemjesuss-fakeflix.herokuapp.com';

export default {
  SERVER_URL,
};
