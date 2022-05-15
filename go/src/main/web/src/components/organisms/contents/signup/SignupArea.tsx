import React from 'react';
import { Wrapper } from '../common';
import { MyPageLine } from "../../../molecules/contents/mypage";

export const SignupArea: React.FC = () => {
  return(
    <Wrapper>
      <div className="login_title">회원가입</div>
      <MyPageLine text="이름" placeholder="이름을 입력해 주세요." />
      <MyPageLine text="아이디" placeholder="아이디를 입력하세요." />
      <MyPageLine text='비밀번호' placeholder="비밀번호를 입력하세요."/>
      <MyPageLine text='비밀번호 확인' placeholder="비밀번호를 확인해 주세요."/>
      <MyPageLine text="이메일" placeholder="이메일을 입력해 주세요." />
      <MyPageLine text="연락처" placeholder="연락처를 입력해 주세요." />
    </Wrapper>
  )
}