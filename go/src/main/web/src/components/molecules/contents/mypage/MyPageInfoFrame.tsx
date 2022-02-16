import React from "react";
import styled from "styled-components";
import {SxProps} from "../../../../types/sx";
import {Theme} from "../../../../types/theme";

interface IProps{
    sx?: SxProps<Theme>
    titleMaringBottom?: boolean;
}

export const MyPageInfoFrame: React.FC<IProps> = ({sx, titleMaringBottom, children}) => {
    return(
        <StyledMyPageInfoFrame sx={sx} titleMarginBottom={titleMaringBottom}>
            {children}
        </StyledMyPageInfoFrame>
    )
}

const StyledMyPageInfoFrame = styled.div<{sx?: SxProps<Theme>, titleMarginBottom?: boolean}>`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  height: auto;
  ${({sx}) => ({...sx})};
  & > .mypage_info_title{
    font-family: PretendardMedium;
    font-size: 20px;
    color: #E7E7E7;
    margin-bottom: ${({titleMarginBottom}) => !titleMarginBottom && '30px'};
    &.tPink{
      font-size: 22px;
      color: #EE8AFF;
    }
  }
`