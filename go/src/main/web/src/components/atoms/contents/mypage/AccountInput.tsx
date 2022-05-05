import React from 'react';
import styled from 'styled-components';

interface IProps {
    placeholder: string;
}

export const AccountInput: React.FC<IProps> = ({ placeholder }) => {
    return <StyledAccountInput type="text" placeholder={placeholder} />;
};
const StyledAccountInput = styled.input`
    width: 100%;
    height: 53px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.22);
    font-family: PretendardMedium;
    font-size: 20px;
    color: #e1e1e1;
    //padding-top: 22px;
`;
