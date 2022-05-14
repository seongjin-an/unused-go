import { xhr } from '../../utils/xhrUtils';
import { getCookie } from '../../utils/cookieUtils';

export const checkTokenState = () =>
  xhr({
    url: '/member',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getCookie('token')}`,
    },
  });

export const imsi = async () => await xhr.get('/test/imsi').then(i => i.data);
