import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { checkTokenState, imsi } from "../apis/user/userApi";
import { IError } from "./error/useApiError";

export const useMember = (
  handleError: (error: AxiosError) => void,
): UseQueryResult<{ code: string; result: { loginId: string; name: string } }, AxiosError> => {
  return useQuery({
    queryKey: ['getImsi'],
    queryFn: checkTokenState,
    // suspense: true,
    // onError: (err) => handleError(err)
    onError: (error: AxiosError) => error
  });
};