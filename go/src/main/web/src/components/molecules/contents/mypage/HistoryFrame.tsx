import React from 'react';
import styled from 'styled-components';

export const HistoryFrame: React.FC = ({ children }) => {
  return <StyledHistoryFrame>{children}</StyledHistoryFrame>;
};
const StyledHistoryFrame = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 140px;
  border: 2px solid rgba(196, 196, 196, 0.7);
  border-radius: 15px;
  margin-bottom: 72px;
`;
