import { useCallback } from "react";
import { AxiosError } from "axios";

type status401 = 401;
type status403 = 403;
type status409 = 409;
type status500 = 500;
type serviceCode10001 = 10001;
type serviceCode10002 = 10002;

const isStatus401 = (value: unknown): value is status401 => value === 401
const isStatus403 = (value: unknown): value is status403 => value === 403
const isStatus409 = (value: unknown): value is status409 => value === 409
const isStatus500 = (value: unknown): value is status500 => value === 500
const isServiceCode10001 = (value: unknown): value is serviceCode10001 => value === 10001
const isServiceCode10002 = (value: unknown): value is serviceCode10002 => value === 10002

// export type IErrorHandler = {
//   [index: string]: () => void;
// } & {
//   [index in keyof status401]: { default: () => void };
// } & {
//   [index in keyof status403]: { default: () => void };
// } & {
//   [index in keyof status409]: {
//     serviceCode10001: () => void;
//     serviceCode10002: () => void;
//   };
// } & {
//   [index in keyof status500]: { default: () => void };
// } & {
//   common: () => void;
//   default: () => void;
//   status401: {
//     default: () => void;
//   };
//   status403: {
//     default: () => void;
//   };
//   status409: {
//     serviceCode10001: () => void;
//     serviceCode10002: () => void;
//   };
//   status500: {
//     default: () => void;
//   };
// };
export interface IError {
  status: number | string | status401 | status403 | status409 | status500;
  response: {
    meta: {
      code: string;
    };
  };
}

interface IErrorHandler2 {
  [index: string]: (() => void) | Record<string, unknown>;
}
const defaultHandlers = {
  common: () => console.log('common handler'),
  default: () => console.log('default handler'),
  status401: {
    default: () => console.log('handler401'),
  },
  status403: {
    default: () => console.log('handler403'),
  },
  status409: {
    serviceCode10001: () => console.log('handler40910001'),
    serviceCode10002: () => console.log('handler40910002'),
  },
  status500: {
    default: () => console.log('handler500'),
  },
};

export const useApiError = () => {
  const handleError = useCallback((error: AxiosError) => {
    // const httpStatus = error.status;
    // const serviceCode = error.response.meta.code;
    const httpStatus = 401
    const serviceCode = 10001
    if(isStatus401(httpStatus)) {
      defaultHandlers.status401.default()
    }else if(isStatus403(httpStatus)){
      defaultHandlers.status403.default()
    }else if(isStatus409(httpStatus) && isServiceCode10001(serviceCode)){
      defaultHandlers.status409.serviceCode10001()
    }else if(isStatus409(httpStatus) &&isServiceCode10002(serviceCode)){
      defaultHandlers.status409.serviceCode10002()
    }else if(isStatus500(httpStatus)){
      defaultHandlers.status500.default()
    }else{
      defaultHandlers.default()
    }
    defaultHandlers.common()
  },[])
  return {handleError}
};
