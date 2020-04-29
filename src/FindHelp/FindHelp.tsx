import React, { useState } from 'react';
import FormZero from './Forms/FormZero';
import FormOne from './Forms/FormOne';
import FormTwo from './Forms/FormTwo';
import FormThree from './Forms/FormThree';
import classNames from 'classnames';
import './FindHelp.css';

const FindHelp: React.FC = () => {
  const [formPart, setFormPart] = useState<number>(0);

  const formGoBack = () => {
    if (formPart > 0) setFormPart(formPart - 1);
  };

  const formGoNext = () => {
    if (formPart < 3) setFormPart(formPart + 1);
  };

  const getFormPart = () => {
    switch (formPart) {
      case 0:
        return <FormZero />;
      case 1:
        return <FormOne />;
      case 2:
        return <FormTwo />;
      case 3:
        return <FormThree />;
      default:
        return <p>Oops! Something went wrong. Try reloading the page.</p>;
    }
  };

  const handleSubmit = () => {};
  return (
    <main className="FindHelp">
      <div className="left_container">
        <div className="FindHelp_left_content">
          <h2>How It Works:</h2>
          <p>
            Creatiing a profile will let those lookiing to volunteer understand how you have been affected and
            how they can help you. We will guide you through the process!
          </p>
          <ol className="FindHelp_explanation_list">
            <li className={classNames({ text_highlight: formPart === 0 })}>
              How have you been affected by COVID?
              {formPart === 0 && (
                <span>
                  Understanding how Covid-19 has affected you can help us match you with those who empathize
                  with your situation and allow us to understand better how we can help you
                </span>
              )}
            </li>
            <li className={classNames({ text_highlight: formPart === 1 })}>
              Identify areas where you need help
            </li>
            <li className={classNames({ text_highlight: formPart === 2 })}>Register</li>
            <li className={classNames({ text_highlight: formPart === 3 })}>Create a profile</li>
          </ol>
        </div>
      </div>
      <div className="right_container">
        <div className="FindHelp_form_container">
          {getFormPart()}
          <div className="FindHelp_form_nav">
            {formPart > 0 && (
              <div className="button grey_bg_color light_text_color" onClick={formGoBack}>
                &lt; Back
              </div>
            )}
            <div className="button emphasis_bg_color light_text_color" onClick={formGoNext}>
              Next
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FindHelp;
