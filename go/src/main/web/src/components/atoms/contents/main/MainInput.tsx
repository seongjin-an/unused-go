import React from 'react';
import styled from 'styled-components';

import iconArrowRight from '../../../../static/image/dark/page/main/icon/icon_arrow_right.png';

export const MainInput: React.FC = () => {
  return (
    <StyledMainInput>
      <input type="text" className="search_input" placeholder="예) 아령" />
      <button className="btn_search" />
    </StyledMainInput>
  );
};
const StyledMainInput = styled.div`
  width: 497px;
  height: 90px;
  position: absolute;
  top: 283px;
  right: 187px;

  & > input {
    width: 340px;
    height: 90px;
    border: none;
    border-bottom: 10px solid #4247e7;
    background-color: transparent;
    padding-left: 10px;
    padding-right: 150px;
    font-family: PretendardBlack;
    font-size: 70px;
    color: #ffffff;

    &:focus-visible {
      outline: none;
    }
  }

  & > input::placeholder {
    color: #4247e7;
  }

  & > .btn_search {
    width: 137px;
    height: 80px;
    border: none;
    border-radius: 10px;
    background-color: #ffe36d;
    background-image: url(${iconArrowRight});
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 11px;
    right: 0;
    -webkit-transition: -webkit-transform 0.5s ease-in-out;
    transition: -webkit-transform 0.5s ease-in-out;
    transition: transform 0.5s ease-in-out;
    transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out;

    &:hover {
      transform: translate(10px, 0);
      -ms-transform: translate(10px, 0);
      -webkit-transform: translate(10px, 0);
    }
  }
`;
