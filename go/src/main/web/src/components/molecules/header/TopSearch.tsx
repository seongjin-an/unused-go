import React, { useState } from 'react';
import styled from 'styled-components';

import imgLogo from '../../../static/image/dark/common/footer/img/img_logo.png';
import { CloseSearchButton, RecentItem, SearchButton, SearchInput } from '../../atoms/header/search';

interface IProps {
  isSearchShow: boolean;
  handleCloseSearch: () => void;
}
export const TopSearch: React.FC<IProps> = ({ isSearchShow, handleCloseSearch }) => {
  return (
    <StyledTopSearch isSearchShow={isSearchShow}>
      <CloseSearchButton handleCloseSearch={handleCloseSearch} />
      <StyledSearchInput>
        <SearchInput />
        <SearchButton />
      </StyledSearchInput>
      <StyledSearchRecent>
        <RecentItem />
        <RecentItem />
        <RecentItem />
        <RecentItem />
        <RecentItem />
      </StyledSearchRecent>
    </StyledTopSearch>
  );
};
const StyledSearchRecent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 646px;
  height: 126px;
`;
const StyledSearchInput = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 600px;
  height: 50.5px;
  border-radius: 50.5px;
  padding-left: 69px;
  background-color: #ffffff;
  position: relative;
  margin-bottom: 21px;
`;
const StyledTopSearch = styled.div<{ isSearchShow: boolean }>`
  width: 100%;
  height: 269px;
  background-color: #ffe36d;
  //padding: 0 637px 0 637px;
  position: absolute;
  top: ${({ isSearchShow }) => (isSearchShow ? '0' : '-269px')};
  right: 0;
  -webkit-transition: top 0.3s ease-in-out;
  transition: top 0.3s ease-in-out;
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  &::before {
    content: '';
    display: block;
    width: 127px;
    height: 43px;
    background: url(${imgLogo}) no-repeat;
    position: absolute;
    top: 20px;
    left: 39px;
  }
`;
