import React from 'react';
import { Header } from '../../components/organisms/header/Header';
import { Footer } from '../../components/organisms/footer/Footer';
import { MyPageTemplate } from '../../components/templates/mypage';

export const Account: React.FC = () => {
    return (
        <>
            <Header />
            <MyPageTemplate />
            <Footer />
        </>
    );
};
