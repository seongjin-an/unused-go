import React from "react";
import styled from "styled-components";

interface IProps{
    text: string;
}

export const HistoryTitle:React.FC<IProps> = ({text}) => {
    return <StyledHistoryTitle>
        {text}
    </StyledHistoryTitle>
}

const StyledHistoryTitle = styled.div`
  font-family: PretendardRegular;
  font-size: 16px;
  color: #E1E1E1;
  margin-bottom: 10px;
`