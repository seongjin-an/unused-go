import React from 'react';
import styled from 'styled-components';

export const MainHello: React.FC = () => {
    return (
        <StyledMainHello>
            고객님의
            <br />
            물품이름을 입력하고
            <br />
            시세를 알아보세요.
        </StyledMainHello>
    );
};

const StyledMainHello = styled.div`
    font-family: PretendardBold;
    font-size: 70px;
    color: #ffffff;
    line-height: 1.4;
`;
