import React from 'react';

const FindHelpFormOne: React.FC = () => {
  return (
    <form className="FindHelp_form">
      <legend>I want help with:</legend>
      <label>
        <input type="checkbox" />
        Grocery delivery
      </label>
      <label>
        <input type="checkbox" />
        Walk my dog/s
      </label>
      <label>
        <input type="checkbox" />
        Food or Goods donations
      </label>
      <label>
        <input type="checkbox" />
        Counceling services
      </label>
      <label>
        <input type="checkbox" />
        Career services
      </label>
    </form>
  );
};

export default FindHelpFormOne;
