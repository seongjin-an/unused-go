import React from "react";
import styled from "styled-components";

interface IProps{
    value: string;
    first?: boolean;
}

export const HistoryValue: React.FC<IProps> = ({value, first}) => {
    return <StyledHistoryValue first={first}>{value}</StyledHistoryValue>
}

const StyledHistoryValue = styled.div<{first?: boolean}>`
  font-family: PretendardRegular;
  font-size: 30px;
  color: ${({first}) => first ? '#EB72FF' : '#FFFFFF'};
`