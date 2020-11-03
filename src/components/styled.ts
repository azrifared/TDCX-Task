import styled, { createGlobalStyle } from 'styled-components';
import { px2vw } from './utils';


export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
`;


export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    margin-top: ${px2vw(10)};
    margin-left: ${px2vw(200)};
    margin-right: ${px2vw(200)};
    margin-bottom: ${px2vw(10)};
  }
`;

export const Box = styled.div`
  display: flex;
  border-radius: 15px;
  box-shadow:  0 0 10px #D8D8D8;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(100)};
  margin: ${px2vw(20)};
  background-color: white;
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
    padding: ${px2vw(10)};
    margin: ${px2vw(5)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
    padding: ${px2vw(30)};
    margin: ${px2vw(5)};
  }
`;

export const BoxTitle = styled.div`
  color: #333;
  font-size: 4rem;
  font-family: Segoe UI;
  color: #585858;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
