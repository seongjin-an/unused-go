import React from 'react';
import { ProductInfoFrame } from './ProductInfoFrame';
import { ChartArea, ChartPeriodList, TotalPriceList } from './index';

interface IProps {
    mypage?: boolean;
}

export const ProductChart: React.FC<IProps> = ({ mypage }) => {
    return (
        <ProductInfoFrame>
            <div className="product_info_title">시세</div>
            <ChartPeriodList />
            <ChartArea mypage={mypage} />
            <TotalPriceList />
        </ProductInfoFrame>
    );
};
