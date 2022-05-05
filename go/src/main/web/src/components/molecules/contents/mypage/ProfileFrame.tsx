import React from 'react';
import styled from 'styled-components';

import imgProfile from '../../../../static/image/dark/page/mypage/img/img_profile.png';
import { btnProfileEdit } from '../../../atoms/button';

export const ProfileFrame: React.FC = ({ children }) => {
    return <StyledProfileFrame>{children}</StyledProfileFrame>;
};
const StyledProfileFrame = styled.div`
    width: 80%;
    height: 196px;
    border: 2px solid rgba(196, 196, 196, 0.7);
    border-radius: 15px;
    padding: 0 0 0 199px;
    position: relative;
    margin-bottom: 57px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &::before {
        content: '';
        display: block;
        width: 128px;
        height: 128px;
        background: url(${imgProfile}) no-repeat;
        position: absolute;
        top: 38px;
        left: 47px;
    }
    & > .user_name {
        font-family: PretendardMedium;
        font-size: 22px;
        color: #ffffff;
        margin-bottom: 7px;
    }
    & > .user_email {
        font-family: PretendardLight;
        font-size: 15px;
        text-decoration: underline;
        color: #c5c5c5;
        margin-bottom: 30px;
    }
    & > .btn_profile_edit {
        ${btnProfileEdit}
    }
`;
