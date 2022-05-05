import React from 'react';
import { MyPageInfoBoxWrapper } from './MyPageInfoBoxWrapper';
import { AccountInput, MyPageInfoTitle } from '../../../atoms/contents/mypage';

interface IProps {
    text: string;
    placeholder: string;
}

export const MyPageBankInfo: React.FC<IProps> = ({ text, placeholder }) => {
    return (
        <MyPageInfoBoxWrapper>
            <MyPageInfoTitle text={text} />
            <AccountInput placeholder={placeholder} />
        </MyPageInfoBoxWrapper>
    );
};
