import React from 'react';
import { CommentFrame, ProductChart } from '../../../molecules/contents/product';
import { StyledProductInfo } from '../../../molecules/contents/product/ProductInfo';
import { ProductInfoFrame } from '../../../molecules/contents/product/ProductInfoFrame';
import { ColorBlock } from '../../../atoms/contents/product';

export const ProductDetail: React.FC = () => {
  return (
    <StyledProductInfo>
      <div className="user_name">안김안</div>
      <div className="product_name">상품명</div>
      <div className="product_price">100,000원</div>
      <ProductChart />
      <ProductInfoFrame>
        <div className="product_info_title">사이즈</div>
        <div className="product_info_text">S</div>
      </ProductInfoFrame>
      <ProductInfoFrame>
        <div className="product_info_title">색상</div>
        <div className="color_select_area">
          <ColorBlock active sx={theme => ({ backgroundColor: theme.palette.common.darkGreen })} />
        </div>
      </ProductInfoFrame>
      <ProductInfoFrame>
        <div className="product_info_title">사용감</div>
        <div className="product_info_text">상</div>
      </ProductInfoFrame>
      <ProductInfoFrame>
        <div className="product_info_title">사용기간</div>
        <div className="product_info_text">20.12.31~22.12.31</div>
      </ProductInfoFrame>
      <ProductInfoFrame>
        <div className="product_info_title">보증기간</div>
        <div className="product_info_text">~22.12.31</div>
      </ProductInfoFrame>
      <ProductInfoFrame>
        <div className="product_info_title">기타 설명</div>
        <div className="product_info_box">궁금하신점 댓글 달아주세요~!</div>
        <div className="product_btn_group">
          <button className="btn_product_like">관심상품 67</button>
        </div>
      </ProductInfoFrame>
      <CommentFrame />
    </StyledProductInfo>
  );
};
