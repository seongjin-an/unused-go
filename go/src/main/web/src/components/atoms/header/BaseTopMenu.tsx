import React, {MouseEvent} from "react";
import styled from "styled-components";

interface IProps{

}

export const BaseTopMenu: React.FC<IProps> = ({}) => {
    return(
        <StyledTopMenus>
            <li>나의 중고시새</li>
            <li>운동용품</li>
            <li>의류</li>
            <li>커뮤니티</li>
        </StyledTopMenus>
    )
}

const StyledTopMenus = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  webkit-box-align: center;
  align-items: center;
  width: auto;
  height: 42px;
  cursor: pointer;
  list-style: none;
  
  & > li{
    font-family: PretendardBold;
    font-size: 18px;
    color: #F6F6F6;
  }
  
  //& > li:not(:last-child){
  //  margin-right: 105px;
  //}
  & > li:first-of-type{
    margin-right: 104px;
  }
  & > li:nth-of-type(2){
    margin-right: 100px;
  }
  & > li:nth-of-type(3){
    margin-right: 121px;
  }
`