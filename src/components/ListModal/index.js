import React from 'react';
import { Container, Unfocus } from './styled';
import { FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function ListModal({ onClose = () => {}, musicList }) {
  const handleClickBox = (e) => {
    if (e.target.id === 'unfocused') {
      onClose();
    }
  };
  const handleClick = () => {
    onClose();
  };

  return (
    <Unfocus onClick={handleClickBox} id="unfocused">
      <Container>
        <h1> Lista de Músicas </h1>
        {musicList.list[0].content.list.map(({ title, subtitle, share }, index) => {
          if (index >= 14) return null;
          return (
            <p key={index}>
              <a href={share.href}>
                {title} - {subtitle}{' '}
              </a>
            </p>
          );
        })}
        <button onClick={handleClick}>
          {' '}
          <FaWindowClose size={16} />{' '}
        </button>
      </Container>
    </Unfocus>
  );
}

ListModal.defaultProps = {
  onClose: () => {},
};

ListModal.propTypes = {
  onClose: PropTypes.func,
  musicList: PropTypes.shape([]).isRequired,
};
