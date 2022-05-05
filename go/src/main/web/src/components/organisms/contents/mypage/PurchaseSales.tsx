import React from 'react';
import { MyPageWrapper } from './MyPageWrapper';
import { HistoryBox, HistoryFrame, MyPageInfoFrame, PurchaseHistoryFrame } from '../../../molecules/contents/mypage';
import { SelectInput } from '../../../atoms/inputs';
import { OptionType } from '../../../atoms/inputs/SelectInput';

interface IProps {
    mode: 'purchase' | 'sales';
}

export const PurchaseSales: React.FC<IProps> = ({ mode }) => {
    const options: OptionType[] = [
        { label: '전체', value: 'total' },
        { label: '입찰중', value: 'bidding' },
        { label: '기한만료', value: 'expired' },
    ];
    const defaultValue = { label: '전체', value: 'total' };
    return (
        <MyPageWrapper>
            <MyPageInfoFrame titleMaringBottom>
                <div className="mypage_info_title">{mode === 'purchase' ? '구매' : '판매'} 내역</div>
                <HistoryFrame>
                    <HistoryBox text={(mode === 'purchase' ? '구매' : '판매') + ' 입찰'} value="0" first mode={mode} />
                    <HistoryBox text="진행 중" value="0" />
                    <HistoryBox text="종료" value="0" />
                </HistoryFrame>
            </MyPageInfoFrame>
            <MyPageInfoFrame>
                <SelectInput options={options} defaultValue={defaultValue} small />
                <PurchaseHistoryFrame />
            </MyPageInfoFrame>
        </MyPageWrapper>
    );
};
