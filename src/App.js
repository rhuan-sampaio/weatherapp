import React, { useEffect, useState } from 'react';
import location from './utils/coords';
import fetchWeather from './utils/fetchWeather';
import { get } from 'lodash';
import { Container, Main } from './styles/GlobalStyles';
import styled from 'styled-components';

const Content = styled.div`
  font-size: 16px;
  color: #2e2d75;
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: center;
  justify-content: space-between;
  height: 80vh;
  .minmax {
    display: flex;
    flex-direction: column;
    span {
      padding: 5px;
    }
  }
  .temp-div {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .desc {
    grid-column-start: 1;
    grid-column-end: 3;
    text-align: center;
  }
  .temp {
    color: #2e2d75;
    font-size: 5rem;
    text-shadow: 2px 4px rgba(5, 6, 21, 0.5);
    position: relative;
    left: 4px;
  }
  .city {
    font-weight: 700;
  }
  .weather-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
  }
  p {
    font-weight: 700;
  }
`;
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
export default function App() {
  const [coords, setCoords] = useState([]);
  const [temp, setTemp] = useState('');
  const [city, setCity] = useState({});
  const [weatherDesc, setWeatherDesc] = useState('');
  const [date, setDate] = useState('');
  const [icon, setIcon] = useState('');

  function recommend(deg) {
    let gender = '';
    if (deg > 32) {
      gender = 'Rock';
    }
    if (deg <= 32 && deg > 24) {
      gender = 'Pop';
    }
    if (deg <= 24 && deg > 16) {
      gender = 'Música Clássica';
    }
    if (deg <= 16) {
      gender = 'Lofi';
    }
    return gender;
  }

  useEffect(() => {
    const now = Date.now();
    const dateNow = new Date(now);
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateFormat = String(new Intl.DateTimeFormat('pt-BR', dateOptions).format(dateNow));
    setDate(dateFormat);
  }, []);

  useEffect(() => {
    async function getData() {
      await location(setCoords);
      let response = await fetchWeather(coords[0], coords[1]);
      setCity({ name: get(response, 'name', ''), country: get(response, 'sys.country', '') });
      setTemp(get(response, 'main.temp', ''));
      setWeatherDesc(get(response, 'weather[0].description', ''));
      setIcon(get(response, 'weather[0].icon', ''));
    }
    getData();
  }, [city]);
  return (
    <Main>
      <Container>
        <Content className="content">
          <h1 className="city">
            {city.name},{city.country}
          </h1>

          <div className="temp-div">
            <p className="temp">{Math.floor(temp)}º</p>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Icon" />
            <p className="desc">{weatherDesc.capitalize()}</p>
          </div>

          <div className="minmax">
            <span>
              {' '}
              Um bom dia para ouvir: <strong>{recommend(temp)}</strong>
            </span>
            <button> Ver lista </button>
          </div>
          <p>{date}</p>
        </Content>
      </Container>
    </Main>
  );
}
