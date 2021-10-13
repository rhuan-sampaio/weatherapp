import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ListContainer from './ListContainer';
import { Main } from '../../styles/GlobalStyles';
import { Content } from './styled';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import ListModal from '../../components/ListModal';
export default function List() {
  const [listData, setListData] = useState(false);
  const list = useSelector((state) => state.list);
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    setListData(list);
  }, [list]);
  return (
    <Main>
      <Content>
        <div>
          {listData
            ? listData.list.map((item, index) => (
                <ListContainer
                  modalController={() => setModalOpen(true)}
                  key={index}
                  index={index}
                  content={item}
                ></ListContainer>
              ))
            : ''}
        </div>
        <Link className="link" to="/">
          <FaArrowCircleLeft />{' '}
        </Link>
      </Content>
      {modalOpen ? <ListModal onClose={() => setModalOpen(false)} musicList={list} /> : ''}
    </Main>
  );
}
