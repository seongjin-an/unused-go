import React from 'react';
import withMain from "../../../hoc/withMain";
import { LoginArea } from '../../organisms/contents/login';

export const LoginTemplate: React.FC = () => {
  const WrappedComponent: React.FC = () => (
    <LoginArea />
  );
  const LoginCompo = withMain(WrappedComponent, {
    paddingTop: theme => theme.padding.secondary,
    marginBottom: theme => theme.margin.main,
  });
  return <LoginCompo/>;
};
