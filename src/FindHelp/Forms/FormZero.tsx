import React from 'react';

const FindHelpFormZero: React.FC = () => {
  return (
    <form className="FindHelp_form">
      <legend>
        How COVID-19 has affected me: <span>(select all that apply)</span>
      </legend>
      <label>
        <input type="checkbox" />I am immunocompromised (pre-existing condition or age related)
      </label>
      <label>
        <input type="checkbox" />I have experienced unemployment/reduced wages
      </label>
      <label>
        <input type="checkbox" />I am an essential worker
      </label>
    </form>
  );
};

export default FindHelpFormZero;
