import React, {useState, Suspense} from "react";
import styled, {css, keyframes} from "styled-components";

import {ListItem} from "../../../atoms/list";

import btnArrowDown from '../../../../static/image/dark/page/product/btn/btn_arrow_down.png'
import {useProducts} from "../../../../hook/useProducts";
import {ErrorBoundary} from "react-error-boundary";

interface IProps {
    listType: 'product' | 'community'
}

export const List: React.FC<IProps> = ({listType}) => {
    const [sort, setSort] = useState<boolean>(false)
    const handleSortClick = () => {
        console.log('sort button clicked')
        if (sort) {
            setSort(false)
        } else {
            setSort(true)
        }
    }
    const productListSortItems: string[] = ['인기 순', '즉시 판매가순', '즉시 구매가순']
    const communitySortItems: string[] = ['최신순', '채팅 많은 순', '관심 많은 순']

    const {data: products, status, isPlaceholderData,} = useProducts()
    console.log('products:', products)
    console.log('isPlaceholderData:', isPlaceholderData)

    return (
        <StyledListWrapper>
            <StyledSortArea sort={sort}>
                <button onClick={handleSortClick}>{listType === 'product' ? '인기 순' : '최신 순'}</button>
                <ul>
                    {
                        listType === 'product' ?
                            productListSortItems.map(item => <li key={item}>{item}</li>) :
                            communitySortItems.map(item => <li key={item}>{item}</li>)
                    }
                </ul>
            </StyledSortArea>
            {/*<Suspense fallback={<div style={{color: 'white', fontSize: '300px'}}>loading...</div>}>*/}
                {/*<ErrorBoundary fallback={<>error</>} >*/}
                    <StyledList>

                        {
                            products?.map((product, index) => (
                                <ListItem key={index} listType={listType}/>
                            ))
                            // Array(9).fill(0).map((_, index) => (
                            //     <ListItem key={index} listType={listType}/>
                            // ))
                        }
                    </StyledList>
                {/*</ErrorBoundary>*/}
            {/*</Suspense>*/}
            <StyledSeeMore>더보기</StyledSeeMore>
        </StyledListWrapper>
    )
}
const StyledSeeMore = styled.button`
  //margin-left: 475px;
  cursor: pointer;
  border: none;
  width: 124px;
  height: 52px;
  font-family: PretendardMedium;
  font-size: 22px;
  color: #000000;
  background-color: #FFE36D;
  margin: 0 auto;
  border-radius: 10px;
  -webkit-transition: -webkit-transform .3s ease-in-out;
  transition: -webkit-transform .3s ease-in-out;
  transition: transform .3s ease-in-out;
  transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;

  &:hover {
    transform: scale(1.2, 1.2);
    -ms-transform: scale(1.2, 1.2);
    -webkit-transform: scale(1.2, 1.2);
  }
`
const StyledList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`
const StyledSortArea = styled.div<{ sort: boolean }>`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  background: transparent;

  & > ul {
    margin: 0;
    width: 164px;
    height: auto;
    border-radius: 10px;
    background-color: #fff;
    padding: 10px 0px;
    position: absolute;
    top: 35px;
    right: 0;
    z-index: 1;

    // display: none;
    // opacity: 0;
      // ${({sort}) => sort ? css`opacity: 1;
      display: block` : css`opacity: 0;
      display: block`};
      // animation-name: ${({sort}) => sort ? fadeIn : fadeOut};
    // animation-duration: 1s;
    // animation-iteration-count: 1;

    visibility: ${({sort}) => sort ? 'visible' : 'hidden'};
    animation: ${({sort}) => sort ? fadeIn : fadeOut} .3s ease-out;
    transition: visibility .3s ease-out;

    & > li {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      list-style: none;
      justify-content: center;
      width: 100%;
      height: 25px;
      font-family: PretendardSemiBold;
      font-size: 18px;
      color: #0F0F0F;
      cursor: pointer;
    }

    & > li:first-of-type {
      padding-left: 23px;
    }

    & > li:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  & > button {
    cursor: pointer;
    width: auto;
    height: 30px;
    font-family: PretendardSemiBold;
    font-size: 18px;
    padding-right: 27px;
    color: #FFFFFF;
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    border: none;

    &:after {
      content: "";
      display: block;
      width: 16px;
      height: 9px;
      background: url(${btnArrowDown}) no-repeat;
      background-size: 100%;
      position: absolute;
      top: 10px;
      right: 0;
    }
  }
`

const StyledListWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 1032px;
  height: auto;
  padding-top: 53px;
  position: relative;
`