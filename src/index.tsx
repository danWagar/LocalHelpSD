import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { UserContextProvider } from './context/UserContext';
import { AuthContextProvider } from './context/AuthContext';
import gql from 'graphql-tag';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:8000/api/graphql',
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <UserContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserContextProvider>
      </AuthContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
