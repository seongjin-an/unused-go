import React from 'react';
import { SignupArea } from "../../organisms/contents/signup";
import withMain from "../../../hoc/withMain";

export const SignupTemplate: React.FC = () => {
  const WrappedComponent: React.FC = () => (
    <SignupArea/>
  )
  const SignupCompo = withMain(WrappedComponent, {
    paddingTop: theme => theme.padding.secondary
  })
  return <SignupCompo/>
}