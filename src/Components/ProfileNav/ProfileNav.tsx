import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import useSignOut from '../../myHooks/useSignOut';
import './ProfileNav.css';

interface iProfileNav {
  callback: () => void;
}

const ProfileNav: React.FC<iProfileNav> = (props) => {
  const container = useRef<HTMLElement>(null);
  const signOut = useSignOut();
  const history = useHistory();

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClick = (e: MouseEvent) => {
    if (container && container?.current?.contains(e.target as Node)) return;
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
