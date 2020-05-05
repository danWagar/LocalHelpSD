import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gqlQueries from './services/gql-queries';
import { RootQueryType, RootQueryTypeUserArgs } from './generated/graphql';
import { UserContext } from './context/UserContext';
import Header from './Header/Header';
import LhsdHeader from './LhsdHeader/LhsdHeader';
import LandingPage from './LandingPage/LandingPage';
import FindHelp from './FindHelp/FindHelp';
import Login from './Login/Login';
import Profile from './Profile/Profile';
import Home from './Home/Home';
import './App.css';

function App() {
  const { setUserName, setUserId } = useContext(UserContext);

  const storedUserName = localStorage.getItem('user_name');

  const { data, loading, error } = useQuery<RootQueryType, RootQueryTypeUserArgs>(gqlQueries.GET_USER, {
    variables: { user_name: storedUserName },
    skip: !storedUserName,
  });

  if (loading) return <div>Loading</div>;

  if (data && data.user) {
    setUserName(data?.user?.user_name || '');
    setUserId(data?.user?.id || null);
  }

  return (
    <Router>
      <Switch>
        <Route path="/lhsd" component={() => <LhsdHeader />} />
        <Route path="/" component={() => <Header />} />
      </Switch>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/find-help" component={FindHelp} />
        <Route exact path="/lhsd/home" component={Home} />
        <Route exact path="/lhsd/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
