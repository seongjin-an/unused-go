import React from "react";
import styled from "@emotion/styled";

import btnDelete from '../../../../static/image/dark/page/product/btn/btn_delete.png';

export const SmallPicture = () => {
    return(
        <StyledMallPicture>
            <button/>
        </StyledMallPicture>
    )
}
const StyledMallPicture = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 15px;
  background-color: rgba(196, 196, 196, 0.5);
  position: relative;
  margin-right: 15.5px;
  & > button{
    width: 15px;
    height: 15px;
    background: url(${btnDelete}) no-repeat;
    position: absolute;
    top: 9px;
    right: 9px;
    z-index: 1;
    border: none;
    cursor: pointer;
    -webkit-transition: -webkit-transform .3s ease-in-out;
    transition: -webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out;
    transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
    &:hover{
      transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
    }
  }
`;