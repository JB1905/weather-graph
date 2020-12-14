import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { SuspenseProvider } from 'react-suspenser';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import App from 'App';

import Loader from 'components/Loader';

import { store, persistor } from 'state/store';

import { theme } from 'styles/theme';

import * as serviceWorker from './serviceWorker';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_SERVER_ORIGIN,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <StrictMode>
    <SuspenseProvider fallback={<Loader />}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <PersistGate loading={<Loader />} persistor={persistor}>
            <ApolloProvider client={client}>
              <Router basename="/">
                <App />
              </Router>
            </ApolloProvider>
          </PersistGate>
        </ThemeProvider>
      </Provider>
    </SuspenseProvider>
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
