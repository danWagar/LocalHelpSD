import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutationMutation } from '../generated/graphql';
import FormZero from './Forms/FormZero';
import FormOne from './Forms/FormOne';
import FormThree from './Forms/FormThree';
import Register from './Forms/Register';
import { formDataType, formDataTypeRequired } from '../types';
import classNames from 'classnames';
import './FindHelp.css';

const FindHelp: React.FC = () => {
  const [formPart, setFormPart] = useState<number>(0);
  const [formDataInput, setFormDataInput] = useState<formDataType | null>(null);

  const history = useHistory();

  const [mutationMutation, { data, loading, error }] = useMutationMutation();

  const updateFormData = (data: formDataType) => {
    setFormDataInput({ ...formDataInput, ...data });
  };

  const doMutateProfile = (id: number) => {
    mutationMutation({
      variables: {
        user_id: id,
        wants_help: true,
        ...(formDataInput as formDataTypeRequired),
      },
    });

    history.push('/login');
  };

  useEffect(() => {
    if (formDataInput) {
      formGoNext();
    }
  }, [formDataInput]);

  const formGoBack = () => {
    if (formPart > 0) setFormPart(formPart - 1);
  };

  const formGoNext = () => {
    if (formPart < 3) setFormPart(formPart + 1);
  };

  const getFormPart = () => {
    switch (formPart) {
      case 0:
        return <FormZero updateParentState={updateFormData} />;
      case 1:
        return <FormOne updateParentState={updateFormData} />;
      case 2:
        return <FormThree updateParentState={updateFormData} />;
      case 3:
        return <Register onSuccess={doMutateProfile} />;
      default:
        return <p>Oops! Something went wrong. Try reloading the page.</p>;
    }
  };

  console.log(formDataInput);

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
          </div>
        </div>
      </div>
    </main>
  );
};

export default FindHelp;
