import React from 'react';
import styled from 'styled-components';

interface IProps {
    value: string;
    first?: boolean;
    mode?: 'purchase' | 'sales';
}

export const HistoryValue: React.FC<IProps> = ({ value, first, mode }) => {
    return (
        <StyledHistoryValue first={first} mode={mode}>
            {value}
        </StyledHistoryValue>
    );
};

const StyledHistoryValue = styled.div<{
    first?: boolean;
    mode?: 'purchase' | 'sales';
}>`
    font-family: PretendardRegular;
    font-size: 30px;
    color: ${({ first, mode }) =>
        first ? (mode === 'purchase' ? '#FF0000' : mode === 'sales' ? '#00CAD7' : '#EB72FF') : '#FFFFFF'};
`;
