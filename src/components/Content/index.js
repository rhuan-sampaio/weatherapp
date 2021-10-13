import PropTypes from 'prop-types';
import { get } from 'lodash';
import recommend from '../../utils/recommend';
import { ContentContainer } from './styled';

import { Link } from 'react-router-dom';

import { getDate } from '../../utils/getDate';
import { useEffect, useState } from 'react';

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

export default function Content({ weatherData }) {
  const [temp, setTemp] = useState(10);
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [icon, setIcon] = useState('');
  const [description, setDescription] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    setTemp(get(weatherData, 'main.temp', ''));
    setCity(get(weatherData, 'name', ''));
    setCountry(get(weatherData, 'sys.country', ''));

    setDescription(get(weatherData, 'weather[0].description', ''));
    setIcon(get(weatherData, 'weather[0].icon', ''));
    getDate(setDate);
  }, [weatherData]);

  useEffect(() => {
    setGender(recommend(temp));
  }, [temp]);
  const handleClick = () => {};
  return (
    <>
      <ContentContainer>
        <h1 className="city">
          {city},{''} {country}
        </h1>

        <div className="temp-div">
          <p className="temp">{Math.floor(temp)}º</p>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Icon" />
          <p className="desc">{description}</p>
        </div>

        <div className="music">
          <span>
            {' '}
            Um bom dia para ouvir: <strong>{gender}</strong>
          </span>
          <Link onClick={handleClick} to="/listcontent">
            <button> Playlist de hoje </button>
          </Link>
          <Link to="/list">
            <button> Ver histórico de Playlists </button>
          </Link>
        </div>

        <p>{date}</p>
      </ContentContainer>
    </>
  );
}

Content.propTypes = {
  weatherData: PropTypes.shape({}).isRequired,
};
