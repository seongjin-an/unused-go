import React from 'react';
import styled from 'styled-components';

export const RecentItem: React.FC = () => {
  return (
    <StyledRecentItem>
      <div className="img" />
      <div className="name">아령</div>
    </StyledRecentItem>
  );
};

const StyledRecentItem = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 111px;
  height: 111px;
  border-radius: 16px;
  padding-top: 17.5px;
  background-color: #ffffff;
  cursor: pointer;
  & .img {
    width: 75px;
    height: 65px;
    border-radius: 15px;
    background-color: #eeeeee;
  }
  & .name {
    font-family: PretendardMedium;
    font-size: 17px;
    color: #757575;
    margin-top: 12px;
  }
`;
