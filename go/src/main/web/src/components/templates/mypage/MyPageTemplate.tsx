import React from "react";
import {useLocation} from "react-router-dom";
import withMain from "../../../hoc/withMain";
import {MenuNavigator} from "../../molecules/common";
import {MyPageBankInfo, MyPageInfoFrame, ProfileFrame} from "../../molecules/contents/mypage";
import {Account, Intro, MyPageWrapper} from "../../organisms/contents/mypage";

export const MyPageTemplate = () => {
    const {pathname} = useLocation()
    const mymenus: string[] = ['MY PAGE', '내 정보', '프로필 정보', '판매 정산 계좌', '나의 중고시세',
                                '쇼핑정보', '구매 내역', '판매 내역', '관심 상품']
    const WrappedComponent: React.FC = () => (
        <>
            <MenuNavigator menus={mymenus} mypage/>
            {
                pathname.indexOf('account') !== -1 ? (
                    <Account/>
                ) : (
                    pathname.indexOf('intro') !== -1 ? (
                        <Intro/>
                    ) : null
                )
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