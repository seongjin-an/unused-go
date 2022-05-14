import React, { MouseEvent, useState } from 'react';
import styled from 'styled-components';
import { BaseTopMenu, DetailTopMenu } from '../../atoms/header';

export const TopMenus: React.FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleMouseEnter = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    console.log('handleMouseEnter');
    setIsShow(true);
  };
  const handleMouseLeave = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    console.log('handleMouseLeave');
    setIsShow(false);
  };
  return (
    <StyledTopMenus onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <BaseTopMenu />
      <DetailTopMenu isShow={isShow} />
    </StyledTopMenus>
  );
};
const StyledTopMenus = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
