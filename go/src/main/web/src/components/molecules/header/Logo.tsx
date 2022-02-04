import React from "react";
import styled from "styled-components";
import logoIcon from '../../../static/image/dark/common/topBar/img/img_logo.png'

export const Logo: React.FC = () => {
    return (
        <StyledLogoWrapper>
            <StyledLogoIcon/>
        </StyledLogoWrapper>
    )
}
const StyledLogoWrapper = styled.div`
  flex: 1.4;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledLogoIcon = styled.div`
  width: 128px;
  height: 43px;
  background: url(${logoIcon}) no-repeat;
`