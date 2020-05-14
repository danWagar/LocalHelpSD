import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { AuthContext } from '../context/AuthContext';
import { useSignOut } from '../myHooks/useSignOut';
import './Header.css';

const Header: React.FC = () => {
  const signOut = useSignOut();
  const history = useHistory();
  const { hasToken } = useContext(AuthContext);
  const { user } = useContext(UserContext);

  return (
    <header className="Header">
      <h1 className="clickable" onClick={() => history.push('/')}>
        LOCAL HELP<span>SD</span>
      </h1>
      {!hasToken ? (
        <nav className="Header_login_nav">
          <Link to="/login">Login</Link>
          <div className="Header_sign_up_btn button">Sign Up!</div>
        </nav>
      ) : (
        <nav className="Header_logout_nav">
          <p>Welcome {user.firstName + ' ' + user.lastName}</p>
          <div className="button grey_bg_color" onClick={signOut}>
            Sign Out
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
