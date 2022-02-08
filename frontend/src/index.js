import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import { Auth0Provider } from "@auth0/auth0-react";
import { getConfig } from "./auth/config";
import AuthContextProvider from './context/AuthContextProvider';

const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin
};


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider {...providerConfig}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
