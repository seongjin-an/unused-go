import React from "react";
import withMain from "../../../../hoc/withMain";
import {ProductList, ProductMenuNavigator, ProductPicture} from "../../../molecules/contents/product";
import {SxProps} from "../../../../types/sx";
import {Theme} from "../../../../types/theme";
import {useLocation, useParams} from "react-router-dom";
import {ProductInfo} from "../../../molecules/contents/product/ProductInfo";

interface IProps{

}

export const ProductMain: React.FC<IProps> = () => {
    const {pathname} = useLocation()
    console.log('pathname:', pathname)

    const WrappedProductMain = () => <>
        {
            pathname.indexOf('list') !== -1 ? (
                <>
                    <ProductMenuNavigator/>
                    <ProductList/>
                </>
            ) : pathname.indexOf('create') !== -1 ? (
                <>
                    <ProductPicture isShow={true}/>
                    <ProductInfo/>
                </>
            ) : null
        }

    </>
    const ProductMain = withMain(WrappedProductMain, {paddingTop: theme => theme.padding.secondary})
    return <ProductMain/>
}
