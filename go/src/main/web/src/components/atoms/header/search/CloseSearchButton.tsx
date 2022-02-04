import React from "react";
import styled from "styled-components";

import closeBtn from '../../../../static/image/dark/common/topBar/btn/btn_search_close.png'
interface IProps{
    handleCloseSearch: () => void;
}
export const CloseSearchButton: React.FC<IProps> = ({handleCloseSearch}) => {
    return (
        <StyledCloseButton onClick={handleCloseSearch} />
    )
}
const StyledCloseButton = styled.button`
  width: 60px;
  height: 60px;
  background: url(${closeBtn}) no-repeat;
  position: absolute;
  top: 23px;
  right: 84px;
  transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
  border: none;
  cursor: pointer;
`;