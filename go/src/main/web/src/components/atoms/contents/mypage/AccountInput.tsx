import React, { ChangeEvent, MouseEvent } from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import { SxProps } from "../../../../types/sx";
import { Theme } from "../../../../types/theme";
import { handleSxProps } from "../../../../data/theme";
import { BasicButton } from "../../button";

interface IProps {
  name: string;
  type: string;
  checkId?: boolean;
  refetchResult?: (event: MouseEvent) => void;
  placeholder: string;
  inputValue?: string;
  callback?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const AccountInput: React.FC<IProps> = ({ name, type= 'text', checkId, refetchResult, placeholder, inputValue, callback }) => {
  const { register, formState } = useFormContext();
  const { errors } = formState;
  return (
    <>
      <StyledAccountInput {...register(name, {
          required: { value: true, message: '필수 입력값입니다.' },
          minLength: { value: 5, message: '5자리 이상 입력하세요!' },
          onChange: callback,
        })} type={type} placeholder={placeholder} value={inputValue && inputValue} checkId={checkId} sx={(() => ({width: '77%'})) }/>
      {checkId && <BasicButton type='button' text="아이디확인" kind="check" onClick={refetchResult} />}
      <StyledAlertInfo>{errors[name] ? errors[name].message : ' '}</StyledAlertInfo>
    </>
  );
};
const StyledAccountInput = styled.input<{checkId?: boolean, sx?: SxProps<Theme>}>`
  width: 100%;
  height: 53px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.22);
  font-family: PretendardMedium;
  font-size: 20px;
  color: #e1e1e1;
  //padding-top: 22px;
  ${({ checkId, sx }) => checkId && { ...handleSxProps(sx) }};
`;
const StyledAlertInfo = styled.div`
  width: 100%;
  height: 10px;
  color: red;
  //text-align: center;
`;