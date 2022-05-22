import { useQuery, UseQueryResult } from 'react-query';
import { Axios, AxiosResponse, AxiosError } from "axios";
import { checkId, checkTokenState } from "../apis/user/userApi";

export const useCheckId = (id: string): UseQueryResult<{ code: string; result: string }, AxiosError> => {
  return useQuery({
    queryKey: ['checkId'],
    queryFn: () => checkId(id),
    refetchOnWindowFocus: false,
    enabled: false,
  });
};
