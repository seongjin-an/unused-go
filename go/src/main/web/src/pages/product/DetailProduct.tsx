import React from "react";
import {useParams} from "react-router-dom";
import {Params} from "../../types/types";
import {Header} from "../../components/organisms/header/Header";
import {Footer} from "../../components/organisms/footer/Footer";
import {ProductDetailTemplate} from "../../components/templates/product";

export const DetailProduct: React.FC = () => {
    const { id } = useParams<Params>();
    return(
        <>
            <Header/>
            <ProductDetailTemplate/>
            <Footer/>
        </>
    )
}