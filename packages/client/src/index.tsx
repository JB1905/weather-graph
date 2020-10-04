import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
// import { IntlProvider } from "react-intl";

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

// const messagesInFrench = {
//   myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
// };

ReactDOM.render(
  <React.StrictMode>
    {/* <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en"> */}
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
    {/* </IntlProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
