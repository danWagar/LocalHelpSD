import React from 'react';
import { useForm } from 'react-hook-form';
import { formData, iForm } from './FormType';

const FindHelpFormZero: React.FC<iForm> = (props) => {
  const { next, updateParentState } = props;
  const { handleSubmit, register, errors } = useForm<formData>();
  let formData = null;
  const onSubmit = (data: formData) => {
    updateParentState(data);
    next();
  };

  return (
    <form className="FindHelp_form" onSubmit={handleSubmit(onSubmit)}>
      <legend>
        How COVID-19 has affected me: <span>(select all that apply)</span>
      </legend>
      <label>
        <input name="immunocompromised" ref={register} type="checkbox" />I am immunocompromised (pre-existing
        condition or age related)
      </label>
      <label>
        <input name="unemployment" ref={register} type="checkbox" />I have experienced unemployment/reduced
        wages
      </label>
      <label>
        <input name="essential" ref={register} type="checkbox" />I am an essential worker
      </label>
      <button type="submit">Next</button>
    </form>
  );
};

export default FindHelpFormZero;
