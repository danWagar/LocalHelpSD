import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSignOut } from '../myHooks/useSignOut';
import './ProfileNav.css';

interface iProfileNav {
  callback: () => void;
}

const ProfileNav: React.FC<iProfileNav> = (props) => {
  const container = useRef<HTMLElement>(null);
  const signOut = useSignOut();
  const history = useHistory();

  useEffect(() => {
    //code from https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-with-react-hook-ba77c37c7e82
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClick = (e: MouseEvent) => {
    if (container && container?.current?.contains(e.target as Node)) return;
    // outside click
    props.callback();
  };

  return (
    <nav ref={container} className="ProfileNav">
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
