import React, { ChangeEvent } from "react";
import { MyPageInfoBoxWrapper } from './MyPageInfoBoxWrapper';
import { AccountInput, MyPageInfoTitle } from '../../../atoms/contents/mypage';

interface IProps {
  name?: string
  text: string;
  placeholder: string;
  inputValue?: string;
  callback?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const MyPageLine: React.FC<IProps> = ({ name, text, placeholder, inputValue, callback }) => {
  return (
    <MyPageInfoBoxWrapper>
      <MyPageInfoTitle text={text} />
      <AccountInput name={name} placeholder={placeholder} inputValue={inputValue} callback={callback}/>
    </MyPageInfoBoxWrapper>
  );
};
