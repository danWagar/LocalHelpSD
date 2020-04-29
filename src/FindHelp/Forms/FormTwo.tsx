import React from 'react';

const FindHelpFormTwo: React.FC = () => {
  return (
    <form className="FindHelp_form">
      <legend>Register:</legend>
      <label className="FindHelp_flex_label">
        email
        <input type="text" />
      </label>
      <label className="FindHelp_flex_label">
        Password
        <input type="password" />
      </label>
      <label className="FindHelp_flex_label">
        Verify Password
        <input type="password" />
      </label>
    </form>
  );
};

export default FindHelpFormTwo;
