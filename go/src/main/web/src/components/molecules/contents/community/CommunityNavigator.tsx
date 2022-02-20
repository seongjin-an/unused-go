import React from "react";
import styled from "styled-components";

export const CommunityNavigator: React.FC = () => (
    <StyledCommunityNavigator>
        <li>커뮤니티</li>
        <button type="button" className="btn_write">글<br/>쓰<br/>기</button>
    </StyledCommunityNavigator>
)


const StyledCommunityNavigator = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 212px;
  height: auto;
  list-style: none;
  margin: 0;
  padding: 0;
  & > li{
    width: 100%;
    font-family: PretendardMedium;
    font-size: 20px;
    color: #FFFFFF;
    margin-bottom: 17px;
    cursor: pointer;
    -webkit-transition: -webkit-transform .3s ease-in-out;
    transition: -webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out;
    transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
  }
  & > li:first-of-type{
    font-family: PretendardBlack;
    font-size: 24px;
    margin-bottom: 32px;
    cursor: default;
  }
  & > .btn_write{
    background: transparent;
    width: 80px;
    height: 320px;
    border: 3px solid #FFE36D;
    border-radius: 10px;
    font-family: PretendardMedium;
    font-size: 28px;
    color: #FFFFFF;
    line-height: 1.3;
    -webkit-transition: -webkit-transform .3s ease-in-out;
    transition: -webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out;
    transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
  }
`