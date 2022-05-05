import React from 'react';
import styled from 'styled-components';

export const MainProductFrame: React.FC = () => {
    return (
        <StyledMainProductFrame>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </StyledMainProductFrame>
    );
};
const StyledMainProductFrame = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 355px;
    margin-bottom: 55.5px;

    & > div {
        width: 292px;
        height: 355px;
        border-radius: 25px;
        background-color: rgba(196, 196, 196, 0.3);
        margin-right: 36.5px;
    }
`;
