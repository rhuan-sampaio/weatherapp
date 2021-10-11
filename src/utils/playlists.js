const playlist = {
  lofi: '428558287',
  classica: '55157283',
  pop: '500174891',
  rock: '5167763',
};

function recommendMusic(num) {
  let key = '';
  if (num > 32) {
    key = playlist.rock;
  }
  if (num <= 32 && num > 24) {
    key = playlist.pop;
  }
  if (num <= 24 && num > 16) {
    key = playlist.classica;
  }
  if (num <= 16) {
    key = playlist.lofi;
  }
  return key;
}

var axios = require('axios').default;

var options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
  params: { key: `${recommendMusic(31)}`, locale: 'en-US' },
  headers: {
    'x-rapidapi-host': 'shazam.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_API_KEY_SHAZAM, //eslint-disable-line
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
