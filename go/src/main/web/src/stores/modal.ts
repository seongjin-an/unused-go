import { atom, selector } from 'recoil';

// export const modalState = atom<boolean>({
//   key: 'isModalShow',
//   default: false,
// });
export type TModalType =
  |'info'
  | 'alert'
  | 'confirm';
export interface IModal {
  hide: boolean;
  type?: TModalType;
  header?: string;
  subject?: string;
  message?: string;
  callback?: () => void;
}

export const modalState = atom<IModal>({
  key: 'isModalShow',
  default: {
    hide: false,
    type: 'info',
    header: '알림',
    subject: '안녕하세요.',
    message: '좋은 하루되세요.',
    callback: () => console.log('hello world'),
  },
});
