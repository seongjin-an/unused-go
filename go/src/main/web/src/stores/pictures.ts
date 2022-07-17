import { atom } from "recoil";
interface IPicture{
  files: File[];
}
export const pictureState = atom<IPicture>({
  key: 'productPictures',
  default: {
    files: [],
  },
});
