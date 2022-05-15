import React, {MouseEvent} from 'react';
import styled, { css } from "styled-components";

interface IProps {
  text: string;
  kind: string;
  onClick?: (event: MouseEvent) => void
}

export const BasicButton: React.FC<IProps> = ({ text , kind= 'basic', onClick}) => {
  return <StyledSaveButton kind={kind} onClick={onClick && onClick}>{text}</StyledSaveButton>;
};

const StyledSaveButton = styled.button<{ kind: string }>`
  ${({kind}) => kind === 'login' ? `${LoginButtonStyle}` : `${BasicButtonStyle}`}
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  &:active {
    &:hover {
      background-color: transparent;
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