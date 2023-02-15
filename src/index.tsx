import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';

import { routerList } from 'modules/router-list';
import { MarkEditor } from 'modules/mark-editor';
import { MainContainer } from 'components/wrappers/main-container';

import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <MainContainer>
            <RouterProvider router={routerList} />
            <MarkEditor />
        </MainContainer>
    </React.StrictMode>,
);

reportWebVitals();
