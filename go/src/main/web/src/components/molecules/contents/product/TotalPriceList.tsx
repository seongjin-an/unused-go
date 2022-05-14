import React from 'react';
import styled from 'styled-components';

export const TotalPriceList: React.FC = () => {
  return (
    <StyledTotalPriceList>
      <li>240,000</li>
      <li>120,000</li>
      <li>100,000</li>
      <li>80,000</li>
      <li>70,000</li>
      <li>50,000</li>
      <li>0</li>
    </StyledTotalPriceList>
  );
};
const StyledTotalPriceList = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 65px;
  height: auto;
  font-family: PretendardRegular;
  font-size: 15px;
  color: #cfcfcf;
  position: absolute;
  top: 91px;
  right: -7px;
  list-style: none;
  & > li {
    height: 25px;
  }
`;
