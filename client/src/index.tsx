import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import store from './store';

import * as serviceWorker from './serviceWorker';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
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
