import React from 'react';
import { MyPageWrapper } from './MyPageWrapper';
import { MyPageInfoFrame, UsedProductBody, UsedProductHead } from '../../../molecules/contents/mypage';
import { ProductChart } from '../../../molecules/contents/product';
import styled from 'styled-components';
import Scrollbar from 'react-scrollbars-custom';

export const ProductsArea: React.FC = () => {
    const items = ['아령', '20000원', 'S', '검정', '거의새것'];
    return (
        <MyPageWrapper>
            <div className="mypage_main_title">나의 중고 시세</div>
            <MyPageInfoFrame sx={{ marginBottom: '20px', position: 'relative' }} titleMaringBottom>
                <div className="mypage_info_title tPink">악력기</div>
                {/*<div className="mypage_info_title">시세</div>*/}
                <ProductChart mypage />
            </MyPageInfoFrame>
            <MyPageInfoFrame>
                <div className="mypage_info_title">나의 중고 리스트</div>
                <UsedProductHead />
                <div style={{ width: '100%', height: '367px', paddingTop: '17px' }}>
                    <StyledScrollbar scrollbarWidth={0}>
                        <UsedProductBody items={items} />
                        <UsedProductBody items={items} />
                        <UsedProductBody items={items} />
                        <UsedProductBody items={items} />
                        <UsedProductBody items={items} />
                        <UsedProductBody items={items} />
                        <UsedProductBody items={items} />
                        <UsedProductBody items={items} />
                    </StyledScrollbar>
                </div>
            </MyPageInfoFrame>
        </MyPageWrapper>
    );
};

const StyledScrollbar = styled(Scrollbar)`
    //position: relative;
    //height: auto;
    universal: true;
    width: 100%;
    height: 367px;

    &:before {
        content: '';
        width: 0.15vw;
        height: auto;
        box-shadow: 0 0.15625vw 0.78125vw 0 rgb(0 0 0 / 15%);
        background-color: #2d2f35;
        position: absolute;
        left: 10px;
    }

    //& .ScrollbarsCustom-Scroller,
    & .ScrollbarsCustom-Content {
        width: 100%;
        height: 100%;
    }

    & .ScrollbarsCustom-ThumbY {
        background-color: #585766 !important;
        width: 0.3125vw !important;
        border-radius: 0.15625vw !important;
    }

    & .ScrollbarsCustom-TrackY {
        background-color: transparent !important;
        width: 0.3125vw !important;
        right: -0.5vw !important;
        top: 2vh !important;
    }
`;
