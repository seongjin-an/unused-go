import React, { MouseEvent } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface IProps {
    isShow: boolean;
}

export const DetailTopMenu: React.FC<IProps> = ({ isShow }) => {
    return (
        <StyledDetailMenu isShow={isShow}>
            <ul>
                <li>
                    <ul>
                        <li>중고시세 한눈에보기</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>운동용품 전체</li>
                        <li>아령</li>
                        <li>바벨</li>
                        <li>원판/플레이트</li>
                        <li>벨트</li>
                        <li>악력기</li>
                        <li>밴드/짐볼</li>
                        <li>스트랩/보호대</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>의류 전체</li>
                        <li>재킷 &amp; 베스트</li>
                        <li>탑 &amp; 티셔츠</li>
                        <li>팬츠 &amp; 타이츠</li>
                        <li>양말</li>
                        <li>셋업</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>최신글</li>
                    </ul>
                </li>
            </ul>
        </StyledDetailMenu>
    );
};
const fadeIn = keyframes`
  from {
    opacity: 0;
    //display: none;
  }
  to {
    opacity: 1;
    //display: flex;
  }
`;
const fadeOut = keyframes`
  from {
    opacity: 1;
    //display: flex;
  }
  to {
    opacity: 0;
    //display: none;
  }
`;
const StyledDetailMenu = styled.div<{ isShow: boolean }>`
    //transition: opacity .15s ease-in-out, -webkit-transform .3s ease-in-out;
    display: none;
    ${({ isShow }) =>
        isShow
            ? css`
                  display: flex;
                  opacity: 1;
              `
            : css`
                  display: none;
                  opacity: 0;
              `};
    animation-name: ${({ isShow }) => isShow && fadeIn};
    animation-duration: 0.3s;
    //animation-iteration-count: 0;

    width: 100%;
    height: 372px;
    background-color: #341cff;
    border-bottom: 1px solid #fff;
    padding: 42px 0 0 238px;
    position: absolute;
    border-top: 1px solid #fff;
    top: 70px;
    left: 0;

    & > ul {
        display: flex;
        width: auto;
        height: auto;
    }

    & ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    & > ul > li > ul {
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        margin-right: 60px;
    }

    & > ul > li > ul > li {
        font-family: PretendardSemiBold;
        font-size: 18px;
        color: #ffffff;
        margin-bottom: 18px;
        cursor: pointer;
        transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
        &:hover {
            transform: translate(3px, 0);
            -ms-transform: translate(3px, 0);
            -webkit-transform: translate(3px, 0);
        }
    }
`;
