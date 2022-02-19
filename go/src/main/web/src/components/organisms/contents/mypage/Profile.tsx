import React from "react";
import {MyPageWrapper} from "./MyPageWrapper";
import {LoginInfo, MyPageInfoBoxWrapper, MyPageInfoFrame, ProfileFrame} from "../../../molecules/contents/mypage";

export const Profile:React.FC = () => {
    return(
        <MyPageWrapper>
            <div className="mypage_main_title">프로필 정보</div>
            <ProfileFrame>
                <div className="user_name">ahnKimAn</div>
                <button type="button" className="btn_profile_edit">이미지 변경</button>
            </ProfileFrame>
            <MyPageInfoFrame>
                <div className="mypage_info_title">로그인 정보</div>
                <LoginInfo label="아이디" value="ahnKimAn" readonly/>
                <LoginInfo label="비밀번호" value="1234" password readonly/>
            </MyPageInfoFrame>
            <MyPageInfoFrame>
                <div className="mypage_info_title">개인 정보</div>
                <LoginInfo label="이름" value="ahnKimAn" readonly/>
                <LoginInfo label="휴대폰 번호" value="010-1***-****" readonly/>
                <LoginInfo label="배송지" value="경기도 부천시 송내대로" readonly/>
            </MyPageInfoFrame>
        </MyPageWrapper>
    )
}