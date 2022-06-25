import { atom } from "recoil";
interface IPicture{
  files: string[];
}
export const pictureState = atom<IPicture>({
  key: 'productPictures',
  default: {
    files: [],
  },
});
