import React from 'react';
import styled, { css } from 'styled-components';

interface IProps {
    aType?: boolean;
    bType?: boolean;
}

export const TestButton: React.FC<IProps> = ({ aType, bType }) => {
    return (
        <StyledTestButton aType={aType} bType={bType}>
            {aType ? 'ATYPE BUTTON' : 'BTYPE BUTTON'}
        </StyledTestButton>
    );
};
const StyledTestButton = styled.button<{ aType?: boolean; bType?: boolean }>`
    ${({ aType }) => aType && `${aTypeButton}`}
    ${({ bType }) => bType && `${bTypeButton}`}
`;
const aTypeButton = css`
    width: 200px;
    height: 100px;
    border: 2px solid rgba(196, 196, 196, 0.7);
    border-radius: 5px;
    font-family: PretendardRegular;
    font-size: 18px;
    color: #fff;
    position: relative;
    -webkit-transition: all 0.3s;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s;
`;
const bTypeButton = css`
    width: 100px;
    height: 50px;
    border: 2px solid rgba(196, 196, 196, 0.7);
    border-radius: 5px;
    font-family: PretendardRegular;
    font-size: 18px;
    color: #fff;
    position: relative;
    -webkit-transition: all 0.3s;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s;
`;
