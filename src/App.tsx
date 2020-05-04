import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gqlQueries from './services/gql-queries';
import { RootQueryType, RootQueryTypeUserArgs } from './generated/graphql';
import { UserContext } from './context/UserContext';
import { AuthContext } from './context/AuthContext';
import TokenService from './services/token-service';
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
  const { setHasToken } = useContext(AuthContext);

  const storedUserName = localStorage.getItem('user_name') 

  const { data, loading, error } = useQuery<RootQueryType, RootQueryTypeUserArgs>(gqlQueries.GET_USER, {
    variables: { user_name: storedUserName },
    skip: !storedUserName
  });

  if (data !== undefined && data.user !== undefined) {
    setUserName(data?.user?.user_name || '');
    setUserId(data?.user?.id || null);
  }

  const handleSignOut = () => {
    TokenService.clearAuthToken();
    setHasToken(false);
  };

  return (
    <Router>
      <Switch>
        <Route path="/lhsd" component={() => <LhsdHeader signOut={handleSignOut} />}/>
        <Route path="/" component={() => <Header signOut={handleSignOut} />}/>
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
