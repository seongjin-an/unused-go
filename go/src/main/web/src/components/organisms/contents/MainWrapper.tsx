import React from 'react';
import styled from 'styled-components';
import withMain from '../../../hoc/withMain';
import { SxProps } from '../../../types/sx';
import { Theme } from '../../../types/theme';

interface IProps {
    sx?: SxProps<Theme>;
    render: () => JSX.Element;
}

export const MainWrapper: React.FC<IProps> = ({ sx, render }) => {
    return <StyledWrapper sx={sx}>{render()}</StyledWrapper>;
};
const StyledWrapper = styled.section<{ sx?: SxProps<Theme> }>`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: auto;
    height: auto;
    padding: 0 320px 150px 320px;
    background-color: #0f0655;
    ${({ sx }) => ({ ...sx })};
`;
