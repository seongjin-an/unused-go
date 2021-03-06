import React, { ChangeEvent } from "react";
import styled from 'styled-components';

interface IProps {
  placeholder: string;
  value: string;
  callback: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextAreaInput: React.FC<IProps> = ({ placeholder, value, callback }) => {
  return <StyledTextAreaInput placeholder={placeholder} value={value} onChange={callback}/>;
};

const StyledTextAreaInput = styled.textarea`
  width: 94%;
  height: 197px;
  border-radius: 5px;
  border: 2px solid rgba(196, 196, 196, 0.7);
  background-color: transparent;
  padding-left: 16px;
  font-family: PretendardRegular;
  font-size: 16px;
  color: #e7e7e7;
  margin-bottom: 10px;
  padding: 20px 20px;
  resize: none;
`;
