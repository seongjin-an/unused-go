import React from "react";
import styled from "styled-components";

import imgCamera from '../../../../static/image/dark/page/product/img/img_camera.png';
import {SmallPicture} from "../../../atoms/contents/product";

interface IProps{
    isShow: boolean;
}


export const ProductPicture: React.FC<IProps> = ({isShow}) => {
    return(
        <StyledProductPicture>
            <div className="picture_box"/>
            {
                isShow ? (<div className="picture_list">
                    <SmallPicture/>
                    <SmallPicture/>
                    <SmallPicture/>
                    <SmallPicture/>
                </div>) : null
            }
        </StyledProductPicture>
    )
}
const StyledProductPicture = styled.div`
  width: 432px;
  height: auto;
  margin-right: 38px;
  & > .picture_box{
    width: 400px;
    height: 400px;
    border-radius: 20px;
    background-color: rgba(196, 196, 196, 0.5);
    background-image: url(${imgCamera});
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 15.5px;
  }
  & > .picture_list{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 96px;
  }
`