import React from 'react';
import styled, { css } from 'styled-components';
import { TWrapper } from '../../../../types/wrapper';

interface IProps {
  type: TWrapper;
}

export const Wrapper: React.FC<IProps> = ({ type, children }) => {
  return <StyledWrapper type={type}>{children}</StyledWrapper>;
};
const StyledWrapper = styled.div<{ type: TWrapper }>`
  ${({ type }) => (type === 'basic' ? `${StyledBasicWrapper}` : null)}
`;
const StyledBasicWrapper = css`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: auto;
  width: 996.5px;
  height: auto;
  & > .login_title {
    font-family: PretendardMedium;
    font-size: 22px;
    color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    letter-spacing: 10px;
  }
`;
