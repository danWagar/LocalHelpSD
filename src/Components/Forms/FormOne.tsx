import React from 'react';
import { useForm } from 'react-hook-form';
import { formDataType, iForm } from '../../types';

const FindHelpFormOne: React.FC<iForm> = (props) => {
  const { updateParentState } = props;
  const { handleSubmit, register, errors } = useForm<formDataType>();
  const onSubmit = (data: formDataType) => {
    updateParentState(data);
  };

  return (
    <form className="FindHelp_form" onSubmit={handleSubmit(onSubmit)}>
      <legend>I want help with:</legend>
      <label>
        <input name="grocery_delivery" ref={register} type="checkbox" />
        Grocery delivery
      </label>
      <label>
        <input name="walk_dogs" ref={register} type="checkbox" />
        Walk my dog/s
      </label>
      <label>
        <input name="donations" ref={register} type="checkbox" />
        Food or Goods donations
      </label>
      <label>
        <input name="counceling" ref={register} type="checkbox" />
        Counceling services
      </label>
      <label>
        <input name="career_services" ref={register} type="checkbox" />
        Career services
      </label>
      <button type="submit">Next</button>
    </form>
  );
};

export default FindHelpFormOne;
