import React from 'react';
import styled from 'styled-components';

interface IProps {
  text: string;
  password?: boolean;
  readonly?: boolean;
}

export const MyPageInfoText: React.FC<IProps> = ({ text, password, readonly }) => {
  return <StyledMyPageInfoText type={password ? 'password' : 'text'} defaultValue={text} readOnly={readonly} />;
};
const StyledMyPageInfoText = styled.input`
  width: 100%;
  height: 31px;

  font-family: PretendardMedium;
  font-size: 20px;
  color: #e1e1e1;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.22);

  cursor: default;
  &:focus-visible {
    outline: none;
  }
  //padding-top: 22px;
`;
