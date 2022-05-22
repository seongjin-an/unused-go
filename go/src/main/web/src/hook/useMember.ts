import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { checkTokenState, imsi } from "../apis/user/userApi";

export const useMember = (): UseQueryResult<
  { code: string; result: { loginId: string; name: string } },
  AxiosError
> => {
  return useQuery({
    queryKey: ['getImsi'],
    queryFn: checkTokenState,
    suspense: true,
  });
};