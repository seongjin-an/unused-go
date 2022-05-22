import { xhr } from '../../utils/xhrUtils';
import { getCookie } from '../../utils/cookieUtils';
import { ILoginInfo } from '../../types/login';
import { ISignupInfo } from '../../types/singupInfo';

export const checkTokenState = async (): Promise<{ code: string; result: { loginId: string; name: string } }> => {
  const { data } = await xhr.get('/member/account', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return data;
};

export const imsi = async () => xhr.get('/test/imsi').then(i => i.data);

export const login = async (loginInfo: ILoginInfo) => xhr.post('/auth/login', loginInfo).then(i => i.data);

export const signup = async (signupInfo: ISignupInfo) => xhr.post('/auth/signup', signupInfo).then(i => i.data);

export const checkId = async (id: string): Promise<{ code: string; result: string }> => {
  const { data } = await xhr.get('/member/check/id', { params: { id } });
  return data;
};
