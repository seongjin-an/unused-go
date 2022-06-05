import { useQuery, UseQueryResult } from "react-query";
import { ICategory } from "../../types/product/category";
import { AxiosError } from "axios";
import { getCategory } from "../../apis/product/productApi";
import { IResultResponse } from "../../types/common/result";

export const useCategory = (): UseQueryResult<IResultResponse<ICategory[]>, AxiosError> => {
  return useQuery({
    queryKey: ['getCategory'],
    queryFn: getCategory,
  })
}