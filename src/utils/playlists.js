import { useEffect, useState } from 'react';
const playlist = {
  lofi: '428558287',
  classica: '55157293',
  pop: '500174891',
  rock: '5167763',
};

export function RecommendMusic(num) {
  const [musicList, setMusicList] = useState([]);
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
  const axios = require('axios').default;
  console.log(key, num, 'playlist');
  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
    params: { key: key, locale: 'pt-BR' },
    headers: {
      'x-rapidapi-host': 'shazam.p.rapidapi.com',
    "x-rapidapi-key": "c6788426a3mshe4364197be85185p19b4aejsnc1f3eee9cae4" //eslint-disable-line
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setMusicList(() => [...response.data.tracks]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return musicList;
}
