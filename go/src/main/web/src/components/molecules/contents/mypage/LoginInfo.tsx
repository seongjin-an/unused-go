import React from "react";
import {MyPageInfoBoxWrapper} from "./MyPageInfoBoxWrapper";
import {MyPageInfoTitle} from "../../../atoms/contents/mypage";
import {MyPageInfoText} from "../../../atoms/contents/mypage/MyPageInfoText";
import { StyledBtnInfoEdit } from "../../../atoms/button";

interface IProps{
    label: string;
    value: string;
    password?: boolean;
    readonly?: boolean;
}

export const LoginInfo:React.FC<IProps> = ({label, value, password, readonly}) => {
    return(
        <MyPageInfoBoxWrapper>
            <MyPageInfoTitle text={label}/>
            <MyPageInfoText text={value} password={password} readonly={readonly}/>
            <StyledBtnInfoEdit>변경</StyledBtnInfoEdit>
        </MyPageInfoBoxWrapper>
    )
}