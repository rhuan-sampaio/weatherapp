import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Main } from '../../styles/GlobalStyles';

import { useDispatch } from 'react-redux';
import { addList } from '../../redux/action';

import { FaArrowCircleLeft } from 'react-icons/fa';

import { Container } from './styled';
import useGeolocation from '../../utils/useGeolocation';
import { getDate } from '../../utils/getDate';
import recommend from '../../utils/recommend';
import { get } from 'lodash';
import axios from 'axios';
import { Link } from 'react-router-dom';
const playlist = {
  lofi: '428558287',
  classica: '55157293',
  pop: '500174891',
  rock: '5167763',
};

export default function Content() {
  const [music, setMusic] = useState([]);

  const dispatch = useDispatch();
  const [temp, setTemp] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');

  const [gender, setGender] = useState('');

  const [weatherData, setWeatherData] = useState({});
  const [coords, setCoords] = useState([]);
  const location = useGeolocation();

  useEffect(() => {
    setCoords(location.coordinates);
  }, [location.loaded]);

  useEffect(() => {
    async function getData() {
      try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=pt_br`);//eslint-disable-line
        setWeatherData(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    if (!location.loaded) return;
    getData();
  }, [coords]);

  useEffect(() => {
    setTemp(get(weatherData, 'main.temp', ''));
    setCity(get(weatherData, 'name', ''));
    getDate(setDate);
    setGender(recommend(temp));
    console.log(temp);
  });

  useEffect(() => {
    if (!temp) return;
    let key = '';
    if (temp > 32) {
      key = playlist.rock;
    }
    if (temp <= 32 && temp > 24) {
      key = playlist.pop;
    }
    if (temp <= 24 && temp > 16) {
      key = playlist.classica;
    }
    if (temp <= 16) {
      key = playlist.lofi;
    }
    const axios = require('axios').default;

    const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
      params: { key: key, locale: 'pt-BR' },
      headers: {
        'x-rapidapi-host': 'shazam.p.rapidapi.com',
    "x-rapidapi-key": '4c10ea398emsh3b5541bf10c81fcp1264d8jsn26065526f89b' //eslint-disable-line
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setMusic(() => [...response.data.tracks]);
        const list = response.data.tracks;
        dispatch(addList({ list, city, temp, date, gender }));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [gender]);
  return (
    <Main>
      <Container>
        <h1> Lista de Músicas </h1>
        {music.map(({ title, subtitle, share }, index) => {
          if (index >= 14) return null;
          return (
            <p key={index}>
              <a href={share.href}>
                {title} - {subtitle}{' '}
              </a>
            </p>
          );
        })}

        <Link className="link" to="/">
          <FaArrowCircleLeft />{' '}
        </Link>
      </Container>
    </Main>
  );
}

Content.propTypes = {
  city: PropTypes.shape({}),
  temp: PropTypes.number,
  weatherDesc: PropTypes.string,
  date: PropTypes.string,
  gender: PropTypes.string,
};
