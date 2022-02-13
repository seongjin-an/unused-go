import React from "react";
import styled from "styled-components";

export const ProductMenuNavigator: React.FC = () => {
    return (
        <StyledProductMenuNavigator>
            <li>운동용품</li>
            <li>아령</li>
            <li>바벨</li>
            <li>원판/플레이트</li>
            <li>벨트</li>
            <li>악력기</li>
            <li>밴드/짐볼</li>
            <li>스트랩/보호대</li>
        </StyledProductMenuNavigator>
    )
}
const StyledProductMenuNavigator = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 212px;
  height: auto;
  list-style: none;
  padding: 0;
  & > li{
    width: 100%;
    height: 20px;
    font-family: PretendardMedium;
    font-size: 20px;
    color: #FFFFFF;
    margin-bottom: 17px;
    cursor: pointer;
    -webkit-transition: -webkit-transform .3s ease-in-out;
    transition: -webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out;
    transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
  }
  
  & > li:first-of-type{
    font-family: PretendardBlack;
    font-size: 24px;
    margin-bottom: 32px;
    cursor: default;
  }
  & > li:first-of-type:hover{
    transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    color: #FFFFFF;
  }
  & > li:hover{
    transform: translate(3px, 0);
    -ms-transform: translate(3px, 0);
    -webkit-transform: translate(3px, 0);
    color: #FFE782;
  }
`