import React from "react"
import styled from "@emotion/styled";
import {Logo, TopMenus} from "../../molecules/header";
import {TopFunc} from "../../molecules/header/TopFunc";

export const Header: React.FC = () => {
    return (
        <StyledTopBar>
            <Logo/>
            <StyledMenuWrapper>
                <TopMenus/>
                <TopFunc/>
            </StyledMenuWrapper>
        </StyledTopBar>
    )
}

const StyledMenuWrapper = styled.div`
  flex: 10;
  display: flex;
  justify-content: space-between;
  height: 100%;
`

const StyledTopBar = styled.section`
  //display: -webkit-box;
  //display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  //-ms-flex-pack: justify;
  //justify-content: space-between;
  -webkit-box-align: center;
  //-ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0;
  background-color: #21248D;
  border-bottom: 1px solid #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`