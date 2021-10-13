import React, { useEffect, useState } from 'react';
import { Container, Main } from './styles/GlobalStyles';
import useGeolocation from './utils/useGeolocation';
import Content from './components/Content';

import axios from 'axios';

export default function App() {
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

  return (
    <Main>
      <Container>
        <Content weatherData={weatherData} />
      </Container>
    </Main>
  );
}
