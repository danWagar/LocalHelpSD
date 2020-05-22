import React, { useEffect, useRef, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import useSignOut from '../../myHooks/useSignOut';
import './ProfileNav.css';

interface iProfileNav {
  toggleNav: () => void;
}

const ProfileNav: React.FC<iProfileNav> = (props) => {
  const { toggleNav } = props;
  const container = useRef<HTMLElement>(null);
  const signOut = useSignOut();
  const history = useHistory();
  const { user } = useContext(UserContext);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (e: MouseEvent) => {
    if (container && container?.current?.contains(e.target as Node)) return;
    toggleNav();
  };

  const handleClickSignOut = (e: React.MouseEvent<HTMLLIElement>) => {
    toggleNav();
    signOut();
  };

  const handleClickProfile = (e: React.MouseEvent<HTMLLIElement>) => {
    toggleNav();
    history.push(`/lhsd/profile/${user.id}`);
  };

  return (
    <nav ref={container} className="ProfileNav">
      <ul className="ProfileNav_list">
        <li className="clickable" onClick={handleClickProfile}>
          Profile
        </li>
        <li className="clickable" onClick={handleClickSignOut}>
          Sign Out
        </li>
      </ul>
    </nav>
  );
};

export default ProfileNav;
