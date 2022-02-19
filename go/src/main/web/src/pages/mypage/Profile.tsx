import React from "react";
import {useParams} from "react-router-dom";
import {Params} from "../../types/types";
import {Header} from "../../components/organisms/header/Header";
import {MyPageTemplate} from "../../components/templates/mypage";
import {Footer} from "../../components/organisms/footer/Footer";

export const Profile: React.FC = () => {
    const {id} = useParams<Params>()
    return (
        <>
            <Header/>
            <MyPageTemplate/>
            <Footer/>
        </>
    )
}