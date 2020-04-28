import React from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <main className="LandingPage">
      <div className="LandingPage_left_container">
        <div className="LandingPage_left_content">
          <h1>
            <span>UNITE WITH NEIGHBORS</span>
            <span>AND MAKE LIFE SUNNY</span>
          </h1>
          <p>
            Coronavirus is a difficult time for all of us. Whether you are personally affected by coronavirus
            or are just looking to make a difference in this time of need, LocalHelpSD is here to help you
            find likeminded San Diegans.
          </p>
        </div>
      </div>
      <div className="LandingPage_right_container">
        <div className="LandingPage_right_content">
          <span>I want to:</span>
          <div className="LandingPage_buttons_container">
            <div className="LandingPage_big_button">Help Others</div>
            <div className="LandingPage_big_button">Find Help</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
