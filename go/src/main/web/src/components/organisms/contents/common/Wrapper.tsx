import React from "react";
import styled, { css } from "styled-components";

type WrapperType = 'basic' | 'login'

interface IProps {
  type?: WrapperType
}

export const Wrapper: React.FC<IProps> = ({type= 'basic', children}) => {
  return <StyledWrapper type={type}>{children}</StyledWrapper>
}
const StyledWrapper = styled.div<{type?: WrapperType}>`
  ${({type}) => type === 'basic' ? `${StyledBasicWrapper}` : css``}
  
`
const StyledBasicWrapper = css`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: auto;
  width: 996.5px;
  height: auto;
  & > .login_title {
    font-family: PretendardMedium;
    font-size: 22px;
    color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    letter-spacing: 10px;
  }
`