import React, { ChangeEvent, MouseEvent, useState } from "react";
import { BasicButton, Button } from "../../../atoms/button";
import { MyPageLine } from "../../../molecules/contents/mypage";
import { Wrapper } from "../common/Wrapper";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { login } from "../../../../apis/user/userApi";

export const LoginArea: React.FC = () => {
  const [id, setId] = useState<string>('')
  const [pwd, setPwd] = useState<string>('')
  const [alertInfo, setAlertInfo] = useState<string>(' ')
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name
    if(inputName === 'id') {
      console.log('id changed.. ', event.target.value)
      setId(event.target.value)
    }else if(inputName === 'pwd') {
      console.log('pwd changed.. ', event.target.value)
      setPwd(event.target.value)
    }
  }
  const handleLoginButtonClick = (event: MouseEvent) => {
    console.log('login button clicked..')
    if(!id){
      setAlertInfo('아이디를 입력하세요!')
      return
    }else{
      setAlertInfo(' ')
    }
    if(!pwd){
      setAlertInfo('비밀번호를 입력하세요!')
      return;
    }else{
      setAlertInfo(' ')
    }
    const queryClient = useQueryClient()
    const mutation = useMutation(login, {
      onSuccess: (a) => {
        console.log('a:', a)
      }
    })
    mutation.mutate({loginId: id, pwd: pwd})
  }
  return(
    <Wrapper>
      <div className="login_title">로그인</div>
      <MyPageLine name='id' text='아이디' placeholder='아이디를 입력하세요.' inputValue={id} callback={handleInputChange}/>
      <MyPageLine name='pwd' text='비밀번호' placeholder='비밀번호를 입력하세요.' inputValue={pwd} callback={handleInputChange}/>
      <StyledAlertInfo>{alertInfo}</StyledAlertInfo>
      <BasicButton text='로그인' kind='login' onClick={handleLoginButtonClick}/>
    </Wrapper>
  )
}
const StyledAlertInfo = styled.div`
  width: 100%;
  height: auto;
  color: red;
  text-align: center;
  margin-bottom: 30px;
`