import React from 'react';

const FindHelpFormThree: React.FC = () => {
  return (
    <form className="FindHelp_form">
      <legend>Create a profile:</legend>
      <label className="FindHelp_flex_label">
        Share Your Story
        <textarea />
      </label>
      <label className="FindHelp_flex_label">
        Your Neighborhood
        <input type="select" />
      </label>
    </form>
  );
};

export default FindHelpFormThree;
