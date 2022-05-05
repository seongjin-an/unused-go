import React from 'react';
import { MyPageBankInfo, MyPageInfoFrame } from '../../../molecules/contents/mypage';
import { MyPageWrapper } from './MyPageWrapper';

export const Account: React.FC = () => {
    return (
        <MyPageWrapper>
            <div className="mypage_main_title">판매 정산 계좌</div>
            <MyPageInfoFrame>
                <div className="mypage_info_title">정산 계좌 등록</div>
                <MyPageBankInfo text="은행명" placeholder="은행명을 입력하세요." />
                <MyPageBankInfo text="계좌번호" placeholder="- 없이 입력하세요." />
                <MyPageBankInfo text="예금주" placeholder="예금주명을 정확히 입력하세요." />
            </MyPageInfoFrame>
        </MyPageWrapper>
    );
};
