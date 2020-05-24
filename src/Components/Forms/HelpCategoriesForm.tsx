import React from 'react';
import { useForm } from 'react-hook-form';
import { formDataType, iForm } from '../../types';

interface iHelpCategoriesForm extends iForm {
  legend: string;
}

const HelpCategoriesForm: React.FC<iHelpCategoriesForm> = (props) => {
  const { updateParentState, handleBackClick, legend } = props;
  const { handleSubmit, register, errors } = useForm<formDataType>();
  const onSubmit = (data: formDataType) => {
    updateParentState(data);
  };

  return (
    <>
      <form id="HelpCategories" className="FindHelp_form" onSubmit={handleSubmit(onSubmit)}>
        <legend>{legend}</legend>
        <label>
          <input className="checkbox" name="grocery_delivery" ref={register} type="checkbox" />
          Grocery delivery
        </label>
        <label>
          <input className="checkbox" name="walk_dogs" ref={register} type="checkbox" />
          Walk my dog/s
        </label>
        <label>
          <input className="checkbox" name="donations" ref={register} type="checkbox" />
          Food or Goods donations
        </label>
        <label>
          <input className="checkbox" name="counceling" ref={register} type="checkbox" />
          Counceling services
        </label>
        <label>
          <input className="checkbox" name="career_services" ref={register} type="checkbox" />
          Career services
        </label>
      </form>
      <div className="FindHelp_form_nav">
        {handleBackClick && (
          <button className="grey_bg_color light_text_color bold" onClick={handleBackClick}>
            &lt; Back
          </button>
        )}
        <button className="primary_bg_color light_text_color bold" form="HelpCategories" type="submit">
          Next
        </button>
      </div>
    </>
  );
};

export default HelpCategoriesForm;
