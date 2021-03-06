import React, { useCallback, useState, MouseEvent, useEffect, useRef, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Props as SelectProps, Options } from 'react-select';
import { colors } from 'react-select/dist/declarations/src/theme';
import { useMutation, useQueryClient } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { SelectInput, TextAreaInput } from '../../../atoms/inputs';
import { OptionType } from '../../../atoms/inputs/SelectInput';

import imgProfile from '../../../../static/image/dark/page/product/img/img_profile.png';
import { ColorBlock, ProductInfoInput } from '../../../atoms/contents/product';
import { Button, BasicButton } from '../../../atoms/button';
import { useCategory, useSubCategory } from '../../../../hook/product/useCategory';
import { modalState } from '../../../../stores/modal';
import { pictureState } from '../../../../stores/pictures';
import { postProdcut } from '../../../../apis/product/productApi';

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
  const [sizeVal, setSizeVal] = useState<string>('');
  const sizeCategoryOption: OptionType[] = [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
  ];
  const sizeDefaultValue = { value: '', label: '사이즈' };
  const handleChangeSize = (selectedOption: OptionType | OptionType[] | null | void) => {
    setSizeVal((selectedOption as OptionType).value);
  };
  const [activeButton, setActiveButton] = useState<TActiveButton>(null);
  const handleClickActiveButton = useCallback(
    (type: TActiveButton) => {
      if (type === activeButton) {
        setActiveButton(null);
        return;
      }
      if (type === 'good') {
        setActiveButton('good');
      } else if (type === 'notGoodNotBad') {
        setActiveButton('notGoodNotBad');
      } else if (type === 'bad') {
        setActiveButton('bad');
      }
    },
    [activeButton],
  );
  const [activeColor, setActiveColor] = useState<TActiveColor>();
  const handleClickActiveColor = useCallback(
    (type: TActiveColor) => {
      if (type === activeColor) {
        setActiveColor(null);
        return;
      }
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
    },
    [activeColor],
  );

  const [productName, setProductName] = useState<string>('');

  const mainDefaultValue = { value: '', label: '대분류' };
  const subDefaultValue = { value: '', label: '소분류' };
  const { data: rootCategory } = useCategory();
  const rootCategoryOptions = rootCategory?.result.map(
    category => ({ value: category.type, label: category.name } as OptionType),
  )!;
  const [mainCategoryVal, setMainCategoryVal] = useState<string>('');
  const handleChangeMainCategory = (selectedOption: OptionType | OptionType[] | null | void) => {
    setMainCategoryVal((selectedOption as OptionType).value);
  };
  const { data: subCategory } = useSubCategory(mainCategoryVal);
  const subCategoryOptions = subCategory?.result.map(
    category => ({ value: category.type, label: category.name } as OptionType),
  );
  const [subCategoryVal, setSubCategoryVal] = useState<string>('');
  const handleChangeSubCategory = (selectedOption: OptionType | OptionType[] | null | void) => {
    setSubCategoryVal((selectedOption as OptionType).value);
  };

  const [price, setPrice] = useState<string>('');
  const [usedDuration, setUsedDuration] = useState<string>('');
  const [guaranteeDuration, setGuaranteeDuration] = useState<string>('');
  const [etcInfo, setEtcInfo] = useState<string>('');

  const openPopup = useSetRecoilState(modalState);
  const pictures = useRecoilValue(pictureState);

  const mutation = useMutation(postProdcut, {});

  const handleSubmitButton = () => {
    console.log('submit button clicked...');
    if (!productName) {
      openPopup({
        type: 'alert',
        hide: true,
        header: '경고',
        subject: '상품명 누락',
        message: '상품명을 입력하세요',
      });
      return;
    }
    if (!mainCategoryVal) {
      openPopup({
        type: 'alert',
        hide: true,
        header: '경고',
        subject: '대분류 카테고리 누락',
        message: '대분류 카테고리를 선택하세요',
      });
      return;
    }
    if (!subCategoryVal) {
      openPopup({
        type: 'alert',
        hide: true,
        header: '경고',
        subject: '소분류 카테고리 누락',
        message: '소분류 카테고리를 선택하세요',
      });
      return;
    }
    if (!price) {
      openPopup({
        type: 'alert',
        hide: true,
        header: '경고',
        subject: '판매가격 누락',
        message: '판매가격을 입력하세요',
      });
      return;
    }
    if (!sizeVal) {
      openPopup({
        type: 'alert',
        hide: true,
        header: '경고',
        subject: '사이즈 누락',
        message: '사이즈를 선택하세요',
      });
      return;
    }
    if (!activeColor) {
      openPopup({
        type: 'alert',
        hide: true,
        header: '경고',
        subject: '색상 누락',
        message: '색상을 선택하세요',
      });
      return;
    }
    if (!activeButton) {
      openPopup({
        type: 'alert',
        hide: true,
        header: '경고',
        subject: '사용감 누락',
        message: '사용감을 선택하세요',
      });
      return;
    }
    if (!usedDuration) {
      openPopup({
        type: 'alert',
        hide: true,
        header: '경고',
        subject: '사용기간 누락',
        message: '사용기간을 입력하세요',
      });
      return;
    }
    if (!guaranteeDuration) {
      openPopup({
        type: 'alert',
        hide: true,
        header: '경고',
        subject: '보증기간 누락',
        message: '보증기간을 입력하세요',
      });
      return;
    }
    if (!etcInfo) {
      openPopup({
        type: 'alert',
        hide: true,
        header: '경고',
        subject: '기타정보 누락',
        message: '기타정보를 입력하세요',
      });
      return;
    }
    if (pictures.files.length === 0) {
      openPopup({
        type: 'alert',
        hide: true,
        header: '경고',
        subject: '사진 누락',
        message: '사진을 등록하세요',
      });
      return;
    }

    const formData = new FormData();
    const productDto = {
      productName,
      categoryId: subCategoryVal,
      price,
      size: sizeVal,
      color: activeColor,
      feeling: activeButton,
      usedDuration,
      guaranteeDuration,
      etcInfo,
    };
    formData.append('product', new Blob([JSON.stringify(productDto)], { type: 'application/json' }));
    pictures.files.forEach(picture => {
      formData.append('pictures', picture)
    });

    console.log('formData:', formData);
    mutation.mutate(formData);
  };

  return (
    <StyledProductInfo>
      <div className="user_name">안김안</div>
      <StyledProductFrame>
        <ProductInfoInput
          placeholder="상품명을 입력해 주세요.(최대 30자)"
          value={productName}
          callback={(event: ChangeEvent<HTMLInputElement>) => setProductName(event.target.value)}
        />
      </StyledProductFrame>
      <StyledProductFrame>
        <div className="product_info_title">카테고리 선택</div>
        <SelectInput
          defaultValue={mainDefaultValue}
          options={rootCategoryOptions}
          callback={handleChangeMainCategory}
        />
        <SelectInput defaultValue={subDefaultValue} options={subCategoryOptions} callback={handleChangeSubCategory} />
      </StyledProductFrame>
      <StyledPrice>
        <ProductInfoInput
          placeholder="판매가격을 입력해 주세요."
          styled={{ paddingLeft: '40px', width: '94%' }}
          value={price}
          callback={(event: ChangeEvent<HTMLInputElement>) => setPrice(event.target.value)}
        />
      </StyledPrice>
      <StyledProductFrame>
        <div className="product_info_title">사이즈</div>
        <SelectInput defaultValue={sizeDefaultValue} options={sizeCategoryOption} callback={handleChangeSize} />
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
        <ProductInfoInput
          placeholder="사용기간을 입력해 주세요."
          value={usedDuration}
          callback={(event: ChangeEvent<HTMLInputElement>) => setUsedDuration(event.target.value)}
        />
        <ProductInfoInput
          placeholder="보증기간을 입력해 주세요."
          value={guaranteeDuration}
          callback={(event: ChangeEvent<HTMLInputElement>) => setGuaranteeDuration(event.target.value)}
        />
      </StyledProductFrame>
      <StyledProductFrame>
        <TextAreaInput
          placeholder="기타 추가 정보를 입력해 주세요. (최대 1,000자)"
          value={etcInfo}
          callback={event => setEtcInfo(event.target.value)}
        />
        <div className="product_btn_group">
          <BasicButton text="임시저장" kind="basic" />
          <BasicButton text="등록완료" kind="basic" onClick={handleSubmitButton} />
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
