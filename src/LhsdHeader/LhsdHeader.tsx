import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ProfileNav from '../ProfileNav/ProfileNav';
import NavIcon from '../Icons/NavIcon';
import './LhsdHeader.css';

const LhsdHeader: React.FC = () => {
  const [current, setCurrent] = useState<string | null>(null);
  const [showProfileNav, setShowProfileNav] = useState<boolean>(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const where = location.pathname.slice(6);
    setCurrent(where);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.id === 'profile') {
      setShowProfileNav(!showProfileNav);
      return;
    }
    history.push('/lhsd/' + e.currentTarget.id);
  };

  const handleProfileNavOutsideClick = () => {
    setShowProfileNav(!showProfileNav);
  };

  return (
    <header className="LhsdHeader">
      <h1 className="clickable" onClick={() => history.push('/')}>
        LH<span>SD</span>
      </h1>
      <nav className="LhsdHeader_nav">
        <div className="LhsdHeader_nav_section" id="home" onClick={handleNavClick}>
          <NavIcon currentLocation={current === 'home'} icon="home" />
        </div>
        <div className="LhsdHeader_nav_section" id="community" onClick={handleNavClick}>
          <NavIcon currentLocation={current === 'community'} icon="community" />
        </div>
        <div className="LhsdHeader_nav_section" id="messaging" onClick={handleNavClick}>
          <NavIcon currentLocation={current === 'messaging'} icon="messaging" />
        </div>
        <div className="LhsdHeader_nav_section" id="profile" onClick={handleNavClick}>
          <NavIcon currentLocation={current === 'profile'} icon="profile" />
        </div>
      </nav>
      {showProfileNav && <ProfileNav callback={handleProfileNavOutsideClick} />}
    </header>
  );
};

export default LhsdHeader;
