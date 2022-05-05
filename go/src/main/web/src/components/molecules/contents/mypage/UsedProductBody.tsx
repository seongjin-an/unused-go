import React from 'react';
import styled from 'styled-components';

interface IProps {
    items: string[];
}

export const UsedProductBody: React.FC<IProps> = ({ items }) => {
    return (
        <StyledUsedProductBody>
            {items.map((item, index) => (
                <li key={`${item}_${index}`}>{item}</li>
            ))}
        </StyledUsedProductBody>
    );
};

const StyledUsedProductBody = styled.ul`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid rgba(196, 196, 196, 0.7);
    border-radius: 5px;
    padding: 0 50px;
    width: 90%;
    height: 38px;
    font-family: 'PretendardM';
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
    margin: 0 0 12px;
    cursor: pointer;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    list-style: none;
    & > li {
        width: 20%;
        text-align: center;
    }
    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;
