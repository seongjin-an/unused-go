import React from 'react'
import {ErrorBoundary} from "react-error-boundary";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import {Error, NotFound} from './pages/error'
import {ProductList, DetailProduct, CreateProduct} from './pages/product'
import {Account, Intro, Profile, PurchaseHistory, RegisteredHistory, SoldHistory} from "./pages/mypage";
import {Main} from "./pages/main";
import {Community} from "./pages/community";
import styled from "styled-components";

const App = () => {
    return (
        <DashWrap>
            {/*<ErrorBoundary FallbackComponent={Error}>*/}
                <BrowserRouter basename="unused-go">
                    <Routes>
                        <Route path="product" element={<Outlet/>}>
                            <Route path="list" element={<ProductList/>}/>
                            <Route path="create" element={<CreateProduct/>}/>
                            <Route path=":id" element={<DetailProduct/>}/>
                        </Route>

                        <Route path="mypage" element={<Outlet/>}>
                            <Route path="account" element={<Account/>}/>
                            <Route path="intro" element={<Intro/>}/>
                            <Route path="profile-info" element={<Profile/>}/>
                            <Route path="products" element={<RegisteredHistory/>}/>
                            <Route path="purchase-history" element={<PurchaseHistory/>}/>
                            <Route path="selling-history" element={<SoldHistory/>}/>
                        </Route>


                        <Route path="main" element={<Main/>}/>

                        <Route path="community" element={<Community/>}/>

                        <Route path="/*" element={<NotFound/>}/>
                    </Routes>
                </BrowserRouter>
            {/*</ErrorBoundary>*/}
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