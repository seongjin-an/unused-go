import React from 'react';
import styled from 'styled-components';

export const ChartPeriodList: React.FC = () => {
  return (
    <StyledChartPeriodList>
      <li>1개월</li>
      <li>3개월</li>
      <li>6개월</li>
      <li>1년</li>
      <li>전체</li>
    </StyledChartPeriodList>
  );
};
const StyledChartPeriodList = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 2px solid rgba(196, 196, 196, 0.7);
  padding: 0 50px;
  border-radius: 5px;
  width: 90%;
  height: 38px;
  font-family: PretendardRegular;
  font-size: 16px;
  color: #e7e7e7;
  list-style: none;
`;
