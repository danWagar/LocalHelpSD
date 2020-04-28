import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
