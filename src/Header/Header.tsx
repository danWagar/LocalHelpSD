import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { AuthContext } from '../context/AuthContext';
import './Header.css';

interface iHeader {
  signOut: () => void;
}

const Header: React.FC<iHeader> = props => {
  const { signOut } = props;
  const history = useHistory();
  const { hasToken } = useContext(AuthContext);
  const { userName } = useContext(UserContext);

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
          <div className="button grey_bg_color" onClick={signOut}>
            Sign Out
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
