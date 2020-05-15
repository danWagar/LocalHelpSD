import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext, User } from '../../context/UserContext';
import Header from '../Header/Header';
import LhsdHeader from '../LhsdHeader/LhsdHeader';
import LandingPage from '../LandingPage/LandingPage';
import FindHelp from '../FindHelp/FindHelp';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Community from '../Community/Community';
import Home from '../Home/Home';
import './App.css';

function App() {
  const { user, setUser } = useContext(UserContext);
  const storedUserString = localStorage.getItem('user');

  if (storedUserString && !user.email) {
    const storedUser = JSON.parse(localStorage.getItem('user') as string) as User;
    setUser(storedUser);
  }

  return (
    <>
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
        <Route exact path="/lhsd/community" component={Community} />
      </Switch>
    </>
  );
}

export default App;
