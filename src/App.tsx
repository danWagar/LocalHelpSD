import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import FindHelp from './FindHelp/FindHelp';
import Login from './Login/Login';
import './App.css';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:8000/api/graphql'
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link
});

client
  .query({
    query: gql`
      {
        profile(id: 1) {
          user_id
          avatar
          age
          story
          user {
            user_name
          }
        }
      }
    `
  })
  .then(result => console.log(result));

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/find-help" component={FindHelp} />
      </Switch>
    </Router>
  );
}

export default App;
