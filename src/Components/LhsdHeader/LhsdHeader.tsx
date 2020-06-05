import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import ProfileNav from '../ProfileNav/ProfileNav';
import NavIcon from '../NavIcon/NavIcon';
import MobileNav from '../MobileNav/MobileNav';
import './LhsdHeader.css';

interface iLhsdHeader {
  handleClickMessageNav: () => void;
  handleSignout: () => void;
  newMessageCount: number;
}

const LhsdHeader: React.FC<iLhsdHeader> = (props) => {
  const { handleClickMessageNav, newMessageCount, handleSignout } = props;
  const [current, setCurrent] = useState<string | null>(null);
  const [showProfileNav, setShowProfileNav] = useState<boolean>(false);
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const history = useHistory();
  const location = useLocation();
  const { user } = useContext(UserContext);

  useEffect(() => {
    const where = location.pathname.slice(6);
    setCurrent(where);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLDivElement | HTMLLIElement>, mobile = false) => {
    if (mobile) setShowMobileNav(!showMobileNav);
    if (e.currentTarget.id === 'profile') {
      setShowProfileNav(!showProfileNav);
      return;
    } else if (e.currentTarget.id === 'messaging') {
      handleClickMessageNav();
      return;
    }
    history.push('/lhsd/' + e.currentTarget.id);
  };

  const toggleShowProfileNav = (signout?: boolean) => {
    if (signout) handleSignout();
    setShowProfileNav(!showProfileNav);
  };

  const toggleShowMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const handleBurgerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <>
      <header className="LhsdHeader">
        <h1 className="clickable" onClick={() => history.push('/')}>
          LH<span>SD</span>
        </h1>
        <nav className="LhsdHeader_nav">
          <div className="LhsdHeader_burger" onClick={handleBurgerClick}>
            <div></div>
            <div></div>
            <div></div>
          </div>
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
        {showMobileNav && <MobileNav handleNavClick={handleNavClick} toggleNav={toggleShowMobileNav} />}
      </header>
    </>
  );
};

export default LhsdHeader;
