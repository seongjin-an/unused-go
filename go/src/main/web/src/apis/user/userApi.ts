import { xhr } from '../../utils/xhrUtils';
import { getCookie } from '../../utils/cookieUtils';
import { ILoginInfo } from "../../types/login";
import { ISignupInfo } from "../../types/singupInfo";

export const checkTokenState = () =>
  xhr({
    url: '/member',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getCookie('token')}`,
    },
  });

export const imsi = async () => await xhr.get('/test/imsi').then(i => i.data);

export const login = async (loginInfo: ILoginInfo) => await xhr.post('/auth/login', loginInfo).then(i => i.data)

export const signup = async (signupInfo: ISignupInfo) => await xhr.post('/auth/signup', signupInfo).then(i => i.data)