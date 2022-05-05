import { IProduct } from '../types/types';
/*
id
name
type
price
time
 */
export const createFakeProducts = (): IProduct[] => {
    return Array(10)
        .fill(0)
        .map((_, index) => {
            return {
                id: index.toString(),
                name: `product ${index}`,
                price: index * 1000,
                time: new Date().toString(),
                type: 'product',
            };
        });
};

export const createFakeProducts2 = (): IProduct[] => {
    return Array(10)
        .fill(0)
        .map((_, index) => {
            return {
                id: (index + 10).toString(),
                name: `product ${index}`,
                price: index * 1000,
                time: new Date().toString(),
                type: 'product',
            };
        });
};
