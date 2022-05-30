import React, { ChangeEvent, useState, MouseEvent, useEffect } from "react";
import {
  FieldValue,
  FieldValues,
  FormProvider,
  Resolver,
  SubmitHandler,
  UnpackNestedValue,
  useForm,
  useFormContext,
} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from '../common';
import { MyPageLine } from '../../../molecules/contents/mypage';
import { BasicButton } from '../../../atoms/button';
import { useYupValidationResolver } from '../../../../hook/useYupValidation';
import { signup } from '../../../../apis/user/userApi';
import { useCheckId } from '../../../../hook/useCheckId';
import { useSetRecoilState } from "recoil";
import { modalState } from "../../../../stores/modal";

interface IForm {
  name: string;
  id: string;
  pwd: string;
  pwd2: string;
  email: string;
  phone: string;
}
export const SignupArea: React.FC = () => {
  // const validationSchema = yup.object({
  //   name: yup.string().required('이름을 입려하세요!'),
  //   id: yup.string().required('아이디를 입력하세요!'),
  //   pwd: yup.string().required('비밀번호를 입력하세요!'),
  //   pwd2: yup.string().required('비밀번호를 확인하세요!'),
  //   email: yup.string().required('이메일을 입력하세요!'),
  //   phone: yup.string().required('연락처를 입력하세요!'),
  // });
  // const resolver = useYupValidationResolver(validationSchema)
  const navigate = useNavigate();
  const methods = useForm<IForm>();
  const [result, setResult] = useState<string>('');
  const queryClient = useQueryClient();
  const mutation = useMutation(signup, {
    onSuccess: e => {
      navigate('/main');
    },
  });

  const onSubmit: SubmitHandler<IForm> = (data: UnpackNestedValue<IForm>, event) => {
    if (data.pwd !== data.pwd2) {
      setResult('비밀번호를 확인해주세요!');
      return;
    }
    if (!checkIdResult) {
      setIsOpen({ hide: true, type: 'alert', header: '경고', subject: '아이디 확인', message: '아이디를 확인해주세요' })
      return;
    }
    // setResult(JSON.stringify(data));
    const imsi = { loginId: data.id, pwd: data.pwd, name: data.name, email: data.email, phone: data.phone };
    console.log('imsi:', imsi);
    mutation.mutate({ loginId: data.id, pwd: data.pwd, name: data.name, email: data.email, phone: data.phone });
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const elementName = event.target.name;
    const elementValue = event.target.value;
    if (elementName === 'name') {
      if (elementValue.length < 5) {
        console.log('5자리 이상의 글자를 입력하세요!');
      }
    }
  };
  const [id, setId] = useState<string>('');
  const handleChangeId = (event: ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };
  const { data: checkResult, refetch } = useCheckId(id);
  const [checkIdResult, setCheckIdResult] = useState<boolean>(false);
  useEffect(() => {
    setCheckIdResult(false)
  }, [id])
  const setIsOpen = useSetRecoilState(modalState)
  const handleClickIdCheck = (event: MouseEvent) => {
    if(!id){
      setIsOpen({ hide: true, type: 'alert', header: '경고', subject: '공백', message: '아이디를 입력해주세요.' })
      return
    }
    refetch()
      .then(() => {
        console.log('success you can use!');
        setCheckIdResult(true);
        setIsOpen({ hide: true, type: 'info', header: '알림', subject: '확인', message: '사용 가능한 아이디입니다.' })
      })
      .catch(error => {
        console.log('error');
        setCheckIdResult(false);
      });
  };
  return (
    <Wrapper type="basic">
      <div className="login_title">회원가입</div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <MyPageLine name="name" text="이름" placeholder="이름을 입력해 주세요." />
          <MyPageLine
            name="id"
            text="아이디"
            placeholder="아이디를 입력하세요."
            checkId
            callback={handleChangeId}
            refetchResult={handleClickIdCheck}
          />
          <MyPageLine type="password" name="pwd" text="비밀번호" placeholder="비밀번호를 입력하세요." />
          <MyPageLine type="password" name="pwd2" text="비밀번호 확인" placeholder="비밀번호를 확인해 주세요." />
          <MyPageLine name="email" text="이메일" placeholder="이메일을 입력해 주세요." />
          <MyPageLine name="phone" text="연락처" placeholder="연락처를 입력해 주세요." />
          <BasicButton type="submit" text="회원가입" kind="basic" />
        </form>
        <div style={{ color: 'red' }}>{result}</div>
      </FormProvider>
    </Wrapper>
  );
};
