import React, { useCallback, useState, MouseEvent, useEffect } from 'react';
import styled from 'styled-components';
import { Props as SelectProps, Options } from 'react-select';
import { colors } from 'react-select/dist/declarations/src/theme';
import { SelectInput, TextAreaInput } from '../../../atoms/inputs';
import { OptionType } from '../../../atoms/inputs/SelectInput';

import imgProfile from '../../../../static/image/dark/page/product/img/img_profile.png';
import { ColorBlock, ProductInfoInput } from '../../../atoms/contents/product';
import { Button, BasicButton } from '../../../atoms/button';
import { useCategory } from '../../../../hook/product/useCategory';

export type TActiveButton = 'good' | 'notGoodNotBad' | 'bad' | null;
export type TActiveColor =
  | 'white'
  | 'gray'
  | 'darkGray'
  | 'black'
  | 'red'
  | 'pink'
  | 'orange'
  | 'yellow'
  | 'mint'
  | 'green'
  | 'darkGreen'
  | 'skyBlue'
  | 'blue'
  | 'violet'
  | null;

export const ProductInfo: React.FC = () => {
  const [mainCategory, setMainCategory] = useState<string>('');
  const mainCategoryOption: OptionType[] = [
    { value: 'athletic', label: '운동용품' },
    { value: 'clothes', label: '의류' },
  ];
  const mainDefaultValue = { value: '', label: '대분류' };
  const subCategoryOption: OptionType[] = [
    { value: 'jacketAndBest', label: '재킷 & 베스트' },
    { value: 'topAndT-Shirts', label: '탑 & 티셔츠' },
    { value: 'pantsAndTights', label: '팬츠 & 타이츠' },
    { value: 'socks', label: '양말' },
    { value: 'setup', label: '셋업' },
  ];
  const subDefaultValue = { value: '', label: '소분류' };
  const sizeCategoryOption: OptionType[] = [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
  ];
  const emptyOption: OptionType[] = [{ value: '', label: '' }];

  const sizeDefaultValue = { value: '', label: '사이즈' };
  const [activeButton, setActiveButton] = useState<TActiveButton>(null);
  const handleClickActiveButton = useCallback((type: TActiveButton) => {
    if (type === 'good') {
      setActiveButton('good');
    } else if (type === 'notGoodNotBad') {
      setActiveButton('notGoodNotBad');
    } else if (type === 'bad') {
      setActiveButton('bad');
    }
  }, []);
  const [activeColor, setActiveColor] = useState<TActiveColor>();
  const handleClickActiveColor = useCallback((type: TActiveColor) => {
    if (type === 'white') {
      setActiveColor('white');
    } else if (type === 'gray') {
      setActiveColor('gray');
    } else if (type === 'darkGray') {
      setActiveColor('darkGray');
    } else if (type === 'black') {
      setActiveColor('black');
    } else if (type === 'red') {
      setActiveColor('red');
    } else if (type === 'pink') {
      setActiveColor('pink');
    } else if (type === 'orange') {
      setActiveColor('orange');
    } else if (type === 'yellow') {
      setActiveColor('yellow');
    } else if (type === 'mint') {
      setActiveColor('mint');
    } else if (type === 'green') {
      setActiveColor('green');
    } else if (type === 'darkGreen') {
      setActiveColor('darkGreen');
    } else if (type === 'skyBlue') {
      setActiveColor('skyBlue');
    } else if (type === 'blue') {
      setActiveColor('blue');
    } else if (type === 'violet') {
      setActiveColor('violet');
    }
  }, []);

  const { data: rootCategory } = useCategory();
  const rootCategoryOptions = rootCategory?.result.map(
    category => ({ value: category.type, label: category.name } as OptionType),
  )!;

  const handleChangeMainCategory = (selectedOption: OptionType | OptionType[] | null | void) => {
    console.log('selectedOption:', selectedOption);
  };

  return (
    <StyledProductInfo>
      <div className="user_name">안김안</div>
      <StyledProductFrame>
        <ProductInfoInput placeholder="상품명을 입력해 주세요.(최대 30자)" />
      </StyledProductFrame>
      <StyledProductFrame>
        <div className="product_info_title">카테고리 선택</div>
        <SelectInput
          defaultValue={mainDefaultValue}
          options={rootCategoryOptions}
          callback={handleChangeMainCategory}
        />
        <SelectInput defaultValue={subDefaultValue} options={subCategoryOption} />
      </StyledProductFrame>
      <StyledPrice>
        <ProductInfoInput placeholder="판매가격을 입력해 주세요." styled={{ paddingLeft: '40px', width: '94%' }} />
      </StyledPrice>
      <StyledProductFrame>
        <div className="product_info_title">사이즈</div>
        <SelectInput defaultValue={sizeDefaultValue} options={sizeCategoryOption} />
      </StyledProductFrame>
      <StyledProductFrame>
        <div className="product_info_title">색상</div>
        <div className="color_select_area">
          <ColorBlock
            active={activeColor === 'white'}
            type="white"
            handleActiveColor={handleClickActiveColor}
            sx={theme => ({ backgroundColor: theme.palette.common.white })}
          />
          <ColorBlock
            active={activeColor === 'gray'}
            type="gray"
            handleActiveColor={handleClickActiveColor}
            sx={theme => ({ backgroundColor: theme.palette.common.gray })}
          />
          <ColorBlock
            active={activeColor === 'darkGray'}
            type="darkGray"
            handleActiveColor={handleClickActiveColor}
            sx={theme => ({ backgroundColor: theme.palette.common.darkGray })}
          />
          <ColorBlock
            active={activeColor === 'black'}
            type="black"
            handleActiveColor={handleClickActiveColor}
            sx={theme => ({ backgroundColor: theme.palette.common.black })}
          />
          <ColorBlock
            active={activeColor === 'red'}
            type="red"
            handleActiveColor={handleClickActiveColor}
            sx={theme => ({ backgroundColor: theme.palette.common.red })}
          />
          <ColorBlock
            active={activeColor === 'pink'}
            type="pink"
            handleActiveColor={handleClickActiveColor}
            sx={theme => ({ backgroundColor: theme.palette.common.pink })}
          />
          <ColorBlock
            active={activeColor === 'orange'}
            type="orange"
            handleActiveColor={handleClickActiveColor}
            sx={theme => ({ backgroundColor: theme.palette.common.orange })}
          />
          <ColorBlock
            active={activeColor === 'yellow'}
            type="yellow"
            handleActiveColor={handleClickActiveColor}
            sx={theme => ({ backgroundColor: theme.palette.common.yellow })}
          />
          <ColorBlock
            active={activeColor === 'mint'}
            type="mint"
            handleActiveColor={handleClickActiveColor}
            sx={theme => ({ backgroundColor: theme.palette.common.mint })}
          />
          <ColorBlock
            active={activeColor === 'green'}
            type="green"
            handleActiveColor={handleClickActiveColor}
            sx={theme => ({ backgroundColor: theme.palette.common.green })}
          />
          <ColorBlock
            active={activeColor === 'darkGreen'}
            type="darkGreen"
            handleActiveColor={handleClickActiveColor}
            sx={theme => ({ backgroundColor: theme.palette.common.darkGreen })}
          />
          <ColorBlock
            active={activeColor === 'skyBlue'}
            type="skyBlue"
            handleActiveColor={handleClickActiveColor}
            sx={theme => ({ backgroundColor: theme.palette.common.skyBlue })}
          />
          <ColorBlock
            active={activeColor === 'blue'}
            type="blue"
            handleActiveColor={handleClickActiveColor}
            sx={theme => ({ backgroundColor: theme.palette.common.blue })}
          />
          <ColorBlock
            active={activeColor === 'violet'}
            type="violet"
            handleActiveColor={handleClickActiveColor}
            sx={theme => ({ backgroundColor: theme.palette.common.violet })}
          />
        </div>
      </StyledProductFrame>
      <StyledProductFrame>
        <div className="product_info_title">사용감</div>
        <div className="product_btn_group">
          <Button text="상" type="good" active={activeButton === 'good'} callback={handleClickActiveButton} />
          <Button
            text="중"
            type="notGoodNotBad"
            active={activeButton === 'notGoodNotBad'}
            callback={handleClickActiveButton}
          />
          <Button text="하" type="bad" active={activeButton === 'bad'} callback={handleClickActiveButton} />
        </div>
      </StyledProductFrame>
      <StyledProductFrame>
        <ProductInfoInput placeholder="사용기간을 입력해 주세요." />
        <ProductInfoInput placeholder="보증기간을 입력해 주세요." />
      </StyledProductFrame>
      <StyledProductFrame>
        <TextAreaInput placeholder="기타 추가 정보를 입력해 주세요. (최대 1,000자)" />
        <div className="product_btn_group">
          <BasicButton text="임시저장" kind="basic" />
          <BasicButton text="등록완료" kind="basic" />
        </div>
      </StyledProductFrame>
    </StyledProductInfo>
  );
};
const StyledProductFrame = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 23px;
  & > .product_info_title {
    font-family: PretendardMedium;
    font-size: 20px;
    color: #e7e7e7;
    margin-bottom: 10px;
  }
  & > .color_select_area {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    height: 38px;
  }
  & > .product_btn_group {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    height: 40px;
  }
`;
const StyledPrice = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 23px;
  width: 100%;
  height: auto;
  margin-bottom: 30px;
  position: relative;
  &::before {
    content: '₩';
    display: block;
    font-family: PretendardRegular;
    font-size: 16px;
    color: #e7e7e7;
    position: absolute;
    top: 14px;
    left: 16px;
  }
`;
export const StyledProductInfo = styled.div`
  width: 817px;
  height: auto;
  border-left: 3px solid rgba(196, 196, 196, 0.5);
  padding: 64px 0 124px 53px;
  position: relative;

  & > .user_name {
    font-family: PretendardMedium;
    font-size: 18px;
    color: #e7e7e7;
    padding-left: 24px;
    position: absolute;
    top: 0;
    left: 53px;

    &::before {
      content: '';
      display: block;
      width: 18px;
      height: 18px;
      background: url(${imgProfile}) no-repeat;
      background-size: 100%;
      opacity: 0.7;
      position: absolute;
      top: 2px;
      left: 0;
    }
  }
  & > .color_select_area {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    height: 38px;
  }
  & > .product_name {
    font-family: PretendardMedium;
    font-size: 22px;
    color: #ffffff;
    margin-bottom: 8px;
  }
  & > .product_price {
    font-family: PretendardMedium;
    font-size: 24px;
    color: #ffffff;
    margin-bottom: 45px;
  }
`;
