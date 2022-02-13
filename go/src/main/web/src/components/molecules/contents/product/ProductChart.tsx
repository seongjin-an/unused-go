import React from "react";
import {ProductInfoFrame} from "./ProductInfoFrame";
import {ChartArea, ChartPeriodList, TotalPriceList} from "./index";

export const ProductChart: React.FC = () => {
    return(
        <ProductInfoFrame>
            <div className="product_info_title">시세</div>
            <ChartPeriodList/>
            <ChartArea/>
            <TotalPriceList/>
        </ProductInfoFrame>
    )
}