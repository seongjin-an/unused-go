import React from 'react';
import { HistoryBox, HistoryFrame, MyPageInfoFrame, ProfileFrame } from '../../../molecules/contents/mypage';
import { MyPageWrapper } from './MyPageWrapper';
import { MyPageInfoTitle } from '../../../atoms/contents/mypage';

export const Intro: React.FC = () => {
  return (
    <MyPageWrapper>
      <ProfileFrame>
        <div className="user_name">ahnKimAn</div>
        <div className="user_email">ahnKimAn@gmail.com</div>
        <button type="button" className="btn_profile_edit">
          프로필 수정
        </button>
      </ProfileFrame>
      <MyPageInfoFrame>
        <MyPageInfoTitle text="구매 내역" />
        <HistoryFrame>
          <HistoryBox text="전체" value="0" first />
          <HistoryBox text="입찰중" value="0" />
          <HistoryBox text="진행중" value="0" />
          <HistoryBox text="종료" value="0" />
        </HistoryFrame>
      </MyPageInfoFrame>

      <MyPageInfoFrame>
        <MyPageInfoTitle text="판매 내역" />
        <HistoryFrame>
          <HistoryBox text="전체" value="0" first />
          <HistoryBox text="입찰중" value="0" />
          <HistoryBox text="진행중" value="0" />
          <HistoryBox text="종료" value="0" />
        </HistoryFrame>
      </MyPageInfoFrame>
    </MyPageWrapper>
  );
};
