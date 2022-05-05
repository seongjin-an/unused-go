import React from 'react';
import { ProductPicture } from '../../molecules/contents/product';
import withMain from '../../../hoc/withMain';
import { ProductDetail } from '../../organisms/contents';

export const ProductDetailTemplate: React.FC = () => {
    const WrappedProductDetail: React.FC = () => (
        <>
            <ProductPicture isShow={false} />
            <ProductDetail />
        </>
    );
    const ProductDetailHoc = withMain(WrappedProductDetail, {
        paddingTop: theme => theme.padding.secondary,
    });
    return <ProductDetailHoc />;
};
