import React, {useState, Suspense} from "react";
import styled, {css, keyframes} from "styled-components";

import {ListItem} from "../../../atoms/list";

import btnArrowDown from '../../../../static/image/dark/page/product/btn/btn_arrow_down.png'
import {useProducts} from "../../../../hook/useProducts";
import {ErrorBoundary} from "react-error-boundary";
import {ListWrapper} from "./ListWrapper";

interface IProps {
    listType: 'product' | 'community'
}

export const List: React.FC<IProps> = ({listType}) => {


    const {data: products, status, isPlaceholderData,} = useProducts()
    console.log('products:', products)
    console.log('isPlaceholderData:', isPlaceholderData)

    return (
        <ListWrapper listType={listType}>
            {
                products?.map((product, index) => (
                    <ListItem key={index} listType={listType}/>
                ))
            }
        </ListWrapper>
    )
}