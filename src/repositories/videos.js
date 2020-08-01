import config from '../config';

const url = `${config.SERVER_URL}/videos`;

function criar(video) {
  return config.requestPost(url, video);
}

export default {
  criar,
};
