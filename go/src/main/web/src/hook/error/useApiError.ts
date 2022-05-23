import { useCallback } from "react";
interface IProps{
  [key: string]: () => void;
  [key: number]: () => void;
}
type status401 = 401;
type status403 = 403;
type status409 = 409;
type status500 = 500;
type serviceCode10001 = 10001;
type serviceCode10002 = 10002;
export type IErrorHandler = {
  [index: string]: () => void;
} & {
  [index in keyof status401]: { default: () => void };
} & {
  [index in keyof status403]: { default: () => void };
} & {
  [index in keyof status409]: {
    serviceCode10001: () => void;
    serviceCode10002: () => void;
  };
} & {
  [index in keyof status500]: { default: () => void };
} & {
  common: () => void;
  default: () => void;
  status401: {
    default: () => void;
  };
  status403: {
    default: () => void;
  };
  status409: {
    serviceCode10001: () => void;
    serviceCode10002: () => void;
  };
  status500: {
    default: () => void;
  };
};
interface IError {
  status: string | status401 | status403 | status409 | status500;
  response: {
    meta: {
      code: string;
    };
  };
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

const useApiError = (handlers: IErrorHandler) => {
  const handleError = useCallback((error: IError) => {
    const httpStatus = error.status;
    const serviceCode = error.response.meta.code;
    Object.prototype.hasOwnProperty.call(handlers, httpStatus)
    Object.prototype.hasOwnProperty.call(handlers[httpStatus], serviceCode)
      handlers[httpStatus];
    switch(true){
      case handlers && Object.prototype.hasOwnProperty.call(handlers, httpStatus) && Object.prototype.hasOwnProperty.call(handlers[httpStatus], serviceCode): {
      }
    }
    // switch(true){
    //   // case handlers && handlers.hasOwnProperty(httpStatus):
    //   case handlers && Object.prototype.hasOwnProperty.call(handlers, httpStatus) &&
    //     Object.prototype.hasOwnProperty.call(handlers[httpStatus], serviceCode):
    //     console.log('hi')
    //     break;
    // }
  },[handlers])
};
