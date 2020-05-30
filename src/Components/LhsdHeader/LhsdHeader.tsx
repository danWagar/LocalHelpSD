import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import ProfileNav from '../ProfileNav/ProfileNav';
import NavIcon from '../NavIcon/NavIcon';
import './LhsdHeader.css';

interface iLhsdHeader {
  handleClickMessageNav: () => void;
  newMessageCount: number;
}

const LhsdHeader: React.FC<iLhsdHeader> = (props) => {
  const { handleClickMessageNav, newMessageCount } = props;
  const [current, setCurrent] = useState<string | null>(null);
  const [showProfileNav, setShowProfileNav] = useState<boolean>(false);
  const history = useHistory();
  const location = useLocation();
  const { user } = useContext(UserContext);

  useEffect(() => {
    const where = location.pathname.slice(6);
    setCurrent(where);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.id === 'profile') {
      setShowProfileNav(!showProfileNav);
      return;
    } else if (e.currentTarget.id === 'messaging') {
      handleClickMessageNav();
      return;
    }
    history.push('/lhsd/' + e.currentTarget.id);
  };

  const toggleShowProfileNav = () => {
    setShowProfileNav(!showProfileNav);
  };

  return (
    <header className="LhsdHeader">
      <h1 className="clickable" onClick={() => history.push('/')}>
        LH<span>SD</span>
      </h1>
      <nav className="LhsdHeader_nav">
        <div className="LhsdHeader_nav_icon clickable" id="home" onClick={handleNavClick}>
          <NavIcon currentLocation={current === 'home'} icon="home" />
        </div>
        <div className="LhsdHeader_nav_icon clickable" id="community" onClick={handleNavClick}>
          <NavIcon currentLocation={current === 'community'} icon="community" />
        </div>
        <div className="LhsdHeader_nav_icon clickable" id="messaging" onClick={handleNavClick}>
          <NavIcon currentLocation={current === 'messaging'} icon="messaging" />
          {newMessageCount > 0 && <div className="LhsdHeader_msg_notification bold">{newMessageCount}</div>}
        </div>
        <div className="LhsdHeader_nav_icon clickable" id="profile" onClick={handleNavClick}>
          <NavIcon currentLocation={current === 'profile'} icon="profile" />
        </div>
      </nav>
      {showProfileNav && <ProfileNav toggleNav={toggleShowProfileNav} />}
    </header>
  );
};

export default LhsdHeader;
