import React from "react";
import styled from "@emotion/styled";
import {FuncButton, UserName} from "../../atoms/header";

export const TopFunc:React.FC = () => {
    return(
        <div>
            <StyledTopFunc>
                <UserName/>
                <FuncButton buttonType={'search'}/>
                <FuncButton buttonType={'basket'}/>
            </StyledTopFunc>
        </div>
    )
}

const StyledTopFunc = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  height: 100%;
`