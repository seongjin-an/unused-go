import React from 'react';
import { createPortal } from 'react-dom';

interface IProps {
  selector?: string;
}

// production 모드가 아닐 경우 React.StrictMode에 의해 findDOMNode is deprecated in StrictMode 가 발생함
// 하지만 최종 목표인.. production 모드에서는 문제될 것은 없음
export const Portal: React.FC<IProps> = ({ selector, children }) => {
  const rootElement = document.getElementById(selector || 'portal');
  return <>{rootElement ? createPortal(children, rootElement) : children}</>;
};
