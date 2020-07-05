import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import App from 'App';

import store from 'store';

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
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Router basename="/">
            <App />
          </Router>
        </ApolloProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
