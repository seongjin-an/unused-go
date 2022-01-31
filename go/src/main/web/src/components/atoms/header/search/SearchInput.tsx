import React from "react";
import styled from "@emotion/styled";

export const SearchInput: React.FC = () => {
    return(
        <StyledSearchInput type="text"/>
    )
}
const StyledSearchInput = styled.input`
  width: 500px;
  height: 21px;
  border: none;
  background-color: transparent;
  font-family: "PretendardM";
  font-size: 22px;
  color: #000;
`