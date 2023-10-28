import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0Provider
        domain="https://finance-leitmotiv.us.auth0.com"
        clientId="XTt8E694tkQuCXioI0ilRxFGmBuOH5wn"
        authorizationParams={{
          redirect_uri: window.location.origin + '/admin/dashboard',
          audience: 'https://finance-leitmotiv.us.auth0.com/api/v2/',
        }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </Provider>
);
