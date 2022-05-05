import React from 'react';
import styled from 'styled-components';

import imgDeco from '../../../../static/image/dark/page/product/img/img_deco.png';

export const CommentFrame: React.FC = () => {
    return (
        <StyledCommentFrame>
            <div className="product_info_title">댓글</div>
            <input type="text" className="comment_input" placeholder="댓글쓰기..." />
            <button type="button" className="btn_comment_create">
                등록
            </button>
            <div className="comment_area">
                <div className="comment_block">
                    <div className="comment_text">정확한 사용상태가 어떤가요?</div>
                    <div className="comment_user">헬린이</div>
                </div>
                <div className="comment_block">
                    <div className="comment_text">사이즈를 수치로 알 수 있을까요?</div>
                    <div className="comment_user">헬린이</div>
                </div>
            </div>
        </StyledCommentFrame>
    );
};
const StyledCommentFrame = styled.div`
    margin-top: 50px;
    width: 100%;
    height: auto;
    margin-bottom: 30px;
    position: relative;
    & > .product_info_title {
        font-family: PretendardMedium;
        font-size: 20px;
        color: #e7e7e7;
        margin-bottom: 10px;
    }
    & > .comment_input {
        width: 100%;
        height: 30px;
        background-color: transparent;
        border: none;
        border-top: 2px solid rgba(196, 196, 196, 0.7);
        padding-top: 10px;
        font-family: PretendardRegular;
        font-size: 16px;
        color: #e7e7e7;
        padding-left: 10px;
    }
    & > .btn_comment_create {
        width: 68px;
        height: 34px;
        font-family: PretendardMedium;
        font-size: 15px;
        color: #000000;
        background-color: #ffe36d;
        margin: 0 auto;
        border-radius: 10px;
        -webkit-transition: -webkit-transform 0.3s ease-in-out;
        transition: -webkit-transform 0.3s ease-in-out;
        transition: transform 0.3s ease-in-out;
        transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
        position: absolute;
        top: -9px;
        right: 0;
    }
    & > .comment_area {
        width: 100%;
        height: auto;
        margin-top: 30px;
        & > .comment_block {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
            height: auto;
            margin-bottom: 10px;
            position: relative;
            & > .comment_text {
                width: 80%;
                height: 20px;
                font-family: PretendardMedium;
                font-size: 18px;
                color: #e7e7e7;
                padding-left: 20px;
                &::before {
                    content: '';
                    display: block;
                    width: 10px;
                    height: 12px;
                    background: url(${imgDeco}) no-repeat;
                    background-size: 100%;
                    position: absolute;
                    top: 2px;
                    left: 5px;
                }
            }
            & > .comment_user {
                width: 20%;
                font-family: PretendardMedium;
                font-size: 18px;
                color: rgba(196, 196, 196, 0.8);
                text-align: right;
            }
        }
    }
`;
