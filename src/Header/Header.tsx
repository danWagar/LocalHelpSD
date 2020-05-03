import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gqlQueries from '../services/gql-queries';
import { RootQueryType, RootQueryTypeUserArgs } from '../generated/graphql';
import { UserContext } from '../context/UserContext';
import { AuthContext } from '../context/AuthContext';
import TokenService from '../services/token-service';
import './Header.css';

const Header: React.FC = () => {
  const history = useHistory();
  const { hasToken, setHasToken } = useContext(AuthContext);
  const { userName, setUserName, userId, setUserId } = useContext(UserContext);

  const storedUserName = localStorage.getItem('user_name') 

  const { data, loading, error } = useQuery<RootQueryType, RootQueryTypeUserArgs>(gqlQueries.GET_USER, {
    variables: { user_name: storedUserName },
    skip: !storedUserName
  });

  if (data !== undefined && data.user !== undefined) {
    setUserName(data?.user?.user_name || '');
    setUserId(data?.user?.id || '');
  }

  const handleSignOut = () => {
    TokenService.clearAuthToken();
    setHasToken(false);
  };

  return (
    <header className="Header">
      <h1 className="clickable" onClick={() => history.push('/')}>
        LOCAL HELP<span>SD</span>
      </h1>
      {console.log(hasToken)}
      {!hasToken ? (
        <nav className="Header_login_nav">
          <Link to="/login">Login</Link>
          <div className="Header_sign_up_btn button">Sign Up!</div>
        </nav>
      ) : (
        <nav className="Header_logout_nav">
          <p>Welcome {userName}</p>
          <div className="button grey_bg_color" onClick={handleSignOut}>
            Sign Out
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
