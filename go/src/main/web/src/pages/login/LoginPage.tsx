import React from 'react'
import { Header } from '../../components/organisms/header/Header'
import { Footer } from "../../components/organisms/footer/Footer";
import { LoginTemplate } from "../../components/templates/login";

export const LoginPage: React.FC = () => {
  return(
    <>
      <Header/>
      <LoginTemplate/>
      <Footer/>
    </>
  )
}