import React from "react";
import styled from "@emotion/styled";

import searchButton from '../../../../static/image/dark/common/topBar/icon/icon_search.png'
import basketButton from '../../../../static/image/dark/common/topBar/icon/icon_basket.png'
import * as url from "url";

interface IProps{
    buttonType: string;
}

export const FuncButton: React.FC<IProps> = ({buttonType}) => {
    return (
        <StyledFuncButton buttonType={buttonType}/>
    )
}
const StyledFuncButton = styled.button<IProps>`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 0;
  background: transparent;
  background-image: url(${({buttonType}) => buttonType === 'search' ? searchButton  : basketButton});
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 10px;
  transition: all 0.25s;
  cursor: pointer;
  
  &:hover{
    background-color: rgba(255, 255, 255, 0.1);
  }
`