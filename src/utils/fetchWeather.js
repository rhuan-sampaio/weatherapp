// export default function getWeather(lat, lon) {
//   //eslint-disable-next-line
//   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=pt_br`;
//   return new Promise((resolve) => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((err) => console.log(err));
//   });
// }
// import { useState, useEffect } from 'react';

import axios from 'axios';

export default async function GetWeather(lat, lon) {
  // const axios = require('axios').default;

  // const options = {
  //   method: 'GET',
  //   url: 'https://api.openweathermap.org/data/2.5/weather?',
  //   params: {
  //     lat: useGeolocation()[0],
  //     lon: useGeolocation()[1],
  //     appid: process.env.REACT_APP_API_KEY, //eslint-disable-line
  //     lang: 'pt_br',
  //     units: 'metric',
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     setWeather(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  // return weather;
  axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5`,
  });

  return await axios.get(
    `/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=pt_br`,
  );
}
