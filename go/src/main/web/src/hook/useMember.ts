import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { imsi } from '../apis/user/userApi';

export const useMember = (): UseQueryResult<string, AxiosError> => {
  return useQuery({
    queryKey: ['getImsi'],
    queryFn: imsi,
    suspense: true,
  });
};
