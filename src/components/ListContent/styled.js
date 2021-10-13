import styled from 'styled-components';

export const Container = styled.div`
  font-size: 16px;
  max-width: 80%;
  background: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 25px;
  p {
    padding: 5px;
    text-align: center;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    text-align: center;
    font-size: 20px;
    margin: 20px 0;
  }

  .link {
    text-align: center;
    width: 100%;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    background: #193a6e;
    color: white;
    margin: 15px auto;
    cursor: pointer;
    &:hover {
      filter: brightness(80%);
    }
  }
`;

export const Unfocus = styled.section`
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  min-width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;
