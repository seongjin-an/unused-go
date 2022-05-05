import React from 'react';
import styled from 'styled-components';

export const UsedProductHead: React.FC = () => {
    return (
        <StyledUsedProductHead>
            <li>상품명</li>
            <li>판매가격</li>
            <li>사이즈</li>
            <li>색상</li>
            <li>사용감</li>
        </StyledUsedProductHead>
    );
};

const StyledUsedProductHead = styled.ul`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid rgba(196, 196, 196, 0.7);
    padding: 0 50px;
    width: 90%;
    height: 38px;
    font-family: PretendardMedium;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
    list-style: none;

    & > li {
        width: 20%;
        text-align: center;
    }
`;
