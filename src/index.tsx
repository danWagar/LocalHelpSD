import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { UserContextProvider } from './context/UserContext';
import { AuthContextProvider } from './context/AuthContext';
import './index.css';
import App from './Components/App/App';

const wsLink = new WebSocketLink({
  uri: `ws://localhost:8000/graphql`,
  options: {
    reconnect: true,
    connectionParams: {
      message: 'client is connected',
    },
    lazy: true,
  },
});

const httpLink = new HttpLink({
  uri: 'http://localhost:8000/graphql',
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink
);

const cache = new InMemoryCache();

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
