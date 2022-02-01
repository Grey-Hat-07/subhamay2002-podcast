import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { CookiesProvider } from 'react-cookie';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* </CookiesProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
