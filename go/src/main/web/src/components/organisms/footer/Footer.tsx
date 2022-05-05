import React from 'react';
import styled from 'styled-components';

import imgLogo from '../../../static/image/dark/common/footer/img/img_logo.png';
import { FooterLink } from '../../molecules/footer';

export const Footer: React.FC = () => {
    return (
        <>
            <StyledFooter>
                <FooterLink />
            </StyledFooter>
        </>
    );
};

const StyledFooter = styled.section`
    width: auto;
    height: 310px;
    background-color: #f2f6ff;
    padding: 45px 84px;
    position: relative;

    &:before {
        content: '';
        display: block;
        width: 127px;
        height: 43px;
        background: url(${imgLogo}) no-repeat;
        position: absolute;
        top: 84px;
        left: 84px;
    }
`;
