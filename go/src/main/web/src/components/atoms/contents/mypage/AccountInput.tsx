import React, { ChangeEvent } from "react";
import styled from 'styled-components';
import { useFormContext } from "react-hook-form";

interface IProps {
  name: string
  placeholder: string;
  inputValue?: string;
  callback?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const AccountInput: React.FC<IProps> = ({ name, placeholder, inputValue, callback }) => {
  const { register, formState } = useFormContext()
  const { errors } = formState
  console.log('error:', errors)
  return <>
    <StyledAccountInput {...register(name, {required: {value: true, message: '필수 입력값입니다.'}, minLength: {value:5, message: '5자리 이상 입력하세요!'}, onChange: callback})}
                        type="text" placeholder={placeholder} value={inputValue && inputValue}/>
    <StyledAlertInfo>{errors[name] ? errors[name].message : ' '}</StyledAlertInfo>
  </>;
};
const StyledAccountInput = styled.input`
  width: 100%;
  height: 53px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.22);
  font-family: PretendardMedium;
  font-size: 20px;
  color: #e1e1e1;
  //padding-top: 22px;
`;
const StyledAlertInfo = styled.div`
  width: 100%;
  height: 10px;
  color: red;
  //text-align: center;
`