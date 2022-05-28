import { css } from 'styled-components';

export const btnCheck = css`
  width: 124px;
  height: 52px;
  font-family: PretendardMedium;
  font-size: 22px;
  color: #000000;
  background-color: #ffe36d;
  //margin: 0 auto;
  border-radius: 10px;
  -webkit-transition: -webkit-transform 0.3s ease-in-out;
  transition: -webkit-transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
  &: hover {
    background-color: #ffe36d;
    transform: scale(1.2, 1.2);
    -ms-transform: scale(1.2, 1.2);
    -webkit-transform: scale(1.2, 1.2);
  }
`;
