import React from 'react';
import styled from 'styled-components';

import searchButton from '../../../../static/image/dark/common/topBar/icon/icon_search.png';
import basketButton from '../../../../static/image/dark/common/topBar/icon/icon_basket.png';

interface IProps {
  buttonType: string;
  callback?: () => void;
}

export const FuncButton: React.FC<IProps> = ({ buttonType, callback }) => {
  return <StyledFuncButton buttonType={buttonType} onClick={callback} />;
};
const StyledFuncButton = styled.button<IProps>`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 0;
  background: transparent;
  background-image: url(${({ buttonType }) => (buttonType === 'search' ? searchButton : basketButton)});
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 10px;
  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
