import React, { MouseEvent } from 'react';
import styled, { css } from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { TButton } from '../../../types/button';
import { btnCheck } from './btnCheck';
import { StyledCancel, StyledConfirm } from "./btnConfirm";
import { SxProps } from "../../../types/sx";
import { Theme } from "../../../types/theme";
import { handleSxProps } from "../../../data/theme";

interface IProps {
  text: string;
  kind: TButton;
  onClick?: (event: MouseEvent) => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
  sx?: SxProps<Theme>
}

export const BasicButton: React.FC<IProps> = ({ type, text, kind = 'basic', onClick, sx}) => {
  return (
    <StyledSaveButton type={type} kind={kind} onClick={onClick && onClick} sx={sx}>
      {text}
    </StyledSaveButton>
  );
};
const emptyButton = css`
  cursor: pointer;
  //border: 1px solid white;
  border: none;
  border-radius: 5px;
  width: 80px;
  height: 3vh;
  font-family: PretendardBold;
  font-size: 18px;
  color: #fff;
  background-color: #0d6efd;
  &:hover{
    background-color: #025ce2;
  }
`
const StyledSaveButton = styled.button<{ kind: string, sx?: SxProps<Theme> }>`
  ${({ kind }) => (kind === 'login' ? `${LoginButtonStyle}` : 
                    kind === 'check' ? `${btnCheck}` : 
                            kind === 'confirm' ? `${StyledConfirm}` : 
                                    kind === 'cancel' ? `${StyledCancel}` : 
                                            kind === 'basic' ? `${emptyButton}` : `${BasicButtonStyle}`)}
  &:hover {
    //background-color: rgba(255, 255, 255, 0.1);
  }
  &:active {
    &:hover {
      //background-color: transparent;
    }
  }
  ${({sx}) => sx && ({...handleSxProps(sx)})}
`;

const LoginButtonStyle = css`
  width: 20%;
  height: auto;
  border: 2px solid rgba(196, 196, 196, 0.7);
  border-radius: 10px;
  font-family: PretendardRegular;
  font-size: 18px;
`;

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
`;
