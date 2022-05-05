import React from 'react';
import styled from 'styled-components';

export const SearchInput: React.FC = () => {
    return <StyledSearchInput type="text" placeholder="검색" />;
};
const StyledSearchInput = styled.input`
    width: 500px;
    height: 21px;
    border: none;
    background-color: transparent;
    font-family: PretendardMedium;
    font-size: 22px;
    color: #000;

    &:focus-visible {
        outline: none;
    }
`;
