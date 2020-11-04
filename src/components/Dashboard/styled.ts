import styled from 'styled-components';
import { px2vw } from '../utils';

export const TableBar = styled.div`
  margin: 10px 0;
  width: 100%;
  align-items: center;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
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
    width: ${px2vw(500, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
    padding: ${px2vw(10)};
    margin: ${px2vw(5)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(1024)};
    min-height: ${px2vw(300)};
    height: 100%;
    padding: ${px2vw(30)};
    margin: ${px2vw(5)};
  }
`;

export const AddButton = styled.button`
  height: 30px;
  border: none;
  padding: 5px;
  border-radius: 5px;
  margin: 5px 0;
  background: #24a0ed;
  color: white;
  width: 100%;
  font-size: 2rem;

  @media (min-width: 1024px) {
    margin-left: auto;
    width: 150px;
    font-size: 0.8rem;
  }
`;


export const TableRow = styled.div`
  margin-top: 10px;
  display: flex;
  border-bottom: 1px solid #E8E8E8;
  align-items: center;
`;

export const TableDataContainer = styled.div`
  margin: 5px;
  font-size: 3rem;
  font-family: Segoe UI;
  max-width: 100px;
  overflow: hidden;
  white-space: nowrap;
  @media (min-width: 1024px) {
    font-size: 1rem;
    max-width: ${px2vw(500, 768)};
  }
`;

export const ActionContainer = styled.div`
  margin-left: auto;
`;

export const Message = styled.div`
  text-align: center;
  font-size: 2em;
  font-family: Segoe UI;
  padding: 20px;
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
