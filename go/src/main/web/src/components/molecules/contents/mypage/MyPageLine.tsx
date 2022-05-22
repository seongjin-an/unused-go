import React, { ChangeEvent, MouseEvent } from "react";
import { MyPageInfoBoxWrapper } from './MyPageInfoBoxWrapper';
import { AccountInput, MyPageInfoTitle } from '../../../atoms/contents/mypage';
import { useFormContext } from "react-hook-form";

interface IProps {
  name: string;
  type?: string;
  checkId?: boolean;
  refetchResult?: (event: MouseEvent) => void;
  text: string;
  placeholder: string;
  inputValue?: string;
  callback?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const MyPageLine: React.FC<IProps> = ({ name, checkId, refetchResult, type = 'text', text, placeholder, inputValue, callback }) => {
  return (
    <MyPageInfoBoxWrapper>
      <MyPageInfoTitle text={text} />
      <div style={{flexDirection: "row"}}>
      <AccountInput name={name} type={type} placeholder={placeholder} inputValue={inputValue} callback={callback} checkId={checkId} refetchResult={refetchResult}/>
      </div>
    </MyPageInfoBoxWrapper>
  );
};
