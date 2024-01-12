import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import Store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <StoreProvider store={Store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </StoreProvider>
  </React.StrictMode>
);

reportWebVitals();
