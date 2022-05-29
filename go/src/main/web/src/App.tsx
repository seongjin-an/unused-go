import React, { useContext, useState } from 'react';
import { QueryErrorResetBoundary, QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { RecoilRoot, useRecoilState } from 'recoil';
import { Error, NotFound } from './pages/error';
import { ProductList, DetailProduct, CreateProduct } from './pages/product';
import { Account, Intro, Profile, PurchaseSalesHistory, RegisteredHistory, SoldHistory } from './pages/mypage';
import { Main } from './pages/main';
import { Community } from './pages/community';
import TestPage from './pages/TestPage';
import { Modal } from './components/molecules/common';
import { modalState } from './stores/modal';
import ModalContext from './contexts/modalContext';
import { LoginPage } from './pages/login/LoginPage';
import { SignupPage } from './pages/signup';

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    },
  },
});

function App() {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  // const handleOpen = () => {
  //     setIsOpen(true);
  // }
  // const handleClose = () => {
  //     setIsOpen(false);
  // }
  // const {state: {isOpen}, action: {setIsOpen}} = useContext(ModalContext)
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  return (
    <QueryClientProvider client={queryClient}>
      {/* <QueryErrorResetBoundary> */}
      {/*    {({reset}) => ( */}
      {/*        <ErrorBoundary */}
      {/*            onReset={reset} */}
      {/*            fallbackRender={({resetErrorBoundary}) => ( */}
      {/*                <div> */}
      {/*                    There was an error! */}
      {/*                    <button onClick={() => resetErrorBoundary()}>Try again</button> */}
      {/*                </div> */}
      {/*            )} */}
      {/*        > */}
      <DashWrap>
        {/* <ErrorBoundary FallbackComponent={Error}> */}
        <BrowserRouter basename="unused-go">
          <Routes>
            <Route path="test" element={<TestPage />} />

            <Route path="product" element={<Outlet />}>
              <Route path="list" element={<ProductList />} />
              <Route path="create" element={<CreateProduct />} />
              <Route path=":id" element={<DetailProduct />} />
            </Route>

            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />

            <Route path="mypage" element={<Outlet />}>
              <Route path="account" element={<Account />} />
              <Route path="intro" element={<Intro />} />
              <Route path="profile" element={<Profile />} />
              <Route path="products" element={<RegisteredHistory />} />
              <Route path="purchase/history" element={<PurchaseSalesHistory />} />
              <Route path="sales/history" element={<PurchaseSalesHistory />} />
            </Route>

            <Route path="main" element={<Main />} />

            <Route path="community" element={<Community />} />

            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        {/* </ErrorBoundary> */}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalBody>
            <h2>제목</h2>
            <p>내용</p>
          </ModalBody>
        </Modal>
      </DashWrap>
      {/*        </ErrorBoundary> */}
      {/*    )} */}
      {/* </QueryErrorResetBoundary> */}
    </QueryClientProvider>
  );
}

const DashWrap = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1920px;
  position: relative;
  background-color: #0f0655;
`;
const ModalBody = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  max-height: calc(100vh - 16px);
  overflow: hidden auto;
  position: relative;
  padding-block: 12px;
  padding-inline: 24px;
`;
export default App;
