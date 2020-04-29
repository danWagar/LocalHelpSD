import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const history = useHistory();

  return (
    <header className="Header">
      <h1 className="clickable" onClick={() => history.push('/')}>
        LOCAL HELP<span>SD</span>
      </h1>
      <nav>
        <Link to="/login">Login</Link>
        <div className="Header_sign_up_btn button">Sign Up!</div>
      </nav>
    </header>
  );
};

export default Header;
