import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { checkTokenState } from '../apis/user/userApi';

export const useMember = (
  handleError: (error: AxiosError) => void,
): UseQueryResult<{ code: string; result: { loginId: string; name: string } }, AxiosError> => {
  return useQuery({
    queryKey: ['getImsi'],
    queryFn: checkTokenState,
    // suspense: true,
    refetchOnMount: true,
    staleTime: 0,
    onError: error => {
      handleError(error);
      Promise.reject(new Error(error.message));
    },
  });
};
