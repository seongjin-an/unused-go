import React from "react";
import {useLocation} from "react-router-dom";
import withMain from "../../../hoc/withMain";
import {MenuNavigator} from "../../molecules/common";
import {MyPageBankInfo, MyPageInfoFrame} from "../../molecules/contents/mypage";
import {MyPageWrapper} from "../../organisms/contents/mypage";

export const MyPageTemplate = () => {
    const {pathname} = useLocation()
    const mymenus: string[] = ['MY PAGE', '내 정보', '프로필 정보', '판매 정산 계좌', '나의 중고시세',
                                '쇼핑정보', '구매 내역', '판매 내역', '관심 상품']
    const WrappedComponent: React.FC = () => (
        <>
            <MenuNavigator menus={mymenus} mypage/>
            {
                pathname.indexOf('account') !== -1 ? (
                    <MyPageWrapper>
                        <div className="mypage_main_title">판매 정산 계좌</div>
                        <MyPageInfoFrame>
                            <div className="mypage_info_title">정산 계좌 등록</div>
                            <MyPageBankInfo text="은행명" placeholder="은행명을 입력하세요."/>
                            <MyPageBankInfo text="계좌번호" placeholder="- 없이 입력하세요."/>
                            <MyPageBankInfo text="예금주" placeholder="예금주명을 정확히 입력하세요."/>
                        </MyPageInfoFrame>
                    </MyPageWrapper>
                ) : null
            }
        </>
    )
    const MyPageComponent = withMain(WrappedComponent, {paddingTop: theme => theme.padding.secondary})
    return(
        <>
            <MyPageComponent/>
        </>
    )
}