import styled from 'styled-components';
import { px2vw } from '../utils';

export const Content = styled.div`
  padding: 20px;

  @media (min-width: 768px) {
    padding: 10px;
  }

  @media (min-width: 1024px) {
    padding: 10px;
  }
`;

export const Login = styled.div`
  left: 49%;
  top: 50%;
  box-shadow:  0 0 10px #D8D8D8;
  position: absolute;
  border-radius: 15px;
  -webkit-transform: translate3d(-50%, -50%, 0);
  -moz-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  width: ${px2vw(300, 350)};
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: white;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(200)};
  }
`;