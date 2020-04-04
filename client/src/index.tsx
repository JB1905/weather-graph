import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import App from './App';

import store from './store';

import * as serviceWorker from './serviceWorker';

const httpLink = createHttpLink({
  uri: 'https://weather-graph-server.jb1905.now.sh',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Router basename="/">
        <App />
      </Router>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
