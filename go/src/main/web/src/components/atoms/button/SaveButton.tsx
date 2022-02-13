import React from "react";
import styled from "styled-components";

interface IProps{
    text: string;
}

export const SaveButton: React.FC<IProps> = ({text}) => {
    return(
        <StyledSaveButton>{text}</StyledSaveButton>
    )
}

const StyledSaveButton = styled.button`
  width: 49.2%;
  height: 100%;
  border: 2px solid rgba(196, 196, 196, 0.7);
  border-radius: 5px;
  font-family: PretendardRegular;
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
    &:hover{
      background-color: transparent;
    }
  }
`