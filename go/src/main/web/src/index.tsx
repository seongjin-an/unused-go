import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './fonts.css'
import './index.css'
import {ModalContextProvider} from "./contexts/modalContext";
import {RecoilRoot} from "recoil";

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <ModalContextProvider>
                <App/>
            </ModalContextProvider>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
);