import React from 'react';
import { Header } from '../../organisms/header/Header';
import { Footer } from '../../organisms/footer/Footer';
import { ProductMain } from '../../organisms/contents';

export const ProductTempalte: React.FC = () => {
  return (
    <>
      <Header />
      <ProductMain />
      <Footer />
    </>
  );
};
