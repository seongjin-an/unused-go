import React, { ChangeEvent } from "react";
import styled from 'styled-components';

interface IProps {
  name?: string
  placeholder: string;
  inputValue?: string;
  callback?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const AccountInput: React.FC<IProps> = ({ name, placeholder, inputValue, callback }) => {
  return <StyledAccountInput name={name} type="text" placeholder={placeholder} value={inputValue && inputValue} onChange={callback && callback}/>;
};
const StyledAccountInput = styled.input`
  width: 100%;
  height: 53px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.22);
  font-family: PretendardMedium;
  font-size: 20px;
  color: #e1e1e1;
  //padding-top: 22px;
`;
