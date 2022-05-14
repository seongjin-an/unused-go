import React from 'react';
import styled from 'styled-components';

interface IProps {
  placeholder: string;
  styled?: React.CSSProperties;
}

export const ProductInfoInput: React.FC<IProps> = ({ placeholder, styled }) => {
  return <StyledProductInfoInput type="text" placeholder={placeholder} styled={styled} />;
};
const StyledProductInfoInput = styled.input<{ styled?: React.CSSProperties }>`
  width: 97%;
  height: 37px;
  border-radius: 5px;
  border: 2px solid rgba(196, 196, 196, 0.7);
  background-color: transparent;
  padding-left: 16px;
  font-family: PretendardRegular;
  font-size: 16px;
  color: #e7e7e7;
  margin-bottom: 10px;
  ${({ styled }) => ({ ...styled })}
`;
