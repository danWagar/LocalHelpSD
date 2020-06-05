import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import useSignOut from '../../myHooks/useSignOut';
import './MobileNav.css';

interface iMobileNav {
  handleNavClick: (e: React.MouseEvent<HTMLDivElement | HTMLLIElement>, mobile: boolean) => void;
  toggleNav: () => void;
}

const MobileNav: React.FC<iMobileNav> = (props) => {
  const { handleNavClick, toggleNav } = props;
  const signOut = useSignOut();
  const history = useHistory();
  const { user } = useContext(UserContext);

  const handleClickProfile = (e: React.MouseEvent<HTMLLIElement>) => {
    toggleNav();
    history.push(`/lhsd/profile/${user.id}`);
  };

  return (
    <nav className="MobileNav">
      <ul className="MobileNav_list">
        <li id="home" onClick={(e) => handleNavClick(e, true)}>
          Home
        </li>
        <li id="community" onClick={(e) => handleNavClick(e, true)}>
          Community
        </li>
        <li id="messaging" onClick={(e) => handleNavClick(e, true)}>
          Messaging
        </li>
        <li id="profile_mobile" onClick={handleClickProfile}>
          Profile
        </li>
        <li onClick={signOut}>Sign Out</li>
      </ul>
    </nav>
  );
};

export default MobileNav;
