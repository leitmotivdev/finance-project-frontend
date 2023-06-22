import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="finance-leitmotiv.us.auth0.com"
        clientId="XTt8E694tkQuCXioI0ilRxFGmBuOH5wn"
        authorizationParams={{
          redirect_uri: window.location.origin + '/admin',
        }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
