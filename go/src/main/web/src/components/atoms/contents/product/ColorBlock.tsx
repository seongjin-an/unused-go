import React from 'react';
import styled from 'styled-components';
import { SxProps } from '../../../../types/sx';
import { Theme } from '../../../../types/theme';
import { handleSxProps } from '../../../../data/theme';
import { TActiveColor } from '../../../molecules/contents/product/ProductInfo';

interface IProps {
  sx?: SxProps<Theme>;
  active?: boolean;
  type?: TActiveColor;
  handleActiveColor?: (type: TActiveColor) => void;
}

export const ColorBlock: React.FC<IProps> = ({ active, type, handleActiveColor, sx }) => {
  const handleActive = () => {
    if (handleActiveColor) {
      if (type) {
        handleActiveColor(type);
      }
    }
  };
  return <StyledColorBlock sx={sx && handleSxProps(sx)} active={active && active} onClick={handleActive} />;
};

const StyledColorBlock = styled.div<{ active?: boolean; sx?: SxProps<Theme> }>`
  width: 38px;
  height: 38px;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid ${({ active }) => (active ? '#fff' : 'transparent')};
  //background-color: rebeccapurple;
  position: relative;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  background-color: ${({ color }) => color};
  ${({ sx }) => ({ ...sx })}
`;
