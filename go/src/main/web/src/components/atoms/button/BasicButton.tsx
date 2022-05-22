import React, {MouseEvent} from 'react';
import styled, { css } from "styled-components";
import { useFormContext } from "react-hook-form";
import { TButton } from '../../../types/button';
import { btnCheck } from "./btnCheck";



interface IProps {
  text: string;
  kind: TButton;
  onClick?: (event: MouseEvent) => void
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export const BasicButton: React.FC<IProps> = ({ type, text , kind= 'basic', onClick}) => {
  return <StyledSaveButton type={type} kind={kind} onClick={onClick && onClick}>{text}</StyledSaveButton>;
};

const StyledSaveButton = styled.button<{ kind: string }>`
  ${({kind}) => kind === 'login' ? `${LoginButtonStyle}` : 
                kind === 'check' ? `${btnCheck}` : `${BasicButtonStyle}`}
  &:hover {
    //background-color: rgba(255, 255, 255, 0.1);
  }
  &:active {
    &:hover {
      //background-color: transparent;
    }
  }
`;

const LoginButtonStyle = css`
  width: 20%;
  height: auto;
  border: 2px solid rgba(196, 196, 196, 0.7);
  border-radius: 10px;
  font-family: PretendardRegular;
  font-size: 18px;
`

const BasicButtonStyle = css`
  width: 49.2%;
  height: 100%;
  border: 2px solid rgba(196, 196, 196, 0.7);
  border-radius: 5px;
  font-family: PretendardRegular;
  font-size: 18px;
  color: #fff;
  position: relative;
  -webkit-transition: all 0.3s;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
`