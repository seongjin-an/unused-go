import React, { ChangeEvent, MouseEvent, useState } from "react";
import { BasicButton, Button } from "../../../atoms/button";
import { MyPageLine } from "../../../molecules/contents/mypage";
import { Wrapper } from "../common/Wrapper";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { login } from "../../../../apis/user/userApi";
import { useNavigate } from "react-router-dom";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ITokenInfo } from "../../../../types/tokenInfo";

interface ILoginForm {
  id: string;
  pwd: string;
}

export const LoginArea: React.FC = () => {
  const methods = useForm<ILoginForm>();
  const [id, setId] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [alertInfo, setAlertInfo] = useState<string>(" ");
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation(login, {
    onSuccess: (data: ITokenInfo) => {
      localStorage.setItem('token', data.accessToken)
      navigate("/main");
    }
  });
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    if (inputName === "id") {
      console.log("id changed.. ", event.target.value);
      setId(event.target.value);
    } else if (inputName === "pwd") {
      console.log("pwd changed.. ", event.target.value);
      setPwd(event.target.value);
    }
  };
  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log("login button clicked..");

    mutation.mutate({ loginId: data.id, pwd: data.pwd });
  };
  return (
    <Wrapper type="basic">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="login_title">로그인</div>
          <MyPageLine name="id" text="아이디" placeholder="아이디를 입력하세요." />
          <MyPageLine name="pwd" text="비밀번호" placeholder="비밀번호를 입력하세요." />
          <StyledAlertInfo>{alertInfo}</StyledAlertInfo>
          <BasicButton text="로그인" kind="login" />
        </form>
      </FormProvider>
    </Wrapper>
  );
};
const StyledAlertInfo = styled.div`
  width: 100%;
  height: auto;
  color: red;
  text-align: center;
  margin-bottom: 30px;
`;