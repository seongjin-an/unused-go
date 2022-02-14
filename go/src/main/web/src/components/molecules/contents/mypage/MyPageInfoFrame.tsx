import React from "react";
import styled from "styled-components";

export const MyPageInfoFrame: React.FC = ({children}) => {
    return(
        <StyledMyPageInfoFrame>
            {children}
        </StyledMyPageInfoFrame>
    )
}

const StyledMyPageInfoFrame = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  height: auto;
  & > .mypage_info_title{
    font-family: PretendardMedium;
    font-size: 20px;
    color: #E7E7E7;
    margin-bottom: 30px;
  }
`