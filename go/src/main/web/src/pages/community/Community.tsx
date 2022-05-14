import React from 'react';
import { Header } from '../../components/organisms/header/Header';
import { Footer } from '../../components/organisms/footer/Footer';
import { CommunityTemplate } from '../../components/templates/community';

export const Community: React.FC = () => {
  return (
    <>
      <Header />
      <CommunityTemplate />
      <Footer />
    </>
  );
};
