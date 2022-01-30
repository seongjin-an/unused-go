import React from 'react'
import {ErrorBoundary} from "react-error-boundary";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Error, NotFound} from './pages/error'
import {ProductList, DetailProduct, CreateProduct} from './pages/product'
import {Account, Intro, Profile, PurchaseHistory, RegisteredHistory, SoldHistory} from "./pages/mypage";
import {Main} from "./pages/main";
import {Community} from "./pages/community";
import styled from "@emotion/styled";

const App = () => {
    return (
        <DashWrap>
            <ErrorBoundary FallbackComponent={Error}>
                <BrowserRouter basename="/unused-go">
                    <Routes>
                        <Route path="/create-product" element={<CreateProduct/>}/>
                        <Route path="/detail-product/:id" element={<DetailProduct/>}/>
                        <Route path="/product-list" element={<ProductList/>}/>

                        <Route path="/account" element={<Account/>}/>
                        <Route path="/intro" element={<Intro/>}/>
                        <Route path="/profile-info" element={<Profile/>}/>
                        <Route path="/my-used-prices" element={<RegisteredHistory/>}/>
                        <Route path="/purchase-history" element={<PurchaseHistory/>}/>
                        <Route path="/selling-history" element={<SoldHistory/>}/>

                        <Route path="/main" element={<Main/>}/>

                        <Route path="/community" element={<Community/>}/>

                        <Route path="/*" element={<NotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </ErrorBoundary>
        </DashWrap>
    )
}

const DashWrap = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1920px;
  position: relative;
  background-color: #0F0655;
`

export default App