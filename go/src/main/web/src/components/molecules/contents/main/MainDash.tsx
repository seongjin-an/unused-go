import React from 'react';
import styled from 'styled-components';
import { MainInput, MainHello } from '../../../atoms/contents/main';

export const MainDash: React.FC = () => {
    return (
        <StyledMain>
            <MainHello />
            <MainInput />
        </StyledMain>
    );
};
const StyledMain = styled.div`
    width: 100%;
    height: 403px;
    background-color: #21248d;
    padding: 97px 0 0 84px;
    position: absolute;
    top: 71px;
    left: 0;
`;
