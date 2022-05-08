export const setCookie = (cookieName: string, value: string, exp: number = 1, path: string = '', domain: string = '') => {
    const date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);
    let cookieText= cookieName + '=' + value
    cookieText+=('; expires='+date.toUTCString());
    cookieText+=(path ? '; path='+ path : '; path=/');
    cookieText+=(domain ? '; domain=' + domain : '');
    document.cookie=cookieText;
}

export const getCookie = (cookieName: string): string|null => {
    const value = document.cookie.match('(^|;) ?' + cookieName + '=([^;]*)(;|$)')
    return value ? value[2] : null // 왜 두 번째 것을 꺼내야 하는지는 확인해보면 이해됨
}

export const deleteCookie = (cookieName: string): void => {
    document.cookie = cookieName + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;'
}