import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { List, ListWrapper, PlaceholderList } from '../../molecules/contents/list';
import withMain from '../../../hoc/withMain';
import { CommunityNavigator } from '../../molecules/contents/community';

export const CommunityTemplate: React.FC = () => {
  const { pathname } = useLocation();
  const WrappedComponent: React.FC = () => (
    <>
      <CommunityNavigator />
      <Suspense
        fallback={
          <ListWrapper listType="community">
            <PlaceholderList />
          </ListWrapper>
        }
      >
        <List listType="community" />
      </Suspense>
    </>
  );
  const Community = withMain(WrappedComponent, {
    paddingTop: theme => theme.padding.secondary,
  });
  return <Community />;
};
