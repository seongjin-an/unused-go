import { useQuery, UseQueryResult } from "react-query";
import { ICategory } from "../../types/product/category";
import { AxiosError } from "axios";
import { getCategory, getSubCategory } from "../../apis/product/productApi";
import { IResultResponse } from "../../types/common/result";

export const useCategory = (): UseQueryResult<IResultResponse<ICategory[]>, AxiosError> => {
  return useQuery({
    queryKey: ['getCategory'],
    queryFn: getCategory,
  });
};

export const useSubCategory = (type: string): UseQueryResult<IResultResponse<ICategory[]>, AxiosError> => {
  return useQuery({
    queryKey: ['getSubjectCategory', type],
    queryFn: () => getSubCategory(type),
    enabled: !!type,
  });
};
