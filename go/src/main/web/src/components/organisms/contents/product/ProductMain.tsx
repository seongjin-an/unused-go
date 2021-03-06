import React, { Suspense } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import withMain from '../../../../hoc/withMain';
import { List, ListWrapper, PlaceholderList } from '../../../molecules/contents/list';
import { ProductPicture } from '../../../molecules/contents/product';
import { ProductInfo } from '../../../molecules/contents/product/ProductInfo';
import { MenuNavigator } from '../../../molecules/common';

interface IProps {}

export const ProductMain: React.FC<IProps> = () => {
  const { pathname } = useLocation();
  console.log('pathname:', pathname);
  const menus: string[] = ['운동용품', '아령', '바벨', '원판/플레이트', '벨트', '악력기', '밴드/짐볼', '스트랩/보호대'];
  function WrappedProductMain() {
    return (
      <>
        {pathname.indexOf('list') !== -1 ? (
          <>
            <MenuNavigator menus={menus} />
            <Suspense
              fallback={
                <ListWrapper listType="product">
                  <PlaceholderList />
                </ListWrapper>
              }
            >
              <List listType="product" />
            </Suspense>
          </>
        ) : pathname.indexOf('create') !== -1 ? (
          <>
            <ProductPicture isShow />
            <ProductInfo />
          </>
        ) : null}
      </>
    );
  }
  const ProductMain = withMain(WrappedProductMain, {
    paddingTop: theme => theme.padding.secondary,
  });
  return <ProductMain />;
};
