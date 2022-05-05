import { atom, selector } from 'recoil';

export const modalState = atom<boolean>({
    key: 'isModalShow',
    default: false,
});
