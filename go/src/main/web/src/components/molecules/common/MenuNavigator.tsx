import React from 'react';
import styled, { css } from 'styled-components';

interface IProps {
    menus: string[];
    mypage?: boolean;
}

export const MenuNavigator: React.FC<IProps> = ({ menus, mypage }) => {
    return (
        <StyledProductMenuNavigator mypage={mypage}>
            {menus.map((menu, index) => (
                <li key={`${menu}_${index}`}>{menu}</li>
            ))}
        </StyledProductMenuNavigator>
    );
};
const StyledProductMenuNavigator = styled.ul<{ mypage?: boolean }>`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 212px;
    height: auto;
    list-style: none;
    padding: 0;
    margin: 0;
    & > li {
        width: 100%;
        height: 20px;
        font-family: PretendardMedium;
        font-size: 20px;
        color: #ffffff;
        margin-bottom: 17px;
        cursor: pointer;
        -webkit-transition: -webkit-transform 0.3s ease-in-out;
        transition: -webkit-transform 0.3s ease-in-out;
        transition: transform 0.3s ease-in-out;
        transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
    }

    & > li:first-of-type {
        font-family: PretendardBlack;
        font-size: 24px;
        margin-bottom: 32px;
        cursor: default;
    }
    & > li:first-of-type:hover {
        transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -webkit-transform: translate(0, 0);
        color: #ffffff;
    }
    & > li:hover {
        transform: translate(3px, 0);
        -ms-transform: translate(3px, 0);
        -webkit-transform: translate(3px, 0);
        color: #ffe782;
    }
    ${({ mypage }) =>
        mypage &&
        css`
            & > li:nth-child(2) {
                color: #eb72ff;
                font-family: PretendardMedium;
                cursor: default;
            }
            & > li:nth-child(6) {
                color: #eb72ff;
                font-family: PretendardMedium;
                margin-top: 27px;
                cursor: default;
            }
        `}
`;
