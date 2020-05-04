import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './LhsdHeader.css';
import SvgIconAndText from '../Icons/SvgIconAndText';

interface iLhsdHeader {
  signOut: () => void;
}

const LhsdHeader: React.FC<iLhsdHeader> = props => {
  const { signOut } = props;
  const [current, setCurrent] = useState<string | null>(null);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const where = location.pathname.slice(6);
    setCurrent(where);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const loc = '/lhsd/' + e.currentTarget.id;
    console.log('location is ' + loc);
    history.push('/lhsd/' + e.currentTarget.id);
  };

  return (
    <header className="LhsdHeader">
      <h1 className="clickable" onClick={() => history.push('/')}>
        LH<span>SD</span>
      </h1>
      <nav className="LhsdHeader_nav">
        <div className="LhsdHeader_nav_section" id="home" onClick={handleNavClick}>
          <SvgIconAndText currentLocation={current === 'home'} icon="home" />
        </div>
        <div className="LhsdHeader_nav_section" id="community" onClick={handleNavClick}>
          <SvgIconAndText currentLocation={current === 'community'} icon="community" />
        </div>
        <div className="LhsdHeader_nav_section" id="messaging" onClick={handleNavClick}>
          <SvgIconAndText currentLocation={current === 'messaging'} icon="messaging" />
        </div>
        <div className="LhsdHeader_nav_section" id="profile" onClick={handleNavClick}>
          <SvgIconAndText currentLocation={current === 'profile'} icon="profile" />
        </div>
      </nav>
    </header>
  );
};

export default LhsdHeader;
