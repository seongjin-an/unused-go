import React from "react";
import styled from "styled-components";

export const MyPageInfoBoxWrapper: React.FC = ({children}) => {
    return(
        <StyledMyPageInfoBoxWrapper>
            {children}
        </StyledMyPageInfoBoxWrapper>
    )
}

const StyledMyPageInfoBoxWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 574px;
  height: auto;
  margin-bottom: 39px;
  position: relative;
`