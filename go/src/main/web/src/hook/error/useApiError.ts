import { useCallback } from 'react';
import { AxiosError } from 'axios';

type TErrorFunction = () => void;

type TIndexFunction = {
  [index: string]: TErrorFunction;
};
type IErrorHandler = Record<string, TIndexFunction | TErrorFunction>;

function isErrorFunction(value: unknown): value is TErrorFunction {
  return typeof value === 'function';
}

function isIndexFunction(value: unknown): value is TIndexFunction {
  return typeof value === 'object';
}

const defaultHandlers: IErrorHandler = {
  common: () => console.log('common handler'),
  default: () => console.log('default handler'),
  401: {
    default: () => console.log('401 default handler'),
  },
  403: {
    default: () => console.log('403 default handler'),
  },
  409: {
    10001: () => console.log('409 default handler 10001'),
    10002: () => console.log('409 default handler 10002'),
  },
  500: {
    default: () => console.log('500 default handler'),
  },
};

export const useApiError = (handler?: IErrorHandler) => {
  const handleError = useCallback(
    (error: AxiosError) => {
      // const httpStatus = error.code || 'default';
      const httpStatus = error.code || 'default';
      const serviceCode = error.code !== '409' ? 'default' : '10001';
      let _handlerError
      if(handler){
        _handlerError = handler[httpStatus]
      } else {
        _handlerError = defaultHandlers[httpStatus]
      }
      switch (true){
        case handler && isErrorFunction(_handlerError):
          (_handlerError as TErrorFunction)();
          break;
        case handler && isIndexFunction(_handlerError):
          (_handlerError as TIndexFunction)[serviceCode]();
          break;
        case isErrorFunction(_handlerError):
          (_handlerError as TErrorFunction)();
          break;
        case isIndexFunction(_handlerError):
          (_handlerError as TIndexFunction)[serviceCode]();
          break;
        default:
          (defaultHandlers.default as TErrorFunction)();
      }
      (defaultHandlers.common as TErrorFunction)();
    },
    [handler],
  );
  return { handleError };
};
