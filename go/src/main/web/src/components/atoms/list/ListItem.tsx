import React, { useState } from 'react';
import styled from 'styled-components';

import btnLikeNormal from '../../../static/image/dark/page/product/btn/btn_like_normal.png';
import btnLikeActive from '../../../static/image/dark/page/product/btn/btn_like_active.png';
import { Skeleton } from '../skeleton';

interface IProps {
    listType: 'product' | 'community';
}

export const ListItem: React.FC<IProps> = ({ listType }) => {
    const [active, setActive] = useState<boolean>(false);
    const handleClickHeart = () => {
        if (active) {
            setActive(false);
        } else {
            setActive(true);
        }
    };
    return (
        <Wrapper>
            <ListItemImage active={active}>
                <button onClick={handleClickHeart} />
            </ListItemImage>
            <ListItemName>{listType === 'product' ? '아령' : '헬린이 3일차 입니다...'}</ListItemName>
            <ListItemPrice>{listType === 'product' ? '10,000원' : '1시간 전'}</ListItemPrice>
            <ListItemCountValue>관심13&nbsp;채팅10</ListItemCountValue>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 308px;
    height: auto;
    margin-left: 35.5px;
    margin-bottom: 40px;
    cursor: pointer;
`;
const ListItemImage = styled.div<{ active: boolean }>`
    width: 308px;
    height: 373px;
    border-radius: 25px;
    background-color: rgba(196, 196, 196, 0.5);
    position: relative;
    margin-bottom: 20px;
    & > button {
        width: 39px;
        height: 36px;
        background: url(${({ active }) => (active ? btnLikeActive : btnLikeNormal)}) no-repeat;
        position: absolute;
        bottom: 17px;
        right: 20px;
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
        z-index: 1;
        border: none;
        cursor: pointer;
    }
`;
const ListItemName = styled.div`
    font-family: PretendardMedium;
    font-size: 18px;
    color: #ee8aff;
    padding-left: 10px;
`;
const ListItemPrice = styled.div`
    font-family: PretendardSemiBold;
    font-size: 18px;
    color: #ffffff;
    margin: 8px 0;
    padding-left: 10px;
`;
const ListItemCountValue = styled.div`
    font-family: PretendardMedium;
    font-size: 15px;
    color: #adacac;
    padding-left: 10px;
`;
