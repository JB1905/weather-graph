import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { SuspenseProvider } from 'react-suspenser';
import {
  ApolloClient,
  ApolloProvider, createHttpLink, InMemoryCache,
} from '@apollo/client';

import Loader from 'components/Loader';
import { store, persistor } from 'state/store';
import { theme } from 'styles/theme';

// TODO? move to config
const httpLink = createHttpLink({
  uri: '/graphql',
});

// TODO? move to config
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// TODO? use extra lib
// TODO type
export const AppProviders = ({children}) => {
  return (
    <StrictMode>
      <SuspenseProvider fallback={<Loader />}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <PersistGate loading={<Loader />} persistor={persistor}>
              <ApolloProvider client={client}>
                <Router basename="/">
                  {children}
                </Router>
            </ApolloProvider>
          </PersistGate>
        </ThemeProvider>
      </Provider>
    </SuspenseProvider>
  </StrictMode>
  )
}
