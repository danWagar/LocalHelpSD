import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSignOut } from '../myHooks/useSignOut';
import './ProfileNav.css';

const ProfileNav: React.FC = () => {
  const signOut = useSignOut();
  const history = useHistory();

  return (
    <nav className="ProfileNav">
      <ul className="ProfileNav_list">
        <li className="clickable" onClick={() => history.push('/lhsd/profile')}>
          Profile
        </li>
        <li className="clickable" onClick={signOut}>
          Sign Out
        </li>
      </ul>
    </nav>
  );
};

export default ProfileNav;
