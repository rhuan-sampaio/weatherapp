import { useDispatch } from 'react-redux';
import { excludeItem } from '../../redux/action';
import { get } from 'lodash';
import PropTypes from 'prop-types';

export default function MusicList({ content, index, modalController }) {
  const dispatch = useDispatch();
  const handleDelete = (e, index) => {
    e.preventDefault();
    dispatch(excludeItem(index));
  };
  const handleClick = () => {
    modalController();
  };
  return (
    <div className="content">
      <div className="list-item" onClick={handleClick}>
        {get(content, 'content.date', '')}: {get(content, 'content.temp', '')}º - {get(content, 'content.city', '')} -{' '}
        {get(content, 'content.gender', '')}
      </div>
      <button onClick={(e) => handleDelete(e, index)}> Excluir </button>
    </div>
  );
}
MusicList.defaultProps = {
  content: {},
  index: -1,
};

MusicList.propTypes = {
  content: PropTypes.shape({}),
  index: PropTypes.number,
  modalController: PropTypes.func.isRequired,
};
