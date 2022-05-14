import React from 'react';
import { Header } from '../../components/organisms/header/Header';
import { MyPageTemplate } from '../../components/templates/mypage';
import { Footer } from '../../components/organisms/footer/Footer';

export const PurchaseSalesHistory: React.FC = () => {
  return (
    <>
      <Header />
      <MyPageTemplate />
      <Footer />
    </>
  );
};
