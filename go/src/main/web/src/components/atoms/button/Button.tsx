import React, {useState} from "react";
import styled from "styled-components";
import {TActiveButton} from "../../molecules/contents/product/ProductInfo";

interface IProps{
    text: string;
    type: TActiveButton;
    active: boolean;
    callback: (type: TActiveButton) => void;
}

export const Button: React.FC<IProps> = ({text, type, active, callback}) => {

    return(
        <StyledButton active={active} onClick={() => callback(type)}>{text}</StyledButton>
    )
}
const StyledButton = styled.button<{active: boolean}>`
  width: 32.8%;
  height: 100%;
  border: 2px solid ${({active}) => active ? '#EE8AFF' : 'rgba(196, 196, 196, 0.7)'};
  border-radius: 5px;
  font-family: PretendardR;
  font-size: 18px;
  color: #fff;
  position: relative;
  -webkit-transition: all .3s;
  background: transparent;
  cursor: pointer;
  transition: all .3s;
  &:hover{
    background-color: rgba(255, 255, 255, 0.1)
  }
  &:active{
    border-color: #EE8AFF;
    &:hover{
      background-color: transparent;
    }
  }
`