import React from 'react';
import { useForm } from 'react-hook-form';
import { formData, iForm } from './FormType';

const FindHelpFormThree: React.FC<iForm> = (props) => {
  const { next, updateParentState } = props;
  const { handleSubmit, register, errors } = useForm<formData>();
  let formData = null;
  const onSubmit = (data: formData) => {
    updateParentState(data);
    next();
  };
  return (
    <form className="FindHelp_form">
      <legend>Create a profile:</legend>
      <label className="FindHelp_flex_label">
        Share Your Story
        <textarea name="story" ref={register} />
      </label>
      <label className="FindHelp_flex_label">
        Your Neighborhood
        <input name="neighborhood" ref={register} type="select">
          <option value="Grantville">Grantville</option>
        </input>
      </label>
    </form>
  );
};

export default FindHelpFormThree;
