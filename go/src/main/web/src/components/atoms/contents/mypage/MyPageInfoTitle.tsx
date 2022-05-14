import React from 'react';
import styled from 'styled-components';

interface IProps {
  text: string;
}

export const MyPageInfoTitle: React.FC<IProps> = ({ text }) => {
  return <StyledMyPageInfoTitle>{text}</StyledMyPageInfoTitle>;
};
const StyledMyPageInfoTitle = styled.div`
  font-family: PretendardMedium;
  font-size: 18px;
  color: #e7e7e7;
  margin-bottom: 10px;
`;
