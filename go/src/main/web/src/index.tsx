import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './fonts.css';
import './index.css';
import { ModalContextProvider } from './contexts/modalContext';
import { RecoilRoot } from 'recoil';

if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser');
    worker.start();
}

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <ModalContextProvider>
                <App />
            </ModalContextProvider>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root'),
);
