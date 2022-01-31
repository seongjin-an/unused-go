import React from "react";
import styled from "@emotion/styled";
import {MainProductFrame} from "../../../atoms/contents/main";

export const MainProduct: React.FC = () => {
    return (
        <StyledMainProduct>
            <StyledMainProductList>
                <div className="main_list_title">New upload</div>
                <div className="main_list_sub_title">최신 등록된 상품</div>
                <MainProductFrame/>
                <div className="btn_wrapper">
                    <button className="btn_more">더보기</button>
                </div>
            </StyledMainProductList>

            <StyledMainProductList>
                <div className="main_list_title">Community</div>
                <div className="main_list_sub_title">커뮤니티</div>
                <MainProductFrame/>
                <div className="btn_wrapper">
                    <button className="btn_more">더보기</button>
                </div>
            </StyledMainProductList>
        </StyledMainProduct>
    )
}
const StyledMainProductList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-bottom: 60px;
  
  & > .main_list_title{
    font-family: "PretendardBlack";
    font-size: 28px;
    color: #FFFFFF;
    margin-bottom: 5px;
  }
  
  & > .main_list_sub_title{
    font-family: "PretendardMedium";
    font-size: 20px;
    color: #B9B9B9;
    margin-bottom: 20px;
  }
  & .btn_wrapper{
    width: auto;
    display: flex;
    justify-content: center;
    padding-right: 33px;
  }
  & .btn_more{
    width: 124px;
    height: 52px;
    font-family: "PretendardMedium";
    font-size: 22px;
    color: #000000;
    background-color: #FFE36D;
    //margin: 0 auto;
    border-radius: 10px;
    -webkit-transition: -webkit-transform .3s ease-in-out;
    transition: -webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out;
    transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
  }
  & .btn_more:hover{
    transform: scale(1.2, 1.2);
    -ms-transform: scale(1.2, 1.2);
    -webkit-transform: scale(1.2, 1.2);
  }
`;
const StyledMainProduct = styled.div`
  width: 100%;
`;