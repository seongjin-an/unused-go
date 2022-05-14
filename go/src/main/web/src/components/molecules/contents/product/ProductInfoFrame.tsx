import React from 'react';
import styled from 'styled-components';

import iconLike from '../../../../static/image/dark/page/product/icon/icon_like.png';

export const ProductInfoFrame: React.FC = ({ children }) => {
  return <StyledProductInfoFrame>{children}</StyledProductInfoFrame>;
};
const StyledProductInfoFrame = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 30px;
  position: relative;

  & > .product_info_title {
    font-family: 'PretendardM';
    font-size: 20px;
    color: #e7e7e7;
    margin-bottom: 10px;
  }

  & > .product_info_text {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 2px solid rgba(196, 196, 196, 0.7);
    background-color: transparent;
    padding-left: 16px;
    font-family: PretendardRegular;
    font-size: 16px;
    color: #e7e7e7;
  }
  & > .color_select_area {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    height: 38px;
  }
  & > .product_info_box {
    width: 95%;
    height: 200px;
    border: 2px solid rgba(196, 196, 196, 0.7);
    border-radius: 5px;
    margin-bottom: 15px;
    font-family: PretendardRegular;
    font-size: 16px;
    color: #e7e7e7;
    padding: 20px 20px;
  }
  & > .product_btn_group {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    height: 40px;

    & > .btn_product_like {
      background: transparent;
      width: 100%;
      height: 100%;
      border: 2px solid rgba(196, 196, 196, 0.7);
      border-radius: 5px;
      font-family: PretendardRegular;
      font-size: 18px;
      color: #fff;
      padding-left: 27px;
      position: relative;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      &::before {
        content: '';
        display: block;
        width: 16px;
        height: 15px;
        background: url(${iconLike}) no-repeat;
        background-size: 100%;
        position: absolute;
        top: 11px;
        left: 322px;
      }
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
`;
