import styled from 'styled-components';

export const ListHistContainer = styled.div`
  font-size: 16px;
  color: #2e2d75;
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: center;
  justify-content: space-between;
  height: 80vh;
  .music {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      padding: 5px;
      text-align: center;
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
export const Content = styled.section`
  min-height: 80vh;
  width: 80%;
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.3));
  border-radius: 2rem;
  backdrop-filter: blur(1rem);
  display: flex;
  flex-flow: column;
  align-items: center;

  .content {
    padding: 20px;
    text-align: center;
    font-weight: 600;
    &:hover {
      box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.2);
    }
  }
  .list-item {
    cursor: pointer;
    &:hover {
      filter: opacity(0.5);
    }
  }
  .link {
    text-align: center;
    width: 80%;
    padding: 10px;
    background: #193a6e;
    outline: none;
    border: 0.5px solid #ddd;
    font-weight: bold;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
    margin: 5px;
    z-index: 999;
    &:hover {
      filter: opacity(0.8);
    }
  }
  @media (min-width: 700px) {
    width: 60%;
  }
  @media (min-width: 1000px) {
    width: 40%;
  }
`;
