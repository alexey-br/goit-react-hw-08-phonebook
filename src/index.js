import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme/theme';
import App from 'components/App';
import { store, persistor } from 'redux/store';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook/">
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
