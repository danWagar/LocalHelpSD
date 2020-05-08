import React from 'react';
import { useForm } from 'react-hook-form';
import { formDataType, iForm } from './FormType';

const FindHelpFormThree: React.FC<iForm> = (props) => {
  const { updateParentState } = props;
  const { handleSubmit, register, errors } = useForm<formDataType>();
  const onSubmit = (data: formDataType) => {
    updateParentState(data);
  };

  return (
    <form className="FindHelp_form" onSubmit={handleSubmit(onSubmit)}>
      <legend>Create a profile:</legend>
      <label className="FindHelp_flex_label">
        Share Your Story
        <textarea name="story" ref={register} />
      </label>
      <label className="FindHelp_flex_label">
        Your Neighborhood
        <select name="neighborhood" ref={register}>
          <option value="Grantville">Grantville</option>
        </select>
      </label>
      <button className="button" type="submit">
        Next
      </button>
    </form>
  );
};

export default FindHelpFormThree;
