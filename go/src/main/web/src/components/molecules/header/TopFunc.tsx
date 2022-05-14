import React, { Suspense } from 'react';
import styled from 'styled-components';
import { FuncButton, UserName } from '../../atoms/header';

interface IProps {
  handleOpenSearch: () => void;
}
export const TopFunc: React.FC<IProps> = ({ handleOpenSearch }) => {
  return (
    <div>
      <StyledTopFunc>
        <Suspense fallback={<div>로딩중..</div>}>
          <UserName />
        </Suspense>
        <FuncButton buttonType="search" callback={handleOpenSearch} />
        <FuncButton buttonType="basket" />
      </StyledTopFunc>
    </div>
  );
};

const StyledTopFunc = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
