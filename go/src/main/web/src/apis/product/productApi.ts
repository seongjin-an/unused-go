import { xhr } from '../../utils/xhrUtils';
import { ICategory } from '../../types/product/category';

export const getCategory = async (): Promise<ICategory> => {
  const { data } = await xhr.get('/category/root');
  return data;
}