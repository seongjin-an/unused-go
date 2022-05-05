import React from 'react';
import styled from 'styled-components';
import { HistoryTitle, HistoryValue } from '../../../atoms/contents/mypage';

interface IProps {
    first?: boolean;
    mode?: 'purchase' | 'sales';
    text: string;
    value: string;
}

export const HistoryBox: React.FC<IProps> = ({ first, mode, text, value }) => {
    return (
        <StyledHistoryBox>
            <HistoryTitle text={text} />
            <HistoryValue value={value} first={first} mode={mode} />
        </StyledHistoryBox>
    );
};

const StyledHistoryBox = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 25%;
    height: auto;
`;
