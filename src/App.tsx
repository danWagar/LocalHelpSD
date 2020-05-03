import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import FindHelp from './FindHelp/FindHelp';
import Login from './Login/Login';
import './App.css';

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
