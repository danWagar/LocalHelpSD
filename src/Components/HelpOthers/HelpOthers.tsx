import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutate_ProfileMutation } from '../../generated/graphql';
import HelpCategoriesForm from '../Forms/HelpCategoriesForm';
import ProfileForm from '../Forms/ProfileForm';
import Register from '../Forms/Register';
import { formDataType, formDataTypeRequired } from '../../types';
import classNames from 'classnames';
import '../FindHelp/FindHelp.css';

const HelpOthers: React.FC = () => {
  const [formPart, setFormPart] = useState<number>(0);
  const [formDataInput, setFormDataInput] = useState<formDataType | null>(null);

  const history = useHistory();

  const [mutationMutation] = useMutate_ProfileMutation();

  const updateFormData = (data: formDataType) => {
    console.log('updating form data with data ', data);
    setFormDataInput({ ...formDataInput, ...data });
  };

  const doMutateProfile = (id: number) => {
    console.log('send new profile request with data ', formDataInput);

    mutationMutation({
      variables: {
        user_id: id,
        wants_help: false,
        immunocompromised: false,
        unemployment: false,
        essential: false,
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
        return <HelpCategoriesForm updateParentState={updateFormData} legend="I want to help with:" />;
      case 1:
        return <ProfileForm updateParentState={updateFormData} handleBackClick={formGoBack} />;
      case 2:
        return <Register onSuccess={doMutateProfile} handleBackClick={formGoBack} />;
      default:
        return <p>Oops! Something went wrong. Try reloading the page.</p>;
    }
  };

  return (
    <main className="FindHelp">
      <div className="left_container">
        <div className="FindHelp_left_content">
          <h2>How It Works:</h2>
          <p>
            Creatiing a profile will help match areas where you would like to volunteer with those seeking
            help in the same areas. We will guide you through the process!
          </p>
          <ol className="FindHelp_explanation_list">
            <li className={classNames({ text_highlight: formPart === 0 })}>
              Identify areas where you want to volunteer
            </li>
            <li className={classNames({ text_highlight: formPart === 1 })}>Create a profile</li>
            <li className={classNames({ text_highlight: formPart === 2 })}>Register</li>
          </ol>
        </div>
      </div>
      <div className="right_container">
        <div className="FindHelp_form_container">{getFormPart()}</div>
      </div>
    </main>
  );
};

export default HelpOthers;
