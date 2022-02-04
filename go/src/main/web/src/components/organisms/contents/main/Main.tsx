import React from "react";
import styled from "styled-components";
import {MainDash, MainProduct} from "../../../molecules/contents";

export const Main: React.FC = () => {
    return(
        <StyledWrapper>
            <MainDash/>
            <MainProduct/>
        </StyledWrapper>
    )
}



const StyledWrapper = styled.section`
  
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: auto;
  height: auto;
  padding: 649px 320px 150px 320px;
  background-color: #0F0655;
`;
