import React, {useState} from "react"
import styled from "styled-components";
import {Logo, TopMenus, TopFunc, TopSearch} from "../../molecules/header";

export const Header: React.FC = () => {
    const [isSearchShow, setIsSearchShow] = useState<boolean>(false)
    const handleOpenSearch = () => setIsSearchShow(true)
    const handleCloseSearch = () => setIsSearchShow(false)

    return (
        <StyledTopBar>
            <Logo/>
            <StyledMenuWrapper>
                <TopMenus/>
                <TopFunc handleOpenSearch={handleOpenSearch}/>
            </StyledMenuWrapper>
            <TopSearch isSearchShow={isSearchShow} handleCloseSearch={handleCloseSearch}/>
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
  z-index:10;
`