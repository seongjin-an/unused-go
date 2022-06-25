import React from 'react';
import styled from '@emotion/styled';

import btnDelete from '../../../../static/image/dark/page/product/btn/btn_delete.png';
interface IProps{
  src: string | undefined;
  idx: number;
  handleExcludeButton: (idx: number) => void;
}
export const SmallPicture: React.FC<IProps> = ({src, idx, handleExcludeButton}) => {
  return (
    <StyledMallPicture>
      {
        src ?
          <img src={src}/> :
          <StyledEmptySmallPic/>
      }

      <button onClick={() => handleExcludeButton(idx)}/>
    </StyledMallPicture>
  );
}
const StyledEmptySmallPic = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 15px;
  background-color: rgba(196, 196, 196, 0.5);
  background-repeat: no-repeat;
  position: relative;
  margin-right: 15.5px;
`
const StyledMallPicture = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 15px;
  background-color: rgba(196, 196, 196, 0.5);
  background-repeat: no-repeat;
  position: relative;
  margin-right: 15.5px;
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    //border: none;
    //background: none;
  }
  & > button {
    width: 15px;
    height: 15px;
    background: url(${btnDelete}) no-repeat;
    position: absolute;
    top: 9px;
    right: 9px;
    z-index: 1;
    border: none;
    cursor: pointer;
    -webkit-transition: -webkit-transform 0.3s ease-in-out;
    transition: -webkit-transform 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
    &:hover {
      transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
    }
  }
`;
