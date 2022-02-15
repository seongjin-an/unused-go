import {css} from "styled-components";

export const btnProfileEdit = css`
  width: 113px;
  height: 34px;
  font-family: PretendardMedium;
  font-size: 15px;
  color: #000000;
  background-color: #FFE36D;
  //margin: 0 auto;
  border-radius: 10px;
  -webkit-transition: -webkit-transform .3s ease-in-out;
  transition: -webkit-transform .3s ease-in-out;
  transition: transform .3s ease-in-out;
  transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
  border: none;
  cursor: pointer;
  &:hover{
    transform: scale(1.1, 1.1);
    -ms-transform: scale(1.1, 1.1);
    -webkit-transform: scale(1.1, 1.1);
  }
`