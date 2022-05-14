import React from 'react';
import styled from 'styled-components';

import searchButton from '../../../../static/image/dark/common/topBar/btn/btn_search.png';

export const SearchButton: React.FC = () => {
  return <StyledSearchButton />;
};
const StyledSearchButton = styled.button`
  width: 22px;
  height: 22px;
  background: url(${searchButton}) no-repeat;
  position: absolute;
  top: 14px;
  left: 27px;
  -webkit-transition: -webkit-transform 0.3s ease-in-out;
  transition: -webkit-transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
  cursor: pointer;
  border: none;
`;
