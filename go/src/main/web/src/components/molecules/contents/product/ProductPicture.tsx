import React, { ChangeEvent, MutableRefObject, useRef, useState } from "react";
import styled, { css } from "styled-components";

import imgCamera from '../../../../static/image/dark/page/product/img/img_camera.png';
import { SmallPicture } from '../../../atoms/contents/product';
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalState } from "../../../../stores/modal";
import { pictureState } from "../../../../stores/pictures";

interface IProps {
  isShow: boolean;
}
export const ProductPicture: React.FC<IProps> = ({ isShow }) => {
  const [uploadPicture, setUploadPicture] = useState<boolean>(false)
  const fileRef = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  // const [sources, setSources] = useState<string[]>();
  const setIsOpen = useSetRecoilState(modalState)
  const [pics, setPics] = useState<string[]>([])
  const [sources, setSources] = useRecoilState(pictureState);
  const handleChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if((event.target.files as FileList).length === 0){
      return;
    }
    if((event.target.files as FileList).length > 5){
      setIsOpen({
        hide: true,
        type: 'alert',
        header: '경고',
        subject: '초과',
        message: '최대 5개까지 등록할 수 있습니다.',
      });
      return;
    }
    const files: FileList = (event.target.files as FileList)
    console.log('files:', files)
    console.log(Object.values(files))


    let _files = Array.from(files).map(file => {
      const fileReader = new FileReader();
      return new Promise(resolve => {
        fileReader.onload = () => resolve(fileReader.result);
        fileReader.readAsDataURL(file)
      })
      // fileReader.readAsDataURL(file)
      // fileReader.onload = event => {
      //   setSources(prev => [...(prev as TSources[]), (event.target as FileReader).result] )
      // }
    })
    const res = await Promise.all(_files)
    console.log('res:', res)
    setSources({ files: Object.values(files) });
    setPics(res as string[]);
    // fileReader.readAsDataURL(files[0])
    // fileReader.onload = (event) => {
    //   setSource1((event.target as FileReader).result)
    // }
    setUploadPicture(true)
  }
  const handleExcludeButton = (idx: number) => {
    setSources(currVal => ({ ...currVal, files: currVal.files.filter((_, index) => index !== idx) }));
    setPics(currVal => currVal.filter((_, index) => index !== idx))
  }
  return (
    <StyledProductPicture>
      {
        uploadPicture ?
          <StyledPictureContentBox src={ pics ? pics[0] : undefined } onClick={() => fileRef.current.click()}/> :
          <StyledPictureContentBox onClick={() => fileRef.current.click()} />
      }
      <input ref={fileRef} type="file" style={{ display: 'none' }} onChange={handleChangeFile} multiple />
      {isShow ? (
        <div className="picture_list">
          <SmallPicture src={pics ? pics[1] : undefined} idx={1} handleExcludeButton={handleExcludeButton} />
          <SmallPicture src={pics ? pics[2] : undefined} idx={2} handleExcludeButton={handleExcludeButton} />
          <SmallPicture src={pics ? pics[3] : undefined} idx={3} handleExcludeButton={handleExcludeButton} />
          <SmallPicture src={pics ? pics[4] : undefined} idx={4} handleExcludeButton={handleExcludeButton} />
        </div>
      ) : null}
    </StyledProductPicture>
  );
};
const StyledProductPicture = styled.div`
  width: 432px;
  height: auto;
  margin-right: 38px;
  & > .picture_list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 96px;
  }
`;
const picbox = css`
  width: 400px;
  height: 400px;
  border-radius: 20px;
  background-color: rgba(196, 196, 196, 0.5);
  background-image: url(${imgCamera});
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 15.5px;
  cursor: pointer;
`;
const StyledEmptyPictureBox = styled.div`${picbox}`;

const StyledPictureContentBox = styled.img`${picbox}`;
