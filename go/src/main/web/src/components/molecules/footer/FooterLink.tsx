import React from "react";
import styled from "@emotion/styled";

export const FooterLink: React.FC = () => {
    return (
        <>
            <StyledFooterLink>
                <li>
                    <ul>
                        <li>ABOUT 쓰다만Go</li>
                        <li>쓰다만Go에 대해서</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>INFORMATION</li>
                        <li>공지사항</li>
                        <li>이용약관</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>SOCIALS</li>
                        <li>INSTAGRAM</li>
                        <li>FACEBOOK</li>
                        <li>TWITTER</li>
                    </ul>
                </li>

            </StyledFooterLink>
            <StyledContactValue>
                "team@meetusedgo.com"
            </StyledContactValue>
            <StyledCopyRightText>
                Copyright 쓰다만Go. 2021, all rights reserved.
            </StyledCopyRightText>
        </>
    )
}
const StyledCopyRightText = styled.div`
  width: 100%;
  height: auto;
  border-top: 1px solid #000000;
  font-family: "PretendardRegular";
  font-size: 15px;
  color: #000000;
  padding-top: 17px;
  margin-top: 90px;
  text-align: right;
`;
const StyledContactValue = styled.div`
  padding-top: 25px;
  font-family: "PretendardRegular";
  font-size: 14px;
  color: #000000;
  position: absolute;
  top: 84px;
  right: 85px;

  &::before {
    content: "CONTACT";
    display: block;
    font-family: "PretendardMedium";
    font-size: 14px;
    color: #000000;
    position: absolute;
    top: 0;
    left: 0;
  }
`
const StyledFooterLink = styled.ul`
  padding: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: auto;
  height: auto;
  margin-left: 261px;
  list-style: none;

  & li, ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  & > li > ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-right: 91px;
  }

  & > li > ul > li:first-child {
    color: #000000;
    cursor: default;
    margin-bottom: 13px;
  }

  & > li > ul > li {
    font-family: "PretendardMedium";
    font-size: 14px;
    color: #1A1FD2;
    margin-bottom: 11px;
    cursor: pointer;
  }


`;