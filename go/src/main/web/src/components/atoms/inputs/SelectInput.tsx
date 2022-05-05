import React from 'react';
import styled, { keyframes } from 'styled-components';
import Select, { Options } from 'react-select';

export type OptionType = {
    value: string;
    label: string;
};

export interface ISelectInputProps {
    options: OptionType[];
    defaultValue: OptionType;
    small?: boolean;
}

export const SelectInput: React.FC<ISelectInputProps> = ({ defaultValue, options, small }) => {
    return (
        <StyledSelect
            options={options}
            isSearchable={true}
            classNamePrefix="area-select"
            small={small}
            defaultValue={defaultValue}
            onChange={() => console.log('hi')}
        />
    );
};

const StyledSelect = styled(Select)<{ small?: boolean }>`
    //최상위 속성
    .area-select__control {
        cursor: pointer;
        width: ${({ small }) => (small ? '162px' : '100%')};
        height: 40px;
        font-family: PretendardLight;
        font-size: 16px;
        color: #e7e7e7;
        font-weight: bold;
        text-align: left;
        letter-spacing: -0.015625vw;
        //padding-left: 0.45vw;
        padding-left: 0px;
        //border-radius: 0.26vw;
        border-radius: 5px;
        //border: solid 0.05vw rgba(251, 250, 255,0.25);
        border: 2px solid rgba(196, 196, 196, 0.7);
        //background-color: rgba(162, 159, 189,0.25);
        background-color: transparent;

        margin: 0;
        margin-bottom: 11px;
        float: left;
    }

    //48 50 56 0.95
    //셀렉트된 속성
    .area-select__single-value {
        color: #fff;
        font-weight: bold;
    }

    //.area-select__single-value,
    //셀렉트 박스 옵션속성
    .area-select__placeholder,
    .area-select__option {
        //color: #9ca0b5;
        color: #fff;
        font-family: NotoSansCJKkr, serif;
        font-size: 0.7vw;
        font-weight: bold;
        background-color: rgb(122, 69, 255);
    }

    //.area-select__single-value:hover,
    .area-select__placeholder:hover,
    .area-select__option:hover {
        //color: #747cd6;
        color: #ee8aff;
        transition: color 0.2s ease-in-out;
        //background-color: rgb(122, 69, 255);
    }

    .area-select__option:active {
        //background-color: rgba(48, 50, 56, 0.95);
        background-color: #341cff;
    }

    //오른쪽 화살표 사이에 경계선
    .area-select__indicator-separator {
        display: none;
    }

    //루트의?
    .area-select__value-container {
        padding: 0 6px;
    }

    //arrow
    .area-select__indicator {
        padding: 0;
        padding-right: 10px;
    }

    //활성화되었을 때 리스트
    .area-select__menu,
    .area-select__menu-list {
        width: ${({ small }) => (small ? '162px' : '100%')};
        padding: 0;
        //border-radius: 0.26vw;
        border-radius: 5px;
        margin: 0;
        border: 2px solid rgba(196, 196, 196, 0.7);
        background-color: #21248d;
        margin-top: -7px;
        padding: 7px 0;
    }

    //활성화되었을 보여지는 리스트를 감싸는 영역
    .area-select__menu,
    .area-select__option {
        cursor: pointer;
        border: none;
        font-family: PretendardRegular;
        //background-color: #0d0d17;
        background-color: transparent;
        margin: 0;
        height: auto;
    }

    .area-select__option--is-selected {
        background-color: #341cff;
    }
`;
