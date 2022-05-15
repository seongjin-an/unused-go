import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import imgProfile from '../../../../static/image/dark/page/product/img/img_profile.png';
import { useMember } from '../../../../hook/useMember';
import { Link } from "react-router-dom";

export const UserName: React.FC = () => {
  const { data, error } = useMember();

  const useLocalStorage = (itemName: string, value: string = '') => {
    const [state, setState] = useState(() => {
      return localStorage.getItem(itemName) || value
    })
    useEffect(() => {
      localStorage.setItem(itemName, state)
    },[state])
    return [state, setState]
  }

  console.log('data:', data)
  // console.log('localStorage.getItem(token):', localStorage.getItem('token'))
  return (
    <>
    {
      data && data.code === 'success' ?
        <StyledUserName>{data.result.name}<span>님</span></StyledUserName> :
        <>
          <Link to='/login' >
            <StyledGuest>로그인</StyledGuest>
          </Link>
          <Link to='/signup'>
            <StyledGuest>회원가입</StyledGuest>
          </Link>
        </>
    }
    </>
  )
};
const StyledUserName = styled.div`
  justify-self: flex-end;
  width: 80px;
  font-family: PretendardBold;
  font-size: 18px;
  text-align: left;
  color: #fff;
  padding-left: 30px;
  line-height: 3;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    width: 22px;
    height: 22px;
    background: url(${imgProfile}) no-repeat;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 0;
  }

  & > span {
    font-family: PretendardMedium;
    font-size: 15px;
    letter-spacing: -0.24px;
    color: #b9b9b9;
    margin-left: 3px;
  }
`;

const StyledGuest = styled.div`
  justify-self: flex-end;
  width: 80px;
  font-family: PretendardBold;
  font-size: 18px;
  text-align: left;
  color: #fff;
  cursor: pointer;
`