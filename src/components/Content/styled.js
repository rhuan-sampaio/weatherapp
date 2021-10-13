import styled from 'styled-components';

export const ContentContainer = styled.div`
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
