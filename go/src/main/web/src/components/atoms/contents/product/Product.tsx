import React, {useState} from "react";
import styled from "styled-components";

import btnLikeNormal from "../../../../static/image/dark/page/product/btn/btn_like_normal.png";
import btnLikeActive from '../../../../static/image/dark/page/product/btn/btn_like_active.png'

export const Product: React.FC = () => {
    const [active, setActive] = useState<boolean>(false)
    const handleClickHeart = () => {
        if(active){
            setActive(false)
        }else{
            setActive(true)
        }
    }
    return(
        <Wrapper>
            <ProductImage active={active}>
                <button onClick={handleClickHeart}/>
            </ProductImage>
            <ProductName>아령</ProductName>
            <ProductPrice>10,000원</ProductPrice>
            <ProductCountValue>관심13&nbsp;채팅10</ProductCountValue>
        </Wrapper>
    )
}
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
`
const ProductImage = styled.div<{active: boolean}>`
  width: 308px;
  height: 373px;
  border-radius: 25px;
  background-color: rgba(196, 196, 196, 0.5);
  position: relative;
  margin-bottom: 20px;
  & > button{
    width: 39px;
    height: 36px;
    background: url(${({active}) => active ? btnLikeActive : btnLikeNormal}) no-repeat;
    position: absolute;
    bottom: 17px;
    right: 20px;
    -webkit-transition: all .2s;
    transition: all .2s;
    z-index: 1;
    border: none;
    cursor: pointer;
  }
`
const ProductName = styled.div`
  font-family: PretendardMedium;
  font-size: 18px;
  color: #EE8AFF;
  padding-left: 10px;
`
const ProductPrice = styled.div`
  font-family: PretendardSemiBold;
  font-size: 18px;
  color: #FFFFFF;
  margin: 8px 0;
  padding-left: 10px;
`;
const ProductCountValue = styled.div`
  font-family: PretendardMedium;
  font-size: 15px;
  color: #ADACAC;
  padding-left: 10px;
`