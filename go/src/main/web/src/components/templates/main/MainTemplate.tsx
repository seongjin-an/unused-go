import React from "react";
import {Header} from "../../organisms/header/Header";
import {Footer} from "../../organisms/footer/Footer";
import {Main} from "../../organisms/contents/main";

export const MainTemplate: React.FC = () => {
    return(
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}