import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
`;
export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #09176c;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23463575' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%232b119c' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%233b316d' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23311698' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23312d65' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23351b94' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%2326295d' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23391f90' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%231c2455' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%233d228c' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%2311204d' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23402688' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  button {
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
  }
`;
export const Container = styled.section`
  min-height: 80vh;
  width: 80%;
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.3));
  border-radius: 2rem;
  backdrop-filter: blur(0.3rem);
  @media (min-width: 700px) {
    width: 60%;
  }
  @media (min-width: 1000px) {
    width: 40%;
  }
`;
