import React from 'react';
import { Header } from '../../components/organisms/header/Header';
import { Footer } from '../../components/organisms/footer/Footer';
import { SignupTemplate } from '../../components/templates/singup';

export const SignupPage: React.FC = () => {
  return (
    <>
      <Header />
      <SignupTemplate />
      <Footer />
    </>
  );
};
