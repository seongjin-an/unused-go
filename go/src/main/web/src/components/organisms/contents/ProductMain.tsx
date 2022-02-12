import React from "react";
import withMain from "../../../hoc/withMain";
import {ProductList, ProductMenuNavigator} from "../../molecules/contents/product";
import {SxProps} from "../../../types/sx";
import {Theme} from "../../../types/theme";

interface IProps{

}

export const ProductMain: React.FC<IProps> = () => {
    const WrappedProductMain = () => <>
        <ProductMenuNavigator/>
        <ProductList/>
    </>
    const ProductMain = withMain(WrappedProductMain, {paddingTop: theme => '150px'})
    return <ProductMain/>
}
