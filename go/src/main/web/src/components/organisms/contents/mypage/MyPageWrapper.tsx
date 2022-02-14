import React from "react";
import styled from "styled-components";

export const MyPageWrapper: React.FC = ({children}) => {
    return(
        <StyledMyPageWrapper>
            {children}
        </StyledMyPageWrapper>
    )
}
const StyledMyPageWrapper= styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 996.5px;
  height: auto;
  & > .mypage_main_title{
    font-family: PretendardMedium;
    font-size: 22px;
    color: #FFF;
    margin-bottom: 30px;
  }
`